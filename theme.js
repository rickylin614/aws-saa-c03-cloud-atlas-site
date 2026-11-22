'use strict';
(() => {
  if(typeof document==='undefined'||!document.documentElement)return;
  const key='cloud-atlas-theme-v1',root=document.documentElement;
  const system=typeof matchMedia==='function'?matchMedia('(prefers-color-scheme: dark)'):null;
  let preference=null;
  try{const saved=localStorage.getItem(key);if(saved==='light'||saved==='dark')preference=saved;}catch{}
  function apply(theme){
    root.dataset.theme=theme;
    const button=document.getElementById('theme-toggle'),dark=theme==='dark';
    if(button){button.textContent=dark?'☀':'☾';button.setAttribute('aria-pressed',String(dark));button.setAttribute('aria-label',dark?'切換為淺色主題':'切換為暗色主題');button.title=dark?'目前為暗色，切換為淺色主題':'目前為淺色，切換為暗色主題';}
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.setAttribute('content',dark?'#141c19':'#f5f5ef');
  }
  // Runs in the head before CSS, so a saved dark preference does not flash a light page.
  apply(preference||(system?.matches?'dark':'light'));
  system?.addEventListener?.('change',event=>{if(!preference)apply(event.matches?'dark':'light');});
  function init(){
    const button=document.getElementById('theme-toggle');if(!button)return;
    apply(root.dataset.theme);
    button.addEventListener('click',()=>{
      preference=root.dataset.theme==='dark'?'light':'dark';apply(preference);
      try{localStorage.setItem(key,preference);}catch{}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
