import $ from 'jquery';
import { rutas} from './rutas.js';
import { wiSmart, getls, Mensaje } from './widev.js'; 

rutas.register('/', () => import('./inicio.js')); // 🎯 Ruta Publica 
// rutas.register('/smile', () => getls('wiSmile') ? import('./smile/smile.js') : import('./inicio.js')); // 🔐 Ruta privada 

import('./header.js'); // ⚡ Header Personalizado 
rutas.init(); // 🚀 Inicializar UNA SOLA VEZ

wiSmart({
  css: [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css',
  ],
  js: [() => import('./mainwi.js')]
}); // ⚡ Carga inteligente de recursos