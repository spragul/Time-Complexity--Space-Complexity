// Write a function to find the second largest element in an array.
//sorting
function largestNumber1(number) {
    let highestvalue = 0;
    let secendhighest = 0;
    number.sort((a, b) => a - b);
    for (let i = 0; i < number.length; i++) {
      if (highestvalue < number[i]) {
        secendhighest = highestvalue;
        highestvalue = number[i];
      }
    }
    return secendhighest;
  }
  console.log(largestNumber1([1, 2, 9, 4, 8, 6]));

function largestNumber(number) {
  let highestvalue = 0;
  let secendhighest = 0;
  for (i = 0; i < number.length; i++) {
    if (highestvalue < number[i]) {
      secendhighest = highestvalue;
      highestvalue = number[i];
    } else if (highestvalue !== number[i] && secendhighest < number[i]) {
      secendhighest = number[i];
    }
  }
  return secendhighest;
}
console.log(largestNumber([1, 2, 9, 4, 8, 6]));


