/*
script edited by David Gardner (toolmandav@geocities.com)
Permission granted to Dynamicdrive.com to feature the script
For more DHTML scripts, visit Dynamicdrive.com
*/

function nextSize(i,incMethod,textLength)
{
if (incMethod == 1) return (72*Math.abs( Math.sin(i/(textLength/3.14))) );
if (incMethod == 2) return (255*Math.abs( Math.cos(i/(textLength/3.14))));
}


/*
	i (momo) added this bit to account for longer strings.
*/


let issmall = document.getElementsByClassName("wavesmall")[0];

if (issmall) {
	var sizemod = 0.5;
} else {
	var sizemod = 1;
};

function sizeCycle(text,method,dis)
{
	output = "";
	for (i = 0; i < text.length; i++)
	{
		size = parseInt(nextSize(i +dis,method,text.length)) * sizemod;
		output += "<font style='font-size: "+ size +"pt'>" +text.substring(i,i+1)+ "</font>";
	}
	wave.innerHTML = output;
}

function doWave(n) 
{   
	sizeCycle(wavetext,1,n);
	if (n > wavetext.length) {n=0}
	setTimeout("doWave(" + (n+1) + ")", 50);
}

if (!ispreloaded && document.readyState !== "complete") {
	$(window).on("load", function () {
		doWave(0)
	})
} else {
	doWave(0)
}