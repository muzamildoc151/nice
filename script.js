const surprisePage=document.getElementById("surprisePage");
const apologyPage=document.getElementById("apologyPage");
const birthdayPage=document.getElementById("birthdayPage");
const finalPage=document.getElementById("finalPage");

function switchPage(current,next){
  current.classList.remove("active");
  setTimeout(()=>next.classList.add("active"),250);
}

document.getElementById("surpriseBtn").addEventListener("click",()=>{
  switchPage(surprisePage,apologyPage);
});

document.getElementById("acceptedBtn").addEventListener("click",()=>{
  switchPage(apologyPage,birthdayPage);
  launchCelebration();
});

document.getElementById("thankBtn").addEventListener("click",()=>{
  switchPage(birthdayPage,finalPage);
});

function launchCelebration(){
  for(let i=0;i<45;i++){
    const piece=document.createElement("span");
    piece.textContent=["✦","♥","•","✧","★"][Math.floor(Math.random()*5)];
    piece.style.position="fixed";
    piece.style.left=Math.random()*100+"vw";
    piece.style.top="-20px";
    piece.style.zIndex="20";
    piece.style.fontSize=12+Math.random()*18+"px";
    piece.style.color=["#ffd66e","#ff83cf","#b79cff","#ffffff"][Math.floor(Math.random()*4)];
    piece.style.pointerEvents="none";
    const duration=2.5+Math.random()*3;
    piece.style.transition=`top ${duration}s linear,transform ${duration}s linear`;
    document.body.appendChild(piece);
    requestAnimationFrame(()=>{
      piece.style.top="110vh";
      piece.style.transform=`translateX(${(Math.random()-.5)*300}px) rotate(${Math.random()*900}deg)`;
    });
    setTimeout(()=>piece.remove(),duration*1000+300);
  }
}
