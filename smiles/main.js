import { wiSmart } from './widev.js';

// 🚀 TODO CARGA POR EVENTOS (lazy)
wiSmart({
  css: [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css',
  ],
  js: [
    () => import('./header.js'),
    () => import('./inicio.js').then(async mod => {
      const html = await mod.render(); // ✅ Await aquí
      document.querySelector('#wiMainContent').innerHTML = html;
      mod.init?.();
    }),
    () => import('./mainwi.js')
  ]
});