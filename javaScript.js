const hr=document.querySelector('.hour');
const mn=document.querySelector('.minute');
const sc=document.querySelector('.second');

const deg=6;
setInterval(timing,1000);
function timing(){
    let day=new Date();
    let hou=day.getHours()*30;
    let min=day.getMinutes()*deg;
    let sec=day.getSeconds()*deg;

    hr.style.transform="rotate(" + (hou+(min/12))+"deg)"; 
    mn.style.transform="rotate(" + (min)+"deg)";
    sc.style.transform="rotate(" + (sec)+"deg)";


}
timing();
