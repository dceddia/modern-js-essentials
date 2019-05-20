// a plain old named function
function makeFullName(first, last) {
  return first + ' ' + last;
}

const printFullName = function(first, last) {
  console.log(first, last);
};

// another named function
function createUser(name, email) {
  return {
    name,
    email,
    createdAt: Date.now()
  };
}

console.log(createUser('Dave', 'dave@example.com'));
printFullName('A', 'B');
console.log(makeFullName('Dave', 'Ceddia'));

function notAnArrow() {
  console.log(this);
}

const arrowFun = () => {
  console.log(this);
};

notAnArrow();
arrowFun();
