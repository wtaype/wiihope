import $ from 'jquery';
import { wiVista } from './widev.js';

export const init = async () => {
  $('#wiMainContent').children().css('opacity', 0).animate({ opacity: 1 }, 400);
  
  wiVista('#frases', async () => {
    const { wiCitas } = await import('./main/citas.js'); wiCitas();
  });
  
  wiVista('#audioPlayer', async () => {
    const { wiAudios } = await import('./main/audios.js'); wiAudios();
  });
  
  wiVista('#acerca', async () => {
    const { wiAcerca } = await import('./main/acerca.js'); wiAcerca();
  });
};

export const cleanup = () => $('#wiMainContent').empty();