function getParam(name){const p=new URLSearchParams(location.search);return p.get(name)}
function fileUrl(title){return `../../thumbnail/${encodeURIComponent(title)}.png`}
const titleEl=document.getElementById('title')
const topicTitle=titleEl?.textContent||'Arrays'
const yt=document.getElementById('ytFrame')
const v=getParam('v')
if(yt){if(v){yt.src=`https://www.youtube.com/embed/${encodeURIComponent(v)}`}} 
const dl=document.getElementById('downloadThumb')
if(dl){dl.onclick=async()=>{const url=fileUrl(topicTitle);try{const r=await fetch(url,{method:'HEAD'});if(r.ok){const a=document.createElement('a');a.href=url;a.download=`${topicTitle}.png`;document.body.appendChild(a);a.click();a.remove();}}catch(e){}}}
const cp=document.getElementById('contactPage'); if(cp){cp.value=location.pathname}
const ct=document.getElementById('contactTopic'); if(ct){ct.value=topicTitle}
const qMap={
  '210':'Sum of Digits','211':'Smallest Digit','212':'Even or Odd','213':'Reverse a Number','214':'Palindrome Number',
  '215':'Power of 2','216':'Prime Number','217':'Factorial','218':'2\'s Complement','219':'LCM','220':'GCD',
  '222':'Narcissistic Number','223':'Count Divisors','419':'KM to Miles','420':'Area of Circle','423':'Check Prime',
  '426':'Reverse Integer (LeetCode)','427':'Print All Primes 1 to N','428':'Set Kth Bit','429':'Temperature Convert',
  '430':'Count Total Set Bits 1 to N','431':'Create Largest Number from Digits'
}
const sections={
  'l1-maths':[{id:'q1',title:'Sum of digits'},{id:'q2',title:'Reverse number'}],
  'l1-arrays':[{id:'q1',title:'Max element'},{id:'q2',title:'Rotate array'}],
  'ds-maths-arr':[{id:'q1',title:'Counting occurrences'}],
  'ms-maths':[{id:'q1',title:'GCD'}],
  'l2-arrays':[{id:'q1',title:'Two Sum'}],
  'l3-arrays':[{id:'q1',title:"Kadane's"}],
  'l4-arrays':[{id:'q1',title:'Merge intervals'}],
  'ds-arrays':[{id:'q1',title:'Frequency count'}],
  'ms-arrays':[{id:'q1',title:'Sliding window'}]
}
function renderQuestion(sectionKey,qId){
  const qTitle=document.getElementById('qTitle')
  const qSubtitle=document.getElementById('qSubtitle')
  const qOverviewText=document.getElementById('qOverviewText')
  const qCodeText=document.getElementById('qCodeText')
  const qDocsText=document.getElementById('qDocsText')
  if(sectionKey){
    const list=sections[sectionKey]||[]
    const q=list.find(x=>x.id===qId)
    if(qTitle){qTitle.textContent=`${sectionKey.toUpperCase()} • ${q?q.title:'Question'}`}
  }else{
    const t=qMap[qId]||'Question'
    if(qTitle){qTitle.textContent=`${qId} • ${t}`}
  }
  if(qSubtitle){qSubtitle.textContent='Shopping carts, playlists'}
  if(qOverviewText){qOverviewText.textContent='Shopping carts, playlists'}
  if(qCodeText){qCodeText.textContent='Add code explanation and samples here'}
  if(qDocsText){qDocsText.textContent='Add detailed documentation here'}
}
document.querySelectorAll('.q-link').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const s=btn.getAttribute('data-section')
    const q=btn.getAttribute('data-q')
    renderQuestion(s,q)
  })
})
