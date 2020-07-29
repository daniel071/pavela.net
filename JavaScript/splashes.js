var tip=new Array()

tip[0]="I make games, tools and other software."
tip[1]="Welcome to my website!"
tip[2]="Made by Daniel!"
tip[3]="Refresh the page!"

var random=Math.floor(Math.random()*tip.length)

document.getElementById("coolSplash").innerHTML = tip[random];
