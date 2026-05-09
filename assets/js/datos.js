// ===== datos.js =====
console.log("📦 datos.js cargado correctamente");

// Mapa de imágenes para cada tipo de clima
const climaImagenMap = {
  soleado: "assets/img/dia_viento2.jpeg",
  "parcial despejado": "https://picsum.photos/id/29/400/300",
  nublado: "https://picsum.photos/id/15/400/300",
  lluvioso: "https://picsum.photos/id/21/400/300",
  viento: "https://picsum.photos/id/104/400/300",
  "tormenta eléctrica": "https://picsum.photos/id/123/400/300",
};

// Mapa de iconos FontAwesome para cada tipo de clima
const climaIconoMap = {
  soleado: "fa-sun",
  "parcial despejado": "fa-cloud-sun",
  nublado: "fa-cloud",
  lluvioso: "fa-cloud-showers-heavy",
  viento: "fa-wind",
  "tormenta eléctrica": "fa-bolt",
};

// Datos de las 10 ciudades de Chile
const ciudadesData = [
  { nombre: "Arica", pais: "Chile", tempActual: 22, tempMax: 25, tempMin: 18, tipoClima: "soleado" },
  { nombre: "Iquique", pais: "Chile", tempActual: 20, tempMax: 23, tempMin: 17, tipoClima: "parcial despejado" },
  { nombre: "Antofagasta", pais: "Chile", tempActual: 18, tempMax: 21, tempMin: 15, tipoClima: "nublado" },
  { nombre: "Coquimbo", pais: "Chile", tempActual: 17, tempMax: 20, tempMin: 12, tipoClima: "parcial despejado" },
  { nombre: "Valparaíso", pais: "Chile", tempActual: 16, tempMax: 19, tempMin: 11, tipoClima: "viento" },
  { nombre: "Santiago", pais: "Chile", tempActual: 25, tempMax: 28, tempMin: 12, tipoClima: "soleado" },
  { nombre: "Rancagua", pais: "Chile", tempActual: 23, tempMax: 26, tempMin: 10, tipoClima: "parcial despejado" },
  { nombre: "Concepción", pais: "Chile", tempActual: 14, tempMax: 17, tempMin: 9, tipoClima: "lluvioso" },
  { nombre: "Temuco", pais: "Chile", tempActual: 12, tempMax: 15, tempMin: 6, tipoClima: "tormenta eléctrica" },
  { nombre: "Puerto Montt", pais: "Chile", tempActual: 10, tempMax: 13, tempMin: 5, tipoClima: "lluvioso" }
];

console.log("📊 Ciudades cargadas:", ciudadesData.length);

/**
 * Genera pronóstico extendido para 6 días
 * @param {Object} ciudad - Objeto con datos de la ciudad
 * @returns {Array} Array con 6 días de pronóstico
 */
function generarPronosticExtendido(ciudad) {
  const diasSemana = ["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];
  const climasPosibles = ["soleado", "parcial despejado", "nublado", "lluvioso", "viento", "tormenta eléctrica"];
  const pronostico = [];
  const hoy = new Date();

  for (let i = 1; i <= 6; i++) {
    const fechaFutura = new Date();
    fechaFutura.setDate(hoy.getDate() + i);

    // Variaciones de temperatura (entre -3 y +3 grados)
    const variacionMax = Math.floor(Math.random() * 7) - 3;
    const variacionMin = Math.floor(Math.random() * 7) - 3;

    let tempMax = ciudad.tempMax + variacionMax;
    let tempMin = ciudad.tempMin + variacionMin;

    // Asegurar que tempMax sea mayor que tempMin
    if (tempMax <= tempMin) {
      tempMax = tempMin + Math.floor(Math.random() * 5) + 1;
    }

    const climaRandom = climasPosibles[Math.floor(Math.random() * climasPosibles.length)];

    pronostico.push({
      dia: diasSemana[fechaFutura.getDay()],
      fecha: `${fechaFutura.getDate()}/${fechaFutura.getMonth() + 1}`,
      tempMax: tempMax,
      tempMin: tempMin,
      tipoClima: climaRandom,
      icono: climaIconoMap[climaRandom] || "fa-cloud"
    });
  }
  return pronostico;
}

/**
 * Capitaliza la primera letra de un texto
 * @param {string} texto - Texto a capitalizar
 * @returns {string} Texto con primera letra mayúscula
 */
function capitalizar(texto) {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
 