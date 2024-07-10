let score = 40;

if (score >= 60) {
  // false
  console.log("Congrats!");
}

console.log("----------------------------------");

if (score >= 60) {
  console.log("Passed");
} else {
  // otherwise
  console.log("Failed");
}

console.log("----------------------------------");

let number = 100;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

console.log("----------------------------------");

let grade = 85;

let result = "Grade: ";

if (grade >= 90) {
  result += "A";
} else if (grade >= 80) {
  result += "B";
} else if (grade >= 70) {
  result += "C";
} else if (grade >= 60) {
  result += "D";
} else {
  result += "F";
}

console.log(result);

console.log("--------------------------------------------------");

score = 80;

if (score >= 0 && score <= 100) {
  // pass or failed
  if (score >= 60) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
  
} else {
  console.log("Invalid");
}