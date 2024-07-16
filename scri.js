function filtrarProductos() {
    const filtroCategoria = document.getElementById('filtroCategoria');
    const filtroPrecioMin = document.getElementById('filtroPrecioMin');
    const filtroPrecioMax = document.getElementById('filtroPrecioMax');
    const productos = document.querySelectorAll('.produ');

    // Verificar si los elementos existen antes de aplicar el filtro
    if (filtroCategoria && filtroPrecioMin && filtroPrecioMax) {
        productos.forEach(function(producto) {
            const categoriaProducto = producto.querySelector('.categoria').textContent.trim().toLowerCase();
            const precioProducto = parseFloat(producto.querySelector('.precio-regular').textContent.match(/\d+\.\d+/)[0]);

            const filtroCategoriaValor = filtroCategoria.value.trim().toLowerCase();
            const filtroPrecioMinValor = parseFloat(filtroPrecioMin.value);
            const filtroPrecioMaxValor = parseFloat(filtroPrecioMax.value);

            const coincideCategoria = filtroCategoriaValor === '' || categoriaProducto === filtroCategoriaValor;
            const coincidePrecioMin = isNaN(filtroPrecioMinValor) || precioProducto >= filtroPrecioMinValor;
            const coincidePrecioMax = isNaN(filtroPrecioMaxValor) || precioProducto <= filtroPrecioMaxValor;

            if (coincideCategoria && coincidePrecioMin && coincidePrecioMax) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    } else {
        console.error('Alguno de los elementos de filtro no existe.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const filtroCategoria = document.getElementById('filtroCategoria');
    const filtroPrecioMin = document.getElementById('filtroPrecioMin');
    const filtroPrecioMax = document.getElementById('filtroPrecioMax');

    // Verificar si los elementos existen antes de agregar event listeners
    if (filtroCategoria && filtroPrecioMin && filtroPrecioMax) {
        // Event listeners para cada campo de filtro
        filtroCategoria.addEventListener('change', filtrarProductos);
        filtroPrecioMin.addEventListener('input', filtrarProductos);
        filtroPrecioMax.addEventListener('input', filtrarProductos);
    } else {
        console.error('Alguno de los elementos de filtro no existe.');
    }
});








document.addEventListener("DOMContentLoaded", function() {
    const productosContainer = document.querySelector('.produ-container');
    const productos = Array.from(document.querySelectorAll('.produ'));

    // Event listener para detectar cambios en el cuadro de selección "Ordenar por"
    document.getElementById('ordenarPor').addEventListener('change', function() {
        const criterioOrdenamiento = this.value;

        // Ordenar los productos según el criterio seleccionado
        ordenarProductos(productos, criterioOrdenamiento);

        // Actualizar la visualización de los productos
        productosContainer.innerHTML = '';
        productos.forEach(function(producto) {
            productosContainer.appendChild(producto);
        });
    });
});

function ordenarProductos(productos, criterio) {
    productos.sort(function(a, b) {
        const valorA = obtenerValorParaOrdenar(a, criterio);
        const valorB = obtenerValorParaOrdenar(b, criterio);

        if (valorA < valorB) {
            return -1;
        } else if (valorA > valorB) {
            return 1;
        } else {
            return 0;
        }
    });
}

function obtenerValorParaOrdenar(producto, criterio) {
    switch (criterio) {
        case 'nombreAsc':
            return producto.querySelector('.titulo').textContent;
        case 'nombreDesc':
            return producto.querySelector('.titulo').textContent;
        case 'precioAsc':
            return parseFloat(producto.querySelector('.precio-regular').textContent.match(/\d+\.\d+/)[0]);
        case 'precioDesc':
            return parseFloat(producto.querySelector('.precio-regular').textContent.match(/\d+\.\d+/)[0]);
        default:
            return 0;
    }
}



























document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 1;
    const totalPages = 2; // Actualiza según el número de páginas que tengas

    function goToPage(page) {
        if (page < 1 || page > totalPages) return;

        document.querySelector(`#page${currentPage}`).style.display = 'none';
        document.querySelector(`#page${page}`).style.display = 'block';

        document.querySelector(`#page${currentPage}`).removeAttribute('class');
        document.querySelector(`#page${page}`).setAttribute('class', 'active');

        currentPage = page;
    }

    function resetProductContainerLayout() {
        document.querySelector('.produ-container').style.display = 'flex'; // Asegura que el contenedor de productos esté en fila horizontal
        document.querySelector('.produ-container').style.flexWrap = 'wrap'; // Asegura que los productos puedan envolverse en múltiples filas si es necesario
    }

    document.getElementById('prevPage').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            goToPage(currentPage - 1);
            resetProductContainerLayout(); // Restablece la disposición de los productos al cambiar de página
        }
    });

    document.getElementById('nextPage').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
            resetProductContainerLayout(); // Restablece la disposición de los productos al cambiar de página
        }
    });
});

