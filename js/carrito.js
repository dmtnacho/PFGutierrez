var listado = document.getElementById('listado');
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    // Recuperar el carrito desde localStorage
    if (localStorage.getItem('carrito')) {
        const carritoData = localStorage.getItem('carrito');
        carrito = JSON.parse(carritoData);
        console.table(carrito);

        renderizarProds(carrito);
        resumenCarrito();
    }
    else {
        localStorage.setItem('carrito', []);
        resumenCarrito();
    }
});

function renderizarProds(listaProds) {
    while (listado.firstChild) {
        listado.removeChild(listado.firstChild);
    }

    for (const prod of listaProds) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('prods__finish');

        const imagenProducto = document.createElement('img');
        imagenProducto.src = prod.foto;
        imagenProducto.alt = prod.nombre;
        imagenProducto.classList.add('imgrez1');

        const nombreProducto = document.createElement('h3');
        nombreProducto.textContent = prod.nombre;
        nombreProducto.classList.add('nomrez1');

        const precioProducto = document.createElement('p');
        precioProducto.textContent = `€ ${prod.precio.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
        precioProducto.classList.add('valuerez1');

        tarjeta.appendChild(imagenProducto);
        tarjeta.appendChild(nombreProducto);
        tarjeta.appendChild(precioProducto);

        listado.appendChild(tarjeta);
    }
}

function resumenCarrito() {
    const resumenContainer = document.getElementById('total');
    resumenContainer.innerHTML = '';

    // Si el carrito está vacío, mostrar el mensaje "Carrito actualmente vacío"
    if (carrito.length === 0) {
        const mensajeCarritoVacio = document.createElement('p');
        mensajeCarritoVacio.textContent = 'Carrito actualmente vacío';
        resumenContainer.appendChild(mensajeCarritoVacio);
    } else {
        // Inicializar total a 0
        let total = 0;

        // Iterar sobre los productos en el carrito
        for (const prod of carrito) {
            total += prod.precio;
        }

        const totalProducto = document.createElement('p');
        totalProducto.textContent = `Total: € ${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
        resumenContainer.appendChild(totalProducto);
    }
}