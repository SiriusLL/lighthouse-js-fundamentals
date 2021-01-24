const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

if (!raining) {
  console.log('leave your umbrella at home!');
}

console.log("Now you're ready to go outside!");

//###################################################

const temperature = 50;

if (temperature < 0 && temperature >= -40) {
  console.log("make sure you pick out a scarf!");
} else if (temperature < 15 && temperature >= 0) {
  console.log("Short sleeves won\'t cut it!");
} else if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn\'t such a great idea");
} else {
  console.log("short sleeves are fine.");
}

console.log("Now you\'re ready to go outside!");

//###################################################

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("you are eligible to vote.");
};



