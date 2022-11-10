/*
* Author: Diamond Moore and Gage Weber <dikmoore@ucsc.edu> <gaeweber@ucsc.edu>
* Created: 07 November 2022
* License: Public Domain
*/
//Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod==0){
    return "Gryffindor"
  }
  if (mod==1){
    return "Ravenclaw"
  }
  if (mod==2){
    return "Slytherin"
  }
  if (mod==3){
    return "Hufflepuff"
  }
}
 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function() {
   var name = document.getElementById("input").value;
   var house = sortingHat(name);
   newText = "<p> The sorting Hat has sorted you into " + house + "</p>";
   document.getElementById("output").innerHTML = newText;
 })
