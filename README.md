# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Guía completa de instalación de las librerías para poder ejecutar correctamente

# Instalación de dependencias de node.js
 
    npm install

Para poder manejar rutas se necesita instalar la librería router react-router-dom

# Usando npm 

    npm install react-router-dom

Y por último: para poder conectarse a la base de datos y cosumirla necesitas instalar la librería de firebase

# Usando npm

    npm install firebase @latest 

  Asegurate de instalar la version actualizada que trae correcciones de varios fixes. lo cual es 13.0.1
Si no logras instalarlo automaticamente, puedes configurarlo manualmente de la siguiente manera.

En el paquete package.json revisa la versión actual de firebase, si es menor a la 13.0.1, cambialo manualmente y guarda los cambios. ![image](https://github.com/user-attachments/assets/ac79ef35-aed1-48e6-816d-de7d21e707eb)

Para aplicar los cambios volve a instalar el node para que se actualice.

# Usando npm

    npm install
