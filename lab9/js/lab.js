/* Author: Diamond Moore & Gage Weber <dikmoore@ucsc.edu> <gaeweber@ucsc.edu>
* Created: 31 October 2022
* License: Public Domain
*/

var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
var new2El = document.createElement("p");

new1El.innerHTML = "This paragraph is proof we are on the right track.";
new2El.innerHTML = "This paragraph is big, but not saying much.";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color = "brown";
new2El.style.fontSize = "50px";
