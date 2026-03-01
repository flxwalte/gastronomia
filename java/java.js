function redirigirInicio() {
    window.location.href = "Danalej labs.html";
}

function redirigirMenu() {
    window.location.href = "menur.html";
}

function redirigirGastronomia() {
    window.location.href = "gastronomia.html";
}

const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function showItem(index) {
    // Ocultar todas las imágenes
    carouselItems.forEach(item => item.classList.remove('active'));
    // Mostrar la imagen actual
    carouselItems[index].classList.add('active');
    currentItem = index;
}

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
    showItem(currentItem);
});

document.querySelector('.carousel-control-next').addEventListener('click', () => {
    currentItem = (currentItem + 1) % carouselItems.length;
    showItem(currentItem);
});

// Mostrar la primera imagen al cargar la página
showItem(0);

// Iniciar el carrusel automáticamente
setInterval(() => {
    currentItem = (currentItem + 1) % carouselItems.length;
    showItem(currentItem);
}, 2000); // Cambiar imagen cada 2 segundos

// Funcion Hover del boton bacceso y la libreria de la ventana emergente
document.addEventListener('DOMContentLoaded', function() {
    const botonAcceso = document.getElementById('bacceso');
    const miVentana = document.getElementById('miVentana');
    const totalPrecio = document.getElementById('total-precio');
    const pedirBtn = document.getElementById('pedir-btn');
    const checkItems = document.querySelectorAll('.check-item');

    let isMouseInside = false;

    // Mostrar la ventana emergente al pasar el ratón sobre el botón
    if (botonAcceso) {
        botonAcceso.addEventListener('mouseover', function() {
            miVentana.style.display = 'block';
        });

        // Ocultar la ventana emergente solo si el ratón realmente ha abandonado
        botonAcceso.addEventListener('mouseout', function() {
            if (!isMouseInside) {
                miVentana.style.display = 'none';
            }
        });

        // Verificación detallada del movimiento del ratón
        miVentana.addEventListener('mouseover', function() {
            isMouseInside = true;
            miVentana.style.display = 'block';
        });

        miVentana.addEventListener('mouseout', function() {
            isMouseInside = false;
            miVentana.style.display = 'none';
        });
    }

    // Función para actualizar el total
    function actualizarTotal() {
        let total = 0;
        checkItems.forEach(item => {
            if (item.checked) {
                total += parseFloat(item.getAttribute('data-precio'));
            }
        });
        totalPrecio.textContent = total.toFixed(2);
    }

    // Escuchar cambios en los checkboxes
    checkItems.forEach(item => {
        item.addEventListener('change', actualizarTotal);
    });

    // Manejar el clic en el botón "Pedir"
    pedirBtn.addEventListener('click', function() {
        const itemsSeleccionados = [];
        checkItems.forEach(item => {
            if (item.checked) {
                itemsSeleccionados.push({
                    nombre: item.parentElement.querySelector('h4').textContent,
                    precio: parseFloat(item.getAttribute('data-precio'))
                });
            }
        });
        console.log("Items seleccionados:", itemsSeleccionados); 
        miVentana.style.display = 'none';
    });
});
