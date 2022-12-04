// Advent of Code - Day 4 - Part One

export function part1(input) {
  // turn input into array of objects (section1, section2)
  // complete section1 and section2 with the missins numbers (4-6 is missing the number 5)
  // loop into array of objects and check if section1 is contained by section2 or vice versa
  // if it's contained, sum1 into a sum variable

  let assignments = input.split(/\r?\n/);
  let sections = getSections(assignments);
  sections = getCompleteSections(sections)
  
  return getNumberOfRepetitions(sections)
}

function getSections(assignments) {
  const sections = []
  assignments.forEach(assignment => {
    sections.push({
      section1 : assignment.split(',')[0],
      section2: assignment.split(',')[1],
    })
  })
  return sections
}

function getCompleteSections(sections) {
  sections.forEach(section => {
    section.section1 = section.section1.split('-').map(string => parseInt(string))
    section.section2 = section.section2.split('-').map(string => parseInt(string))
  })
  sections.forEach(section => {
    section.section1 = completeNumbers(section, 'section1');
    section.section2 = completeNumbers(section, 'section2');
  })
  return sections
}

function completeNumbers(section, property) {
  const completeSection = []
  for (let i = section[property][0]; i <= section[property][section[property].length - 1]; i++) {
    completeSection.push(i);
  }
  return completeSection
}

function getNumberOfRepetitions(sections) {
  let sum = 0
  sections.forEach(section => {
    if(isContained(section.section1, section.section2) || isContained(section.section2, section.section1)){
      sum++
    }
  })
  return sum
}

const isContained = (arr, target) => target.every(v => arr.includes(v));