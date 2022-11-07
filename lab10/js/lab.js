/*
* Author: Diamond Moore and Gage Weber <dikmoore@ucsc.edu> <gaeweber@ucsc.edu>
* Created: 02 November 2022
* License: Public Domain
*/

function sortNameinputName() {
  var userName = inputName;
  var nameArray = userName.split("");
  var sortedArray = nameArray.sort();
  var sortedName = sortedArray.join("");
  return(sortedName);
}

var buttonEl = document.getElementById("my-button");
var outputEl = document.getElementById("output");

buttonEl.addEventListener("click", function(){
var enterName = document.getElementById("user-enterName").value;
var sortedName = sortName (enteredName);
outputEl.innerHTML = sortedName;
})
