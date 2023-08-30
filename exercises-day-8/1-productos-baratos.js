/**
 * Productos Baratos

Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:

    let prods = [
        { nombre: "Arroz", precio: 5 },
        { nombre: "Pan", precio: 3 },
        { nombre: "Tomate", precio: 8 },
        { nombre: "Leche", precio: 15 }
    ];
Nota: No olvide usar console.log() para mostrar los resultados retornados por la función productos.
 */

let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
];

const productosBaratos = (productos) => {
    const cheapProducts = [];
    productos.forEach((producto) => {
        // if (producto.precio >= 5 && producto.precio <= 10) cheapProducts.push(producto.nombre); // Just the name
        if (producto.precio >= 5 && producto.precio <= 10) cheapProducts.push(producto); // All the product
    });

    return cheapProducts;
};

console.log(`Productos Baratos:`);
// productosBaratos(prods).forEach(producto => console.log(producto));
// productosBaratos(prods).forEach((product) => console.log(`Product: ${product.nombre} --- Price: ${product.precio}`));

// Version 2
const productosBaratosII = (productos) => {
    const cheapProducts = [];
    let i = 0;

    while (i < productos.length) {
        productos[i].precio  >= 5 && productos[i].precio <= 10 ? cheapProducts[i] = productos[i].nombre: false;
        i++;
    }

    return cheapProducts;
}

// productosBaratosII(prods).forEach(product => console.log(product));
// console.table(productosBaratos(prods));

// Version 3
const productosBaratosIII = (productos) => productos.map(producto => {if (producto.precio >= 5 && producto.precio <= 10) producto.nombre});
console.log(productosBaratosIII(prods));