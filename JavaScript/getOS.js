var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows"; // Windows 10
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows"; // Windows 8
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows"; // Windows 7
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows"; // Windows Vista
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows"; // Windows XP
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows"; // Windows 2000
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";

if (OSName=="Windows"){
	document.getElementById("downloadWindows").style.display = "inline";

} else if (OSName=="Linux"){
	document.getElementById("downloadLinux").style.display = "inline";

} else if(OSName=="Mac/iOS"){
	document.getElementById("downloadMacOS").style.display = "inline";

} else {
	document.getElementById("downloadOther").style.display = "inline";
	if(OSName=="UNIX"){
		document.getElementById("otherOS").innerHTML = "Unix will probably work, you need to compile it";
	}
}
