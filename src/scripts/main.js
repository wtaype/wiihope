import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './init.js';
import { collection, query, orderBy, getDocs, addDoc, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { wiAuth } from './wiauth.js';
import { abrirModal, cerrarModal } from './wimodal.js';
import { wiTema, savels, getls, Notificacion, wiSpin, Tiempo } from './widev.js';

// 🎯 INICIALIZACIÓN
$(() => {
  // Fechas dinámicas
  $('.myr').text(new Date().getFullYear());
  $('.myu').text(new Date().toLocaleString());

  // Modales + Auth
  wiAuth();

  // ✅ DETECTAR ESTADO DE AUTENTICACIÓN
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Usuario autenticado
      $('.login').hide();
      $('.logout, #btnAgregarCita').show();
      
      // Mostrar nombre de usuario o email
      const nombreUsuario = user.displayName || user.email.split('@')[0];
      $('.logout').text(`Hola, ${nombreUsuario}`);
      
      window.usuarioActual = user;
      
      // Recargar citas para mostrar botones de eliminar
      cargarCitas();
    } else {
      // Usuario NO autenticado
      $('.login').show();
      $('.logout, #btnAgregarCita').hide();
      window.usuarioActual = null;
      
      // Recargar citas para ocultar botones de eliminar
      cargarCitas();
    }
  });

  wiTema; // Temas

  // Animaciones scroll
  $(window).on('scroll', () => {
    const A = $(window).scrollTop() + $(window).height();
    $('.ani').each((i, e) => {
      if (A > $(e).offset().top) {
        $(e).addClass('anip').css('transition-delay', i * 0.2 + 's');
      }
    });
  }).trigger('scroll');

  // Background + Imagen
  $('head').append('<style>:root{--bgim:url("https://d35aaqx5ub95lt.cloudfront.net/images/star-pattern.svg")}.hd{background:var(--bgim),linear-gradient(to bottom,var(--co1),var(--co2))}</style>');
  $('.lpx').html('<img width="600" height="400" alt="Dios es bueno" src="https://i.postimg.cc/W1LZ2Try/Dios-Es-Bueno.webp"/>');

  // 📖 AUDIO BIBLIA
  initAudioBiblia();

  // 📜 CARGAR CITAS DESDE FIRESTORE
  cargarCitas();

  // ➕ AGREGAR NUEVA CITA (solo si está autenticado)
  $('#btnAgregarCita').on('click', () => abrirModal('citaModal'));
  $(document).on('submit', '#citaForm', agregarCita);

  // 🗑️ ELIMINAR CITA
  $(document).on('click', '.btn_eli_cita', eliminarCita);
});

// 🎵 AUDIO BIBLIA (COMPACTO)
const initAudioBiblia = () => {
  const books = {
    'San Mateo': 28, 'San Marcos': 16, 'San Lucas': 24, 'San Juan': 21, Hechos: 28, Romanos: 16,
    '1 Corintios': 16, '2 Corintios': 13, Galatas: 6, Efesios: 6, Filipenses: 4, Colosenses: 4,
    '1 Tesalonicenses': 5, '2 Tesalonicenses': 3, '1 Timoteo': 6, '2 Timoteo': 4, Tito: 3, Filemon: 1,
    Hebreos: 13, Santiago: 5, '1 San Pedro': 5, '2 San Pedro': 3, '1 San Juan': 5, '2 San Juan': 1,
    '3 San Juan': 1, Judas: 1, Apocalipsis: 22
  };
  const baseUrl = 'https://raw.githubusercontent.com/geluksee/hope/main/';
  const audio = new Audio();
  let idx = 0, isPlaying = false, repeat = false, tracks = [];
  const $pl = $('#playlist');
  let n = 0;

  for (const [book, chaps] of Object.entries(books)) {
    for (let c = 1; c <= chaps; c++) {
      n++;
      tracks.push({ title: `${book} - Capitulo ${c}`, url: `${baseUrl}${n}_${book.replace(/ /g, '_')}_${String(c).padStart(2, '0')}.mp3`, index: n - 1 });
      $pl.append(`<div class="playlist-item" data-index="${n - 1}"><span class="number">${n}</span><span class="title">${book} - Capitulo ${c}</span></div>`);
    }
  }

  const fmt = s => isNaN(s) ? '0:00' : `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  const load = i => { if (i < 0 || i >= tracks.length) return; idx = i; audio.src = tracks[i].url; $('#currentTrack').text(tracks[i].title); $('.playlist-item').removeClass('active'); $(`.playlist-item[data-index="${i}"]`).addClass('active'); };
  const play = () => audio.play().then(() => { isPlaying = true; $('#playBtn').html('<svg viewBox="0 0 24 24"><rect/><rect x="8" y="6" width="3" height="12"/><rect x="13" y="6" width="3" height="12"/></svg>'); }).catch(console.log);
  const pause = () => { audio.pause(); isPlaying = false; $('#playBtn').html('<svg viewBox="0 0 24 24"><rect/><polygon points="8,6 20,12 8,18"/></svg>'); };

  $(audio).on('timeupdate', () => { $('#currentTime').text(fmt(audio.currentTime)); $('#duration').text(fmt(audio.duration)); $('.progress').css('width', (audio.currentTime / audio.duration) * 100 + '%'); });
  $(audio).on('ended', () => repeat ? (load(idx), play()) : idx < tracks.length - 1 && (load(idx + 1), play()));
  $(audio).on('loadedmetadata', () => $('#duration').text(fmt(audio.duration)));

  $('#playBtn').on('click', () => { if (!audio.src) load(0); isPlaying ? pause() : play(); });
  $('#prevBtn').on('click', () => idx > 0 && (load(idx - 1), play()));
  $('#nextBtn').on('click', () => idx < tracks.length - 1 && (load(idx + 1), play()));
  $('#repeatBtn').on('click', function () { repeat = !repeat; $(this).toggleClass('pya'); });
  $('.progress-bar').on('click', e => audio.currentTime = (e.offsetX / $(e.currentTarget).width()) * audio.duration);

  let isMuted = false;
  const upVol = v => $('.volume-level').css('width', v * 100 + '%');
  audio.volume = 1; upVol(1);
  $('.volume-bar').on('click', e => { const v = e.offsetX / $(e.currentTarget).width(); audio.volume = v; if (isMuted && v > 0) { isMuted = false; audio.muted = false; $('#muteBtn').html('<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/><path d="M15 9a2 3 0 0 1 0 6" stroke-width="2"/><path d="M18 7.7a2 3 0 0 1 0 9" stroke-width="2"/></svg>'); } upVol(v); });
  $('#muteBtn').on('click', () => { isMuted = !isMuted; audio.muted = isMuted; $('#muteBtn').html(isMuted ? '<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/></svg>' : '<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/><path d="M15 9a2 3 0 0 1 0 6" stroke-width="2"/><path d="M18 7.7a2 3 0 0 1 0 9" stroke-width="2"/></svg>'); upVol(isMuted ? 0 : audio.volume); });

  $(document).on('click', '.playlist-item', function () { load(parseInt($(this).data('index'))); play(); savels('currentTrackIndex', idx, 168); });
  $('#searchInput').on('input', function () { const q = $(this).val().toLowerCase(); $('.playlist-item').each(function () { $(this).toggle($(this).text().toLowerCase().includes(q)); }); });

  const saved = getls('currentTrackIndex'); if (saved !== null && saved >= 0 && saved < tracks.length) load(saved);
  $('.visualizer').on('click', () => isPlaying ? pause() : play()).html(`<div class="wave">${'<div class="wave-bar"></div>'.repeat(20)}</div>`);
};

// 📜 CARGAR CITAS DESDE FIRESTORE
const cargarCitas = async () => {
  try {
    const q = query(collection(db, 'wicitas'), orderBy('timestamp', 'desc'));
    const snap = await getDocs(q);
    const $frases = $('#frases');
    $frases.empty();

    if (snap.empty) {
      $frases.html('<p class="hst_vac"><i class="fas fa-bible"></i>No hay citas disponibles</p>');
      return;
    }

    snap.forEach((doc, i) => {
      const { cita, contenido } = doc.data();
      
      // ✅ Solo mostrar botón de eliminar si está autenticado
      const btnEliminar = window.usuarioActual 
        ? `<button class="btn_eli_cita" data-id="${doc.id}" title="Eliminar"><i class="fas fa-trash"></i></button>` 
        : '';
      
      $frases.append(`
        <div class="phr ph${i + 1} ani" data-id="${doc.id}">
          ${btnEliminar}
          <blockquote class="sld">
            <p class="bqt">"${contenido}"</p>
            <cite class="bqa">- ${cita}</cite>
          </blockquote>
        </div>
      `);
    });
    
    // ✅ Re-trigger animaciones después de cargar
    $(window).trigger('scroll');
  } catch (error) {
    console.error('Error al cargar citas:', error);
    Notificacion('Error al cargar las citas bíblicas', 'error');
  }
};

// ➕ AGREGAR NUEVA CITA
const agregarCita = async (e) => {
  e.preventDefault();
  const cita = $('#citaCita').val().trim();
  const contenido = $('#citaContenido').val().trim();
  const $btn = $('#btnCitaSubmit');

  if (!cita || !contenido) return Notificacion('Completa todos los campos', 'error');

  wiSpin($btn, true, 'Guardando...');
  try {
    await addDoc(collection(db, 'wicitas'), {
      cita,
      contenido,
      timestamp: serverTimestamp(),
      autor: auth.currentUser.email
    });
    cerrarModal('citaModal');
    $('#citaForm')[0].reset();
    Notificacion('Cita agregada correctamente', 'success');
    cargarCitas();
  } catch (error) {
    console.error('Error al agregar cita:', error);
    Notificacion('Error al guardar la cita', 'error');
  } finally {
    wiSpin($btn, false);
  }
};

// 🗑️ ELIMINAR CITA
const eliminarCita = async function () {
  if (!confirm('¿Eliminar esta cita bíblica?')) return;
  const id = $(this).data('id');
  try {
    await deleteDoc(doc(db, 'wicitas', id));
    Notificacion('Cita eliminada', 'success');
    cargarCitas();
  } catch (error) {
    console.error('Error al eliminar:', error);
    Notificacion('Error al eliminar la cita', 'error');
  }
};

// Modal para agregar cita (inyectar en DOM)
$(() => {
  $('body').append(`
    <div class="modal" id="citaModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Agregar Nueva Cita Bíblica</h3>
          <button class="close-modal">&times;</button>
        </div>
        <form id="citaForm">
          <div class="form-group">
            <label>Referencia (ej: Juan 3:16)</label>
            <input type="text" id="citaCita" placeholder="Salmo 23:1" required>
          </div>
          <div class="form-group">
            <label>Contenido de la cita</label>
            <textarea id="citaContenido" rows="4" placeholder="El Señor es mi pastor..." required></textarea>
          </div>
          <button type="submit" class="btn-auth" id="btnCitaSubmit">Guardar Cita</button>
        </form>
      </div>
    </div>
  `);
});