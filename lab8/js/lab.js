/*
* Author: Gage Weber and Diamond Moore  <gaeweber@ucsc.edu> <dikmoore@ucsc.edu>
* Created: 27 October 2022
* License: Public Domain
*/

function isEven(x){
  return (x % 2 == 0);
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [300,134,453,546,765,90400]
console.log("My array", array);

var result = array.map(isEven);
//should return [true, true, false, true, flase, true]
console.log("Test of evenness of array:", results);

var result = array.map(function(x){
    return x + 15;
})

// output
document.writeln("My Array:", array, "</br>");

map_array = array.map(add_fifteen);
document.writeln("Mapped +15 Array: ", map_array, "</br>");
