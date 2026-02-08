import './citas.css';
import $ from 'jquery';
import { db } from '../smile/firebase.js';
import { collection, query, where, doc, setDoc, updateDoc, deleteDoc, onSnapshot, serverTimestamp, getDocs } from 'firebase/firestore';
import { getls, savels, removels, Notificacion, abrirModal, cerrarTodos, wiSpin } from '../widev.js';

export const citas = () => {
  const CACHE_KEY = 'wiFrases';
  let todas = [], filtradas = [], mostradas = 0, smile = getls('wiSmile'), sub = null;
  let categorias = [], categoriasVisibles = 5, mostrarTodas = false;
  const porCarga = 4, inicial = 8;

  // ==================== RENDER HTML ====================
  $('#citas').html(`
    <div class="wicitas">
      <div class="citas_hero"><h1><i class="fas fa-book-open"></i> Frases Bíblicas</h1><p>Versículos que fortalecen tu fe</p></div>
      <div class="citas_ctrl">
        <div class="categorias_wrapper">
          <div class="categorias_list"></div>
          <button class="btn_ver_mas dpn"><i class="fas fa-chevron-down"></i> Ver más</button>
        </div>
        <div class="citas_filtros">
          <select class="citas_orden">
            <option value="favoritas">⭐ Favoritas</option>
            <option value="recientes">🆕 Más recientes</option>
            <option value="antiguas">📅 Más antiguas</option>
          </select>
          ${smile?.email ? '<button class="citas_add"><i class="fas fa-plus"></i> Nuevo</button>' : ''}
        </div>
      </div>
      <div class="phrs">${'<div class="phr skc"></div>'.repeat(6)}</div>
      <div class="load_more_section" id="loadMoreSection" style="display:none;">
        <button class="btn_load_more" id="btnLoadMore"><i class="fas fa-chevron-down"></i><span>Cargar Más</span></button>
      </div>
    </div>
  `);

  // ==================== FUNCIONES RENDER ====================
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const renderCategorias = () => {
    const limite = mostrarTodas ? categorias.length : categoriasVisibles;
    const cats = categorias.slice(0, limite);
    $('.categorias_list').html(`
      <button class="cat_btn active" data-cat="todas"><i class="fas fa-book"></i> Todas <span>(${todas.length})</span></button>
      ${cats.map(c => `<button class="cat_btn" data-cat="${c.nombre}">${c.nombre} <span>(${c.count})</span></button>`).join('')}
    `);
    $('.btn_ver_mas').toggle(categorias.length > categoriasVisibles && !mostrarTodas).html(`<i class="fas fa-chevron-${mostrarTodas ? 'up' : 'down'}"></i> ${mostrarTodas ? 'Ver menos' : 'Ver más'}`);
  };

  const renderFrases = (cant = inicial, reset = false) => {
    const $c = $('.phrs');
    if (reset) {
      $c.find('.phr_dinamica, .frases_empty').remove();
      $c.find('.skc').remove();
      mostradas = 0;
    }

    if (!filtradas.length) {
      $c.append('<div class="frases_empty"><i class="fas fa-bible"></i><p>No hay frases en esta categoría</p></div>');
      $('#loadMoreSection').hide();
      return;
    }

    $('.frases_empty').remove();
    const desde = mostradas;
    const hasta = mostradas + cant;
    
    filtradas.slice(desde, hasta).forEach((f, i) => {
      const esMia = smile?.email === f.email;
      const fecha = new Date(f.actualizado?.seconds * 1000 || f.creado?.seconds * 1000).toLocaleDateString();
      const nombreCapitalizado = capitalize(f.nombreShow || f.usuario);
      
      $c.append(`
        <div class="phr phr_dinamica ${f.favorito ? 'favorito' : ''}" style="animation-delay:${i * 0.05}s;opacity:0" data-id="${f.id}">
          ${esMia ? `<div class="phr_acciones">
            <button class="phr_btn btn_editar" data-id="${f.id}"><i class="fas fa-edit"></i></button>
            <button class="phr_btn btn_eliminar" data-id="${f.id}"><i class="fas fa-trash-alt"></i></button>
          </div>` : ''}
          ${f.favorito || esMia ? `<div class="phr_estrella ${f.favorito ? 'active' : ''} ${esMia ? 'editable' : ''}" data-id="${f.id}"><i class="fas fa-star"></i></div>` : ''}
          <div class="phr_content">
            <p class="phr_cita">"${f.cita}"</p>
            <cite class="phr_ref">- ${f.libro}</cite>
          </div>
          <div class="phr_footer">
            <span><i class="fas fa-calendar-alt"></i> ${fecha}</span>
            <span><i class="fas fa-user"></i> ${nombreCapitalizado}</span>
          </div>
        </div>
      `);
    });

    setTimeout(() => $c.find('.phr_dinamica:not(.visible)').addClass('visible'), 50);
    mostradas = hasta;
    mostradas < filtradas.length ? $('#loadMoreSection').fadeIn(200) : $('#loadMoreSection').fadeOut(200);
  };

  // ==================== FUNCIONES FIREBASE ====================
  const modal = (id = null) => {
    if (!smile?.email) return Notificacion('Inicia sesión', 'warning');
    const f = id ? todas.find(x => x.id === id) : null;
    const nombre = smile.usuario || smile.nombre || smile.email.split('@')[0];
    
    $('#mdFrase').remove();
    $('body').append(`
      <div id="mdFrase" class="wiModal">
        <div class="modalBody">
          <button class="modalX"><i class="fas fa-times"></i></button>
          <div class="modal_hd"><h3><i class="fas fa-${f ? 'edit' : 'plus'}"></i> ${f ? 'Editar' : 'Nueva'} Frase</h3></div>
          <div class="modal_body">
            <div class="form_grp"><label><i class="fas fa-quote-left"></i> Cita *</label><textarea class="md-cita" rows="4" maxlength="500" placeholder="Cita bíblica...">${f?.cita || ''}</textarea></div>
            <div class="form_grp"><label><i class="fas fa-book"></i> Referencia *</label><input class="md-libro" maxlength="100" placeholder="Ej: Salmo 23:1" value="${f?.libro || ''}"></div>
            <div class="form_grp"><label><i class="fas fa-tag"></i> Categoría *</label><input class="md-categoria" maxlength="50" placeholder="Ej: Gracias, Perdón, Amor..." value="${f?.categoria || ''}"></div>
            <div class="form_row">
              <div class="form_grp"><label><i class="fas fa-sort-numeric-up"></i> Orden</label><input type="number" class="md-orden" min="1" value="${f?.orden || todas.length + 1}"></div>
              <div class="form_grp"><label><i class="fas fa-user"></i> Nombre *</label><input class="md-nombreShow" maxlength="50" value="${f?.nombreShow || nombre}"></div>
            </div>
            <div class="form_row">
              <div class="form_check"><input type="checkbox" id="md-favorito" ${f?.favorito ? 'checked' : ''}><label for="md-favorito"><i class="fas fa-star"></i> Favorita</label></div>
              <div class="form_check"><input type="checkbox" id="md-publico" ${f?.publico !== false ? 'checked' : ''}><label for="md-publico"><i class="fas fa-eye"></i> Pública</label></div>
            </div>
          </div>
          <div class="modal_ftr"><button class="btn_pri md_guardar" data-id="${id || ''}"><i class="fas fa-save"></i> Guardar</button></div>
        </div>
      </div>
    `);
    abrirModal('mdFrase');
    $('.md-cita').focus();
  };

  const guardar = async function() {
    const cita = $('.md-cita').val().trim(), libro = $('.md-libro').val().trim(), nombreShow = $('.md-nombreShow').val().trim(), categoria = $('.md-categoria').val().trim();
    const orden = parseInt($('.md-orden').val()) || todas.length + 1, favorito = $('#md-favorito').is(':checked'), publico = $('#md-publico').is(':checked'), id = $(this).data('id');
    
    if (!cita || !libro || !nombreShow || !categoria) return Notificacion('Completa todos los campos', 'warning');
    if (cita.length > 500) return Notificacion('Cita muy larga (máx. 500)', 'warning');
    
    try {
      wiSpin(this, true);
      const datos = { cita, libro, categoria, nombreShow, orden, favorito, publico, usuario: smile.usuario || smile.email.split('@')[0], email: smile.email };
      id ? await updateDoc(doc(db, 'wicitas', id), { ...datos, actualizado: serverTimestamp() }) : await setDoc(doc(db, 'wicitas', `cita_${Date.now()}`), { ...datos, creado: serverTimestamp(), actualizado: serverTimestamp() });
      Notificacion(id ? 'Actualizada ✓' : 'Agregada ✓', 'success');
      removels(CACHE_KEY);
      cerrarTodos();
    } catch (e) {
      console.error(e);
      Notificacion('Error al guardar', 'error');
    } finally {
      wiSpin(this, false);
    }
  };

  const favorito = async function(e) {
    e.stopPropagation();
    if (!$(this).hasClass('editable')) return;
    const id = $(this).data('id'), f = todas.find(x => x.id === id);
    if (!f || smile?.email !== f.email) return Notificacion('Sin permisos', 'warning');
    try {
      const nuevo = !f.favorito;
      $(this).toggleClass('active').closest('.phr').toggleClass('favorito');
      await updateDoc(doc(db, 'wicitas', id), { favorito: nuevo, actualizado: serverTimestamp() });
      removels(CACHE_KEY);
    } catch (e) {
      console.error(e);
      Notificacion('Error', 'error');
      $(this).toggleClass('active').closest('.phr').toggleClass('favorito');
    }
  };

  const editar = function(e) {
    e.stopPropagation();
    const f = todas.find(x => x.id === $(this).data('id'));
    (!f || smile?.email !== f.email) ? Notificacion('Sin permisos', 'warning') : modal(f.id);
  };

  const eliminar = async function(e) {
    e.stopPropagation();
    const id = $(this).data('id'), f = todas.find(x => x.id === id);
    if (!f || smile?.email !== f.email) return Notificacion('Sin permisos', 'warning');
    if (!confirm(`¿Eliminar "${f.libro}"?`)) return;
    try {
      await deleteDoc(doc(db, 'wicitas', id));
      $(this).closest('.phr').fadeOut(300, function() { $(this).remove(); });
      removels(CACHE_KEY);
      Notificacion('Eliminada ✓', 'success');
    } catch (e) {
      console.error(e);
      Notificacion('Error', 'error');
    }
  };

  // ==================== EVENTOS ====================
  window.addEventListener('wiFresh', (e) => { smile = e.detail; });
  
  $(document).on('click', '.cat_btn', function() {
    $('.cat_btn').removeClass('active');
    $(this).addClass('active');
    const cat = $(this).data('cat');
    filtradas = cat === 'todas' ? [...todas] : todas.filter(f => f.categoria === cat);
    const orden = $('.citas_orden').val();
    filtradas.sort((a, b) => orden === 'favoritas' ? (b.favorito - a.favorito) || (b.actualizado?.seconds || 0) - (a.actualizado?.seconds || 0) : orden === 'recientes' ? (b.actualizado?.seconds || b.creado?.seconds || 0) - (a.actualizado?.seconds || a.creado?.seconds || 0) : (a.actualizado?.seconds || a.creado?.seconds || 0) - (b.actualizado?.seconds || b.creado?.seconds || 0));
    renderFrases(inicial, true);
  }).on('change', '.citas_orden', function() {
    $('.cat_btn.active').trigger('click');
  }).on('click', '.btn_ver_mas', () => {
    mostrarTodas = !mostrarTodas;
    renderCategorias();
  }).on('click', '.citas_add', () => modal())
    .on('click', '#btnLoadMore', function() {
      wiSpin(this, true, 'Cargando');
      setTimeout(() => {
        renderFrases(porCarga);
        const lastCard = $('.phrs .phr').last();
        if (lastCard.length && lastCard.offset()) $('html, body').animate({ scrollTop: lastCard.offset().top - 100 }, 350);
        wiSpin(this, false, 'Cargar Más');
      }, 500);
    })
    .on('click', '.md_guardar', guardar)
    .on('click', '.phr_estrella', favorito)
    .on('click', '.btn_editar', editar)
    .on('click', '.btn_eliminar', eliminar);

  // ==================== INICIALIZACIÓN ====================
  const cache = getls(CACHE_KEY);
  if (cache) {
    todas = filtradas = cache;
    categorias = [...new Set(todas.map(f => f.categoria).filter(Boolean))].map(c => ({ nombre: c, count: todas.filter(f => f.categoria === c).length })).sort((a, b) => b.count - a.count);
    renderCategorias();
    renderFrases(inicial, true);
  }
  
  sub = onSnapshot(query(collection(db, 'wicitas'), where('publico', '==', true)), snap => {
    const publicas = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    if (smile?.email) {
      getDocs(query(collection(db, 'wicitas'), where('email', '==', smile.email))).then(snapPriv => {
        const mias = snapPriv.docs.map(d => ({ id: d.id, ...d.data() }));
        todas = filtradas = [...publicas.filter(p => p.email !== smile.email), ...mias].sort((a, b) => (b.favorito - a.favorito) || (b.actualizado?.seconds || 0) - (a.actualizado?.seconds || 0));
        categorias = [...new Set(todas.map(f => f.categoria).filter(Boolean))].map(c => ({ nombre: c, count: todas.filter(f => f.categoria === c).length })).sort((a, b) => b.count - a.count);
        savels(CACHE_KEY, todas);
        renderCategorias();
        renderFrases(inicial, true);
      });
    } else {
      todas = filtradas = publicas.sort((a, b) => (b.favorito - a.favorito) || (b.actualizado?.seconds || 0) - (a.actualizado?.seconds || 0));
      categorias = [...new Set(todas.map(f => f.categoria).filter(Boolean))].map(c => ({ nombre: c, count: todas.filter(f => f.categoria === c).length })).sort((a, b) => b.count - a.count);
      savels(CACHE_KEY, todas);
      renderCategorias();
      renderFrases(inicial, true);
    }
  }, e => { console.error(e); Notificacion('Cargando desde caché', 'info'); });

  console.log('📖 Citas cargado');
};