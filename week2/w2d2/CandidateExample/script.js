// Example of candidates
const candidateA = {
  id: 15,
  name: "Bob",
};

const candidateB = {
  id: 8,
  name: "Kevin",
};

const candidateC = { name: null };
candidateC.id = 2;

console.log(candidateC);

//add age to the oject
// candidateB.age = 27;
// console.log(candidateB.age);

// Create a function that return the candidate with the smaller id
function compareIds(candidateA, candidateB) {
  if (candidateA.id < candidateB.id) {
    return candidateA;
  }
  return candidateB;
}

// Fidn the selected candidate
const selectedCandidate = compareIds(candidateA, candidateB);
console.log(selectedCandidate);

// Update the HTML element with the name of the selected candidate
const result = document.getElementById("result");
document.getElementById("result").textContent += selectedCandidate.name;
