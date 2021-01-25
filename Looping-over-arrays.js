const amounts = [61.00, 52.25, 112.99, 5.00];
// the veriable amount will equal what ever value is in the array during the looop
let total = 0;
for (let amount of amounts) {
  total += amount;
}

console.log('Order total is: ', total);


console.log('i', ' like', ' coding');
//seems that you can replace + with , when concantenating strings...