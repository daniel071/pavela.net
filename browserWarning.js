// Thanks to https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

if (isIE == true || isEdge == true) {
	document.getElementById("warning").style.display = "block";
}

function dismiss() {
	document.getElementById("warning").style.display = "none"
}
