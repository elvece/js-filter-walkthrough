// DOM Manipulation


/*
1. On button click, grab the value
2. Pass the value to a helper function to find values in arr that are in the range
3. Append values back to DOM
*/
$(document).ready(function(){

  $('button').on('click', function(){
  var domValues = [];
  $('#original-values li').each(function(i, li){//i is iterator, li is target element, example of polymorphism
    domValues.push($(li).text());
  });
  var upperLimit = $(this).data('val');
  var range = getRanges(upperLimit);
  getValues(range, domValues);
  });


//getValues using filter - not working
  // $("button").on("click", function() {

  //   var domValues = [];
  //   var results = [];

  //   $("#original-values li").each(function(i, li) {
  //     domValues.push(+$(li).html());
  //   });

  //   var upperLimit = +this.dataset.val;
  //   var lowerLimit = upperLimit - 10;

  //   results = domValues.filter(function(num) {
  //     return num <= upperLimit && num >= lowerLimit;
  //   });
  // });

});
