// Advent of Code - Day 5 - Part Two

export function part2(input) {
  // parse columns into array
  const arrayInput = input.match(/.{1,4}/g)
  const instructionsArray = input.split('\n\n')[1].split(/\r?\n/);
  const instructions = []

  let parsedInput = []
  let index = 0;
  do {
    parsedInput.push(arrayInput[index])
    index++
  } while (arrayInput[index] !== ' 1  ')
  let stacks = orderStacks(parsedInput)

  instructionsArray.forEach(instruction => {
    let aux = instruction.split(' ')
    instructions.push({
      move: parseInt(aux[1]),
      from: parseInt(aux[3]),
      to: parseInt(aux[5])
    })
  })

  instructions.forEach(instruction => {
      const cratesToMove = stacks[instruction.from].slice(0, instruction.move)
      stacks[instruction.to].splice(0, 0, ...cratesToMove);
      stacks[instruction.from].splice(0, instruction.move) // deletes 
  })

  let answer
  for (let stack in stacks) {
    answer = answer + stacks[stack][0]
  }
  return answer;
}

function orderStacks(input) {
  const stacks = {}
  let stackNumber = 1;
  input.forEach(crate => {
    if (crate !== '   ' && crate !== '    ') {
      if (!stacks[stackNumber]) {
        stacks[stackNumber] = []
      }
      stacks[stackNumber].push(crate)
    }
    stackNumber++;
    if (stackNumber === 10) {
      stackNumber = 1;
    }
  })
  return stacks
}
