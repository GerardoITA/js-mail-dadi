// Definisco button e access
const myButton = document.getElementById("button");
const myAccess = document.getElementById("access");
// Definisco array contenente email che hanno accesso al "documento"
const myArray = ["pepethefrog@gmail.com", "mario.draghi@libero.it", "pope.francis.1936@vatican.com", "jesuschristnotsuperstar@heaven.srl.com", "LETMEIN@letmein.letmein"]

// Inserisco funzione del bottone
myButton.addEventListener("click",
    function() {
        let myEmail = document.getElementById("email").value;

        console.log(myEmail);

        // Devo trovare il modo di dire che SE l'email è contenuta nella lista ( senza usare include) allora aggiungo 
        // classe granted alla sezione inferiore al div con id access, altrimenti aggiungo classe denied
        for (let i=0; i< myArray.length; i++) {
            let element = myArray[i];

            console.log(element);

            if (myEmail === element) {
                myAccess.classList.add("accessGranted");
            }
            else {
                myAccess.classList.add("accessDenied");
            }
        }
       

    }
)