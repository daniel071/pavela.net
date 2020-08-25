// Thanks to https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
// this script is unused at the moment

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

if (isIE == true) {
	document.getElementById("warning").style.display = "block";
}

function dismiss() {
	document.getElementById("warning").style.display = "none"
}
