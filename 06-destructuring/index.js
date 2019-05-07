const nums = [1, 2, 3, 4, 5];
const user = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia'
};

function print({ quiet = true, message = '' }) {
  if (!quiet) {
    console.log(message);
  }
}
print({
  quiet: false
});
