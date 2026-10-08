const START_DATE = "2026-01-01"; // 交往日期：1/1，可自行修改年份
const BIRTHDAY = "11-19";

function updateTogether(){
  const start = new Date(START_DATE + "T00:00:00");
  const now = new Date();
  const ms = Math.max(0, now - start);
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms / 3600000) % 24);
  const mins = Math.floor((ms / 60000) % 60);
  document.getElementById("daysTogether").textContent = days.toLocaleString();
  document.getElementById("timeTogether").textContent = `還有 ${hours} 小時 ${mins} 分鐘，我們就在一起。`;
}
updateTogether();
setInterval(updateTogether, 60000);

const stars = document.getElementById("stars");
for(let i=0;i<90;i++){
  const s=document.createElement("i"); s.className="star";
  s.style.left=Math.random()*100+"%"; s.style.top=Math.random()*100+"%";
  s.style.animationDelay=(Math.random()*3)+"s";
  stars.appendChild(s);
}

function heart(){
  const h=document.createElement("span"); h.className="heart-particle"; h.textContent=Math.random()>.5?"♡":"♥";
  h.style.left=Math.random()*100+"%"; h.style.bottom="-20px";
  h.style.animationDuration=(4+Math.random()*4)+"s";
  document.getElementById("hearts").appendChild(h);
  setTimeout(()=>h.remove(),8000);
}
setInterval(heart,900);

document.getElementById("enterBtn").addEventListener("click",()=>{
  document.getElementById("story").scrollIntoView({behavior:"smooth"});
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.15});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("secretBtn").addEventListener("click",()=>{
  const box=document.getElementById("secretMessage");
  box.style.display="block";
  document.getElementById("secretBtn").textContent="♡ 被妳發現了";
});

let blown=false;
document.getElementById("cake").addEventListener("click",()=>{
  if(blown)return;
  blown=true;
  document.querySelectorAll(".flame").forEach(f=>f.style.display="none");
  document.getElementById("cakeHint").textContent="願望要記得許喔。♡";
  for(let i=0;i<14;i++)setTimeout(heart,i*100);
});

document.getElementById("giftBtn").addEventListener("click",()=>{
  const box=document.getElementById("giftMessage");
  box.style.display="block";
  document.getElementById("giftBtn").textContent="♡ 妳找到最後一個秘密了";
  for(let i=0;i<25;i++)setTimeout(heart,i*70);
});

// 如果未來加入背景音樂，可以在這裡接入 audio 元素。
// 建議：不要自動播放，讓訪客主動點擊比較不會被瀏覽器阻擋。
