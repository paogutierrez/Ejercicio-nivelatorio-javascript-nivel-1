let valorProducto = Number(prompt('Ingrese el valor del producto'));

let valorConIva = (valorProducto * 19) /100;

let total = valorProducto + valorConIva

console.log( total);