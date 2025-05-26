# Calculadora React – Kevin Villagrán (23584)

Este es un proyecto de calculadora web desarrollado en React, como parte del curso de Sistemas y Tecnologías Web.
Incluye pruebas automáticas y análisis de código (lint) para asegurar calidad y correcto funcionamiento.

-----------------------

## Demo en línea

[Accede aquí a la calculadora publicada](https://23584.dernait.my/proyecto1/)

-----------------------

## Autor

- Kevin Villagrán
- Carné: 23584

-----------------------

## Requisitos

- Node.js 18+ (se recomienda versión LTS)
- npm (viene con Node)
- (Opcional) Git para clonar el repositorio

-----------------------

## Instalación y uso

1. Clonar el repositorio

   ```sh
   git clone https://github.com/DerNait/proyecto1-web.git
   cd tu-repo
   ```

2. Instalar dependencias

   ```sh
   npm install
   ```

3. Levantar el entorno de desarrollo

   ```sh
   npm run dev
   ```

   Esto abrirá la app en http://localhost:3000

-----------------------

## Ejecutar pruebas automáticas

Para correr los tests unitarios:

```sh
npm run test
```

- Se utiliza Jest y React Testing Library.
- Todos los tests deben pasar sin errores.
- No es necesario instalar nada adicional, todo viene en package.json.

-----------------------

## Ejecutar lint (estilo de código)

Para chequear el estilo del código con ESLint y Standard JS:

```sh
npm run lint
```

- El proyecto sigue el estándar de JavaScript recomendado para React.
- No debe haber errores para poder entregar.
- ACLARACIÓN: Los errores que puede dar es con el Storybook pero eso ya es por como se usa la librería, pero mi codigo deberia salir limpio.

-----------------------

## Estructura del proyecto

```
├── src/
│   ├── components/      # Componentes de la calculadora
│   ├── hooks/           # Custom hook de la calculadora
│   ├── styles/          # Estilos CSS
│   ├── tests/           # Pruebas unitarias
│   └── main.jsx         # Entrada principal
├── public/
├── package.json
├── vite.config.js
└── README.md
```

-----------------------

## Notas

- No se incluyen node_modules en el repositorio.

-----------------------

Gracias por revisar mi proyecto.
Kevin Villagrán – 23584
