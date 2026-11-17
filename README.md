# Eli Park — Sitio web

Sitio web de Eli Park, operadora de estacionamientos y valet parking en México.

## Publicar en GitHub Pages

1. Sube **todo el contenido de esta carpeta** a la raíz del repositorio
   (`index.html` debe quedar al mismo nivel que las carpetas `Assets`, `HTML`,
   `Styling` y `Utilities`).
2. En el repositorio: **Settings → Pages → Deploy from a branch →
   `main` / `(root)` → Save**.
3. En 1–2 minutos el sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Estructura

| Carpeta / archivo | Contenido |
| --- | --- |
| `index.html` | Entrada del sitio; lleva a `HTML/main.html` |
| `HTML/` | Las 6 páginas (Inicio, Estacionamientos, Empleo, Quiénes Somos, Contacto, Aviso de Privacidad) |
| `Styling/` | Estilos de cada página |
| `Utilities/` | Menú, pie de página, colores (`theme.css`), animaciones y scripts |
| `Utilities/parking/parkingData.js` | Ciudades y estacionamientos (nombres, direcciones, mapas, cajones, horarios) |
| `Assets/` | Fotos, logotipos e íconos |

## Cambios frecuentes

- **Correo del formulario de contacto:** `Utilities/contactForm.js`, línea `const CONTACT_EMAIL = ...`
- **Colores de la marca:** `Utilities/theme.css` (al inicio del archivo)
- **Agregar o editar un estacionamiento:** `Utilities/parking/parkingData.js`
- **Fotos:** usa fotos de máximo ~2560 px de ancho. Las carpetas `thumbs/`
  contienen versiones más pequeñas de la misma foto (mismo nombre) que se usan
  en tarjetas y miniaturas; si cambias una foto, cambia también su versión en `thumbs/`.
