/*
	Check if the client is using Internet Explorer.
*/

isIE = /*@cc_on!@*/false || !!document.documentMode;

/*
	If so, redirect the client to a page explaining the situation.
*/

if (isIE) {
	window.location.replace("/IE.html");
}