let audio = new Audio('ticking-clock_1-27477');
setInterval(() =>{
   d = new Date();
   hTime = d.getHours();
   mTime = d.getMinutes();
   sTime = d.getSeconds();

   hRotation = 30*hTime + mTime/2;
   mRotation = 6*mTime;
   sRotation = 6*sTime;

   hour.style.transform = `rotate(${hRotation}deg)`//this method requires only id to identify needle of clock
   minute.style.transform = `rotate(${mRotation}deg)`
   second.style.transform = `rotate(${sRotation}deg)`
   
},1000)
audio.play();