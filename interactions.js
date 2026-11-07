'use strict';
(() => {
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const guides = {...window.LESSON_GUIDES_A, ...window.LESSON_GUIDES_B};
  const entries = window.GLOSSARY || [];
  const lookup = new Map(entries.map(entry => [entry.id, entry]));
  const aliases = new Map();
  for (const entry of entries) for (const name of [entry.term, ...(entry.aliases || [])]) {
    if (name.length > 1 && !aliases.has(name.toLowerCase())) aliases.set(name.toLowerCase(), entry.id);
  }
  const pattern = [...aliases.keys()].sort((a,b) => b.length-a.length).map(s => s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|');
  const expression = pattern ? new RegExp(`(?<![A-Za-z0-9_])(?:${pattern})(?![A-Za-z0-9_])`, 'gi') : null;
  const key = 'cloud-atlas-display-v1';
  let scale = 100;
  try { const saved = Number(localStorage.getItem(key)); if (saved >= 90 && saved <= 200) scale = saved; } catch {}
  let trigger = null, pinned = false, hideTimeout;
  const diagramStates = new Map();

  function matchTerms(text) {
    if (!expression) return [];
    expression.lastIndex = 0;
    return [...text.matchAll(expression)].map(m => ({start:m.index,end:m.index+m[0].length,text:m[0],id:aliases.get(m[0].toLowerCase())}));
  }

  function lessonGuide(course) {
    const guide = guides[course.id];
    if (!guide) return '';
    return `<section class="guided-lesson" id="guided-lesson"><div class="lesson-start"><span class="tag">從零開始的解釋</span><p class="reader-hint">虛線名詞可停留或點選查看解釋；右上角 Aa 可調整所有文字大小。</p><h2>先搞懂：這一課到底在解決什麼？</h2><p>${escape(guide.intro)}</p><div class="lesson-outcome"><strong>這一課學完，你能做到</strong><p>${escape(guide.outcome)}</p></div></div><div class="analogy"><h3>先用生活經驗理解</h3><p>${escape(guide.analogy)}</p></div><div class="guided-steps">${guide.steps.map((step,i)=>`<section class="guided-step" id="guide-step-${i}"><div class="step-number">${i+1}</div><div><h3>${escape(step.title)}</h3><p>${escape(step.explanation)}</p><div class="example-box"><strong>把它想成一個實際畫面</strong><p>${escape(step.example)}</p></div></div></section>`).join('')}</div><section class="worked-example" id="worked-example"><span class="tag gold">完整範例，逐步推理</span><h2>從需求走到答案</h2><p>${escape(guide.workedExample.situation)}</p><ol>${guide.workedExample.reasoning.map(reason=>`<li>${escape(reason)}</li>`).join('')}</ol><div class="callout"><strong>所以我們會這樣做</strong><p>${escape(guide.workedExample.conclusion)}</p></div></section><section class="understanding-check" id="understanding-check" data-check="${escape(course.id)}"><span class="tag">先自己想，再看解釋</span><h2>你真的理解了嗎？</h2><p>${escape(guide.check.question)}</p><div class="check-options">${guide.check.options.map((option,i)=>`<button type="button" class="check-option" data-guide-check="${escape(course.id)}" data-answer="${i}"><span>${String.fromCharCode(65+i)}</span>${escape(option)}</button>`).join('')}</div><div class="check-feedback" aria-live="polite"></div></section><div class="section-divider"><span>接下來，把剛才理解的概念連到正式服務機制</span></div></section>`;
  }

  function glossaryPage() {
    return `<div class="page-heading"><div><h1>遇到名詞，不必硬背。</h1><p class="subtitle">${entries.length} 個服務與概念，用白話、生活比喻和例子理解。課程中的虛線名詞也能隨時打開解釋。</p></div></div><div class="glossary-search"><label for="glossary-filter">搜尋名詞或用途</label><input id="glossary-filter" type="search" placeholder="例如：AZ、備份、身分、資料庫"><output id="glossary-visible">${entries.length} 個名詞</output></div><div class="grid glossary-grid">${entries.map(entry=>`<article class="glossary-card" data-glossary-entry="${escape(entry.id)}"><h2><button type="button" class="term" data-term="${escape(entry.id)}" aria-haspopup="dialog" aria-controls="term-popover" aria-expanded="false">${escape(entry.term)}</button></h2><p>${escape(entry.plain)}</p><small>${escape(entry.aliases.join(' · '))}</small><button type="button" class="btn secondary term-more" data-term="${escape(entry.id)}">查看比喻與例子</button></article>`).join('')}</div><p class="note" id="glossary-empty" hidden>找不到符合的名詞，請試試英文服務名稱或其他說法。</p>`;
  }

  function annotate(root) {
    if (!expression || !document.createTreeWalker || !root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) {
      const node=walker.currentNode;
      if(node.nodeValue.trim() && !node.parentElement.closest('a,button,input,textarea,select,option,pre,code,svg,script,style,[data-no-glossary],.term')) nodes.push(node);
    }
    for(const node of nodes) {
      const matches=matchTerms(node.nodeValue);
      if(!matches.length) continue;
      const fragment=document.createDocumentFragment();let cursor=0;
      for(const match of matches) {
        fragment.append(document.createTextNode(node.nodeValue.slice(cursor,match.start)));
        const button=document.createElement('button');
        button.type='button';button.className='term';button.dataset.term=match.id;
        button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-expanded','false');
        button.setAttribute('aria-controls','term-popover');
        button.setAttribute('aria-label',match.text+'：查看白話解釋');button.textContent=match.text;
        fragment.append(button);cursor=match.end;
      }
      fragment.append(document.createTextNode(node.nodeValue.slice(cursor)));node.replaceWith(fragment);
    }
  }

  function closeTerm() {
    clearTimeout(hideTimeout);
    document.getElementById('term-popover')?.setAttribute('hidden','');
    trigger?.setAttribute('aria-expanded','false');trigger=null;pinned=false;
  }
  function positionTerm() {
    const panel=document.getElementById('term-popover');
    if(!trigger || !panel || panel.hidden) return;
    const rect=trigger.getBoundingClientRect();
    const width=Math.min(430,window.innerWidth-24);
    panel.style.width=width+'px';
    panel.style.maxHeight='calc(100dvh - 24px)';
    const natural=panel.getBoundingClientRect().height;
    const below=Math.max(0,window.innerHeight-rect.bottom-22),above=Math.max(0,rect.top-22);
    const useBelow=below>=Math.min(natural,300)||below>=above;
    const available=Math.min(window.innerHeight-24,useBelow?below:above);
    // Keep the trigger uncovered: a hover popup must not intercept its own click.
    panel.style.maxHeight=Math.max(80,available)+'px';
    const height=panel.getBoundingClientRect().height;
    const top=useBelow?Math.max(12,rect.bottom+10):Math.max(12,rect.top-height-10);
    panel.style.left=Math.max(12,Math.min(rect.left,window.innerWidth-width-12))+'px';
    panel.style.top=top+'px';
  }
  function openTerm(button, pin=false) {
    const entry=lookup.get(button.dataset.term),panel=document.getElementById('term-popover');
    if(!entry || !panel) return;
    clearTimeout(hideTimeout);
    if(pinned && !pin) return;
    trigger?.setAttribute('aria-expanded','false');trigger=button;pinned=pin;
    button.setAttribute('aria-expanded','true');
    panel.innerHTML=`<div class="popover-head"><div><span class="popover-label">專有名詞，白話說</span><h2 id="term-popover-title">${escape(entry.term)}</h2></div><button type="button" data-close-term aria-label="關閉名詞解釋">×</button></div><p>${escape(entry.plain)}</p>${entry.analogy?`<div class="term-analogy"><strong>生活比喻</strong><p>${escape(entry.analogy)}</p></div>`:''}<h3>在 AWS 裡的例子</h3><p>${escape(entry.example)}</p>${entry.confusedWith?`<div class="term-confusion"><strong>不要混淆</strong><p>${escape(entry.confusedWith)}</p></div>`:''}<div class="popover-foot"><a href="${escape(entry.source)}" target="_blank" rel="noopener noreferrer">AWS 官方說明 ↗</a><small>${pinned?'已固定 · 點空白處或 Esc 關閉':'點名詞可固定彈窗；手機直接點選'}</small></div>`;
    panel.hidden=false;positionTerm();
  }

  function setScale(value,persist=true) {
    const numeric=Number(value);scale=Number.isFinite(numeric)?Math.max(90,Math.min(200,Math.round(numeric/10)*10)):100;
    document.documentElement.style.setProperty('--text-scale',String(scale/100));
    const slider=document.getElementById('text-scale');
    if(slider){slider.value=String(scale);slider.setAttribute('aria-valuetext',scale+'%');}
    const output=document.getElementById('text-scale-value');if(output)output.textContent=scale+'%';
    const toggle=document.getElementById('reading-toggle');if(toggle)toggle.textContent='Aa '+scale+'%';
    if(persist)try{localStorage.setItem(key,String(scale));}catch{}
    positionTerm();
  }

  function diagramState(id) {
    if(!diagramStates.has(id))diagramStates.set(id,{step:0,node:null,edge:0,failed:null,zoom:100,mode:'flow'});
    return diagramStates.get(id);
  }
  function explorerHTML(architecture) {
    const id=escape(architecture.id);
    return `<div class="diagram-explorer" data-explorer="${id}"><div class="diagram-toolbar"><div><strong>親手追一次資料流</strong><span>點元件看作用，點箭頭看傳什麼</span></div><div class="diagram-zoom" aria-label="架構圖縮放"><button type="button" data-diagram-action="zoom-out" data-architecture="${id}" aria-label="縮小架構圖">−</button><output data-diagram-zoom="${id}">100%</output><button type="button" data-diagram-action="zoom-in" data-architecture="${id}" aria-label="放大架構圖">＋</button><button type="button" data-diagram-action="reset" data-architecture="${id}">重設</button></div></div><div class="flow-controls"><button type="button" data-diagram-action="previous" data-architecture="${id}">← 上一步</button><span data-flow-label="${id}"></span><button type="button" data-diagram-action="next" data-architecture="${id}">下一步 →</button></div><div class="diagram-inspector" data-inspector="${id}" aria-live="polite"></div></div>`;
  }
  function updateDiagram(id) {
    const architecture=(window.ARCHITECTURES||[]).find(a=>a.id===id);
    const data=window.DIAGRAM_GUIDES?.[id];if(!architecture || !data)return;
    const state=diagramState(id),card=document.getElementById('arch-'+id);if(!card)return;
    const svg=card.querySelector('.diagram-stage svg');
    if(svg)svg.style.setProperty('--diagram-zoom',String(state.zoom/100));
    card.querySelector(`[data-diagram-zoom="${id}"]`).textContent=state.zoom+'%';
    const current=architecture.edges[state.step];
    card.querySelector(`[data-flow-label="${id}"]`).textContent=`第 ${state.step+1} / ${architecture.edges.length} 步：${current[2]}`;
    card.querySelector('[data-diagram-action="previous"]').disabled=state.step===0;
    card.querySelector('[data-diagram-action="next"]').disabled=state.step===architecture.edges.length-1;
    card.querySelector('[data-diagram-action="zoom-out"]').disabled=state.zoom<=75;
    card.querySelector('[data-diagram-action="zoom-in"]').disabled=state.zoom>=200;
    card.querySelectorAll('[data-arch-node]').forEach(node=>{
      const selected=state.mode==='node'?node.dataset.archNode===state.node:[current[0],current[1]].includes(node.dataset.archNode);
      node.classList.toggle('diagram-selected',selected);node.classList.toggle('diagram-failed',node.dataset.archNode===state.failed);
      node.setAttribute('aria-pressed',String(selected));
    });
    card.querySelectorAll('[data-arch-edge]').forEach(edge=>{
      edge.classList.toggle('diagram-selected',state.mode!=='node' && Number(edge.dataset.archEdge)===state.step);
      const connection=architecture.edges[Number(edge.dataset.archEdge)];
      edge.classList.toggle('diagram-disrupted',!!state.failed&&[connection[0],connection[1]].includes(state.failed));
    });
    const inspector=card.querySelector(`[data-inspector="${id}"]`);
    if(state.mode==='node' && state.node) {
      const node=architecture.nodes.find(n=>n.id===state.node),info=data.nodes[state.node];
      inspector.innerHTML=`<div class="inspector-heading"><span class="tag">元件解釋</span><h3>${escape(node.t)}</h3></div><div class="inspector-grid"><div><h4>它是什麼？</h4><p>${escape(info.what)}</p></div><div><h4>為什麼放在這裡？</h4><p>${escape(info.why)}</p></div><div><h4>失效時會發生什麼？</h4><p>${escape(info.failure)}</p></div><div><h4>選它的代價與限制</h4><p>${escape(info.tradeoff)}</p></div></div><button type="button" class="fault-toggle ${state.failed===state.node?'is-failed':''}" data-diagram-action="failure" data-architecture="${escape(id)}">${state.failed===state.node?'恢復此元件':'推演這個元件失效'}</button>${state.failed?`<div class="failure-explanation"><strong>故障推演：${escape(node.t)}</strong><p>${escape(info.failure)}</p><small>紅色標出該元件相連的路徑；這是教學推演，不代表其他元件一定同時失效。備援與切換方式請依本圖解說判斷。</small></div>`:''}`;
    } else {
      const info=data.edges.find(e=>e.from===current[0]&&e.to===current[1]);
      const from=architecture.nodes.find(n=>n.id===current[0]),to=architecture.nodes.find(n=>n.id===current[1]);
      inspector.innerHTML=`<div class="inspector-heading"><span class="tag">資料流 · 第 ${state.step+1} 步</span><h3>${escape(from.t)} → ${escape(to.t)}</h3></div><div class="inspector-grid"><div><h4>這一步傳什麼？</h4><p>${escape(info?.what||current[2])}</p></div><div><h4>需要什麼權限與保護？</h4><p>${escape(info?.security||'依來源與目的地的服務政策限制存取。')}</p></div><div><h4>如果這一步不通？</h4><p>${escape(info?.failure||'檢查來源、目的地與這條連線的設定。')}</p></div></div><p class="diagram-tip">綠色框與實線是目前追蹤的路徑。可直接點圖中的其他元件或箭頭。</p>`;
    }
    annotate(inspector);
  }

  function enhance() {
    closeTerm();
    if(!document.createElement)return;
    document.querySelectorAll('.architecture-card').forEach(card=>{
      const id=card.id.replace(/^arch-/,''),architecture=window.ARCHITECTURES.find(a=>a.id===id);
      if(architecture && !card.querySelector('.diagram-explorer')){
        card.querySelector('.diagram-stage').insertAdjacentHTML('afterend',explorerHTML(architecture));
        updateDiagram(id);
      }
    });
    annotate(document.getElementById('main'));
  }

  function init() {
    if(!document.createElement)return;
    const header=document.querySelector('.topbar');
    header.insertAdjacentHTML('beforeend','<button id="reading-toggle" class="reading-toggle" type="button" aria-expanded="false" aria-controls="reading-settings" aria-label="調整全站文字大小">Aa 100%</button>');
    document.body.insertAdjacentHTML('beforeend',`<section id="reading-settings" class="reading-settings" aria-label="全站閱讀設定" hidden><div class="popover-head"><h2>文字大小</h2><button type="button" data-close-reading aria-label="關閉閱讀設定">×</button></div><p>所有頁面的內文、選單、按鈕、表格與架構圖文字一起調整。</p><label for="text-scale">目前大小 <output id="text-scale-value">100%</output></label><input id="text-scale" type="range" min="90" max="200" step="10" value="100"><div class="reading-presets"><button type="button" data-text-size="100">標準 100%</button><button type="button" data-text-size="130">大字 130%</button><button type="button" data-text-size="160">特大 160%</button><button type="button" data-text-size="200">最大 200%</button></div><small>設定會保存在這個瀏覽器。架構圖也有獨立縮放。</small></section><section id="term-popover" class="term-popover" role="dialog" aria-modal="false" aria-labelledby="term-popover-title" hidden></section>`);
    setScale(scale,false);
    document.getElementById('text-scale').addEventListener('input',event=>setScale(event.target.value));
    document.addEventListener('input',event=>{
      if(event.target.id!=='glossary-filter')return;
      const query=event.target.value.trim().toLowerCase();let count=0;
      document.querySelectorAll('[data-glossary-entry]').forEach(card=>{
        const entry=lookup.get(card.dataset.glossaryEntry);
        const matches=[entry.term,...entry.aliases,entry.plain,entry.example].join(' ').toLowerCase().includes(query);
        card.hidden=!matches;if(matches)count++;
      });
      document.getElementById('glossary-visible').textContent=count+' / '+entries.length+' 個名詞';
      document.getElementById('glossary-empty').hidden=count!==0;
    });
    document.addEventListener('pointerover',event=>{
      const button=event.target.closest?.('.term');if(button)openTerm(button,false);
      if(event.target.closest?.('#term-popover'))clearTimeout(hideTimeout);
    });
    document.addEventListener('pointerout',event=>{
      if(!pinned && event.target.closest?.('.term,#term-popover') && !event.relatedTarget?.closest?.('.term,#term-popover'))hideTimeout=setTimeout(closeTerm,240);
    });
    document.addEventListener('focusin',event=>{const button=event.target.closest?.('.term');if(button)openTerm(button,false);});
    document.addEventListener('keydown',event=>{
      if(event.key==='Escape'){
        closeTerm();document.getElementById('reading-settings').hidden=true;document.getElementById('reading-toggle').setAttribute('aria-expanded','false');
      }
      const target=event.target.closest?.('[data-arch-node],[data-arch-edge]');
      if(target && ['Enter',' '].includes(event.key)){event.preventDefault();target.dispatchEvent(new MouseEvent('click',{bubbles:true}));}
    });
    document.addEventListener('click',event=>{
      const term=event.target.closest?.('.term,.term-more');
      if(term){if(trigger===term&&pinned)closeTerm();else openTerm(term,true);return;}
      if(event.target.closest?.('[data-close-term]')){closeTerm();return;}
      if(!event.target.closest?.('#term-popover'))closeTerm();
      const size=event.target.closest?.('[data-text-size]');if(size)setScale(size.dataset.textSize);
      const reading=document.getElementById('reading-settings'),toggle=document.getElementById('reading-toggle');
      if(event.target.closest?.('#reading-toggle')){reading.hidden=!reading.hidden;toggle.setAttribute('aria-expanded',String(!reading.hidden));return;}
      if(event.target.closest?.('[data-close-reading]')||!event.target.closest?.('#reading-settings')){reading.hidden=true;toggle.setAttribute('aria-expanded','false');}
      const check=event.target.closest?.('[data-guide-check]');
      if(check){const guide=guides[check.dataset.guideCheck],selected=Number(check.dataset.answer),section=check.closest('.understanding-check');
        section.querySelectorAll('[data-guide-check]').forEach(button=>{
          button.classList.toggle('check-selected',button===check);button.setAttribute('aria-pressed',String(button===check));
          button.classList.toggle('check-correct',Number(button.dataset.answer)===guide.check.answer);
        });
        section.querySelector('.check-feedback').innerHTML=`<h3>${selected===guide.check.answer?'✓ 你抓到重點了':'先別急，看看這個差別'}</h3><p>${escape(guide.check.explanations[selected])}</p><details><summary>比較三個選項的原因</summary><ul>${guide.check.explanations.map((text,i)=>`<li><strong>${String.fromCharCode(65+i)}${i===guide.check.answer?'（正確）':''}：</strong>${escape(text)}</li>`).join('')}</ul></details>`;
        annotate(section.querySelector('.check-feedback'));return;
      }
      const node=event.target.closest?.('[data-arch-node]'),edge=event.target.closest?.('[data-arch-edge]'),control=event.target.closest?.('[data-diagram-action]');
      const id=node?.dataset.architecture||edge?.dataset.architecture||control?.dataset.architecture;if(!id)return;
      const state=diagramState(id),architecture=window.ARCHITECTURES.find(a=>a.id===id);
      if(node){state.mode='node';state.node=node.dataset.archNode;state.failed=null;}
      if(edge){state.mode='flow';state.step=Number(edge.dataset.archEdge);state.failed=null;}
      if(control){
        const action=control.dataset.diagramAction;
        if(action==='previous'||action==='next'){state.mode='flow';state.failed=null;state.step=Math.max(0,Math.min(architecture.edges.length-1,state.step+(action==='next'?1:-1)));}
        if(action==='zoom-in')state.zoom=Math.min(200,state.zoom+25);
        if(action==='zoom-out')state.zoom=Math.max(75,state.zoom-25);
        if(action==='reset'){Object.assign(state,{step:0,node:null,edge:0,failed:null,zoom:100,mode:'flow'});}
        if(action==='failure'&&state.node)state.failed=state.failed===state.node?null:state.node;
      }
      updateDiagram(id);
    });
    window.addEventListener('resize',positionTerm);
    window.addEventListener('scroll',event=>{if(event.target?.closest?.('#term-popover'))return;if(trigger&&!pinned)closeTerm();else positionTerm();},true);
  }
  window.CloudAtlasUX={enhance,lessonGuide,glossaryPage,matchTerms,setScale,guides};
  init();
})();
