const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let w = 0;
while (w < ingredients.length) {
  console.log(ingredients[w]);
  w++;
}
console.log('');
// Write a for loop that prints out the contents of ingredients:
for (let f = 0; f < ingredients.length; f++) {
  console.log(ingredients[f]);
}
console.log('');
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let a = ingredients.length; a > -1; a--) {
  console.log(ingredients[a]);
}