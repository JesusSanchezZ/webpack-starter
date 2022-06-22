import { saludar } from './js/componentes';
import './styles.css';

const nombre = 'Jesus';

saludar('Jesus');



// Instalacion de webpack: npm install webpack webpack-cli --save-dev
// uso de webpack desde archivo package.json --> en scripts "build" : "webpack". Se ejecuta; npm run build
/**
 * págian oficial webpack: https://webpack.js.org/configuration/
 * 
 *   plugins:  https://webpack.js.org/loaders/html-loader/             --> Mueve los archivos
 *             https://webpack.js.org/plugins/html-webpack-plugin/     --> inyección de código html en el index
 * 
 *   instalación: npm install --save-dev html-loader
 *                npm install --save-dev html-webpack-plugin
 * 
 *   DevServer: https://webpack.js.org/configuration/dev-server/      --> instalación: npm i -D webpack-dev-server, -D = --save-dev
 *            agregamos al package.json un script,  "start" : "webpack serve --config webpack.config.js --open --port=8080"
 *            Se ejecuta: npm start
 * 
 *   Cargara Archivos de estilos: 
 *             https://webpack.js.org/loaders/style-loader/
 *             https://webpack.js.org/loaders/css-loader/
 *             instalación: npm i -D style-loader
 *                          npm i -D css-loader
 * 
 *   Carga de estilos globales:
 *             paquete: https://webpack.js.org/plugins/mini-css-extract-plugin/
 *             instalación: npm i -D mini-css-extract-plugin
 * 
 *  Carga de imageness:
 *             https://v4.webpack.js.org/loaders/file-loader/
 *             instalacion: npm i -D file-loader
 * 
 *  Copiar archivos estáticos:
 *             instalación: npm i -D copy-webpack-plugin
 * 
 *  Minificación de css:
 *             instalación: npm i -D css-minimizer-webpack-plugin terser-webpack-plugin
 * 
 *  Portabilidad de la aplicación:
 *             plugin: https://babeljs.io/
 *             instalación: npm i -D babel-loader @babel/core
 *              npm i -D @babel/preset-env
 */