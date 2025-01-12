console.log("Etch-a-Sketch");

window.onload = () => {
  let container = document.querySelector("#container");

  //   let p = document.createElement("p");
  //   p.innerHTML = "I am a paragraph";
  //   container.append(p);

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      let div = document.createElement("div");
      div.innerHTML = `i = ${i}, j = ${j}`;
      container.append(div);
    }
  }
};
