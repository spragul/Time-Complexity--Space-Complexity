// Write a function to find the largest element in an array.

//sorting
function largestNumber(number) {
    number.sort((a,b)=>b-a);
    return number[0]
}
console.log(largestNumber([1,2,9,4,5,6]))

function largestNumber(number) {
    let highestvalue=0;
    for (i = 0; i < number.length; i++) {
        if (highestvalue<number[i]) {
            highestvalue=number[i];
        }
    }
    return highestvalue
}
console.log(largestNumber([1,2,9,4,5,6]))