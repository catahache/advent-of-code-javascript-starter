// Advent of Code - Day 3 - Part One

export function part1(input) {
  // turn input into array of strings
  // get both parts of each string
  // get matching letter between both parts of each string and push into another array
  // get priority for each letter and replace string in array for number
  // sum and return array

  const rucksacks = input.split(/\r?\n/);
  const compartments = compartmentalize(rucksacks);
  const repeatedLetters = getRepetition(compartments);
  const pioritiesList = []
  repeatedLetters.forEach((letter, i) => {
    pioritiesList.push(alphabetPosition(letter))
  })
  return pioritiesList.reduce((a, b) => {
    return a + b
  }, 0)
}

function compartmentalize(rucksacks) {
  const compartments = [];

  rucksacks.forEach(rucksack => {
    compartments.push({
      first: rucksack.slice(0, rucksack.length / 2),
      second: rucksack.slice(rucksack.length / 2, rucksack.length)
    })
  })

  return compartments;
}

function getRepetition(compartments) {
  const repeatedLetters = []
  compartments.forEach(compartment => {
    for(const letter of compartment.first){
      if(compartment.second.includes(letter)){
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