import './musica.css';
import $ from 'jquery';
import { db } from '../smile/firebase.js';
import { collection, query, orderBy, doc, updateDoc, deleteDoc, onSnapshot, serverTimestamp, setDoc, where, getDocs } from 'firebase/firestore';
import { savels, getls, removels, Notificacion, wiSpin } from '../widev.js';

export const wiMusica = () => {
  let canciones = [], smile = getls('wiSmile'), unsubscribe = null;
  const audio = new Audio();
  const state = { actual: null, playing: false, repeat: false, volume: 0.7, editando: null };

  const renderUI = () => {
    $('#musica').html(`
      <div class='mwb mus_container ${smile?.email ? 'autenticado' : 'no_auth'}'>
        <div class='mus_lista'>
          <div class='mus_player'>
            <div class='mus_player_info'>
              <span id='musActual'>🎵 Selecciona una canción</span>
            </div>
            <div class='mus_player_ctrls dpc'>
              <button class='mus_ctrl' id='musPrev'><i class='fas fa-backward'></i></button>
              <button class='mus_ctrl mus_play' id='musPlay'><i class='fas fa-play'></i></button>
              <button class='mus_ctrl' id='musNext'><i class='fas fa-forward'></i></button>
              <button class='mus_ctrl' id='musRep'><i class='fas fa-repeat'></i></button>
              ${smile?.email ? '<button class="mus_ctrl" id="musFav"><i class="fas fa-star"></i></button>' : ''}
            </div>
            <div class='mus_pgc'>
              <div class='mus_pgb'><div class='mus_pg'></div></div>
              <div class='mus_time dpw'><span id='musCur'>0:00</span><span id='musDur'>0:00</span></div>
            </div>
          </div>
          
          <div class='mus_plst'>
            <div class='mus_plh dpw'>
              <span class='mus_ttl'>🎵 Lista de Música (${canciones.length})</span>
              <input id='musSrc' placeholder='🔍 Buscar...' type='text'/>
            </div>
            <div class='mus_pls' id='musPls'></div>
          </div>
        </div>
        
        ${smile?.email ? `
          <div class='mus_form'>
            <div class='mus_form_hd'>
              <h3><i class='fas fa-music'></i> <span id='formTitle'>Agregar Canción</span></h3>
            </div>
            <div class='mus_form_body'>
              <div class='form_grp'>
                <label><i class='fas fa-font'></i> Nombre *</label>
                <input class='mus_inp_nombre' maxlength='100' placeholder='Nombre de la canción'>
              </div>
              <div class='form_grp'>
                <label><i class='fas fa-microphone'></i> Cantante *</label>
                <input class='mus_inp_cantante' maxlength='100' placeholder='Artista o intérprete'>
              </div>
              <div class='form_grp'>
                <label><i class='fas fa-link'></i> URL MP3 *</label>
                <input class='mus_inp_url' placeholder='https://.../cancion.mp3'>
                <small>Enlace directo al archivo .mp3</small>
              </div>
              <div class='form_grp'>
                <label><i class='fas fa-tag'></i> Categoría</label>
                <select class='mus_inp_tag'>
                  <option value='alabanza'>🎵 Alabanza</option>
                  <option value='adoracion'>⛪ Adoración</option>
                  <option value='reflexion'>🧘 Reflexión</option>
                </select>
              </div>
              <div class='form_checks'>
                <div class='form_check'>
                  <input type='checkbox' id='musFavorito'>
                  <label for='musFavorito'><i class='fas fa-star'></i> Favorita</label>
                </div>
                <div class='form_check'>
                  <input type='checkbox' id='musPublico' checked>
                  <label for='musPublico'><i class='fas fa-eye'></i> Pública</label>
                </div>
              </div>
              <div class='form_btns dpw'>
                <button class='btn_sec' id='musClear'><i class='fas fa-times'></i> Limpiar</button>
                <button class='btn_pri mus_guardar'><i class='fas fa-save'></i> <span>Guardar</span></button>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `);
    renderCanciones();
  };

  window.addEventListener('wiFresh', (e) => {
    smile = e.detail;
    renderUI();
  });

  const fmt = s => isNaN(s) ? '0:00' : `${~~(s/60)}:${String(~~(s%60)).padStart(2,'0')}`;

  const renderCanciones = () => {
    const $pls = $('#musPls');
    $pls.empty();
    
    if (!canciones.length) {
      return $pls.html('<div class="mus_empty"><i class="fas fa-music"></i><p>No hay canciones todavía</p></div>');
    }
    
    canciones.forEach((c, i) => {
      const activa = state.actual?.id === c.id;
      const esMia = smile?.email === c.email;
      
      $pls.append(`
        <div class="mus_pi ${activa?'active':''} ${c.favorito?'fav':''}" data-id="${c.id}">
          <span class="mus_n">${i + 1}</span>
          <div class="mus_pi_info">
            <span class="mus_t">${c.nombre}</span>
            <small class="mus_a">${c.cantante}</small>
          </div>
          ${esMia ? `
            <div class="mus_acts">
              <button class="mus_act mus_act_fav ${c.favorito?'active':''}" data-id="${c.id}" title="Favorito"><i class="fas fa-star"></i></button>
              <button class="mus_act mus_act_edit" data-id="${c.id}" title="Editar"><i class="fas fa-edit"></i></button>
              <button class="mus_act mus_act_del" data-id="${c.id}" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
            </div>
          ` : ''}
        </div>
      `);
    });
  };

  const load = cancion => {
    if (!cancion) return;
    state.actual = cancion;
    audio.src = cancion.url;
    $('#musActual').text(`${cancion.nombre} - ${cancion.cantante}`);
    $('.mus_pi').removeClass('active').filter(`[data-id="${cancion.id}"]`).addClass('active')[0]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    $('#musFav').toggleClass('active', cancion.favorito);
    saveState();
  };

  const play = () => {
    if (!state.actual) {
      if (!canciones.length) return Notificacion('No hay canciones', 'warning');
      load(canciones[0]);
    }
    audio.play().then(() => {
      state.playing = true;
      $('#musPlay i').attr('class', 'fas fa-pause');
      Notificacion(`🎵 ${state.actual.nombre}`, 'info', 2000);
    }).catch(() => Notificacion('Error al reproducir', 'error'));
  };

  const pause = () => {
    audio.pause();
    state.playing = false;
    $('#musPlay i').attr('class', 'fas fa-play');
  };

  const next = () => {
    if (!canciones.length) return;
    const idx = canciones.findIndex(c => c.id === state.actual?.id);
    const siguiente = canciones[idx + 1] || canciones[0];
    load(siguiente);
    play();
  };

  const prev = () => {
    if (!canciones.length) return;
    const idx = canciones.findIndex(c => c.id === state.actual?.id);
    const anterior = canciones[idx - 1] || canciones[canciones.length - 1];
    load(anterior);
    play();
  };

  audio.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audio;
    if (isNaN(duration)) return;
    $('#musCur').text(fmt(currentTime));
    $('#musDur').text(fmt(duration));
    $('.mus_pg').css('width', `${(currentTime / duration) * 100}%`);
  });

  audio.addEventListener('ended', () => state.repeat ? (audio.currentTime = 0, play()) : next());
  audio.addEventListener('loadedmetadata', () => $('#musDur').text(fmt(audio.duration)));

  $(document).on('click', '#musPlay', () => state.playing ? pause() : play());
  $(document).on('click', '#musPrev', prev);
  $(document).on('click', '#musNext', next);
  $(document).on('click', '#musRep', function() {
    state.repeat = !state.repeat;
    $(this).toggleClass('active');
    saveState();
  });

  $(document).on('click', '#musFav', async function() {
    if (!state.actual || smile?.email !== state.actual.email) return Notificacion('Sin permisos', 'warning');
    const nuevo = !state.actual.favorito;
    try {
      $(this).toggleClass('active');
      await updateDoc(doc(db, 'wimusica', state.actual.id), { favorito: nuevo, actualizado: serverTimestamp() });
      state.actual.favorito = nuevo;
      removels('wiMusica');
    } catch (e) {
      console.error(e);
      $(this).toggleClass('active');
      Notificacion('Error', 'error');
    }
  });

  $(document).on('click', '.mus_pgb', function(e) {
    if (!audio.duration) return;
    audio.currentTime = (e.offsetX / $(this).width()) * audio.duration;
  });

  $(document).on('click', '.mus_pi', function(e) {
    if ($(e.target).closest('.mus_acts').length) return;
    const id = $(this).data('id');
    const cancion = canciones.find(c => c.id === id);
    if (!cancion) return;
    state.actual?.id === id ? (state.playing ? pause() : play()) : (load(cancion), play());
  });

  $(document).on('input', '#musSrc', function() {
    const q = $(this).val().toLowerCase();
    $('.mus_pi').each(function() {
      $(this).toggle($(this).text().toLowerCase().includes(q));
    });
  });

  const limpiarForm = () => {
    $('.mus_inp_nombre, .mus_inp_cantante, .mus_inp_url').val('');
    $('.mus_inp_tag').val('alabanza');
    $('#musFavorito').prop('checked', false);
    $('#musPublico').prop('checked', true);
    state.editando = null;
    $('#formTitle').text('Agregar Canción');
    $('.mus_guardar span').text('Guardar');
    $('.mus_guardar i').attr('class', 'fas fa-save');
  };

  $(document).on('click', '#musClear', limpiarForm);

  $(document).on('click', '.mus_act_fav', async function(e) {
    e.stopPropagation();
    const id = $(this).data('id');
    const c = canciones.find(x => x.id === id);
    if (!c || smile?.email !== c.email) return Notificacion('Sin permisos', 'warning');
    const nuevo = !c.favorito;
    try {
      $(this).toggleClass('active');
      $(this).closest('.mus_pi').toggleClass('fav');
      await updateDoc(doc(db, 'wimusica', id), { favorito: nuevo, actualizado: serverTimestamp() });
      c.favorito = nuevo;
      removels('wiMusica');
    } catch (e) {
      console.error(e);
      $(this).toggleClass('active');
      $(this).closest('.mus_pi').toggleClass('fav');
      Notificacion('Error', 'error');
    }
  });

  $(document).on('click', '.mus_act_edit', function(e) {
    e.stopPropagation();
    const c = canciones.find(x => x.id === $(this).data('id'));
    if (!c || smile?.email !== c.email) return Notificacion('Sin permisos', 'warning');
    
    state.editando = c.id;
    $('.mus_inp_nombre').val(c.nombre);
    $('.mus_inp_cantante').val(c.cantante);
    $('.mus_inp_url').val(c.url);
    $('.mus_inp_tag').val(c.tag || 'alabanza');
    $('#musFavorito').prop('checked', c.favorito);
    $('#musPublico').prop('checked', c.publico !== false);
    $('#formTitle').text('Editar Canción');
    $('.mus_guardar span').text('Actualizar');
    $('.mus_guardar i').attr('class', 'fas fa-edit');
    $('.mus_inp_nombre').focus();
    $('.mus_form')[0]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  $(document).on('click', '.mus_act_del', async function(e) {
    e.stopPropagation();
    const id = $(this).data('id');
    const c = canciones.find(x => x.id === id);
    if (!c || smile?.email !== c.email) return Notificacion('Sin permisos', 'warning');
    if (!confirm(`¿Eliminar "${c.nombre}"?`)) return;
    
    try {
      await deleteDoc(doc(db, 'wimusica', id));
      $(this).closest('.mus_pi').fadeOut(300, function() { $(this).remove(); });
      if (state.actual?.id === id) {
        pause();
        state.actual = null;
        $('#musActual').text('🎵 Selecciona una canción');
      }
      removels('wiMusica');
      Notificacion('🗑️ Eliminada', 'success');
    } catch (e) {
      console.error(e);
      Notificacion('Error', 'error');
    }
  });

  $(document).on('click', '.mus_guardar', async function() {
    const nombre = $('.mus_inp_nombre').val().trim();
    const cantante = $('.mus_inp_cantante').val().trim();
    const url = $('.mus_inp_url').val().trim();
    const tag = $('.mus_inp_tag').val();
    const favorito = $('#musFavorito').is(':checked');
    const publico = $('#musPublico').is(':checked');
    
    if (!nombre || !cantante || !url) return Notificacion('Completa todos los campos', 'warning');
    if (!url.toLowerCase().includes('.mp3')) return Notificacion('Debe ser .mp3', 'warning');
    
    try {
      wiSpin(this, true);
      const datos = {
        nombre,
        cantante,
        url,
        tag,
        favorito,
        publico,
        usuario: smile.usuario || smile.email.split('@')[0],
        email: smile.email
      };
      
      if (state.editando) {
        await updateDoc(doc(db, 'wimusica', state.editando), { ...datos, actualizado: serverTimestamp() });
        Notificacion('✅ Actualizada', 'success');
      } else {
        await setDoc(doc(db, 'wimusica', `musica_${Date.now()}`), {
          ...datos,
          creado: serverTimestamp(),
          actualizado: serverTimestamp()
        });
        Notificacion('✅ Agregada', 'success');
      }
      
      removels('wiMusica');
      limpiarForm();
    } catch (e) {
      console.error(e);
      Notificacion('Error', 'error');
    } finally {
      wiSpin(this, false);
    }
  });

  const saveState = () => {
    if (state.actual) savels('musActual', state.actual.id, 168);
    savels('musVol', state.volume, 168);
    savels('musRep', state.repeat, 168);
  };

  const loadState = () => {
    const actualId = getls('musActual');
    if (actualId) {
      const cancion = canciones.find(c => c.id === actualId);
      cancion && load(cancion);
    }
    const vol = getls('musVol');
    vol !== null && (audio.volume = state.volume = vol);
    getls('musRep') && (state.repeat = true, $('#musRep').addClass('active'));
  };

  const cache = getls('wiMusica');
  cache && (canciones = cache, renderUI(), loadState());

  unsubscribe = onSnapshot(
    query(
      collection(db, 'wimusica'),
      orderBy('creado', 'desc')
    ),
    async (snap) => {
      // ✅ Filtrar públicas en cliente (evita índice compuesto)
      const todasCanciones = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      
      if (smile?.email) {
        // AUTENTICADO: mostrar públicas + mis privadas
        const misCanciones = todasCanciones.filter(c => c.email === smile.email);
        const publicas = todasCanciones.filter(c => c.email !== smile.email && c.publico !== false);
        
        canciones = [...misCanciones, ...publicas].sort((a, b) => {
          if (a.favorito !== b.favorito) return b.favorito - a.favorito;
          return (b.creado?.seconds || 0) - (a.creado?.seconds || 0);
        });
      } else {
        // NO AUTENTICADO: solo públicas
        canciones = todasCanciones
          .filter(c => c.publico !== false)
          .sort((a, b) => {
            if (a.favorito !== b.favorito) return b.favorito - a.favorito;
            return (b.creado?.seconds || 0) - (a.creado?.seconds || 0);
          });
      }
      
      savels('wiMusica', canciones, 168);
      if (!cache) renderUI();
      else renderCanciones();
      !cache && loadState();
    },
    () => Notificacion('Desde caché', 'info', 2000)
  );

  renderUI();

  return () => {
    unsubscribe?.();
    audio.pause();
    audio.src = '';
    window.removeEventListener('wiFresh', renderUI);
    $(document).off('click');
    console.log('🎵 Música limpiado');
  };
};