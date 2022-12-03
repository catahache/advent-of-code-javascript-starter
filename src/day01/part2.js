// Advent of Code - Day 1 - Part Two

export function part2(input) {
  const calories = input.split(/\r?\n/);
  const top = [];
  let elfCalories = 0;

  calories.forEach(calorie => {
    if(calorie !== ''){
      elfCalories += parseInt(calorie,10);
    } else {
      top.push(elfCalories)
      elfCalories = 0;
    }
  })

  top.sort((a,b) => b - a)
  const top3 = top.slice(0, 3);

  return top3.reduce((a, b) => {
    return a + b;
  }, 0);
}
