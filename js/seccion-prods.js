const listado = document.getElementById('listado');

function renderizarProds(listaProds) {
    listado.innerHTML = '';
    for (const prod of listaProds) {
        listado.innerHTML += `
        <div class="block__product">
        <img src=${prod.foto} alt=${prod.nombre}>
        <h3>${prod.nombre}</h3>
        <p>€ ${prod.precio}</p>
    </div>
        `;
    }
}

renderizarProds(products);

// Función para agregar un producto al carrito
function agregarAlCarrito(products) {
    // Obtén el cuerpo de la tabla del carrito
    var carritoBody = document.getElementById('carrito-body');

    // Crea una nueva fila para el producto
    var fila = document.createElement('tr');

    // Llena la fila con la información del producto
    fila.innerHTML = `
        <td>
            <div class="cart-info">
                <img src="${prod.foto}" alt="${prod.nombre}">
                <div>
                    <p>${prod.nombre}</p>
                    <small>Price: $${prod.precio}</small>
                </div>
            </div>
        </td>
        <td><input type="number" value="1"></td>
        <td>$${prod.precio}</td>
        <td><a href="#" class="remove-link">Remove</a></td>
    `;

    // Agrega la fila al cuerpo de la tabla
    carritoBody.appendChild(fila);

    // Agrega un manejador de eventos al enlace de eliminación para eliminar productos del carrito
    var removeLink = fila.querySelector('.remove-link');
    removeLink.addEventListener('click', function (event) {
        event.preventDefault();
        carritoBody.removeChild(fila); // Elimina la fila del carrito
    });
}

// Evento de clic para agregar productos al carrito
document.addEventListener('DOMContentLoaded', function () {
    var products = [
        // ... Tu arreglo de productos ...
    ];

    var listado = document.getElementById('listado');

    listado.addEventListener('click', function (event) {
        var elementoClickeado = event.target;
        var productoId = elementoClickeado.getAttribute('data-products-id');

        if (productsId) {
            var products = products.find(function (prod) {
                return prod.id == productoId;
            });

            if (products) {
                agregarAlCarrito(products);
            }
        }
    });
});
