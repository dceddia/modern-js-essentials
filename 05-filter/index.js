const spices = [
  { id: 1, name: 'Black Pepper' },
  { id: 2, name: 'Turmeric' },
  { id: 3, name: 'Cumin' },
  { id: 4, name: 'Coriander' },
  { id: 5, name: 'Chili Powder' }
];

// starting at index 3, delete 1 item
spices.splice(3, 1);
console.log(spices);

// then, try the functional form using filter:
const deleteId = 4;
const newSpices = spices.filter(spice => {
  return spice.id !== 4;
});
console.log(newSpices);
console.log(spices === newSpices);

// spices starting with C
const c = spices.filter(item => item.name.startsWith('C'));
console.log(c);
