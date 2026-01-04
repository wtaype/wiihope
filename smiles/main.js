import $ from 'jquery';
import { wiSmart, wiAnimate } from './widev.js';

// 🎯 CARGA DIRECTA - Sin rutas.js
Promise.all([
  import('./header.js'),
  import('./inicio.js').then(async mod => {
    await wiAnimate.fade('#wiMainContent', await mod.render());
    if (mod.init) mod.init();
  })
]);

// ⚡ Recursos externos
wiSmart({
  css: [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css',
  ],
  js: [() => import('./mainwi.js')]
});