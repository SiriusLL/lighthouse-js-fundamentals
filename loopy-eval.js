for (let n = 1; n <= 100; n++) {
  if (n % 3 === 0 && n % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (n % 3 === 0) {
    console.log('Loopy');
  } else if (n % 5 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(n + 99);
  }
}