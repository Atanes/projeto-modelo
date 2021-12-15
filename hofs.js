const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Plum'];

const total = fruits.reduce((t, e) => t + e.length, 0);
console.log(total);

const data = [
  { object: '🧰', worker: '👨‍🔧', expertise: 1 },
  { object: '✈️', worker: '👨‍✈️', expertise: 7 },
  { object: '🍳', worker: '👩‍🍳', expertise: 10 }
];

console.log(data.sort((a, b) => b.expertise - a.expertise));