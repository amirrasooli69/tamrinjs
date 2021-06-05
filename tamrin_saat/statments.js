 function timer(){
var d= new Date();
var hour= d.getHours();
var minute=d.getMinutes();
var second=d.getSeconds();
var clock=hour + ":"+ minute + ":" + second;
document.getElementById('MyClockDisplay').innerHTML= clock;
// return clock;
}
// setTimeout(function timer(){
//     setTimeout(timer,1000);
// },1000);

// setInterval(timer,1000);
//--------
// setTimeout(function run(){
//      timer();
//      setTimeout(run,1000)
    
// },1000);
//--------
function clockRunner(){
     var d = new Date();
     var hour = d.getHours();
     var minute = d.getMinutes();
     var second = d.getSeconds();

     var p = 'AM';
     if(hour > 12){
          hour -= 12;
          p = 'PM';
     }

     if(hour < 10){
          hour = "0" + hour;
     }

     if(minute < 10){
          minute = "0" + minute;
     }

     if(second < 10){
          second = "0" + second;
     }

     var clock = hour + ":" + minute + ":" + second + " " + p;
     document.getElementById('MyClockDisplay').textContent = clock;
     setTimeout(clockRunner,1000);
}
clockRunner();
//-----------