const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'


const judgeVegetable = (vegetables, metric) => {
  // Code here!
  let mostRedPlump = 0;
  let winner = '';
  for (let vegetable of vegetables) {
    if (vegetable[metric] > mostRedPlump) {
      winner = vegetable['submitter'];
      mostRedPlump = vegetable[metric];
    }
  }
  return winner;
}

console.log(judgeVegetable(vegetables, metric));

testing
