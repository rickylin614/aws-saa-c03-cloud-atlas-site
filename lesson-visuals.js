/* Teaching illustrations: geometry and icons stay local, readable and keyboard operable. */
'use strict';
(() => {
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const drawings={
  person:'<circle cx="24" cy="13" r="6"/><path d="M12 41v-8a12 12 0 0 1 24 0v8M18 33v8m12-8v8"/>',
  phone:'<rect x="12" y="4" width="24" height="40" rx="4"/><path d="M20 9h8M16 35h16"/><circle cx="24" cy="39" r="1"/>',
  menu:'<rect x="8" y="5" width="32" height="38" rx="3"/><path d="M15 13h18M21 23h12M21 32h12"/><circle cx="15" cy="23" r="2"/><circle cx="15" cy="32" r="2"/>',
  chef:'<path d="M14 23C2 22 6 8 16 11c2-9 14-9 16 0 10-3 14 11 2 12v8H14Z"/><path d="M14 26h20M13 43v-3a11 11 0 0 1 22 0v3M19 35l5 5 5-5"/>',
  receipt:'<path d="M10 5h28v39l-5-3-4 3-5-3-5 3-4-3-5 3Z"/><path d="M16 14h16M16 21h16M16 29h8M28 29h4"/>',
  server:'<rect x="6" y="7" width="36" height="14" rx="3"/><rect x="6" y="27" width="36" height="14" rx="3"/><path d="M12 14h2m5 0h14M12 34h2m5 0h14"/>',
  bucket:'<ellipse cx="24" cy="9" rx="15" ry="5"/><path d="M9 9l3 29c1 7 23 7 24 0l3-29M14 23c5 4 15 4 20 0"/>',
  database:'<ellipse cx="24" cy="9" rx="16" ry="6"/><path d="M8 9v29c0 8 32 8 32 0V9M8 19c0 8 32 8 32 0M8 29c0 8 32 8 32 0"/>',
  key:'<circle cx="16" cy="16" r="10"/><path d="M23 23l17 17m-7-7 5-5m-1 9 5-5"/><circle cx="13" cy="13" r="2"/>',
  shield:'<path d="M24 4l17 6v13c0 11-17 21-17 21S7 34 7 23V10Z"/><path d="m15 23 6 6 13-14"/>',
  queue:'<rect x="4" y="13" width="11" height="22" rx="2"/><rect x="19" y="13" width="11" height="22" rx="2"/><rect x="34" y="13" width="10" height="22" rx="2"/><path d="M7 8h34m-5-4 5 4-5 4"/>',
  function:'<rect x="6" y="6" width="36" height="36" rx="8"/><path d="m26 13-7 22m2-22h6l9 22m-20-9h16"/>',
  file:'<path d="M10 4h19l10 10v30H10Z"/><path d="M29 4v11h10M16 24h17M16 31h17M16 37h10"/>',
  clock:'<circle cx="24" cy="25" r="18"/><path d="M24 13v12l9 5M19 3h10"/>',
  network:'<rect x="16" y="3" width="16" height="12" rx="2"/><path d="M24 15v12M8 27h32M8 27v7m16-7v7m16-7v7"/><rect x="2" y="34" width="12" height="10" rx="2"/><rect x="18" y="34" width="12" height="10" rx="2"/><rect x="34" y="34" width="12" height="10" rx="2"/>',
  globe:'<circle cx="24" cy="24" r="20"/><ellipse cx="24" cy="24" rx="9" ry="20"/><path d="M4 24h40M8 13h32M8 35h32"/>',
  cloud:'<path d="M12 36C0 34 2 18 14 18 15 2 36 3 37 20c13 0 13 17 1 17H12Z"/><path d="M17 28h14m-7-6v12"/>',
  lock:'<rect x="9" y="21" width="30" height="23" rx="4"/><path d="M15 21V12a9 9 0 0 1 18 0v9M24 29v7"/>',
  worker:'<circle cx="24" cy="13" r="7"/><path d="M10 43V33a14 14 0 0 1 28 0v10M18 28l6 7 6-7M24 35v8M14 9h20M20 4V2h8v2"/>',
  gear:'<path d="m20 4 8 0 2 6 6 3 6-1 4 7-5 5 0 6 3 5-5 6-6-2-5 3-2 5h-8l-2-6-6-3-6 1-4-7 5-5v-6l-3-5 5-6 6 2 5-3Z" transform="translate(2 -2) scale(.92)"/><circle cx="24" cy="24" r="7"/>',
  money:'<circle cx="24" cy="24" r="20"/><path d="M31 14H20a6 6 0 0 0 0 12h8a6 6 0 0 1 0 12H16M24 10v31"/>',
  chart:'<path d="M7 5v37h36M15 34V23h6v11m6 0V14h6v20m6 0V7h5v27"/>',
  workflow:'<rect x="17" y="3" width="14" height="11" rx="2"/><path d="M24 14v8M10 22h28m-28 0v9m28-9v9"/><rect x="3" y="31" width="14" height="12" rx="2"/><rect x="31" y="31" width="14" height="12" rx="2"/>'
 };
 const icon=name=>'<svg class="teaching-icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">'+(drawings[name]||drawings.file)+'</svg>';
 function renderVisual(lessonId,visual,index){
  const uid='visual-'+lessonId+'-'+index;
  const card=node=>`<button type="button" class="visual-node" data-visual-node="${esc(node.id)}" aria-pressed="false" aria-controls="${uid}-note-${esc(node.id)}">${icon(node.icon)}<span class="visual-node-label">${esc(node.label)}</span><span class="visual-node-detail">${esc(node.detail)}</span></button>`;
  const connector=link=>`<div class="visual-connector ${esc(link.tone||'normal')}" aria-label="${esc(link.label)}"><span class="visual-arrow" aria-hidden="true">${link.tone==='blocked'?'↛':'→'}</span><span>${esc(link.label)}</span></div>`;
  let picture='';
  if(['flow','timeline'].includes(visual.kind))picture=`<div class="visual-chain">${visual.nodes.map((n,i)=>card(n)+(visual.links[i]?connector(visual.links[i]):'')).join('')}</div>`;
  if(visual.kind==='compare')picture=`<div class="visual-comparison">${visual.nodes.map(card).join('')}</div>`;
  if(visual.kind==='fanout')picture=`<div class="visual-fanout"><div class="visual-origin">${card(visual.nodes[0])}</div><div class="visual-branches">${visual.nodes.slice(1).map((n,i)=>'<div class="visual-branch">'+connector(visual.links[i])+card(n)+'</div>').join('')}</div></div>`;
  if(visual.kind==='hierarchy'){
   const draw=node=>{const children=visual.nodes.filter(n=>n.parent===node.id);return '<div class="visual-tree-node">'+card(node)+(children.length?'<div class="visual-tree-children">'+children.map(draw).join('')+'</div>':'')+'</div>';};
   picture=`<div class="visual-hierarchy">${visual.nodes.filter(n=>!n.parent).map(draw).join('')}</div>`;
  }
  if(visual.kind==='capacity'){
   const max=Math.max(...visual.nodes.map(n=>n.value),1);
   picture='<div class="visual-capacity">'+visual.nodes.map(n=>'<div class="visual-measure">'+card(n)+`<div class="visual-bar-track" aria-hidden="true"><div class="visual-bar" style="width:${Math.min(100,n.value/max*100)}%"></div></div><strong class="visual-value">${esc(n.value)} ${esc(n.unit)}</strong></div>`).join('')+'</div>'+(visual.formula?'<p class="visual-formula">'+esc(visual.formula)+'</p>':'');
  }
  return `<figure class="lesson-visual visual-${esc(visual.kind)}" data-lesson-visual="${uid}" aria-labelledby="${uid}-title"><div class="visual-heading"><span>把這段話畫出來</span><h4 id="${uid}-title">${esc(visual.title)}</h4></div><div class="visual-picture" role="group" aria-label="${esc(visual.title)}">${picture}</div><figcaption>${esc(visual.caption)}</figcaption><p class="visual-hint">點選圖示，可看它在這個例子中負責什麼。</p><div class="visual-inspector" aria-live="polite" aria-atomic="true">${visual.nodes.map(n=>`<section id="${uid}-note-${esc(n.id)}" data-visual-note="${esc(n.id)}" hidden><h5>${esc(n.label)}在這張圖中</h5><p>${esc(n.explain)}</p></section>`).join('')}</div></figure>`;
 }
 function renderForStep(id,step){return (window.LESSON_VISUALS?.[id]||[]).map((v,i)=>v.anchor===step?renderVisual(id,v,i):'').join('');}
 function selectNode(figure,button){
  const selected=button.getAttribute('aria-pressed')!=='true',id=button.dataset.visualNode;
  figure.querySelectorAll('[data-visual-node]').forEach(node=>{const active=selected&&node===button;node.setAttribute('aria-pressed',String(active));node.classList.toggle('is-selected',active);});
  figure.querySelectorAll('[data-visual-note]').forEach(note=>note.hidden=!(selected&&note.dataset.visualNote===id));
 }
 window.CloudAtlasVisuals={renderForStep,renderVisual,selectNode,iconNames:Object.keys(drawings)};
 if(typeof document!=='undefined')document.addEventListener('click',event=>{
  const button=event.target.closest?.('[data-visual-node]');if(!button)return;
  const figure=button.closest('[data-lesson-visual]');if(figure)selectNode(figure,button);
 });
})();
