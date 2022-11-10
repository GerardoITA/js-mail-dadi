// Definisco pulsante

const pulsante = document.getElementById("button")
/* const contenitoreDado = document.getElementById("myroll")
const contenitorePcDado = document.getElementById("pcroll")
const contenitoreVincitore = document.getElementById("winner") */

// Creo azione di roll

pulsante.addEventListener("click",
    function(){
        let mioDado = Math.floor(Math.random()* 6 + 1);
        document.getElementById("myroll").innerHTML = mioDado;

        let PcDado = Math.floor(Math.random() * 6 + 1);
        document.getElementById("pcroll").innerHTML = PcDado;

        if ((mioDado) > (PcDado)) {
            document.getElementById("winner").innerHTML = "You";
        }
        else if ((mioDado) < (PcDado) ) {
            document.getElementById("winner").innerHTML = "BOT";
        }
        else  {
            document.getElementById("winner").innerHTML = "Even";
        }
    } 

)