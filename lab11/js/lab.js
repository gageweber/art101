/*
* Author: Diamond Moore and Gage Weber <dikmoore@ucsc.edu> <gaeweber@ucsc.edu>
* Created: 07 November 2022
* License: Public Domain
*/
$('#challenges').append('<button id="buttonChalEl">Click me for encouragement</button>');

$('#problems').append('<button id="buttonProEl">Click me for an answer to ur problems</button>');

$('#results').append('<button id="buttonResEl">Click me for our RESULTS</button>');

$('#buttonChalEl').click(function() {
  $('#challenges').toggleClass("ur slaying this babe");
});

$('#buttonProEl').click(function() {
  $('#problems').toggleClass("when in doubt, google it out");
});

$('#buttonResEl').click(function() {
  $('#results').toggleClass("the only result we want is to graduate");
});
