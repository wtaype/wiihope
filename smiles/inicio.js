import $ from 'jquery';
import { getls, savels } from './widev.js';

export const render = async () => {
  return `<div class="miweb"></div>`;
};

export const init = async () => {
  wiInicio([
    { orden: 1, html: '<div class="phrs mwb dpw frases" id="frases"></div>', fn: () => import('./main/citas.js') },
    { orden: 2, html: '<div class="mp3 audio" id="audioPlayer"></div>', fn: () => import('./main/audios.js') },
    { orden: 3, html: '<div class="about awb mwb dpvc" id="acerca"></div>', fn: () => import('./main/acerca.js') }
  ]);
};

export const cleanup = () => {
  $('.miweb').empty();
  console.log('😊 Inicio limpiado');
};

// ✅ wiInicio independiente al final
const wiInicio = (() => {
  const cargados = new Set();
  const cache = getls('wiInicio');
  
  const cargar = async ({ html, fn }) => {
    const id = html.match(/id="([^"]+)"/)?.[1];
    if (!id || cargados.has(id)) return;
    cargados.add(id);
    
    // Insertar HTML y animar
    $('.miweb').append(html);
    $(`#${id}`).css('opacity', 0).animate({ opacity: 1 }, 400);
    
    // Cargar módulo dinámicamente
    const modulo = await fn();
    const nombreFn = Object.keys(modulo).find(k => k.startsWith('wi'));
    if (nombreFn && typeof modulo[nombreFn] === 'function') {
      modulo[nombreFn]();
    }
  };
  
  const procesar = async (modulos) => {
    const ordenados = modulos.sort((a, b) => a.orden - b.orden);
    for (const mod of ordenados) await cargar(mod);
    savels('wiInicio', 1, 720);
  };
  
  return (modulos) => {
    cache ? procesar(modulos) : $(document).one('touchstart scroll click mousemove', () => procesar(modulos));
  };
})();