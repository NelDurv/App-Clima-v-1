Este archivo `README.md` completo incluye:
https://github.com/NelDurv/app-clima.git
https://neldurv.github.io/App-Clima-v-1/ link para visualizar la aplicacion en el navegador
https://github.com/NelDurv/App-Clima-v-1.git

- Vista previa ASCII de la aplicación
- Todos los errores comunes con capturas textuales
- Soluciones paso a paso
- Código de ejemplo para cada error
- Comandos de depuración
- Estructura completa del proyecto
- Guías de personalización
- Diagramas de flujo en ASCII
- Listas de verificación

# 🌤️ App del Clima Chile - Correcciones y Mejores Prácticas

## 📌 Resumen de Correcciones Realizadas

| #   | Problema                             | Solución                                                      | Archivo        |
| --- | ------------------------------------ | ------------------------------------------------------------- | -------------- |
| 1   | Bucle infinito en detalle.html       | Cambiar `&&` por `\|\|` en validación                         | `detalle.js`   |
| 2   | Error 404 "Cannot GET /detalle.html" | Renombrar `detalles.html` → `detalle.html`                    | Estructura     |
| 3   | Tarjetas en una sola columna         | Agregar CSS Grid al contenedor                                | `style.css`    |
| 4   | Botones no redirigen                 | Agregar atributo `data-id` a cada botón                       | `index.html`   |
| 5   | Scripts no cargan (undefined)        | Usar rutas relativas sin `/` al inicio                        | `detalle.html` |
| 6   | Spinner infinito en detalle          | Múltiples event listeners (DOMContentLoaded, load, inmediato) | `detalle.js`   |
| 7   | Imágenes 404                         | Verificar rutas y usar URLs externas como fallback            | `datos.js`     |
| 8   | Temperaturas invertidas (Max < Min)  | Validación con `if (tempMax <= tempMin)`                      | `datos.js`     |

## 🎯 Mejores Prácticas Implementadas 18 de Mayo 2026

### 1. Estructura de Archivos

assets/
├── css/
│ └── style.css
├── js/
│ ├── datos.js # Base de datos y funciones
│ ├── index.js # Lógica página principal
│ └── detalle.js # Lógica página detalle
└── img/ # Imágenes de fondo

text

### 2. Rutas Correctas (SIN barra al inicio)

````html
<!-- ✅ Correcto -->
<script src="assets/js/datos.js"></script>

<!-- ❌ Incorrecto -->
<script src="/assets/js/datos.js"></script>
3. Validación Robusta en detalle.js javascript // ✅ Verificación correcta if
(typeof ciudadesData === "undefined") { // Redirigir o mostrar error return; }
4. Event Listeners Múltiples javascript // ✅ Asegurar ejecución
document.addEventListener("DOMContentLoaded", renderizar);
window.addEventListener("load", renderizar); if (document.readyState !==
"loading") renderizar(); 5. CSS Grid Responsive css .grid-container { display:
grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;
} @media (min-width: 768px) { grid-template-columns: repeat(2, 1fr); } @media
(min-width: 992px) { grid-template-columns: repeat(3, 1fr); } @media (min-width:
1200px) { grid-template-columns: repeat(4, 1fr); } 6. Data Attributes en Botones
html
<!-- ✅ Correcto -->
<button class="btn-detalle-js" data-id="0">Ver pronóstico</button>
🔧 Comandos de Depuración Rápida javascript // Ejecutar en consola (F12) // 1.
Verificar datos cargados console.log("ciudadesData:", typeof ciudadesData); //
2. Verificar scripts document.querySelectorAll('script[src]').forEach(s =>
console.log(s.src)); // 3. Verificar ID en URL console.log("ID:", new
URLSearchParams(location.search).get("id")); // 4. Forzar renderizado manual
const id = new URLSearchParams(location.search).get("id"); if(id &&
ciudadesData) renderizarPronostico(parseInt(id)); 📱 Responsive Breakpoints
Dispositivo Columnas Breakpoint Móvil 1 < 768px Tablet 2 768px - 992px Desktop 3
992px - 1200px Desktop Grande 4 > 1200px ✅ Lista de Verificación Rápida
¿datos.js carga antes que detalle.js? ¿Las rutas de scripts son relativas (sin
/)? ¿Los botones tienen data-id="0" a data-id="9"? ¿El contenedor tiene clase
grid-container? ¿detalle.js tiene múltiples event listeners? ¿La validación usa
|| en lugar de &&? ¿Las imágenes existen o tienen fallback? 🚀 Próximos Pasos
(API Real) Obtener API Key de OpenWeatherMap Crear servicio weather-service.js
con fetch() Implementar caché con localStorage Agregar indicadores de carga
Manejar errores de red 📊 Errores Comunes y Soluciones Error Solución
ciudadesData is not defined Verificar orden de scripts en HTML Cannot GET
/detalle.html Renombrar archivo o corregir redirección Spinner infinito Agregar
event listeners múltiples Botones no funcionan Verificar data-id en cada botón
CSS no aplica Limpiar caché del navegador (Ctrl+F5) 📝 Versiones Versión Fecha
Cambios 0.5 Mayo 2026 Correcciones de bugs y responsive 0.6 Próxima Integración
con API real © Neldur 2026 - App del Clima Chile v0.5 text --- ## 📄 Versión
Ultra Resumida (Solo lo esencial) ```markdown # App Clima Chile - Correcciones
✅ ## Errores Solucionados 1. **Bucle infinito** → Cambiar `&&` por `||` en
validación 2. **Error 404** → Renombrar `detalles.html` → `detalle.html` 3.
**Tarjetas apiladas** → Agregar CSS Grid 4. **Botones sin acción** → Agregar
`data-id="0"` a cada botón 5. **Scripts no cargan** → Usar `src="assets/js/..."`
(sin `/` al inicio) 6. **Spinner infinito** → Múltiples event listeners 7.
**Imágenes rotas** → Usar URLs externas como fallback ## Reglas de Oro - ✅
Rutas relativas SIN barra inicial - ✅ Cada botón con `data-id` - ✅ CSS Grid
para responsividad - ✅ Múltiples formas de ejecutar JS ## Comando Útil (Consola
F12) ```javascript // Diagnóstico rápido console.log("✅ datos:", typeof
ciudadesData); console.log("✅ ID:", new
URLSearchParams(location.search).get("id")); v0.5 | © Neldur 2026
````
