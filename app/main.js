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
const Rforc = document.querySelector("Rfor");

function calcAtribOnClick(){
    var forc = document.getElementById("for").value;
    var des = document.getElementById("des").value;
    var con = document.getElementById("con").value;
    var int = document.getElementById("int").value;
    var sab = document.getElementById("sab").value;
    var car = document.getElementById("car").value;

    var atrib = [forc, des, con, int, sab, car];
    

    for (let i = 0; i < 5; i++){
        atrib[i];

        for (let l = 0; l < 1; l++){
            if (atrib[i] == 1){
                
            }
        }
    }
    
}



