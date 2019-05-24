// Rest & Spread operators
// 2 names for three dots that look the same

// Rest to accept infinite args
function printArgs(...args) {
  console.log(args);
}
printArgs(1, 2, 3); // prints an array of all 3

// If we change it to accept a few named arguments first
function printArgs(first, second, ...args) {
  console.log(first, second, args);
}
printArgs(1, 2, 3); // prints 1 2 [3]
// notice it prints 1, 2, and then an array with [3]

// The ...args will ALWAYS be an array
// even if there are no extra args
printArgs(1, 2); /// prints 1 2 []

// ...rest is GREEDY and gobbles up every argument it can,
// so it has to be the LAST parameter.
// If you put it anywhere else, you'll get an error
function printArgs(...args, a, b) { // fail
  console.log(args);
}


// The Spread operator looks exactly like the Rest operator
// just 3 dots
// but the difference is that Spread explodes things in place,
// whereas Rest combines things together
// If we have this array of numbers...
const numbers = [1, 2, 3, 4, 5, 7];
printArgs(...numbers);

// Start here:

// Spread to explode an array or object in place
const nums = [1, 2, 3, 4];
const user = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia'
};

// If we wanted to print out each number in the array,
// we could write it out longhand like this...
console.log(nums[0], nums[1], nums[2], nums[3]);

// Or we can use the Spread operator to explode the array
// of numbers in place:
console.log(...nums);

// We can also use the Spread operator on objects:
console.log({
  // here we're creating a new object,
  // then exploding the user object in place
  ...user,
  // and adding a new property called fullName
  fullName: `${user.firstName} ${user.lastName}`
});

// this is exactly the same as if we'd written:
console.log({
  username: user.username,
  firstName: user.firstName,
  lastName: user.lastName,
  fullName: `${user.firstName} ${user.lastName}`
});

// important to note that the order matters --
// this would set a default firstName, and if the user
// didn't have one, it would be 'Default'
console.log({
  firstName: 'Default',
  ...user,
  fullName: `${user.firstName} ${user.lastName}`
});

// You can combine the rest and spread operators to
// forward arguments between two functions, like if you
// wanted a `debug` function that was like console.log
// but only logged when a global DEBUG flag is true

const DEBUG = true;

const debug = (...args) => {
  if(DEBUG) {
    console.log(...args);
  }
}

debug('this', 'works', 'great');
// then set DEBUG false
// no more printing
