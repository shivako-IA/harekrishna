// Cambiar color de fondo
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-cambiar-color').addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

// Reloj Digital
function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(actualizarReloj, 1000);
actualizarReloj(); // Mostrar la hora inmediatamente al cargar

// Galería de Imágenes
const imagenes = [
    'imagenes/imagen1.jpg',
    'imagenes/imagen2.png'
];

let indiceActual = 0;

function mostrarImagen(indice) {
    const img = document.getElementById('imagen'); // Obtener el elemento de la imagen
    img.src = imagenes[indice]; // Cambiar la fuente de la imagen
}

document.getElementById('siguiente').addEventListener('click', function() {
    indiceActual = (indiceActual + 1) % imagenes.length; // Incrementar el índice
    mostrarImagen(indiceActual); // Mostrar la nueva imagen
});

document.getElementById('anterior').addEventListener('click', function() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length; // Decrementar el índice
    mostrarImagen(indiceActual); // Mostrar la nueva imagen
});

// Mostrar la primera imagen al cargar
mostrarImagen(indiceActual);
