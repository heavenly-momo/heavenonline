/***********************************************
* Floating image script- By Virtual_Max (http://www.geocities.com/siliconvalley/lakes/8620)
* Modified by Dynamic Drive for various improvements
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

let vr=2;
var timer1;

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function chip(chipname){
 this.named=chipname;
 this.vx=vmin+vmax*Math.random();
 this.vy=vmin+vmax*Math.random();
 this.w=1+20;
 this.h=1;
 this.xx=0;
 this.yy=0;
 this.timer1=null;
}

function movechip(chipname){
if (document.getElementById){
eval("chip="+chipname);
   if (window.innerWidth || window.opera){
		 pageX=window.pageXOffset;
     pageW=window.innerWidth-40;
     pageY=window.pageYOffset;
     pageH=window.innerHeight-20;
    }
   else if (document.body){
		 pageX=iecompattest().scrollLeft;
     pageW=iecompattest().offsetWidth-40;
     pageY=iecompattest().scrollTop;
     pageH=iecompattest().offsetHeight-20;
    } 

   chip.xx=chip.xx+chip.vx;
   chip.yy=chip.yy+chip.vy;
   
   chip.vx+=vr*(Math.random()-0.5);
   chip.vy+=vr*(Math.random()-0.5);
   if(chip.vx>(vmax+vmin))  chip.vx=(vmax+vmin)*2-chip.vx;
   if(chip.vx<(-vmax-vmin)) chip.vx=(-vmax-vmin)*2-chip.vx;
   if(chip.vy>(vmax+vmin))  chip.vy=(vmax+vmin)*2-chip.vy;
   if(chip.vy<(-vmax-vmin)) chip.vy=(-vmax-vmin)*2-chip.vy;

   if(chip.xx<=pageX){
			chip.xx=pageX;
      chip.vx=vmin+vmax*Math.random();
     }
   if(chip.xx>=pageX+pageW-chip.w){
			chip.xx=pageX+pageW-chip.w;
      chip.vx=-vmin-vmax*Math.random();
     }
   if(chip.yy<=pageY)
     {chip.yy=pageY;
      chip.vy=vmin+vmax*Math.random();
     }
   if(chip.yy>=pageY+pageH-chip.h)
     {chip.yy=pageY+pageH-chip.h;
      chip.vy=-vmin-vmax*Math.random();
     }

document.getElementById(chip.named).style.left=chip.xx+"px";
document.getElementById(chip.named).style.top=chip.yy+"px";


   chip.timer1=setTimeout("movechip('"+chip.named+"')",100);
  }
}

loadwait(floatingimage)