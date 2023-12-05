const numeroAleatorio = Math.floor(Math.random() * 100) + 1;


alert("¡Bienvenido al juego de adivinar el número!");
alert("Estoy pensando en un número entre 1 y 100. ¿Podes adivinar cuál es?");

let intentos = 10;

while (intentos > 0) {
    const num = prompt(`Introduce un numero (quedan ${intentos} intentos):`);
    
    if (isNaN(num)) {
        alert ("Pone un numero man.")
    }else {
        if (num === numeroAleatorio) {
            alert(`¡Felicidades! Adivinaste el número en ${11 - intentos} intentos.`);
            break;
        } else if (num < numeroAleatorio) {
            alert("No es el numero! Intenta con un numero mas grande");
        } else {
            alert("No es el numero!. Prueba con un numero mas chico.");
        }
        intentos--;
    }

}

if (intentos === 0) {
    alert("¡Ya no te quedan intentos! El número era: "+ numeroAleatorio);
}