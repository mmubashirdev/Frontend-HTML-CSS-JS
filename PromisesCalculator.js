let num1 = Number(prompt("Enter a first number: "));
let oper = prompt("Enter the operator +,-,*,/: ");
let num2 = Number(prompt("Enter a second number: "));

function calculator(num1, num2, oper) {
  return new Promise((resolve, reject) => {
    let result = 0;
    if (typeof num1 === "number" && typeof num2 === "number") {
      switch (oper) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (num2 == 0) {
            return reject("Cant't divie by zero");
          } else {
            result = num1 / num2;
          }
          break;
        default:
          return reject("Invalid operation");
        }
    } else{
      return reject("Enter the number not the words");
      }
      resolve(result);
  })
};

calculator(num1, num2, oper)
  .then((result) => {
    console.log(`Result of ${num1} ${oper} ${num2} is: ${result}`);
    return result;
  })
  .then((result) => {
    if (result < 0) {
      console.log("The number is negative");
    }else if(result < 100){
      console.log("The result is moderate");
    }else{
      console.log("Wow, that's a large result");
    }
  })
  .catch((msg) => {
    console.log(msg);
  })
  .finally(() => {
    console.log("Done");
  });

