function getParam(name){const p=new URLSearchParams(location.search);return p.get(name)}
function fileUrl(title){return `../../thumbnail/${encodeURIComponent(title)}.png`}
const titleEl=document.getElementById('title')
const topicTitle=titleEl?.textContent||'Binary Search Trees'
const yt=document.getElementById('ytFrame')
const v=getParam('v')
if(yt){if(v){yt.src=`https://www.youtube.com/embed/${encodeURIComponent(v)}`}} 
const dl=document.getElementById('downloadThumb')
if(dl){dl.onclick=async()=>{const url=fileUrl(topicTitle);try{const r=await fetch(url,{method:'HEAD'});if(r.ok){const a=document.createElement('a');a.href=url;a.download=`${topicTitle}.png`;document.body.appendChild(a);a.click();a.remove();}}catch(e){}}}
