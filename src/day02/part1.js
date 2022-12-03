// Advent of Code - Day 2 - Part One

const rules = {
  A: {
    points: 1,
    win: 'Z', // To win with A, the other one should choose
    lose: 'Y', // To lose with A, the other one should choose
    draw: 'X'
  },
  B: {
    points: 2,
    win: 'X',
    lose: 'Z',
    draw: 'Y'
  },
  C: {
    points: 3,
    win: 'Y',
    lose: 'X',
    draw: 'Z'
  },
  X: {
    points: 1,
    win: 'C',
    lose: 'B',
    draw: 'A'
  },
  Y: {
    points: 2,
    win: 'A',
    lose: 'C',
    draw: 'B'
  },
  Z: {
    points: 3,
    win: 'B',
    lose: 'A',
    draw: 'C'
  },
}

const score = {
  win: 6,
  draw: 3,
  lose: 0
}

export function part1(input) {
  let matchs = input.split(/\r?\n/).map(match => { return { enemy: match.charAt(0), me: match.charAt(2) } })
  let myScore = 0;
  matchs.forEach(match => {
    const result = getResults(match);
    myScore += result.myPoints
  })
  return myScore;
}

function getResults(match) {
  const results = {}
  const enemyChoice = rules[match.enemy];
  const myChoice = rules[match.me];
  
  if(enemyChoice.win === match.me){
    //enemy wins
    results.win = 'enemy'
    results.enemyPoints = enemyChoice.points + score.win;
    results.myPoints = myChoice.points + score.lose;
  } else if(enemyChoice.lose === match.me){
    //enemy loses
    results.win = 'me'
    results.enemyPoints = enemyChoice.points + score.lose;
    results.myPoints = myChoice.points + score.win;
  } else if(enemyChoice.draw === match.me){
    //we draw
    results.win = 'none'
    results.enemyPoints = enemyChoice.points + score.draw;
    results.myPoints = myChoice.points + score.draw;
  }

  return results
}
