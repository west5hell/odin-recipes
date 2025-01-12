const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resizeButton");

// const gridSize = 16;

// const totalSquares = gridSize * gridSize;

// for (let i = 0; i < totalSquares; i++) {
//   const square = document.createElement("div");
//   square.classList.add("square");

//   square.addEventListener("mouseover", () => {
//     square.style.backgroundColor = "black";
//   });

//   container.append(square);
// }

function createGrid(size) {
  container.innerHTML = "";
  const totalSquares = size * size;
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
    container.append(square);
  }

  const squareSize = 960 / size;
  document.querySelectorAll(".square").forEach((square) => {
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
  });
}

resizeButton.addEventListener("click", () => {
  let gridSize;
  do {
    gridSize = parseInt(
      prompt("Enter the number of squares per side (max 100):"),
      10
    );
  } while (isNaN(gridSize) || gridSize < 1 || gridSize > 100);
  createGrid(gridSize);
});

createGrid(16);
