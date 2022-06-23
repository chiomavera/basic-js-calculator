//program for a simple calculator that will perform bsic arithmetics.
function calculator() {
  //take operand input
  const num1 = parseFloat(window.prompt("Enter first number: "));
  const num2 = parseFloat(window.prompt("Enter second number: "));

  //take operator input
  const operator = window.prompt("Enter operator (either +, -, * or /): ");

  let result;
  // computation

  switch (operator) {
    case "+":
      result = num1 + num2;
      document.write(`${num1} - ${num2} = ${result}`);
      break;

    case "-":
      result = num1 - num2;
      document.write(`${num1} - ${num2} = ${result}`);
      break;

    case "*":
      result = num1 * num2;
      document.write(`${num1} * ${num2} = ${result}`);
      break;

    case "/":
      result = num1 / num2;
      document.write(`${num1} / ${num2} = ${result}`);
      break;

    // case "%":
    //   result = num1 % num2;
    //   document.write(`${num1} % ${num2} = ${result}`);
    //   break;

    // case "^":
    //   result = num1 ^ num2;
    //   document.write(`${num1} ^ ${num2} = ${result}`);
    //   break;

    default:
      document.write("invalid operator");
      break;
  }
}

calculator();
