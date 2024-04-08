// Write a function to calculate the factorial of a number using iteration.

function factorial(value){
    let fact=1;
    for(let i=value;i>0;i--){
        fact=fact*i;
    }
    return fact
}
console.log(factorial(5))