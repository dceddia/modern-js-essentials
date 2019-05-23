// an anonymous function, stored in a variable
const printFullName = function(first, last) {
  console.log(first, last);
};

// another named function
function createUser(name, email) {
  return {
    name: name,
    email: email,
    createdAt: Date.now()
  };
}

// a function that does a few things
// (has more than 1 statement before the return)
function sumNumbers(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(getFullName('Dave', 'Ceddia'));
console.log(createUser('Dave', 'dave@example.com'));
printBestBaseballTeam('Yankees');
console.log(sumNumbers([1, 2, 3]));

function notAnArrow() {
  console.log(this);
}

const arrowFun = () => {
  console.log(this);
};


/// A Lesson on `this`

// Start with these:

function printThis() {
  console.log(this);
}

const printThisArrow = () => {
  console.log(this);
}


// JS has a lot of rules around how to determine the value of `this`
// inside a function. For instance, calling the function by name:
printThis();

// gives a different result than if we put the function in an object...
const obj = {
  someProperty: 42,
  printThis: printThis,
  printThisArrow: printThisArrow
}
// and then call it:
obj.printThis();
// because calling with dot notation, whatever.func(), set `this` to
// `whatever`. But, crucially, that decision happens at CALL TIME...
// so if you were to pass that to another function...

function pleaseCall(fn) {
  fn();
}

pleaseCall(obj.printThis)  // not obj!!

// Same if we store it in a variable first
const nope = obj.printThis;
nope();


// With regular functions you can manually set `this` by using the `bind`
// method, which returns a NEW function with a different value for `this`:
const somethingNew = { something: 'new' };
const newPrinter = printThis.bind(somethingNew /* sets this to somethingNew */)
newPrinter(); // logs 'somethingNew'

// And you can use call and apply to influence the value as well
printThis.call({ anotherThing: 'yay' });
printThis.apply({ aThirdOne: 'woohoo' });

// Arrow functions simplify the whole `this` thing a TON
// because inside an arrow function, `this` is ALWAYS the "lexical" value of
// `this`, meaning whatever `this` was in the scope that the arrow was declared
// Since ours is at the top level of the file, `this` is the "module", which
// has no properties on it.
printThisArrow();
printThisArrow.bind(1)();
printThisArrow.call(1);
printThisArrow.apply(1);

// Doesn't matter if we call it with dot notation...
obj.printThisArrow();

// Or pass it around...
pleaseCall(obj.printThisArrow);

// `this` will reliably be whatever it was when the function was declared.



