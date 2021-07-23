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

// //CLASE 4 trabajo complementario
// //calculo de iva e ingresos brutos
// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// let precioProducto = parseInt(prompt("Cuanto sale su producto sin impuestos"));
// const iva = x => x * 0.21;
// const precioDescuento = precioProducto * 0.2;
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
// let ingresosBrutos = x => x * 0.03;
// let precioFinal = suma(nuevoPrecio, ingresosBrutos(precioProducto));
// console.log("Usted pagará de IVA $" + iva(precioProducto));
// console.log("Usted tiene un descuento de $" + precioDescuento);
// console.log("El monto a pagar por Ingresos Brutos es de $" + ingresosBrutos(precioProducto));
// console.log("El precio final es $" + precioFinal);

// // //saber si es multiplo
// const multiplos = (a, b) => a % b;
// var numero = parseInt(prompt("ingrese número"));
// var multiplo = parseInt(prompt("Ingrese un número para saber si es multiplo"));
// let resultado = multiplos(numero, multiplo);
// if (resultado == 0) {
//     alert(numero + " es multiplo de " + multiplo)
// } else {
//     alert(numero + " no es multiplo de " + multiplo)
// }