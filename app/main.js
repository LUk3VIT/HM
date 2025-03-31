const som = document.querySelector("#addVida");
const sub = document.querySelector("#subVida");
const vida = document.querySelector("#vida");

som.addEventListener("click", (evento) => {
    vida.value = parseInt(vida.value) + 1;
});

sub.addEventListener("click", (evento) => {
    vida.value = parseInt(vida.value) - 1;
});

const calcAtrib = document.querySelector("#calcAtrib");
const forc = document.getElementById("#for");
const Rforc = document.querySelector("#Rfor");



