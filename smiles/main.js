import $ from 'jquery';
import { wiVista } from './widev.js';

// ✅ INIT solo hidrata (el HTML ya existe)
export const init = async () => {
  // Fade-in suave del contenido existente
  $('#wiMainContent').children().css('opacity', 0).animate({ opacity: 1 }, 400);
  
  // Lazy load con Observer
  wiVista('#frases', async () => {
    const { wiCitas } = await import('./main/citas.js');
    wiCitas();
  });
  
  wiVista('#audioPlayer', async () => {
    const { wiAudios } = await import('./main/audios.js');
    wiAudios();
  });
  
  wiVista('#acerca', async () => {
    const { wiAcerca } = await import('./main/acerca.js');
    wiAcerca();
  });
};

export const cleanup = () => $('#wiMainContent').empty();