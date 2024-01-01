const symol= document.querySelector("#logo");
var isopen = false;
const cntainer = document.querySelector(".settingcontent");
var contain1= document.querySelector("#intialcontext");
var cont2 = document.querySelector("#afterdob");
var btn = document.querySelector("#btn");
var dat = document.querySelector("#data");
//timer
var yr = document.querySelector("#year");
var mth = document.querySelector("#month");
var dy = document.querySelector("#days");
var hr = document.querySelector("#hour");

var min = document.querySelector("#min"); 
var sec = document.querySelector("#sec");
let birth;
const updateage = ()=>{
  var currdate = new Date();
  var df = currdate - birth;
  var yer = Math.floor(df/(1000*60*60*24*365));
  var mnth = Math.floor(df/(1000*60*60*24*365)%12);
  var day = Math.floor(df/(1000*60*60*24))%30;
  var hour = Math.floor(df/(1000*60*60))%24;
  var men = Math.floor(df/(1000*60))%60;
  var second = Math.floor(df/(1000))%60;
  yr.innerHTML = yer;
mth.innerHTML = mnth;
dy.innerHTML = day;
hr.innerHTML = hour;
min.innerHTML = hour;
sec.innerHTML = second;
  }
const toggle = ()=>{
if(isopen){
  cntainer.classList.add("hide");
}
else{
  cntainer.classList.remove("hide");
}
isopen = !isopen;
}
var setdob = ()=>{
  var ddtx = dat.value;
birth  =  ddtx ? new Date(ddtx):null;
if(birth){
  contain1.classList.add("hide");
  cont2.classList.remove("hide");
  updateage();
  setInterval(()=>updateage(),2000);
}
else{
  cont2.classList.add("hide");
  contain1.classList.remove("hide");
}
}
setdob();



symol.addEventListener("click",toggle);
btn.addEventListener("click",setdob);
