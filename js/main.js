function encender() {
    let luz = document.getElementById("piloto-luz");
    console.log("La función ha sido llamada");

    luz.style.background = "red";
    luz.style.boxShadow = "0px 0px 4px 1px grey";
}