/* 1. If 'a' is even then 'a*b', otherwise 'a+b' */

function calc(a, b) {
	if (a % 2 === 0) {
		return (a * b);
	} else {
		return (a + b);
	}
}
console.log(calc(4, 10));
console.log(calc(7, 23));


/* 2. Determine which quarter the point with coordinates (x, y) 
belongs to */

function coordinates(x, y) {
	if (x < 0 && y < 0) {
		return ('The third quarter');
	};
	if (x > 0 && y > 0) {
		return ('The first quarter');
	};
	if (x < 0 && y > 0) {
		return ('The second quarter');
	};
	if (x > 0 && y < 0) {
		return ('The fourth quarter');
	}
}
console.log(coordinates(-5, -9));
console.log(coordinates(7, 8));
console.log(coordinates(-16, 2));
console.log(coordinates(10, -4));


/* 3. Find the sums of only positives of three numbers */

function sum(a, b, c) {
	let result = 0;
	if (a > 0) {
		result = result + a;
	};
	if (b > 0) {
		result = result + b;
	};
	if (c > 0) {
		result = result + c;
	};
	return result;
}
console.log(sum(-7, 3, 5));


/* 4. Calculate the expression (max (a * b * c, a + b + c)) + 3 */

function maxNum (a, b, c) {
	let mult = a * b * c;
	let sum = a +b +c;

	if (mult > sum) {
		return mult + 3;
	} else {
		return sum + 3;
	}
}
console.log(maxNum(10, 11, 12));


/* 5. Write a program for determining the assessment of a student by his rating, 
based on the following rules */

function assessment(x) {
	if (x <= 19) {
		return ('F');
	};
	if (x >= 20 && x <= 39) {
		return ('E');
	};
	if (x >= 40 && x <= 59) {
		return ('D');
	};
	if (x >= 60 && x <= 74) {
		return ('C');
	};
	if (x >= 75 && x <= 89) {
		return ('B');
	};
	if (x >= 90 && x <= 100) {
		return ('A');
	}
}
console.log(assessment(77));