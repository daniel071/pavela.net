function getLang() {
 if (navigator.languages != undefined)
 return navigator.languages[0];
 else
 return navigator.language;
}
const addCSS = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);

var locale = getLang().substring(0, 2)

var englishTip=new Array()
var slovakTip=new Array()

englishTip[0]="I make games, tools and other software."
englishTip[1]="Welcome to my website!"
englishTip[2]="Made by Daniel!"
englishTip[3]="Refresh the page!"

slovakTip[0]="Vyrábam hry, nástroje a ďalší softvér."
slovakTip[1]="Vitajte na mojej webovej stránke!"
slovakTip[2]="Vytvoril Daniel!"
slovakTip[3]="Obnovte stránku!"

var random=Math.floor(Math.random()*englishTip.length)
var sheet = window.document.styleSheets[0];

if (locale == "sk") {
	document.getElementById("coolSplash").innerHTML = slovakTip[random];
	addCSS(':lang(en) {display:none;}');
} else {
	document.getElementById("coolSplash").innerHTML = englishTip[random];
	addCSS(':lang(sk) {display:none;}');
}