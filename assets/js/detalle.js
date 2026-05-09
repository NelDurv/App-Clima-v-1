// ===== detalle.js - VERSIÓN FINAL CORREGIDA =====
console.log("🔍 detalle.js cargado - Iniciando carga automática...");

// Función principal que renderiza el pronóstico
function renderizarDetalle() {
  console.log("▶️ Ejecutando renderizarDetalle()");

  // Obtener ID de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const idx = urlParams.get("id");

  console.log("ID obtenido:", idx);

  // Validar ID
  if (idx === null || idx === "") {
    document.getElementById("modalDetalleBody").innerHTML = `
            <div class="alert alert-warning text-center p-5">
                <i class="fas fa-exclamation-triangle fa-3x mb-3"></i>
                <h3>No se especificó ninguna ciudad</h3>
                <a href="index.html" class="btn btn-primary mt-3">Volver al inicio</a>
            </div>
        `;
    return;
  }

  // Validar datos
  if (typeof ciudadesData === "undefined") {
    document.getElementById("modalDetalleBody").innerHTML = `
            <div class="alert alert-danger text-center p-5">
                <h3>Error: No se cargaron los datos</h3>
                <a href="index.html" class="btn btn-primary mt-3">Volver al inicio</a>
            </div>
        `;
    return;
  }

  const indexNum = parseInt(idx);

  if (isNaN(indexNum) || indexNum < 0 || indexNum >= ciudadesData.length) {
    document.getElementById("modalDetalleBody").innerHTML = `
            <div class="alert alert-danger text-center p-5">
                <h3>Ciudad no encontrada (ID: ${idx})</h3>
                <a href="index.html" class="btn btn-primary mt-3">Volver al inicio</a>
            </div>
        `;
    return;
  }

  // Todo correcto, renderizar
  const ciudad = ciudadesData[indexNum];
  console.log("Renderizando ciudad:", ciudad.nombre);

  // Actualizar título
  const tituloElement = document.getElementById("modalCiudadNombre");
  if (tituloElement) {
    tituloElement.innerHTML = `<i class="fas fa-calendar-alt text-primary"></i> Pronóstico 6 días: ${ciudad.nombre}`;
  }

  // Generar pronóstico
  const pronostico = generarPronosticExtendido(ciudad);
  console.log("Pronóstico generado:", pronostico.length, "días");

  // Generar HTML
  let html = '<div class="row g-4">';

  for (let i = 0; i < pronostico.length; i++) {
    const dia = pronostico[i];
    html += `
            <div class="col-md-2 col-6">
                <div class="forecast-card p-3 border rounded bg-white text-center shadow-sm h-100">
                    <div class="fw-bold text-uppercase fs-5">${dia.dia}</div>
                    <div class="small text-muted mb-2">${dia.fecha}</div>
                    <i class="fas ${dia.icono} fa-3x my-2 text-primary"></i>
                    <div class="d-flex justify-content-center gap-3 mt-2">
                        <span class="text-danger fw-bold">
                            <i class="fas fa-arrow-up"></i> ${dia.tempMax}°
                        </span>
                        <span class="text-primary fw-bold">
                            <i class="fas fa-arrow-down"></i> ${dia.tempMin}°
                        </span>
                    </div>
                    <div class="small text-muted mt-2">${capitalizar(dia.tipoClima)}</div>
                </div>
            </div>
        `;
  }

  html += '</div>';

  const cuerpoElement = document.getElementById("modalDetalleBody");
  if (cuerpoElement) {
    cuerpoElement.innerHTML = html;
    console.log("✅ Renderizado completado correctamente");
  } else {
    console.error("No se encontró el elemento modalDetalleBody");
  }
}

// Múltiples formas de asegurar que el código se ejecute
console.log("Configurando event listeners...");

// Forma 1: DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Evento DOMContentLoaded disparado");
  renderizarDetalle();
});

// Forma 2: load (por si acaso)
window.addEventListener("load", function () {
  console.log("Evento load disparado");
  // Solo ejecutar si aún no se ha renderizado
  const cuerpo = document.getElementById("modalDetalleBody");
  if (cuerpo && cuerpo.innerHTML.includes("spinner-border")) {
    console.log("Renderizando desde evento load");
    renderizarDetalle();
  }
});

// Forma 3: Ejecución inmediata (por si el DOM ya está listo)
if (document.readyState === "loading") {
  console.log("Documento aún cargando, esperando...");
} else {
  console.log("Documento ya está listo, ejecutando inmediatamente");
  renderizarDetalle();
}