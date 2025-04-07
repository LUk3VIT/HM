const som = document.querySelector("#addVida");
const sub = document.querySelector("#subVida");
const vida = document.querySelector("#vida");

som.addEventListener("click", (evento) => {
    vida.value = parseInt(vida.value) + 1;
});

sub.addEventListener("click", (evento) => {
    vida.value = parseInt(vida.value) - 1;
});

const calcAtrib = document.querySelector("calcAtrib");

function calcAtribOnClick(){
    const forc = document.getElementById("for").value;
    const des = document.getElementById("des").value;
    const con = document.getElementById("con").value;
    const int = document.getElementById("int").value;
    const sab = document.getElementById("sab").value;
    const car = document.getElementById("car").value;

    let Rforc = document.getElementById("Rfor");
    let Rdes = document.getElementById("Rdes");
    let Rcon = document.getElementById("Rcon");
    let Rint = document.getElementById("Rint");
    let Rsab = document.getElementById("Rsab");
    let Rcar = document.getElementById("Rcar");

    const atrib = [forc, des, con, int, sab, car];
    const Ratrib = [Rforc, Rdes, Rcon, Rint, Rsab, Rcar]

    for (let i = 0; i < 6; i++){
        atrib[i];
        Ratrib[i]

        for (let l = 0; l < 1; l++){
            if (atrib[i] == 1){
               Ratrib[i].innerHTML = "-5";
            } else if (atrib[i] == 2 || atrib[i] == 3){
                Ratrib[i].innerHTML = "-4"
            } else if (atrib[i] == 4 || atrib[i] == 5){
                Ratrib[i].innerHTML = "-3"
            } else if (atrib[i] == 6 || atrib[i] == 7){
                Ratrib[i].innerHTML = "-2"
            } else if (atrib[i] == 8 || atrib[i] == 9){
                Ratrib[i].innerHTML = "-1"
            } else if (atrib[i] == 10 || atrib[i] == 11){
                Ratrib[i].innerHTML = "0"
            } else if (atrib[i] == 12 || atrib[i] == 13){
                Ratrib[i].innerHTML = "+1"
            } else if (atrib[i] == 14 || atrib[i] == 15){
                Ratrib[i].innerHTML = "+2"
            } else if (atrib[i] == 16 || atrib[i] == 17){
                Ratrib[i].innerHTML = "+3"
            } else if (atrib[i] == 18 || atrib[i] == 19){
                Ratrib[i].innerHTML = "+4"
            } else if (atrib[i] == 20 || atrib[i] == 21){
                Ratrib[i].innerHTML = "+5"
            } else if (atrib[i] == 22 || atrib[i] == 23){
                Ratrib[i].innerHTML = "+6"
            } else if (atrib[i] == 24 || atrib[i] == 25){
                Ratrib[i].innerHTML = "+7"
            } else if (atrib[i] == 26 || atrib[i] == 27){
                Ratrib[i].innerHTML = "+8"
            } else if (atrib[i] == 28 || atrib[i] == 29){
                Ratrib[i].innerHTML = "+9"
            } else if (atrib[i] == 30){
                Ratrib[i].innerHTML = "+10"
            } else {
                Ratrib[i].innerHTML = "0"
            }
        }
    }

    console.log(Ratrib)
    
}




