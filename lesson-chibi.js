/* Decorative textbook art: one small vignette per lesson, never an answer hint. */
'use strict';
(() => {
 const ATLAS = 'images/chibi-atlas.png?v=beddb8611930';
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const scenes=['揮手與筆記本','一份餐點','寫下紀錄','安靜讀書','使用電腦','整理照片','整理工作卡','查看清單','照顧包裹','保管鑰匙','整理箱子','耐心等候','接好連線','比較用量','搬運資料夾','讀書與茶歇'];
 const themes={start:[1,2,3,0,4,5,6,7],connect:[12,8,9,7],reliable:[10,8,11,3],async:[6,11,4,7],choices:[4,5,6,7],cost:[13,3,7,15],enterprise:[9,8,12,7],delivery:[14,5,6,7],special:[3,4,7,0],synthesis:[15,0,3,7]};
 const middleCopy=['每次看懂一小步，慢慢把畫面連起來。','先讓剛才的例子在腦中停留一下。','把閱讀的步調留給自己。','這裡先停一拍，再繼續往下。'];
 const endingCopy=['這一小段讀完了，準備好再往下。','讀累了可以休息，回來再接著走。','把今天看過的畫面，慢慢留在心裡。','每次前進一小步，也是一段累積。'];
 const counters={},entries={};
 const guides={...window.LESSON_GUIDES_A,...window.LESSON_GUIDES_B};
 for(const [order,c]of window.CURRICULUM.entries()){
  const stage=c.path.stage,index=counters[stage]||0;counters[stage]=index+1;
  const choices=themes[stage]||[3,7,15,0],scene=choices[index%choices.length];
  const middle=c.minutes>=30&&!c.optional&&stage!=='start';
  const existing=window.LESSON_VISUALS?.[c.id]||[];
  const step=middle?(existing.some(v=>v.anchor===1)?0:1):null;
  if(middle&&!guides[c.id].steps[step])throw Error('Missing chibi insertion step '+c.id);
  entries[c.id]={scene,sceneName:scenes[scene],placement:middle?'middle':'end',step,copy:(middle?middleCopy:endingCopy)[order%4],side:order%2?'left':'right'};
 }
 function render(id,position,step=null){
  const item=entries[id];if(!item||item.placement!==position||(position==='middle'&&item.step!==step))return '';
  return `<aside class="chibi-break chibi-${item.side}" data-chibi-lesson="${esc(id)}" data-chibi-scene="${item.scene}" data-no-glossary aria-label="閱讀小歇"><div class="chibi-cutout" aria-hidden="true" style="--chibi-col:${item.scene%4};--chibi-row:${Math.floor(item.scene/4)}"><img src="${ATLAS}" alt="" loading="lazy" decoding="async" width="1254" height="1254"></div><div class="chibi-copy"><span>閱讀小歇</span><p>${esc(item.copy)}</p></div></aside>`;
 }
 window.CloudAtlasChibi={render,entries,scenes};
})();
