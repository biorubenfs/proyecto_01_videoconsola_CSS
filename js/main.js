let isOn = false;

// Función que enciende y apaga la consola. Tiene consecuencias en la luz del botón de battery, hace aparecer el logo de nintendo y reproduce el sonido clásico de inicio
function encender() {
    let luz = document.getElementById("piloto-luz");
    let logo = document.getElementById("logo");

    let sonido = document.getElementById("sonido");

    if (!isOn) {
        console.log("Encendiendo la consola...");

        luz.style.background = "red";
        luz.style.boxShadow = "0px 0px 4px 1px grey";

        logo.style.display = "block";

        sonido.play();

        isOn = true;
    }
    else {
        console.log("Apagando la consola");

        luz.style.background = "maroon";
        luz.style.boxShadow = "none";

        logo.style.display = "none";

        isOn = false;
    }

}