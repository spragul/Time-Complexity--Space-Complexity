// Write a function to find the nth Fibonacci number using iteration.
function fibonacciNumber(value){
   let previous=0;
   let current=1;
  for(let i=2;i<value;i++){
      previous=current;
      current=previous+current;
  }
  return current
}
console.log(fibonacciNumber(5))