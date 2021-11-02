/* 1. Find the sum of even numbers 
and their number in the range from 1 to 99 */

let sum = 0;
for (let i = 1; i <= 99; i++) {
	if (i % 2 === 0);
	sum = sum + i;
}
console.log(sum);


/*2. To check whether it is a prime number or not */

let num = 21;
nextPrime:
for (let x = 2; x < num; x++) { 
  for (let y = 2; y < x; y++) { 
    if (x % y === 0) continue nextPrime;
  }
  console.log(x); 
}


/*3. Find the root of a natural number up to an integer 
(consider sequential selection and the binary search method) */

/////


/*4. Calculate the factorial of the number n. n! = 1 * 2 * ... * n-1 * n; */

/////


/*5. Calculate the sum of the digits of a given number */

	function getSumNumber(num) {
    let sum = 0, i;
    while (num) {
        i = num % 10;
        num = (num - i) / 10;
        sum = sum + i;
    }
    return sum;
}
console.log(getSumNumber(7891));

/*6. Print a number that is a mirror image of 
a sequence of digits of a given number, 
for example, the number 123 is given, print 321. */

/////
