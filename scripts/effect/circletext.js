;(function(){



/* THE REST OF THE EDITABLE VALUES BELOW ARE ALL UNQUOTED NUMBERS */


// Set both to 1 for plain circle, set one of them to 2 for oval

// Other numbers & decimals can have interesting effects, keep these low (0 to 3)

var circleY = 0.75; var circleX = .2;



// The larger this divisor, the smaller the spaces between letters

// (decimals allowed, not negative numbers)

var letter_spacing = 4;



// The larger this multiplier, the bigger the circle/oval

// (decimals allowed, not negative numbers, some rounding is applied)

var diameter = 10;



// Rotation speed, set it negative if you want it to spin clockwise (decimals allowed)

var rotation = 0.4;



// This is not the rotation speed, its the reaction speed, keep low!

// Set this to 1 or a decimal less than one (decimals allowed, not negative numbers)

var speed = 0.3;



////////////////////// Stop Editing //////////////////////



if (!window.addEventListener && !window.attachEvent || !document.createElement) return;



circletextmsg = circletextmsg.split('');

var nn = circletextmsg.length - 1, a = Math.round(circletextsize * diameter * 0.208333), currStep = 20,

ymouse = a * circleY + 20, xmouse = a * circleX + 20, y = [], x = [], Y = [], X = [],

o = document.createElement('div'), oi = document.createElement('div'),

b = document.compatMode && document.compatMode != "BackCompat"? document.documentElement : document.body,

mouse = function(e){

 e = e || window.event;

 ymouse = !isNaN(e.pageY)? e.pageY : e.clientY; // y-position

 xmouse = !isNaN(e.pageX)? e.pageX : e.clientX; // x-position

},



makecircle = function(){ // rotation/positioning

	if(cinit.nopy){

	o.style.top = (b || document.body).scrollTop + 'px';

	o.style.left = (b || document.body).scrollLeft + 'px';

	};

	currStep -= rotation;

	for (var d, i = nn; i > -1; --i){ // makes the circle

	d = document.getElementById('iemsg' + i).style;

	d.top = Math.round(y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15) + 'px';

	d.left = Math.round(x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX) + 'px';

	};

	/*
		i (momo) added this bit to make per-page styling cleaner.
	*/

	let circletextdiv = document.getElementById("circletext");
	if (circletextdiv) {
		o.classList = circletextdiv.classList;
	}
},



drag = function(){ // makes the resistance

 y[0] = Y[0] += (ymouse - Y[0]) * speed;

 x[0] = X[0] += (xmouse - 20 - X[0]) * speed;

 for (var ii = nn; ii > 0; --ii){

  y[ii] = Y[ii] += (y[ii-1] - Y[ii]) * speed;

  x[ii] = X[ii] += (x[ii-1] - X[ii]) * speed;

 };

 makecircle();

},



cinit = function(){ // appends message divs, & sets initial values for positioning arrays

 if(!isNaN(window.pageYOffset)){

  ymouse += window.pageYOffset;

  xmouse += window.pageXOffset;

 } else cinit.nopy = true;

 for (var d, ii = nn; ii > -1; --ii){

  d = document.createElement('div'); d.id = 'iemsg' + ii;

  d.style.height = d.style.width = a + 'px';

  d.appendChild(document.createTextNode(circletextmsg[ii]));

  oi.appendChild(d); y[ii] = x[ii] = Y[ii] = X[ii] = 0;

 };

 o.appendChild(oi); document.body.appendChild(o);

 setInterval(drag, 25);

},



ascroll = function(){

 ymouse += window.pageYOffset;

 xmouse += window.pageXOffset;

 window.removeEventListener('scroll', ascroll, false);

};



o.id = 'outerCircleText'; o.style.fontSize = circletextsize + 'px';



if (window.addEventListener){

 document.addEventListener('mouseover', mouse, false);

 document.addEventListener('mousemove', mouse, false);

  if (/Apple/.test(navigator.vendor))

   window.addEventListener('scroll', ascroll, false);

}

else if (window.attachEvent){

 document.attachEvent('onmousemove', mouse);

};

loadwait(cinit)

})();