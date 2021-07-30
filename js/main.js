let ingresarNumero = parseInt(prompt("Ingresar número"));
for (let i = 1; i <= 100; i++) {
    let resultado = ingresarNumero + i;
    console.log(ingresarNumero + " + " + i + " = " + resultado);
}

let entrada = prompt("Ingrese un dato");
while (entrada != "ESC") {
    alert("Usted escribió " + entrada);
    entrada = prompt("ingresar otro dato");
}

let dato = parseInt(prompt("Ingresar un número entre 1 y 5"));
while (dato != "ESC") {
    switch (dato) {
        case 1:
            alert("HOLA");
            break;
        case 2:
            alert("HOLA HOLA");
            break;
        case 3:
            alert("HOLA HOLA HOLA")
            break;
        case 4:
            alert("HOLA HOLA HOLA HOLA")
            break;
        case 5:
            alert("HOLA HOLA HOLA HOLA HOLA")
            break;
        default:
            alert("El número ingresado es incorrecto.")
            break;
    }
    dato = prompt("Ingresar un número entre 1 y 5 por favor. O escriba ESC para continuar.");
}
