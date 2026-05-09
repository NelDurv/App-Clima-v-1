Este archivo `README.md` completo incluye:
https://github.com/NelDurv/app-clima.git

- Vista previa ASCII de la aplicación
- Todos los errores comunes con capturas textuales
- Soluciones paso a paso
- Código de ejemplo para cada error
- Comandos de depuración
- Estructura completa del proyecto
- Guías de personalización
- Diagramas de flujo en ASCII
- Listas de verificación

## 📝 Resumen de Errores y Soluciones (Tabla Rápida)

| #   | Error                    | Solución Rápida                          |
| --- | ------------------------ | ---------------------------------------- |
| 1   | Bucle infinito           | Cambiar `&&` por `\|\|` en validación    |
| 2   | Cannot GET /detalle.html | Renombrar archivo o corregir redirección |
| 3   | Tarjetas en una columna  | Agregar CSS grid al contenedor           |
| 4   | Botones no redirigen     | Agregar `data-id` a cada botón           |
| 5   | Scripts no cargan        | Usar rutas relativas sin `/` al inicio   |
| 6   | Spinner infinito         | Agregar múltiples event listeners        |
| 7   | Advertencias CSS         | Ignorar (no afectan funcionamiento)      |
| 8   | Imágenes no cargan       | Verificar rutas y existencia de archivos |

---

# 🌤️ Aplicación del Clima - Ciudades de Chile

Aplicación web interactiva que muestra el clima actual y pronóstico extendido a 6 días para las 10 ciudades principales de Chile.

## 📸 Vista Previa

┌─────────────────────────────────────────────────────────────────────────────┐
│ 🌤️ App del Clima Chile [Inicio] │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│ │ Arica │ │ Iquique │ │ Antofagasta │ │ La Serena │ │
│ │ ☀️ 22° │ │ 🌤️ 20° │ │ ☁️ 18° │ │ 🌤️ 17° │ │
│ │ Max 25° │ │ Max 23° │ │ Max 21° │ │ Max 20° │ │
│ │ Min 18° │ │ Min 17° │ │ Min 15° │ │ Min 12° │ │
│ │ [Ver 6 días] │ │ [Ver 6 días] │ │ [Ver 6 días] │ │ [Ver 6 días] │ │
│ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ │
│ │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│ │ Valparaíso │ │ Santiago │ │ Rancagua │ │ Concepción │ │
│ │ 💨 16° │ │ ☀️ 25° │ │ 🌤️ 23° │ │ 🌧️ 14° │ │
│ │ Max 19° │ │ Max 28° │ │ Max 26° │ │ Max 17° │ │
│ │ Min 11° │ │ Min 12° │ │ Min 10° │ │ Min 9° │ │
│ │ [Ver 6 días] │ │ [Ver 6 días] │ │ [Ver 6 días] │ │ [Ver 6 días] │ │
│ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ │
│ │
│ ┌──────────────┐ ┌──────────────┐ │
│ │ Temuco │ │ Puerto Montt │ │
│ │ ⚡ 12° │ │ 🌧️ 10° │ │
│ │ Max 15° │ │ Max 13° │ │
│ │ Min 6° │ │ Min 5° │ │
│ │ [Ver 6 días] │ │ [Ver 6 días] │ │
│ └──────────────┘ └──────────────┘ │
│ │
├─────────────────────────────────────────────────────────────────────────────┤
│ 📅 2024 - App del Clima Chile 🇨🇱 │
└─────────────────────────────────────────────────────────────────────────────┘

text

## ✨ Características Principales

- 🌡️ **Clima actual** de 10 ciudades chilenas (temperatura actual, máxima y mínima)
- 📅 **Pronóstico extendido** a 6 días para cada ciudad
- 🎨 **Tarjetas interactivas** con efectos hover y animaciones
- 📱 **Diseño responsivo** adaptable a móviles, tablets y desktop
- 🖼️ **Imágenes de fondo** personalizadas según el tipo de clima
- 🔄 **Redirección dinámica** entre páginas usando parámetros URL

---

## 🐛 Errores Comunes y Soluciones

Durante el desarrollo de esta aplicación, nos encontramos con varios errores. Aquí te mostramos cómo los solucionamos:

### Error 1: Bucle infinito al cargar detalle.html

**Descripción:** La página parpadeaba rápidamente y no permitía abrir el inspector.

**Código con error:**

```javascript
// ❌ CÓDIGO INCORRECTO
if (typeof ciudadesData === "undefined" && ciudadesData[idx]) {
  throw new Error("No se encontró ciudadesData");
}
Captura del error en consola:

text
=== DIAGNÓSTICO ===
1. datos.js: undefined
2. detalle.js: undefined
3. ID en URL: null
La página entra en bucle infinito de redirección
Solución:

javascript
// ✅ CÓDIGO CORREGIDO
if (typeof ciudadesData === "undefined") {
  console.error("ciudadesData no está definido");
  window.location.href = "index.html";
  return;
}
Explicación: El operador && causaba una evaluación incorrecta. Debe ser || o separar las validaciones.

Error 2: Cannot GET /detalle.html
Descripción: Al hacer clic en el botón "Ver pronóstico", el navegador mostraba "Cannot GET /detalle.html".

Captura del error:

text
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                       Cannot GET /detalle.html                  │
│                                                                 │
│  ⚠️ El archivo solicitado no existe en el servidor             │
│                                                                 │
│  URL: http://127.0.0.1:5500/detalle.html?id=0                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
Causa: El archivo se llamaba detalles.html (con S) pero el código buscaba detalle.html (sin S).

Solución:

Opción 1 - Renombrar el archivo:

bash
# Renombrar de detalles.html a detalle.html
mv detalles.html detalle.html
Opción 2 - Cambiar la redirección en index.js:

javascript
// Cambiar de:
window.location.href = `detalle.html?id=${id}`;
// A:
window.location.href = `detalles.html?id=${id}`;
Error 3: Las tarjetas se muestran en una sola columna
Descripción: Las 10 tarjetas aparecían apiladas verticalmente en lugar de formar un grid.

Captura del error (vista en página):

text
┌─────────────┐
│    Arica    │
├─────────────┤
│   Iquique   │
├─────────────┤
│ Antofagasta │
├─────────────┤
│  La Serena  │
├─────────────┤
│ Valparaíso  │
├─────────────┤
│  Santiago   │
├─────────────┤
│  Rancagua   │
├─────────────┤
│ Concepción  │
├─────────────┤
│   Temuco    │
├─────────────┤
│ Puerto Montt│
└─────────────┘
Causa: El contenedor #tarjetas-clima-container no tenía las clases CSS correctas.

Solución - Agregar grid system a style.css:

css
/* ✅ CÓDIGO CORREGIDO */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
En index.html:

html
<!-- ✅ CORRECTO -->
<div class="grid-container" id="tarjetas-clima-container">
  <!-- tarjetas -->
</div>
Error 4: Los botones no redirigen (data-id = null)
Descripción: Al hacer clic en "Ver pronóstico", aparecía alerta "No se especificó ninguna ciudad".

Captura del error en consola:

text
=== Index.js iniciado ===
Se encontraron 10 botones
Botón 1: data-id = null
Botón 2: data-id = null
Botón 3: data-id = null
...
Click en botón con ID: null
Error: El botón no tiene data-id válido
Vista del alert en navegador:

text
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ⚠️ Error: Ciudad sin ID configurado                           │
│                                                                 │
│                           [OK]                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
Causa: Los botones en index.html no tenían el atributo data-id.

Solución - Agregar data-id a cada botón:

html
<!-- ❌ INCORRECTO -->
<button class="btn-detalle">Ver pronóstico 6 días</button>

<!-- ✅ CORRECTO -->
<button class="btn-detalle btn-detalle-js" data-id="5">
  Ver pronóstico 6 días
</button>
Correspondencia de IDs:

javascript
// Array de ciudades en datos.js
const ciudadesData = [
  { nombre: "Arica", ... },        // ID: 0
  { nombre: "Iquique", ... },      // ID: 1
  { nombre: "Antofagasta", ... },  // ID: 2
  { nombre: "La Serena", ... },    // ID: 3
  { nombre: "Valparaíso", ... },   // ID: 4
  { nombre: "Santiago", ... },     // ID: 5
  { nombre: "Rancagua", ... },     // ID: 6
  { nombre: "Concepción", ... },   // ID: 7
  { nombre: "Temuco", ... },       // ID: 8
  { nombre: "Puerto Montt", ... }  // ID: 9
];
Error 5: datos.js o detalle.js no se cargan (undefined)
Descripción: En la consola aparecía typeof ciudadesData: undefined.

Captura del error en consola:

text
=== DIAGNÓSTICO ===
1. datos.js: undefined
2. detalle.js: undefined
3. ID en URL: 0
4. Título: null
5. Cuerpo: null

=== ERROR ===
Uncaught ReferenceError: ciudadesData is not defined
    at detalle.html:15:1
Causa: Rutas incorrectas de los scripts en detalle.html.

Solución - Rutas correctas (sin barra al inicio):

html
<!-- ❌ INCORRECTO (con barra al inicio) -->
<script src="/assets/js/datos.js"></script>
<script src="/assets/js/detalle.js"></script>

<!-- ✅ CORRECTO (ruta relativa) -->
<script src="assets/js/datos.js"></script>
<script src="assets/js/detalle.js"></script>
Verificar estructura de carpetas:

text
proyecto/
├── index.html
├── detalle.html
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        ├── datos.js    ✅ DEBE EXISTIR
        ├── index.js    ✅ DEBE EXISTIR
        └── detalle.js  ✅ DEBE EXISTIR
Error 6: El pronóstico no se renderiza automáticamente
Descripción: La página de detalle se quedaba en "Cargando..." con el spinner infinito.

Captura del error (vista en página):

text
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                         ⭕ (spinner girando)                    │
│                                                                 │
│              Cargando pronóstico extendido para 6 días...       │
│                                                                 │
│                      [El spinner nunca desaparece]              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
Causa: El evento DOMContentLoaded no se ejecutaba correctamente.

Solución - Múltiples formas de asegurar la ejecución en detalle.js:

javascript
// ✅ SOLUCIÓN COMPLETA
// Forma 1: Función autoinvocada
(function() {
  renderizarDetalle();
})();

// Forma 2: DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  renderizarDetalle();
});

// Forma 3: load event
window.addEventListener("load", function() {
  if (document.getElementById("modalDetalleBody").innerHTML.includes("spinner")) {
    renderizarDetalle();
  }
});

// Forma 4: setTimeout como fallback
setTimeout(function() {
  if (typeof ciudadesData !== "undefined") {
    renderizarDetalle();
  }
}, 100);
Error 7: Advertencias CSS en la consola
Descripción: Mensajes como "Propiedad desconocida '-moz-column-gap'" aparecían en consola.

Captura del error en consola:

text
Error al interpretar el valor para '-webkit-text-size-adjust'. Declaración rechazada. _reboot.scss:58:3
Pseudo-clase o pseudo-elemento desconocido '-moz-focus-inner'. Juego de reglas ignoradas debido a un mal selector. _reboot.scss:467:1
Pseudo-clase o pseudo-elemento desconocido '-moz-focus-outer'. Juego de reglas ignoradas debido a un mal selector. _form-range.scss:23:3
Juego de reglas ignoradas debido a un mal selector. _form-range.scss:38:5
Propiedad desconocida '-moz-column-gap'. Declaración rechazada. _utilities.scss:74:13
Causa: Son advertencias de compatibilidad de Bootstrap con Firefox.

Solución (opcional - no necesaria):

css
/* ✅ Agregar prefijos para navegadores antiguos */
.selector {
  -webkit-column-gap: 1.5rem;
  -moz-column-gap: 1.5rem;
  column-gap: 1.5rem;
}
Nota importante: Estas advertencias NO afectan el funcionamiento de la aplicación. Se pueden ignorar completamente.

Error 8: Las imágenes de fondo no se cargan
Descripción: Las tarjetas mostraban fondo blanco sin imágenes.

Captura del error en consola:

text
GET http://127.0.0.1:5500/assets/img/dia_viento2.jpeg 404 (Not Found)
GET http://127.0.0.1:5500/assets/img/lluvioso.jpg 404 (Not Found)
Causa: La ruta de la imagen era incorrecta o el archivo no existía.

Solución en datos.js:

javascript
// ✅ CORRECTO - Verificar que las rutas sean válidas
const climaImagenMap = {
  soleado: "assets/img/dia_viento2.jpeg",  // Ruta local - verificar que el archivo existe
  "parcial despejado": "https://picsum.photos/id/29/400/300",  // URL externa válida
  nublado: "https://picsum.photos/id/15/400/300",  // URL externa válida
  lluvioso: "assets/img/lluvioso.jpg",  // ⚠️ Verificar que este archivo existe
  viento: "https://picsum.photos/id/104/400/300",  // URL externa válida
  "tormenta eléctrica": "https://picsum.photos/id/123/400/300",  // URL externa válida
};
Verificar estructura de carpetas:

text
assets/
└── img/
    ├── dia_viento2.jpeg  ✅ (debe existir)
    ├── lluvioso.jpg      ❌ (si no existe, usar URL externa)
    └── soleado.jpg       ❌ (si no existe, usar URL externa)
Error 9: El botón "Volver" no funciona correctamente
Descripción: Al hacer clic en "Volver al inicio" no redirige a index.html.

Captura del error en consola:

text
Click en botón volver: undefined
Error: No se pudo redirigir
Causa: El enlace tenía ruta incorrecta o faltaba el atributo href.

Solución en detalle.html:

html
<!-- ❌ INCORRECTO -->
<a class="btn btn-secondary">Volver al inicio</a>

<!-- ✅ CORRECTO -->
<a href="index.html" class="btn btn-secondary">
  <i class="fas fa-arrow-left"></i> Volver al inicio
</a>

<!-- ✅ CORRECTO (con ruta absoluta si es necesario) -->
<a href="/index.html" class="btn btn-secondary">
  <i class="fas fa-arrow-left"></i> Volver al inicio
</a>
Error 10: El pronóstico muestra temperaturas invertidas (Max < Min)
Descripción: En algunos días, la temperatura máxima era menor que la mínima.

Captura del error (vista en página):

text
┌─────────────┐
│     LUN     │
│    18/12    │
│     ☀️      │
│  Max 15°    │  ← ERROR: 15° es menor que 18°
│  Min 18°    │  ← ERROR: 18° es mayor que 15°
└─────────────┘
Causa: La variación aleatoria podía invertir los valores.

Solución en datos.js - función generarPronosticExtendido:

javascript
// ✅ CÓDIGO CORREGIDO
function generarPronosticExtendido(ciudad) {
  // ... código anterior ...

  let tempMax = ciudad.tempMax + variacionMax;
  let tempMin = ciudad.tempMin + variacionMin;

  // CORRECCIÓN: Asegurar que tempMax sea mayor que tempMin
  if (tempMax <= tempMin) {
    tempMax = tempMin + Math.floor(Math.random() * 5) + 1;
  }

  // ... resto del código ...
}
🛠️ Herramientas de Depuración
Comandos útiles en consola (F12):
javascript
// 1. Diagnóstico completo - Ejecutar en detalle.html
console.log("=== DIAGNÓSTICO ===");
console.log("datos.js:", typeof ciudadesData);
console.log("detalle.js:", typeof renderizarPronostico);
console.log("ID en URL:", new URLSearchParams(window.location.search).get("id"));
console.log("Título:", document.getElementById("modalCiudadNombre"));
console.log("Cuerpo:", document.getElementById("modalDetalleBody"));
console.log("Botones:", document.querySelectorAll('.btn-detalle-js').length);
javascript
// 2. Verificar scripts cargados
document.querySelectorAll('script[src]').forEach(s => console.log(s.src));
javascript
// 3. Forzar renderizado manual
const id = new URLSearchParams(window.location.search).get("id");
const ciudad = ciudadesData[parseInt(id)];
const pronostico = generarPronosticExtendido(ciudad);
console.log("Pronóstico generado:", pronostico);
javascript
// 4. Verificar rutas de imágenes
console.table(climaImagenMap);
javascript
// 5. Simular click en el primer botón
document.querySelector('.btn-detalle-js')?.click();
javascript
// 6. Limpiar consola
console.clear();
javascript
// 7. Ver todas las ciudades en tabla
console.table(ciudadesData);
🏙️ Ciudades Incluidas
ID	Ciudad	Clima Actual	Temp Actual	Temp Max	Temp Min
0	Arica	Soleado ☀️	22°C	25°C	18°C
1	Iquique	Parcial despejado 🌤️	20°C	23°C	17°C
2	Antofagasta	Nublado ☁️	18°C	21°C	15°C
3	Coquimbo	Parcial despejado 🌤️	17°C	20°C	12°C
4	Valparaíso	Viento 💨	16°C	19°C	11°C
5	Santiago	Soleado ☀️	25°C	28°C	12°C
6	Rancagua	Parcial despejado 🌤️	23°C	26°C	10°C
7	Concepción	Lluvioso 🌧️	14°C	17°C	9°C
8	Temuco	Tormenta eléctrica ⚡	12°C	15°C	6°C
9	Puerto Montt	Lluvioso 🌧️	10°C	13°C	5°C
📁 Estructura del Proyecto
text
proyecto-clima/
│
├── index.html                 # Página principal (lista de ciudades)
├── detalle.html               # Página de detalle (pronóstico 6 días)
├── sobre-el-proyecto.html     # Información del proyecto (opcional)
│
├── assets/
│   ├── css/
│   │   └── style.css          # Estilos personalizados completos
│   │
│   ├── js/
│   │   ├── datos.js           # Base de datos de ciudades y funciones
│   │   ├── index.js           # Lógica de página principal
│   │   └── detalle.js         # Lógica de página detalle
│   │
│   └── img/
│       ├── dia_viento2.jpeg   # Imagen para clima ventoso
│       ├── soleado.jpg        # Imagen para clima soleado
│       ├── nublado.jpg        # Imagen para clima nublado
│       ├── lluvioso.jpg       # Imagen para clima lluvioso
│       └── tormenta.jpg       # Imagen para tormentas
│
└── README.md                  # Documentación (este archivo)

🔧 Instalación y Uso
Requisitos Previos
Navegador web moderno (Chrome, Firefox, Edge, Safari)

Servidor local opcional (Live Server, XAMPP, etc.)

Pasos para ejecutar
Descargar o clonar el proyecto

bash
git clone https://github.com/NelDurv/app-clima.git
cd app-clima-chile
Abrir el archivo principal

Navegar a la carpeta del proyecto

Abrir index.html en el navegador (doble click)

Usar Live Server (recomendado para desarrollo)

En VSCode: Instalar extensión "Live Server"

Click derecho en index.html → "Open with Live Server"

Verificar que todo funciona

Deben aparecer 10 tarjetas de ciudades

Al hacer clic en "Ver pronóstico 6 días" debe mostrar el pronóstico

🎮 Cómo Usar
text
PASO 1: Abrir index.html
         ↓
PASO 2: Ver las 10 tarjetas de ciudades
         ↓
PASO 3: Hacer clic en "Ver pronóstico 6 días"
         ↓
PASO 4: Explorar el pronóstico extendido
         ↓
PASO 5: Usar "Volver al inicio" para más ciudades
🧠 Lógica del Pronóstico
El pronóstico de 6 días se genera dinámicamente usando:


📱 Responsive Design
text
┌─────────────────────────────────────────────────────────────────────────────┐
│                           BREAKPOINTS DEL DISEÑO                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Móvil (< 768px)              Tablet (768px - 992px)                        │
│  ┌─────────┐                  ┌─────────┐ ┌─────────┐                       │
│  │ Ciudad  │                  │ Ciudad  │ │ Ciudad  │                       │
│  └─────────┘                  └─────────┘ └─────────┘                       │
│  ┌─────────┐                                                               │
│  │ Ciudad  │                  Desktop (992px - 1200px)                      │
│  └─────────┘                  ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│                               │ Ciudad  │ │ Ciudad  │ │ Ciudad  │          │
│  1 columna                     └─────────┘ └─────────┘ └─────────┘          │
│                                                                             │
│                               Desktop Grande (> 1200px)                     │
│                               ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│                               │ Ciudad  │ │ Ciudad  │ │ Ciudad  │ │ Ciudad  │
│                               └─────────┘ └─────────┘ └─────────┘ └─────────┘
│                                                                             │
│                               4 columnas                                    │
└─────────────────────────────────────────────────────────────────────────────┘
Dispositivo	Columnas	Breakpoint
Móvil	1 columna	< 768px
Tablet	2 columnas	768px - 992px
Desktop pequeño	3 columnas	992px - 1200px
Desktop grande	4 columnas	> 1200px
🔄 Flujo de Datos
text
┌─────────────────────────────────────────────────────────────────────────────┐
│                              FLUJO DE LA APLICACIÓN                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐                                                           │
│  │ index.html  │                                                           │
│  └──────┬──────┘                                                           │
│         │                                                                  │
│         │ Usuario hace clic en "Ver pronóstico"                            │
│         ↓                                                                  │
│  ┌─────────────┐                                                           │
│  │ Los botones │  ──►  Obtener data-id (0-9)                               │
│  │ tienen ID   │                                                           │
│  └──────┬──────┘                                                           │
│         │                                                                  │
│         │ window.location.href = "detalle.html?id=5"                       │
│         ↓                                                                  │
│  ┌─────────────┐                                                           │
│  │detalle.html │                                                           │
│  └──────┬──────┘                                                           │
│         │                                                                  │
│         │ Leer parámetro ID: const id = URLSearchParams.get("id")          │
│         ↓                                                                  │
│  ┌─────────────┐                                                           │
│  │  datos.js   │  ──►  ciudadesData[parseInt(id)]                          │
│  └──────┬──────┘                                                           │
│         │                                                                  │
│         │ Obtener ciudad: {nombre: "Santiago", tempMax: 28, ...}           │
│         ↓                                                                  │
│  ┌─────────────┐                                                           │
│  │  detalle.js │  ──►  generarPronosticExtendido(ciudad)                   │
│  └──────┬──────┘                                                           │
│         │                                                                  │
│         │ Generar 6 días con variaciones aleatorias                        │
│         ↓                                                                  │
│  ┌─────────────┐                                                           │
│  │  Mostrar    │  ──►  Tarjetas con: Día, Fecha, Icono, TempMax, TempMin  │
│  │ Pronóstico  │                                                           │
│  └─────────────┘                                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
📊 Tecnologías Utilizadas
Tecnología	Versión	Uso
HTML5	-	Estructura de la aplicación
CSS3	-	Estilos y animaciones
JavaScript	ES6+	Lógica de la aplicación
Bootstrap	5.3.8	Grid system y componentes
FontAwesome	6.0.0	Iconografía
Meta IA Generacion de imagenes de fondo Tarjetas
📋 Lista de Verificación de Instalación
markdown
□ ¿index.html existe en la raíz?
□ ¿detalle.html existe en la raíz?
□ ¿La carpeta assets/css/ existe?
□ ¿style.css está dentro de assets/css/?
□ ¿La carpeta assets/js/ existe?
□ ¿datos.js está dentro de assets/js/?
□ ¿index.js está dentro de assets/js/?
□ ¿detalle.js está dentro de assets/js/?
□ ¿Las rutas en detalle.html son relativas (sin / al inicio)?
□ ¿Los botones tienen la clase .btn-detalle-js?
□ ¿Los botones tienen el atributo data-id (0-9)?
□ ¿El contenedor tiene id="tarjetas-clima-container"?
□ ¿Las funciones generarPronosticExtendido y capitalizar existen en datos.js?
🐛 Resumen Rápido de Errores y Soluciones
#	Error	Síntoma	Solución Rápida
1	Bucle infinito	Página parpadea sin parar	Cambiar && por || en validación
2	Cannot GET	Error 404 en navegador	Renombrar detalles.html a detalle.html
3	Una sola columna	Tarjetas apiladas	Agregar CSS grid al contenedor
4	Botones no funcionan	Alerta "sin ID"	Agregar data-id="0-9" a cada botón
5	Scripts undefined	Error en consola	Usar rutas relativas assets/js/...
6	Spinner infinito	Nunca carga	Agregar event listeners múltiples
7	CSS warnings	Mensajes en consola	Ignorar (no afectan)
8	Imágenes 404	Fondos blancos	Verificar rutas de imágenes
9	Volver no funciona	Link sin acción	Agregar href="index.html"
10	Temperaturas invertidas	Max < Min	Validar que Max > Min
💻 Comandos de Consola para Depuración
javascript
// Ejecutar en consola (F12) para diagnóstico rápido

// PUNTO 1: Verificar que todo está cargado
console.log("✅ datos.js:", typeof ciudadesData);
console.log("✅ detalle.js:", typeof renderizarPronostico);
console.log("✅ ID:", new URLSearchParams(location.search).get("id"));

// PUNTO 2: Verificar elementos del DOM
console.log("✅ Título:", document.getElementById("modalCiudadNombre"));
console.log("✅ Cuerpo:", document.getElementById("modalDetalleBody"));

// PUNTO 3: Verificar scripts cargados
document.querySelectorAll('script[src]').forEach(s => console.log(s.src));

// PUNTO 4: Verificar botones
console.log("✅ Botones:", document.querySelectorAll('.btn-detalle-js').length);

// PUNTO 5: Forzar renderizado manual (en detalle.html)
const id = new URLSearchParams(location.search).get("id");
if(id && ciudadesData) {
    renderizarPronostico(parseInt(id));
}
📄 Licencia
MIT License

Copyright (c) 2024 - Aplicación del Clima Chile

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...

👨‍💻 Autor
Desarrollado como proyecto de aprendizaje de JavaScript y manipulación del DOM.

Propósito: Demostrar habilidades en:

Manipulación del DOM

Eventos en JavaScript

Generación dinámica de contenido

Diseño responsivo

Depuración de errores

🙏 Agradecimientos
Bootstrap por el sistema de grillas y componentes

FontAwesome por los iconos gratuitos

Picsum por las imágenes de placeholder

Comunidad de desarrolladores por la documentación

📞 Contacto y Soporte
Issues: Abrir un issue en el repositorio del proyecto

Documentación: Revisar este README

Depuración: Usar F12 para abrir consola

🎯 Próximas Mejoras (Futuras)
Agregar API real del clima (OpenWeatherMap)

Agregar más ciudades de Latinoamérica

Modo oscuro/claro

Gráficos de temperaturas

Animaciones más avanzadas

Almacenamiento local de preferencias

Compartir pronóstico en redes sociales

¡Disfruta explorando el clima de Chile! 🇨🇱🌡️☀️🌧️💨

Documentación generada el: 2024

Última actualización: 2024

text



```
