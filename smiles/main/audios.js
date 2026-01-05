import './audios.css';
import $ from 'jquery';
import { savels, getls, Notificacion } from '../widev.js';

export const wiAudios = () => {
  $('#audioPlayer').html(`
<div class='mwb go3'>
<div class='plyr'>
<div class='viz' id='viz'><div class='wave'>${'<div class="wvs"></div>'.repeat(30)}</div></div>
<div class='info'><h2 id='ct'>Haz clic en el visualizador para iniciar</h2></div>
<div class='pgc'>
<div class='pgb'><div class='pg'></div></div>
<div class='time dpw'><span id='cur'>0:00</span><span id='dur'>0:00</span></div>
</div>
<div class='ctrls dpc'>
<button class='ctrl' id='prev'><i class='fas fa-backward'></i></button>
<button class='ctrl pby' id='play'><i class='fas fa-play'></i></button>
<button class='ctrl' id='next'><i class='fas fa-forward'></i></button>
<button class='ctrl' id='rep'><i class='fas fa-repeat'></i></button>
<div class='vol dpc'>
<button class='ctrl' id='mute'><i class='fas fa-volume-high'></i></button>
<div class='vb'><div class='vl'></div></div>
</div>
</div>
</div>
<div class='plst'>
<div class='plh dpw'>
<span class='ttl'>Biblia Audio</span>
<button class='ctrl fsc' id='full'><i class='fas fa-expand'></i></button>
<input id='src' placeholder='Buscar...' type='text'/>
</div>
<div class='pls' id='pls'></div>
</div>
</div>
  `);

  const books = {
    "San Mateo": 28, "San Marcos": 16, "San Lucas": 24, "San Juan": 21, "Hechos": 28, "Romanos": 16,
    "1 Corintios": 16, "2 Corintios": 13, "Galatas": 6, "Efesios": 6, "Filipenses": 4, "Colosenses": 4,
    "1 Tesalonicenses": 5, "2 Tesalonicenses": 3, "1 Timoteo": 6, "2 Timoteo": 4, "Tito": 3, "Filemon": 1,
    "Hebreos": 13, "Santiago": 5, "1 San Pedro": 5, "2 San Pedro": 3, "1 San Juan": 5, "2 San Juan": 1,
    "3 San Juan": 1, "Judas": 1, "Apocalipsis": 22
  };
  
  const baseUrl = 'https://raw.githubusercontent.com/geluksee/hope/main/';
  const audio = new Audio();
  const state = { idx: 0, playing: false, repeat: false, firstPlay: true };
  const tracks = [];
  
  // Generar playlist
  Object.entries(books).forEach(([book, chapters], i) => {
    Array.from({ length: chapters }, (_, c) => {
      const tc = tracks.length + 1;
      const url = `${baseUrl}${tc}_${book.replace(/\s/g, '_')}_${String(c + 1).padStart(2, '0')}.mp3`;
      tracks.push({ book, chapter: c + 1, title: `${book} - Capítulo ${c + 1}`, url });
      $('#pls').append(`<div class="pi" data-i="${tc - 1}"><span class="n">${tc}</span><span class="t">${book} - Capítulo ${c + 1}</span></div>`);
    });
  });

  const fmt = s => isNaN(s) ? '0:00' : `${~~(s / 60)}:${String(~~(s % 60)).padStart(2, '0')}`;
  const updateVol = vol => $('.vl').css('width', `${vol * 100}%`);
  const toggleWave = on => $('.wvs').toggleClass('playing', on);
  
  const load = i => {
    if (i < 0 || i >= tracks.length) return;
    state.idx = i;
    audio.src = tracks[i].url;
    $('#ct').text(tracks[i].title);
    $('.pi').removeClass('active').eq(i).addClass('active')[0]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    !state.firstPlay && Notificacion(`📖 ${tracks[i].title}`, 'info', 2000);
    saveState();
  };

  const play = () => {
    !audio.src && load(0);
    audio.play().then(() => {
      Object.assign(state, { playing: true, firstPlay: false });
      $('#play i').attr('class', 'fas fa-pause');
      toggleWave(true);
    }).catch(() => Notificacion('Error al reproducir', 'error'));
  };

  const pause = () => {
    audio.pause();
    state.playing = false;
    $('#play i').attr('class', 'fas fa-play');
    toggleWave(false);
  };

  const nav = dir => {
    const next = state.idx + dir;
    if (next >= 0 && next < tracks.length) { load(next); play(); }
    else if (next >= tracks.length) { load(0); play(); }
  };

  // Eventos audio
  $(audio).on({
    timeupdate: () => {
      const { currentTime: c, duration: d } = audio;
      $('#cur').text(fmt(c));
      $('#dur').text(fmt(d));
      $('.pg').css('width', `${(c / d) * 100}%`);
    },
    ended: () => state.repeat ? (load(state.idx), play()) : nav(1),
    loadedmetadata: () => $('#dur').text(fmt(audio.duration))
  });

  // Controles
  const actions = {
    play: () => state.playing ? pause() : play(),
    prev: () => nav(-1),
    next: () => nav(1),
    rep: function() {
      state.repeat = !state.repeat;
      $(this).toggleClass('active');
      saveState();
    },
    full: () => {
      const el = $('#audioPlayer')[0];
      const fs = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
      !fs 
        ? (el.requestFullscreen?.() || el.webkitRequestFullscreen?.() || el.mozRequestFullScreen?.())
        : (document.exitFullscreen?.() || document.webkitExitFullscreen?.() || document.mozCancelFullScreen?.());
    },
    mute: () => {
      audio.muted = !audio.muted;
      $('#mute i').toggleClass('fa-volume-high fa-volume-xmark');
      updateVol(audio.muted ? 0 : audio.volume);
    }
  };

  Object.entries(actions).forEach(([id, fn]) => $(`#${id}`).on('click', fn));

  // Fullscreen icon toggle
  $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange', () => {
    const fs = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement);
    $('#full i').attr('class', `fas fa-${fs ? 'compress' : 'expand'}`);
  });

  // Progress bar
  $('.pgb').on('click', e => audio.currentTime = (e.offsetX / e.currentTarget.offsetWidth) * audio.duration);

  // Volume bar
  $('.vb').on('click', e => {
    const vol = e.offsetX / e.currentTarget.offsetWidth;
    audio.volume = vol;
    audio.muted = false;
    $('#mute i').attr('class', 'fas fa-volume-high');
    updateVol(vol);
    saveState();
  });

  // Playlist & Search
  $(document).on('click', '.pi', function() { load(+$(this).data('i')); play(); });
  $('#src').on('input', e => {
    const q = e.target.value.toLowerCase();
    $('.pi').each((_, el) => $(el).toggle(el.textContent.toLowerCase().includes(q)));
  });

  // Keyboard shortcuts
  $(document).on('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    const keys = {
      Space: () => (e.preventDefault(), state.playing ? pause() : play()),
      ArrowLeft: () => nav(-1),
      ArrowRight: () => nav(1),
      ArrowUp: () => (e.preventDefault(), audio.volume = Math.min(1, audio.volume + 0.1), updateVol(audio.volume), saveState()),
      ArrowDown: () => (e.preventDefault(), audio.volume = Math.max(0, audio.volume - 0.1), updateVol(audio.volume), saveState())
    };
    keys[e.code]?.() || keys[e.key]?.();
  });

  // Persistencia
  const saveState = () => {
    savels('audioActual', state.idx, 168);
    savels('aVolumen', audio.volume, 168);
    savels('aRepetir', state.repeat, 168);
  };

  const loadState = () => {
    const saved = getls('audioActual');
    saved >= 0 && saved < tracks.length && load(saved);
    
    const vol = getls('aVolumen');
    vol && (audio.volume = vol, updateVol(vol));
    
    getls('aRepetir') && (state.repeat = true, $('#rep').addClass('active'));
  };

  loadState();
  
  // Wave click
  $('#viz').on('click', () => state.firstPlay && !audio.src ? (load(0), play()) : state.playing ? pause() : play());
};