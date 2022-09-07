/****************************
*      Star Warp Effect     *
*(c)2005-14 mf2fm web-design *
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
* sorry. - momo *
****************************/

var position = -900;
var strs=new Array();
var strx=new Array();
var stry=new Array();
var stdx=new Array();
var stdy=new Array();
var strz=new Array();
var swide=800;
var shigh=600;
warp=1+warp/125;

function initiate_hyperjump() { if (document.getElementById) {
  var i, temp;
  boddie=document.createElement("div");
  boddie.style.position="fixed";
  boddie.style.top="0px";
  boddie.style.left="0px";
  boddie.style.width="1px";
  boddie.style.height="1px";
  boddie.style.overflow="visible";
  boddie.style.zIndex=position; 
  i=document.body.style.backgroundColor;
  document.body.insertBefore(boddie, document.body.firstChild);
  set_width();
  for (i=0; i<stars; i++) {
    strs[i]=document.createElement("div");
    strs[i].style.color=starcolors[i%starcolors.length];
	strs[i].style.backgroundColor="transparent";
    strs[i].style.position="absolute";
	strs[i].appendChild(document.createTextNode(starcharacter));
	strs[i].style.font="13px monospace";
    stdy[i]=Math.random()*6-3;
    stdx[i]=Math.random()*8-4;
    temp=Math.random()*100;
    strx[i]=swide/2+temp*stdx[i];
    stry[i]=shigh/2+temp*stdy[i];
    if (Math.abs(stdx[i])+Math.abs(stdy[i])>5) strz[i]=13; 
    else if (Math.abs(stdx[i])+Math.abs(stdy[i])>3) strz[i]=7;
    else strz[i]=2;
	strs[i].style.fontSize=strz[i]+"px";
    boddie.appendChild(strs[i]);
  }
  setInterval("warp_drive()", starspeed);
}}

function warp_drive() {
  var i;
  for (i=0; i<stars; i++) {
    stry[i]+=stdy[i];
    strx[i]+=stdx[i];
    stdx[i]*=warp;
    stdy[i]*=warp;
    if (stry[i]>0 && stry[i]<shigh && strx[i]>0 && strx[i]<swide) {
	  if (Math.abs(stdx[i])+Math.abs(stdy[i])>strz[i]) strs[i].style.fontSize=++strz[i]+"px";
      strs[i].style.left=strx[i]+"px";
      strs[i].style.top=stry[i]+"px"
    }
    else {
      strx[i]=swide/2;
      stry[i]=shigh/2;
      strx[i]+=3*(stdx[i]=Math.random()*8-4);
      stry[i]+=3*(stdy[i]=Math.random()*6-3);
	  if (Math.abs(stdx[i])+Math.abs(stdy[i])>5) strz[i]=13; 
      else if (Math.abs(stdx[i])+Math.abs(stdy[i])>3) strz[i]=7;
      else strz[i]=2;
	  strs[i].style.fontSize=strz[i]+"px";
    }
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)!="undefined" && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

loadwait(initiate_hyperjump)