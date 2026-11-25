let difficulty, range, x, y, z1, z2, a, b, operation

let excludedNumbers = [7, 11,13]

difficulty = "medium"
operation = "subtraction"

switch(difficulty){
  case "easy":
    range = 15
    break
  case "normal":
    range = 15
    break
  case "medium":
    range = 10
    break
  case "hard":
    range = 10
    break
  case "veryHard":
    range = 15
    break
}

function getNumber(range){
  let number = Math.floor(Math.random() * range + 1)
  return number
}
function getExcercise(){
  console.log(operation)
  if (difficulty == "normal" || difficulty == "hard" || difficulty == "veryHard"){
    a = getNumber(range)
    b = getNumber(range)
    while(operation == "subtraction" && b > a){
      a = getNumber(range)
      b = getNumber(range)
    }
  }
  z1 = getNumber(range)
  z2 = getNumber(range)
  if (difficulty == "easy" || difficulty == "normal") {
    while (z1 <= 2) z1 = getNumber(range)
    z2 = z1
  } else {
    while (
      z1 == z2 ||
      z1 == 1 || 
      z2 == 1||
      (difficulty == "medium" && (z1 || z2) <= 2) ||
      difficulty == "veryHard" && (excludedNumbers.includes(z1) || excludedNumbers.includes(z2))
     ){
      console.log("git")
      z1 = getNumber(range)
      z2 = getNumber(range)
    }
  }  
  console.log("gites")
  x = getNumber(range)
  y = getNumber(range)
  while (
    (x >= z1) || (y >= z2) ||
    (operation == "subtraction" && ((a*z1+x)*z2 == (b*z2+y)*z1) )||
    difficulty == "easy" && (
      (operation == "addition" && x + y >= z1) || 
      (operation == "subtraction" && x - y <= 0)
    ) || difficulty == "normal" && (
      operation == "subtraction" && ( (a*z1 + x)*z2 - (b*z2 + y)*z1 <= 0 )
    ) || difficulty == "medium" && (
      (operation == "addition" && x*z2 + y*z1 >= z1*z2) ||
      (operation == "subtraction" && x*z2 - y*z1 <= 0)
    ) || (difficulty == "hard" || difficulty == "veryHard") && (
      (operation == "subtraction" && ((a*z1+x)*z2 - (b*z2+y)*z1) <= 0)
    )){
      console.log(`${a} i ${x}/${z1} oraz ${b} i ${y}/${z2} `)
      x = getNumber(range)
      y = getNumber(range)
    }
    console.log(`${a} i ${x}/${z1} oraz ${b} i ${y}/${z2} `)
} 
getExcercise()