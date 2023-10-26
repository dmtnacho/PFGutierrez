let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    // Recuperar el carrito desde localStorage
    if (localStorage.getItem('carrito')){
        const carritoData = localStorage.getItem('carrito');
        carrito = JSON.parse(carritoData);
        console.table(carrito);

        renderizarProds(carrito);
    }
    else{
        localStorage.setItem('carrito', []);
    }
});

const listado = document.getElementById('listado');
renderizarProds(products);

function renderizarProds(listaProds) {
    for (const prod of listaProds) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('block__product');

        const imagenProducto = document.createElement('img');
        imagenProducto.src = prod.foto;
        imagenProducto.alt = prod.nombre;
        imagenProducto.addEventListener('click', () => {
            agregarCarrito(prod);
        });

        const nombreProducto = document.createElement('h3');
        nombreProducto.textContent = prod.nombre;

        const precioProducto = document.createElement('p');
        precioProducto.textContent = `€ ${prod.precio.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;


        tarjeta.appendChild(imagenProducto);
        tarjeta.appendChild(nombreProducto);
        tarjeta.appendChild(precioProducto);

        listado.appendChild(tarjeta);
    }
}

function agregarCarrito(producto) {
    carrito.push(producto);
    console.table(carrito);
    Toastify({
        text: (`¡${producto.nombre} se agrego al carrito exitosamente!`),
        duration: 3000
    }).showToast();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


















// // Función para agregar un producto al carrito
// function agregarAlCarrito(products) {
//     // Obtén el cuerpo de la tabla del carrito
//     var carritoBody = document.getElementById('carrito-body');

//     // Crea una nueva fila para el producto
//     var fila = document.createElement('tr');

//     // Llena la fila con la información del producto
//     fila.innerHTML = `
//         <td>
//             <div class="cart-info">
//                 <img src="${prod.foto}" alt="${prod.nombre}">
//                 <div>
//                     <p>${prod.nombre}</p>
//                     <small>Price: $${prod.precio}</small>
//                 </div>
//             </div>
//         </td>
//         <td><input type="number" value="1"></td>
//         <td>$${prod.precio}</td>
//         <td><a href="#" class="remove-link">Remove</a></td>
//     `;

//     // Agrega la fila al cuerpo de la tabla
//     carritoBody.appendChild(fila);

//     // Agrega un manejador de eventos al enlace de eliminación para eliminar productos del carrito
//     var removeLink = fila.querySelector('.remove-link');
//     removeLink.addEventListener('click', function (event) {
//         event.preventDefault();
//         carritoBody.removeChild(fila); // Elimina la fila del carrito
//     });
// }

// // Evento de clic para agregar productos al carrito
// document.addEventListener('DOMContentLoaded', function () {
//     var products = [

//     ];

//     var listado = document.getElementById('listado');

//     listado.addEventListener('click', function (event) {
//         var elementoClickeado = event.target;
//         var productoId = elementoClickeado.getAttribute('data-products-id');

//         if (productoId) {
//             var products = products.find(function (prod) {
//                 return prod.id == productoId;
//             });

//             if (products) {
//                 agregarAlCarrito(products);
//             }
//         }
//     });
// });

