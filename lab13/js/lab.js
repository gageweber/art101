/*
* Author: Diamond Moore and Gage Weber <dikmoore@ucsc.edu> <gaeweber@ucsc.edu>
* Created: 14 November 2022
* License: Public Domain
*/
//This is my loop, it will loop over the numbers and output the number and matching text. 
function fizzBuzz(){
  for (var i=1; i<=200; i++){
    var slay = "";
    if (i%3==0){
        slay = slay+"kitty";
    };
    if (i%5==0){
        slay= slay+"boots the house down";
    };
    if (i%7==0){
        slay = slay+"and thats jazz";
    };
    if (i%9==0){
        slay = slay+"ya heard";
    };
    //can wrap paragraphs in divs to make styling them easier, make all div's the same class name.
    if (slay.length>0){
      $("#output").append("<p>"+slay+" !</p>");
    } else {
      $("#output").append("<p>"+i+" !</p>");
    };
  };

};

$("#slay-anator").click(function(){
  fizzBuzz();
});
