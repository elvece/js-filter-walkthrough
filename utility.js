// Utility functions

//function that gets ranges of num - this is harder to translate to the image filtering exercise
 function getRanges(num){
  switch (num){
    case 10:
      return [0, 10];
    case 20:
      return [11, 20];
    case 30:
      return [21, 30];
    case 40:
      return [31, 40];
  }
 }

//getValues using traditional for loop
function getValues(rangeArr, domArr){
  var newArr = [];
  for (var i = 0; i < domArr.length; i++) {
    if (domArr[i] >= rangeArr[0] && domArr[i] <= rangeArr[1]){ //=to include 0
      newArr.push(domArr[i]);
    }
   }
   console.log(newArr);
}

//using filter example
// var result = arr.filter(function(num) {
//  return num > 2;
// });
// arr = [1,2,3,4];

//for image filtering
// take info of range that is created when image filter selected
//take that info and get the associated article info from that number
//push all of those articles to a new array
//append that array to the dom
