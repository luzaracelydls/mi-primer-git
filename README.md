# Directorio de asistencia (Next.js)

Este proyecto fue migrado de archivos HTML estáticos a una app en **Next.js (App Router)** usando **JavaScript** y diseño con **Material UI**.

## Alumnos y rutas

- `Carlos Hector Leal Delgado` → `/students/carlos-hector-leal-delgado`
- `Eder Abraham Sampayo Gonzalez` → `/students/eder-abraham-sampayo-gonzalez`
- `Emiliano Chacon Alvarez` → `/students/emiliano-chacon-alvarez`
- `Luz De Leon` → `/students/luz-de-leon`
- `Rodrigo Lopez Escobedo` → `/students/rodrigo-lopez-escobedo`
- `Axel Gabriel Gutierrez Ruano` → `/students/axel-gabriel-gutierrez-ruano`

## Ejecutar en local

```bash
npm install
npm run verify:data
npm run dev
```

Abrir en navegador: `http://localhost:3000`

## Scripts disponibles

- `npm run dev`: entorno de desarrollo.
- `npm run build`: build de producción.
- `npm run start`: correr build de producción.
- `npm run lint`: lint de Next.js.
- `npm run verify:data`: valida que existan 6 alumnos y slugs únicos.

## Notas

- El listado principal se encuentra en `app/page.js`.
- La ruta dinámica de alumnos se encuentra en `app/students/[slug]/page.js`.
- El catálogo de contenido migrado está en `lib/students.js`.