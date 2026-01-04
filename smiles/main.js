import $ from 'jquery';
import { wiVista } from './widev.js';

export const render = async () => {
  const html = `
    <div class="phrs mwb dpw frases" id="frases"></div>
    <div class="mp3 audio" id="audioPlayer"></div>
    <div class="about awb mwb dpvc" id="acerca"></div>
  `;
  $('#wiMainContent').html(html).children().css('opacity', 0).animate({ opacity: 1 }, 400);
};

export const init = async () => {
  await render(); // Auto-renderiza dentro de main
  
  wiVista('#frases', async () => (await import('./main/citas.js')).wiCitas());
  wiVista('#audioPlayer', async () => (await import('./main/audios.js')).wiAudios());
  wiVista('#acerca', async () => (await import('./main/acerca.js')).wiAcerca());
};

export const cleanup = () => $('#wiMainContent').empty();