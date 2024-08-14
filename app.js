const classArray = ["peculia", "christee", "moses", "christopher", "clever"];

console.log(classArray[2]);

const matriks = {
  name: "moses",
  skill: ["developper", "UI/UX", "trading"],
  age: 27,
  phoneNumber: "07010942297",
  isInteligent: true,
  charater: ["friendly", "respectful"],
  skinTone: {
    primary: "blue",
    secondary: "maroon",
  },
};
console.log(matriks.skill[1]);

function calculateNumbers(a, b, sign) {
  let firstNumber = Number(a);
  let secondNumber = Number(b);
  let sum;
  if (sign == "+") {
    sum = firstNumber + secondNumber;
  } else if (sign == "-") {
    sum = firstNumber - secondNumber;
  } else if (sign == "x") {
    sum = firstNumber * secondNumber;
  } else if (sign == "/") {
    sum = firstNumber / secondNumber;
  }
let finalSum= Number(sum.toFixed(2))
  console.log(`${a} ${sign} ${b} = ${finalSum}`);
  return finalSum;
}

calculateNumbers("1",3, "+")
calculateNumbers("1",3, "-")
calculateNumbers("1",3, "x")
calculateNumbers("1",3, "/")
