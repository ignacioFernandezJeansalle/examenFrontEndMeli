# Test Práctico - Frontend

## Índice

1. Especificaciones
   - Objetivo
   - Descripción funcional de la aplicación
   - Notas
   - Entregable
2. Desarrollo
3. Como crear entorno de desarrollo y pruebas.

## 1. Especificaciones

La aplicación consta de tres componentes principales:

1. La caja de búsqueda.
2. La visualización de resultados.
3. La descripción del detalle del producto.

Usar el siguiente stack tecnológico para construir la aplicación:

- Cliente:
  - HTML
  - JS (Deseable utilizar React o Backbone)
  - CSS (Deseable utilizar Sass)
- Servidor:
  - Node >= 6
  - Express

### Objetivo

- Construir las tres vistas antes mencionadas.
- Las vistas son navegables de manera independiente y cuentan con su propia url:
  - Caja de Búsqueda: "/"
  - Resultados de la búsqueda: "/items?search="
  - Detalle del producto: "/items/:id"
- Construir los siguientes endpoints para ser utilizados desde las vistas:
  - /api/items?q=:query
    - Debe consultar el endpoint https://api.mercadolibre.com/sites/MLA/search?q=:query y devolver los resultados en el formato indicado.
  - /api/items/:id
    - Debe consultar los endpoints https://api.mercadolibre.com/items/:id y https://api.mercadolibre.com/items/:id/description y devolver los resultados en el formato indicado.

### Descripción funcional de la aplicación

- En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el formulario navegar a
  la vista de resultados de búsqueda, visualizando solo 4 productos. Luego, al hacer clic sobre uno de ellos, debería navegar a la vista de detalle de Producto.
- Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.

### Notas

La firma del JSON en el campo author se refiere a tu nombre y apellido. Deberás agregar esta firma en el manejo
de datos entre la API y el front-end.

- El repositorio puede ser público o privado, como prefieras.
- No es necesario implementar la paginación, ni el filtro por categorías.
- El breadcrumb que se muestra en el listado de búsqueda debe armarse basado en la categoría que más resultados obtuvo (dicha información está disponible en la API de Search). (Obviamente, el breadcrumb de la página de detalle del ítem debe armarse con la categoría propia del ítem).
- Podés usar en el listado de search la imagen que devuelve la API (90x90) aunque esta se vea pixelada al estirarla para ajustarse al diseño del test. (A fines del test, no hace falta que busques la imagen en el tamaño exacto).

### Entregable

- Repositorio en Github.

## 2. Desarrollo

1. Creé la aplicacion con **[Next.js](https://nextjs.org/)**.

```bash
npx create-next-app@latest
```

2. Instalé **[Sass](https://sass-lang.com/)**

```bash
npm install --save-dev sass
```

3. Creé la carpeta `/server` en la raíz del proyecto, y agregué en el archivo **.gitignore** la ruta `/server/node_modules` antes de instalar Express.

4. Instalé **[Express](https://expressjs.com/es/)** dentro de `./server`, junto con **nodemon** para reinicar la aplicación de node al realizar cambios y **cors**.

```bash
npm init
npm install express
npm install --save-dev nodemon
npm install cors
```

5. Dentro de `/server/package.json` agregué el script

```bash
"dev": "nodemon ./src/index.js"
```

6. Definí la estructura del proyecto y a programar 👨‍💻:

```bash
./server/src/index.js                       // Punto de entrada a la API
./server/src/routes/itemsRoutes.js          // Gestión de rutas
./server/src/controllers/itemsController.js // Gestión de métodos
./server/src/services/itemsService.js       // Gestión de servicios

./src/app/layout.jsx                        // Layout de la app
./src/app/page.jsx                          // Página de inicio
./src/app/items/page.jsx                    // Página de resultados
./src/app/items/[id]/page.jsx               // Página de detalle

./assets/                                   // Iconos, svg
./components/                               // Componentes (jsx + scss)
./customHooks/                              // Custom Hooks
./styles/                                   // Estilos globales, variables, mixins
```

## 3. Como crear entorno de desarrollo y pruebas

En necesario tener instaldo **[Node.js](https://nodejs.org/en)**.

Desde la terminal, ubicado en la ruta donde desees clonar el repositorio, ejecutar el comando:

```bash
git clone https://github.com/ignacioFernandezJeansalle/examenFrontEndMeli.git
```

Ingresar a la carpeta del repositorio:

```bash
cd examenFrontEndMeli
```

Instalar dependencias de **[Next.js](https://nextjs.org/)**:

```bash
npm install
```

Ingresar a la carpeta `./server"`:

```bash
cd server
```

Instalar dependencias de **[Express](https://expressjs.com/es/)**:

```bash
npm install
```

Iniciar el server:

```bash
npm run dev
```

Verificar en consola que haya iniciado.

Abrir otra terminal y ubicarse en la ruta raíz `/` del proyecto para ininiciar la aplicación de **[Next.js](https://nextjs.org/)**:

```bash
npm run dev
```

Ingresar a la url ➡ http://localhost:3000/
