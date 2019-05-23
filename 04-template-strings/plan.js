// Template Strings a.k.a. String Interpolation

// Start with this:
const firstName = 'Dave';
const lastName = 'Ceddia';
const usesReact = true;

// To join these together, we could concat them:
const fullName = firstName + ' ' + lastName;

// For a long time we've had single and double quotes for strings,
// which are interchangeable.

// But ES6 added template strings, using the backtick,
// where you can insert JS expressions inside dollar-curly-braces.
// It evaluates the expression and puts the value in the string:
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// Since the stuff in the braces can be ANY JS expression,
// you can do things like boolean logic:
const summary = `${fullName} ${(usesReact && 'uses React!') ||
  "doesn't use React"}`;

// or use the ternary operator
const summary = `${fullName} ${
  usesReact ? 'uses React!' : "doesn't use React"
}`;
console.log(summary);

// or call a function
const add = (a, b) => a + b;

const answer = `The answer is ${add(40, 2)}`;
console.log(answer);

// or, heck, print out the function itself
const answer = `The answer is ${add}`;

// or even define one inline...
const answer = `The answer is ${(a, b) => a + b}`;

// and call it!
const answer = `The answer is ${((a, b) => a + b)(40, 2)}`;

// not that you should ever write code like that, but I wanted to prove that
// any valid JS expression can go inside those braces.
