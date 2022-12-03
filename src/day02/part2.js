// Advent of Code - Day 2 - Part Two

const rules = {
  A: {
    points: 1,
    win: 'C', // To win with A, the other one should choose
    lose: 'B', // To lose with A, the other one should choose
    draw: 'A'
  },
  B: {
    points: 2,
    win: 'A',
    lose: 'C',
    draw: 'B'
  },
  C: {
    points: 3,
    win: 'B',
    lose: 'A',
    draw: 'C'
  },
}

const score = {
  Z: 6, //win
  Y: 3, //draw
  X: 0 //lose
}

export function part2(input) {
  let matchs = input.split(/\r?\n/).map(match => { return { enemy: match.charAt(0), action: match.charAt(2) } })
  let myScore = 0;

  matchs.forEach((match, i) => {
    const result = getResults(match, i);
    myScore += result.myScore
  })

  return myScore;
}

function getResults(match, i) {
  const results = {}
  const enemyChoice = rules[match.enemy];
  let myChoise;

  if (match.action === 'Z') {
    myChoise = enemyChoice.lose // I win
  } else if (match.action === 'Y') {
    myChoise = enemyChoice.draw // We draw
  } else if (match.action === 'X') {
    myChoise = enemyChoice.win // I lose
  }
  results.myScore = rules[myChoise].points + score[match.action];
  return results
}

