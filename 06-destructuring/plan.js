// Destructuring objects and arrays

// if we had this array of numbers...
const nums = [1, 2, 3, 4, 5];

// and we wanted to pull off the first couple elements,
// we can use destructuring to extract them:

const [a, b] = nums;

// this is exactly the same as:
const a = nums[0];
const b = nums[1];

// you can think of this syntax, with the brackets on the left,
// as saying "i expect that nums is an array; please put the first element in a variable A and the next in variable B"

// and you can combine the ...rest operator with destructuring too:
const [a, b, ...others] = nums;
// now we have an array called others with the remaining numbers

// also note that none of this changes the value of nums!
console.log(nums) // same!

// destructuring works with objects too
const user = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia'
};


// instead of writing this:
const username = user.username;
const firstName = user.firstName;

// you can do it this way:
const { username, firstName } = user;
console.log(username, firstName);

// it says "get the key 'username' and put it in a variable called 'username'"
// you can rename them too, by putting a colon and the new name
const { username: uname, firstName } = user;
console.log(username, firstName);

// you can specify defaults with an = sign if the property
// might be missing
const { fullName = 'MISSING', firstName = 'First' } = user;
console.log(firstName, fullName);

// and ...rest works with objects too
const { username, ...name } = user;
// this is a nice way to "remove" a key from an object,
// like here, now we have `name` without the username
console.log(name);

// and same as with arrays, the original object is not modified
console.log(user)

// if you want to get fancy, you can drill down multiple levels
// with destructuring
const user = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia',
  posts: [
    {id: 1, title: "Best Post Ever"}
  ]
};
// the outer layer is an object...
// pull out the `posts` key,
// and inside that is an array...,
// its first element is an object,
// and that has a title property
const { posts: [{ title }]} = user;

// this gives you a variable called `title`, but does
// NOT give you the `posts`. you only get the deepest keys
// when doing multi-level destructuring
console.log(title);
console.log(posts); // error

// also, you can see how confusing can be to read, so i
// recommend only going one level deep at a time,
// or maybe two
const { posts } = user;
const [ { title } ] = posts;

// React uses destructuring a lot
// hooks: array destructuring
// function component props: object destructuring
// not to get into React here, but, if you do use it,
// i wanted to show how destructuring can be used, and to
// demonstrate that this stuff is not "React" syntax, it's
// actually regular javascript
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
}
