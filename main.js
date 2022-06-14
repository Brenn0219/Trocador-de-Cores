const botao = document.getElementById("button");
const span = document.querySelector(".span-color");
const listaCor = ["red", "green", "blue", "yellow", "pink"];

botao.addEventListener("click", () => {
    mudarCorBackground();
})

function mudarCorBackground() {
    const cor = listaCor[numeroAleatorio()];
    document.body.style.backgroundColor = cor;
    span.textContent = listaCor[numeroAleatorio()];
    console.log(numeroAleatorio());
}

function numeroAleatorio() {
    return Math.floor(Math.random() * listaCor.length);
}