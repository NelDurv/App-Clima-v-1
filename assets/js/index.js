// index.js - Versión definitiva para tarjetas manuales
document.addEventListener("DOMContentLoaded", () => {
    console.log("=== Index.js iniciado ===");

    // Buscar TODOS los botones con la clase btn-detalle-js
    const botones = document.querySelectorAll('.btn-detalle-js');

    console.log(`Se encontraron ${botones.length} botones`);

    if (botones.length === 0) {
        console.error("No se encontraron botones. Verifica que las tarjetas tengan la clase 'btn-detalle-js'");
        return;
    }

    // Agregar evento click a cada botón individualmente
    botones.forEach((boton, index) => {
        const ciudadId = boton.getAttribute('data-id');
        console.log(`Botón ${index + 1}: data-id = ${ciudadId}`);

        // Eliminar event listeners anteriores para evitar duplicados
        boton.removeEventListener('click', manejadorClick);
        // Agregar nuevo event listener
        boton.addEventListener('click', manejadorClick);
    });

    function manejadorClick(event) {
        event.preventDefault();
        event.stopPropagation();

        const boton = event.currentTarget;
        const id = boton.getAttribute('data-id');

        console.log(`Click en botón con ID: ${id}`);

        if (id !== null && id !== "") {
            const url = `detalle.html?id=${id}`;
            console.log(`Redirigiendo a: ${url}`);
            window.location.href = url;
        } else {
            console.error("El botón no tiene data-id válido");
            alert("Error: Ciudad sin ID configurado");
        }
    }

    console.log("=== Index.js listo - Esperando clicks ===");
});