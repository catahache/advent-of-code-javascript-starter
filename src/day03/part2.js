// Advent of Code - Day 3 - Part Two

export function part2(input) {
  // turn input into array of strings
  // get both parts of each string
  // arrange in groups of three objects (rucksacks)
  // get matching letter between three objects (6 compartments)
  // get priority of each matching letter
  // sum all priorities

  const rucksacks = input.split(/\r?\n/);
  const groups = group(rucksacks)
  const repeatedLetters = getRepetition(groups);
  const pioritiesList = []
  repeatedLetters.forEach(letter => {
    pioritiesList.push(alphabetPosition(letter))
  })
  return pioritiesList.reduce((a, b) => {
    return a + b
  }, 0)}

function group(rucksacks) {
  const groups = []
  let group = []

  for (let i = 0; i < 3; i++) {
    group.push(rucksacks[0])
    rucksacks.splice(0, 1)
    if (i === 2) {
      groups.push(group);
      group = [];
      i = -1;
    }
    if(rucksacks.length === 0){
      i = 3
    }
  }

  return groups;
}

function getRepetition(groups) {
  const repeatedLetters = []
  groups.forEach(group => {
    for(const letter of group[0]){
      if(group[1].includes(letter) && group[2].includes(letter)){
        repeatedLetters.push(letter)
        return
      }
    }
  })
  return repeatedLetters
}

function alphabetPosition(text) {
  if (text === text.toLowerCase()){
    return text.charCodeAt(0) - 96
  } else {
    return text.charCodeAt(0) - 38
  }
}