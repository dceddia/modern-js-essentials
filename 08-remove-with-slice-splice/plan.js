const spices = {
  1: { id: 1, name: 'Black Pepper' },
  2: { id: 2, name: 'Turmeric' },
  3: { id: 3, name: 'Cumin' },
  4: { id: 4, name: 'Coriander' },
  5: { id: 5, name: 'Chili Powder' }
};



const items = [1, 2, 3];
const places = [
  { name: 'Boston', pop: 1000000 },
  { name: 'Portland', pop: 1231273812389213 },
  { name: 'Boise', pop: 8 }
];

let foundBoston = false;
for (let i = 0; i < places.length; i++) {
  if (places[i].name === 'Boston') {
    foundBoston = true;
    break;
  }
}

places.forEach(item => {
  if (item.name === 'Boston') {
    foundBoston = true;
    throw 'done';
  }
});

const hasBoston = !!places.find(item => item.name === 'Boston');
console.log(hasBoston);

// Add an item to an array
const newArray = [...items];
const newPlaces = [...places];
const removedItems = newPlaces.splice(2, 1, 'San Fran');
// console.log(places, newPlaces, removedItems);

// Combine 2 arrays

const itemsAndPlaces = [...items, ...places];
const usingConcat = items.concat(places);
console.log(items)  /// doesn't change items

console.log(itemsAndPlaces);

// Copy an array
let copy = items.slice();
copy = [].concat(items);

// Remove an item, beginning or end
