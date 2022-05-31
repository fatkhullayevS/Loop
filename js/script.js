// const calcNum = birthYear => + birthYear;

// const number = [1 + 3 + 5 + 9];

// const calcNumbers = function(numbersArr){
//   const calc = []

//   for(let num of numbersArr){
//     // calc.push(calcNum(num))
//   }

//   return calc
// }

// console.log(calcNumbers(number));
const elResult = document.querySelector("Result")

const number = [1, 3, 5, 9];

const calcNUm = function(numArr){
  var collected = 0;

  for(let num of number){
    collected += num;
  }

  return collected;
}

console.log(calcNUm(number));