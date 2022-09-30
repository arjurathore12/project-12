let min=00;
let sec=00;
let minsec=00;
let appendMin=document.getElementById("min")
let appendSec=document.getElementById("sec");
let appendMinsec=document.getElementById("minsec");
let buttonStart=document.getElementById("start");
let buttonStop=document.getElementById("stop");
let buttonReset=document.getElementById("reset");

let interval;
function startTimer(){
  minsec++;
  if(minsec<9){
    appendMinsec.innerHTML="0"+ minsec;
  }
  if(minsec>9){
    appendMinsec.innerHTML=minsec
  }
  if(minsec>250){
    sec++
    appendSec.innerHTML="0"+sec;
    minsec=0; 
    appendMinsec.innerHTML="0"+0; 
  }
  if(sec>59){
    min++;
    appendMin.innerHTML="0"+min;
    sec=0;
    appendSec.innerHTML="0"+0;
  }
}
buttonStart.onclick=function(){
  interval=setInterval(startTimer); 
}
buttonStop.onclick=function(){
  clearInterval(interval);
}
buttonReset.onclick=function(){
  clearInterval(interval);
  min="00";
  sec="00";
  minsec="00"
  appendMin.innerHTML=min;
  appendMinsec.innerHTML=minsec;
  appendSec.innerHTML=sec;
}
