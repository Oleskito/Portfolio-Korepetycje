let difficulty, range, x, y, z1, z2, a, b, operation

let excludedNumbers = [7, 11,13]

difficulty = "easy"
operation = "addition"

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
      (difficulty == "medium" && (z1 <= 2 || z2 <= 2) ) ||
      difficulty == "veryHard" && (excludedNumbers.includes(z1) || excludedNumbers.includes(z2))
     ){
      z1 = getNumber(range)
      z2 = getNumber(range)
    }
  }  
  let xRange = z1 - 1
  let yRange = z2 - 1
  x = getNumber(xRange)
  y = getNumber(yRange)
  while (
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
      x = getNumber(xRange)
      y = getNumber(yRange)
    }
    console.log(`${a} i ${x}/${z1} oraz ${b} i ${y}/${z2} `)
    let drawnNumbers = [a, x, z1, b, y, z2]
    getResult(drawnNumbers)
  } 
  if (!a) a = 0
  if (!b) b = 0

function getResult(drawnNumbers){
  let firstWholePart, firstNumerator, firstDenominator;
  let secondWholePart, secondNumerator, secondDenominator;
  let WholePartResult, NumeratorResult, DenominatorResult;
  firstWholePart = drawnNumbers[0];
  firstNumerator = drawnNumbers[1];
  firstDenominator = drawnNumbers[2];
  secondWholePart = drawnNumbers[3];
  secondNumerator = drawnNumbers[4];
  secondDenominator = drawnNumbers[5];
  //console.log(firstWholePart, firstNumerator,firstDenominator,secondWholePart,secondNumerator,secondDenominator)
  if (operation == "addition") {
    NumeratorResult = (
    (firstWholePart*firstDenominator+firstNumerator)*secondDenominator +
    (secondWholePart*secondDenominator+secondNumerator)*firstDenominator
    )
    DenominatorResult = firstDenominator*secondDenominator
  }
  else if(operation == "subtraction") {
    NumeratorResult = (
    (firstWholePart*firstDenominator+firstNumerator)*secondDenominator -
    (secondWholePart*secondDenominator+secondNumerator)*firstDenominator
    )
    DenominatorResult =firstDenominator*secondDenominator
  }
  WholePartResult = Math.floor(NumeratorResult / DenominatorResult)
  NumeratorResult = NumeratorResult % DenominatorResult

  if (NumeratorResult==0) DenominatorResult = 0
  else {
    for (let i = NumeratorResult; i>1; i--){
      if(NumeratorResult % i == 0 && DenominatorResult % i == 0){
        NumeratorResult = NumeratorResult / i;
        DenominatorResult = DenominatorResult / i;
        break;
      }
    }
  }
  console.log(WholePartResult, NumeratorResult, DenominatorResult)
}

document.getElementById("przycisk_start").onclick =  function startGame(){
    document.getElementById("przycisk_stop").style.display = "inline"
    document.getElementById("przycisk_start").style.display = "none"
    Array.from(document.getElementsByClassName("tryb_gry")).forEach((element) =>{
      element.style.display = "none"
    })
    document.getElementById("blok_wyswietlone_zadanie").style.display = "inline"
    document.getElementById("pole_odpowiedzi").focus();
}


function stopGame(){
      document.getElementById("przycisk_stop").style.display = "none"
      document.getElementById("przycisk_start").style.display = "inline"
      Array.from(document.getElementsByClassName("tryb_gry")).forEach((element) =>{
        element.style.display = "inline"
      })
      document.getElementById("blok_wyswietlone_zadanie").style.display = "none"

}
// W sprawdzeniu gdy osoba wpisze ułamek nieskrócony - 
// powiadom go o tym ale zaakceptuj odpowiedź
// możemy to osiągnąć w taki sposób:
// 1. pobieramy input
// 2. jesli input === nasz poprawny wynik : "idealny wynik"
// 3. jesli nie :
// a) wspólny mianownik wpisanego wyniku i poprawnego wyniku
// b) porównujemy licznik inputa i licznik poprawnego wyniku
// c) jeśli jest taki sam : "wynik nieskrócony jednak prawidłowy"
getExcercise()