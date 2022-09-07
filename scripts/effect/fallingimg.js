/******************************************
* Snow Effect Script- By Altan d.o.o. (http://www.altan.hr/snow/index.html)
* Visit Dynamic Drive DHTML code library (http://www.dynamicdrive.com/) for full source code
* Last updated Nov 9th, 05' by DD. This notice must stay intact for use
******************************************/
  //Configure below to change URL path to the snow image
  var snowsrc=`/images/${fallingimg}`
  // Configure how much snow should drop down before fading ("windowheight" or "pageheight")
  var snowdistance = "windowheight";

///////////Stop Config//////////////////////////////////

  var dx, xp, yp;    // coordinate and position variables
  var am, stx, sty;  // amplitude and step variables
  var i, doc_width = 800, doc_height = 600; 
  
  doc_width = self.innerWidth;
  doc_height = self.innerHeight;

  dx = new Array();
  xp = new Array();
  yp = new Array();
  am = new Array();
  stx = new Array();
  sty = new Array();
  for (i = 0; i < fallingimgcount; ++ i) {  
    dx[i] = 0;                        // set coordinate variables
    xp[i] = Math.random()*(doc_width-50);  // set position variables
    yp[i] = Math.random()*doc_height;
    am[i] = Math.random()*20;         // set amplitude variables
    stx[i] = 0.02 + Math.random()/10; // set step variables
    sty[i] = 0.7 + Math.random();     // set step variables

	$("body").append("<div id=\"fallingimg"+ i +"\" style=\"POSITION: absolute; Z-INDEX: -900; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='"+snowsrc+"' border=\"0\"><\/div>");
  }

  function snowIE_NS6() {
    doc_width = window.innerWidth-10	
	doc_height = window.innerHeight

    for (i = 0; i < fallingimgcount; ++ i) {
      yp[i] += sty[i];
      if (yp[i] > doc_height-50) {
        xp[i] = Math.random()*(doc_width-am[i]-30);
        yp[i] = 0;
        stx[i] = 0.02 + Math.random()/10;
        sty[i] = 0.7 + Math.random();
      }
      dx[i] += stx[i];
      document.getElementById("fallingimg"+i).style.top=yp[i]+"px";
      document.getElementById("fallingimg"+i).style.left=xp[i] + am[i]*Math.sin(dx[i])+"px";  
    }
    snowtimer=setTimeout("snowIE_NS6()", 10);
  }

  function snowIE_NS6r() {
    doc_width = window.innerWidth-10	
	doc_height = window.innerHeight

    for (i = 0; i < fallingimgcount; ++ i) {
      yp[i] -= sty[i];
      if (yp[i] < -50) {
        xp[i] = Math.random()*(doc_width-am[i]-30);
        yp[i] = doc_height;
        stx[i] = 0.02 + Math.random()/10;
        sty[i] = 0.7 + Math.random();
      }
      dx[i] += stx[i];
      document.getElementById("fallingimg"+i).style.top=yp[i]+"px";
      document.getElementById("fallingimg"+i).style.left=xp[i] + am[i]*Math.sin(dx[i])+"px";  
    }
    snowtimer=setTimeout("snowIE_NS6r()", 10);
  }

	function hidesnow(){
		if (window.snowtimer) clearTimeout(snowtimer)
		for (i=0; i<fallingimgcount; i++) document.getElementById("fallingimg"+i).style.visibility="hidden"
	}

if (!fallingimgreverse) {
	loadwait(snowIE_NS6)
} else {
	loadwait(snowIE_NS6r)
}