const listaHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("button");
const span = document.querySelector(".span-color");

button.addEventListener("click", () => {
    mudarCorBackground();
})

function mudarCorBackground() {
    let background = "#";

    for(let i=0; i<6; i++) {
        background += listaHex[numeroAleatorio()];
    }

    document.body.style.backgroundColor = background;
    span.textContent = background;
}

function numeroAleatorio() {
    return Math.floor(Math.random() * listaHex.length);
}
 