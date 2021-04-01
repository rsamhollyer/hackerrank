/*
You will be given a string of an equation. There will be an 'x' in place of one of the numbers. Return the integer that will make the equation true.
*/

const str1 = "4 - 2 = x";
// Should return 2
const str2 = "1x0 * 12 = 1200";
// Should return 0
const str3 = "30 + 333 = x63";
// Should return 3

const missingDigit = (str) => {
	const split = str.split(" ");
	const cache = {
		num1: split[0],
		operator: split[1],
		num2: split[2],
		equals: split[3],
		answer: split[4],
	};
	let theXKey;

	// IntendedOperator used to find the reverse operation in the case the x is location in num1 or num2
	let intendedOperator;
	if (cache.operator === "*") {
		intendedOperator = "/";
	} else if (cache.operator === "/") {
		intendedOperator = "*";
	} else if (cache.operator === "+") {
		intendedOperator = "-";
	} else if (cache.operator === "-") {
		intendedOperator = "+";
	}

	// theXKey is to signify where the value 'x' is located.
	// This feels like it's O(n^2). I could make it O(n) if I made 3 if statements, one for cache.answer, cache.num1, cache.num2.
	for (i in cache) {
		if (cache[i].includes("x")) {
			theXKey = i;
		}
	}

	let answer;
	let fullAnswer;
	let intendedAnswer;

	// theXKey can only be in one of three places in the cache. num1, num2, or answer. The result of the fullAnswer and intendedAnswer is dependent on what theXKey is.
	// Intended answer is found either by straight evaluation (if key is answer) or by reverse evaluation. ([answer], [operator], [number that doesn't contain x]).
	if (theXKey === "answer") {
		fullAnswer = cache.answer;
		intendedAnswer = eval(`${cache.num1} ${cache.operator} ${cache.num2}`);
	} else if (theXKey === "num1") {
		if (cache.num1.length > 1) {
			fullAnswer = cache.num1;
		}
		intendedAnswer = eval(
			`${cache.answer} ${intendedOperator} ${cache.num2}`
		);
	} else if (theXKey === "num2") {
		if (cache.num2.length > 1) {
			fullAnswer = cache.num2;
		}
		intendedAnswer = eval(
			`${cache.answer} ${intendedOperator} ${cache.num1}`
		);
	}

	// intended answer is returned as an integer because of eval(). We need to turn it to a string to do the next part.
	intendedAnswer = intendedAnswer.toString();

	// fullAnswer and intendedAnswer should be the exact same. Here we need to loop over the string to find where the x is located in the fullAnswer. Once it's found, the answer itself should be located in the same index of intendedAnswer.
	for (i in fullAnswer) {
		if (fullAnswer[i] === "x") {
			answer = intendedAnswer[i];
		}
	}

	// Now we just turn it back to a number and return it.
	return Number(answer);
};

console.log(missingDigit(str1));
console.log(missingDigit(str2));
console.log(missingDigit(str3));
