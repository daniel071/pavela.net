function getLang() {
 if (navigator.languages != undefined)
 return navigator.languages[0];
 else
 return navigator.language;
}
// const addCSS = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);

var locale = getLang().substring(0, 2)

if (locale == "sk") {
	addCSS(':lang(en) {display:none;}');
} else {
	addCSS(':lang(sk) {display:none;}');
}
