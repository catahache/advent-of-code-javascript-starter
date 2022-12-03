// Advent of Code - Day 1 - Part One

export function part1(input) {
  const calories = input.split(/\r?\n/);
  let elfCalories = 0;
  let max = 0;
  calories.forEach(calorie => {
    if(calorie !== ''){
      elfCalories += parseInt(calorie,10);
    } else {
      if(elfCalories > max) {
        max = elfCalories
      }
      elfCalories = 0;
    }
  })
  return max;
}
