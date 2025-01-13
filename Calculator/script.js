function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

let calculator = { lhs: "0", rhs: "0", op: null };

function operate() {
  let numX = parseInt(calculator.lhs);
  let numY = parseInt(calculator.rhs);
  let op = calculator.op;

  let res = 0;

  console.log(numX, numY, op);
  if (op === "+") {
    res = add(numX, numY);
  } else if (op === "-") {
    res = subtract(numX, numY);
  } else if (op === "x") {
    res = multiply(numX, numY);
  } else if (op === "/") {
    if (numY !== 0 && !isNaN(numX)) res = divide(numX, numY);
  } else {
  }
  return res;
}

function pressDigit() {
  let digitsContainer = document.querySelector("#digitsContainer");

  digitsContainer.addEventListener("click", (e) => {
    let val = e.target.innerText;
    if (calculator.op === null) {
      calculator.lhs += val;
    } else {
      calculator.rhs += val;
    }
    console.log(calculator);
  });
}

function pressOperator() {
  let operatorsContainer = document.querySelector("#operatorsContainer");

  operatorsContainer.addEventListener("click", (e) => {
    let val = e.target.innerText;
    if (val === "=") {
      let res = operate();
      let result = document.querySelector("#result");
      result.innerText = res;
      calculator.lhs = res;
      calculator.rhs = "0";
      return;
    }
    calculator.op = val;
  });
}

function pressClear() {
  let clearButton = document.querySelector("#clear");
  let result = document.querySelector("#result");

  clearButton.addEventListener("click", (e) => {
    let val = e.target.innerText;
    calculator = { lhs: "0", rhs: "0", op: null };
    result.innerText = 0;
  });
}

pressDigit();
pressOperator();
pressClear();
