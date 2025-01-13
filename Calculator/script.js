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

let numX = 0,
  numY = 0,
  op = "";

let Calculator = {
  numX: 0,
  numY: 0,
  op: "",
  add: () => numX + numY,
};

function operate(numX, numY, op) {
  if (op === "+") {
    add(numX, numY);
  } else if (op === "-") {
    subtract(numX, numY);
  } else if (op === "*") {
    multiply(numX, numY);
  } else if (op === "/") {
    if (numY !== 0 && !isNaN(numX)) divide(numX, numY);
  } else {
  }
}

function pressDigit() {
  let digitsContainer = document.querySelector("#digitsContainer");

  digitsContainer.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  });
}

function pressOperator() {
  let operatorsContainer = document.querySelector("#operatorsContainer");

  operatorsContainer.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === "=") {
      operate();
      return;
    }
  });
}

function pressClear() {
  let clearButton = document.querySelector("#clear");

  clearButton.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  });
}

pressDigit();
pressOperator();
pressClear();
