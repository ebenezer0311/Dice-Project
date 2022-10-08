function roll(){
// first dice.

var random1= Math.floor(Math.random() * 6)+1;
var imgGenerator= "images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src", imgGenerator);

// second dice.
var random2= Math.floor(Math.random() * 6)+1;
var imgGenerator2= "images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src", imgGenerator2);

// Conditions.
if(random1>random2){
  document.querySelector("h1").innerHTML= "🎇Player 1 wins!"
}
else if(random1<random2){
  document.querySelector("h1").innerHTML= "🎇Player 2 wins!"
}
else{
  document.querySelector("h1").innerHTML= "A TIE ROUND!"

}
}
