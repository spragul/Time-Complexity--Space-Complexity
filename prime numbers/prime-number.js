//Explain the concept of prime numbers and write a function to 
//check if a given number is prime.
function checkPrimeNumber(num) {
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true
}
console.log(checkPrimeNumber(7))