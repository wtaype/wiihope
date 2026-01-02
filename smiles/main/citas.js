import $ from 'jquery';
import { db } from '../../firebase/init.js';
import { collection, query, orderBy, doc, setDoc, updateDoc, deleteDoc, onSnapshot, serverTimestamp, Timestamp } from 'firebase/firestore';
import { getls, savels, removels, Notificacion, abrirModal, wiDate, cerrarTodos, wiSpin } from '../widev.js';

export const wiCitas = () => {
  let frases = [];
  let smile = getls('wiSmile');
  let unsubscribe = null;

  window.addEventListener('wiFresh', (e) => { smile = e.detail; renderFrases(); }); //Actualiza citas

  // 🎨 RENDERIZAR
  const renderFrases = () => {
    const container = $('.phrs');
    container.find('.phr_dinamica, .phr_add, .frases_empty').remove();
    
    if (!frases.length) {
      container.append('<div class="frases_empty ani anip"><i class="fas fa-bible"></i><p>No hay frases todavía</p><p class="text-muted">¡Sé el primero en agregar una!</p></div>');
    } else {
      frases.forEach(f => {
        const esCreador = smile?.email === f.email;
        container.append(`
          <div class="phr phr_dinamica ani ${f.favorito ? 'favorito' : ''}" data-id="${f.id}">
            ${esCreador ? `
              <div class="phr_acciones">
                <button class="phr_btn btn_favorito ${f.favorito ? 'active' : ''}" data-id="${f.id}"><i class="fas fa-star"></i></button>
                <button class="phr_btn btn_editar" data-id="${f.id}"><i class="fas fa-edit"></i></button>
                <button class="phr_btn btn_eliminar" data-id="${f.id}"><i class="fas fa-trash-alt"></i></button>
              </div>
            ` : ''}
            <blockquote class="sld"><p class="bqt">"${f.cita}"</p><cite class="bqa">- ${f.libro}</cite></blockquote>
          </div>
        `);
      });
    }
    
    if (smile?.email) container.append('<div class="phr phr_add ani"><i class="fas fa-plus"></i><span>Agregar más citas</span></div>');
    setTimeout(() => $('.phrs .ani').addClass('anip'), 100);
  };

  // 📝 MODAL
  const modalFrase = (id = null) => {
    if (!smile?.email) return Notificacion('Debes iniciar sesión', 'warning');
    const f = id ? frases.find(x => x.id === id) : null;
    const edit = !!f;
    
    $('#mdFrase').remove();
    $('body').append(`
      <div id="mdFrase" class="wiModal">
        <div class="modalBody">
          <button class="modalX"><i class="fas fa-times"></i></button>
          <div class="modal_hd"><h3><i class="fas fa-${edit ? 'edit' : 'plus'}"></i> ${edit ? 'Editar' : 'Nueva'} Frase Bíblica</h3></div>
          <div class="modal_body">
            <div class="form_grp">
              <label><i class="fas fa-quote-left"></i> Cita Bíblica *</label>
              <textarea class="md-cita" rows="4" maxlength="500" placeholder="Escribe la cita bíblica aquí...">${f?.cita || ''}</textarea>
              <small class="text-muted">Máximo 500 caracteres</small>
            </div>
            <div class="form_grp">
              <label><i class="fas fa-book"></i> Referencia Bíblica *</label>
              <input class="md-libro" maxlength="100" placeholder="Ej: Salmo 23:1" value="${f?.libro || ''}">
              <small class="text-muted">Libro, capítulo y versículo</small>
            </div>
            <div class="form_grp">
              <label><i class="fas fa-sort-numeric-up"></i> Orden</label>
              <input type="number" class="md-orden" min="1" value="${f?.orden || frases.length + 1}">
              <small class="text-muted">Menor número = aparece primero</small>
            </div>
            <div class="form_check">
              <input type="checkbox" id="md-favorito" ${f?.favorito ? 'checked' : ''}>
              <label for="md-favorito"><i class="fas fa-star"></i> Marcar como favorita</label>
            </div>
          </div>
          <div class="modal_ftr">
            <button class="btn_pri md_guardar" data-id="${id || ''}"><i class="fas fa-${edit ? 'save' : 'plus'}"></i> ${edit ? 'Actualizar' : 'Guardar'}</button>
          </div>
        </div>
      </div>
    `);
    abrirModal('mdFrase');
    $('#mdFrase .md-cita').focus();
  };

  // 💾 GUARDAR
  const onGuardar = async function() {
    const cita = $('.md-cita').val().trim();
    const libro = $('.md-libro').val().trim();
    const orden = parseInt($('.md-orden').val()) || frases.length + 1;
    const favorito = $('#md-favorito').is(':checked');
    const id = $(this).data('id');
    
    if (!cita || !libro) return Notificacion('Completa todos los campos', 'warning');
    if (cita.length > 500) return Notificacion('Cita muy larga (máx. 500)', 'warning');
    
    try {
      wiSpin(this, true);
      const datos = { cita, libro, orden, favorito, usuario: smile.usuario || smile.email.split('@')[0], email: smile.email };
      
      if (id) {
        await updateDoc(doc(db, 'wicitas', id), { ...datos, actualizado: serverTimestamp() });
        Notificacion('Frase actualizada', 'success');
      } else {
        await setDoc(doc(db, 'wicitas', `cita_${Date.now()}`), { ...datos, creado: serverTimestamp(), actualizado: serverTimestamp() });
        Notificacion('Frase agregada', 'success');
      }
      
      removels('wiFrases');
      cerrarTodos();
    } catch (e) {
      console.error(e);
      Notificacion('Error al guardar', 'error');
    } finally {
      wiSpin(this, false);
    }
  };

  // ⭐ FAVORITO
  const onFavorito = async function(e) {
    e.stopPropagation();
    const id = $(this).data('id');
    const f = frases.find(x => x.id === id);
    if (!f || smile?.email !== f.email) return Notificacion('Sin permisos', 'warning');
    
    try {
      const nuevo = !f.favorito;
      $(this).toggleClass('active').closest('.phr').toggleClass('favorito');
      await updateDoc(doc(db, 'wicitas', id), { favorito: nuevo, actualizado: serverTimestamp() });
      removels('wiFrases');
    } catch (e) {
      console.error(e);
      Notificacion('Error al actualizar', 'error');
      $(this).toggleClass('active').closest('.phr').toggleClass('favorito');
    }
  };

  // ✏️ EDITAR
  const onEditar = function(e) {
    e.stopPropagation();
    const f = frases.find(x => x.id === $(this).data('id'));
    if (!f || smile?.email !== f.email) return Notificacion('Sin permisos', 'warning');
    modalFrase($(this).data('id'));
  };

  // 🗑️ ELIMINAR
  const onEliminar = async function(e) {
    e.stopPropagation();
    const id = $(this).data('id');
    const f = frases.find(x => x.id === id);
    if (!f || smile?.email !== f.email) return Notificacion('Sin permisos', 'warning');
    if (!confirm(`¿Eliminar "${f.libro}"?`)) return;
    try {
      await deleteDoc(doc(db, 'wicitas', id));
      $(this).closest('.phr').fadeOut(300, function() { $(this).remove(); });
      removels('wiFrases');
      Notificacion('Frase eliminada', 'success');
    } catch (e) {
      console.error(e);
      Notificacion('Error al eliminar', 'error');
    }
  };

  // 🎧 Event Listeners
  $(document).on('click', '.md_guardar', onGuardar);
  $(document).on('click', '.btn_favorito', onFavorito);
  $(document).on('click', '.btn_editar', onEditar);
  $(document).on('click', '.btn_eliminar', onEliminar);
  $(document).on('click', '.phr_add', () => modalFrase());

  // 🔄 Cargar datos
  const cache = getls('wiFrases');
  if (cache) {
    frases = cache;
    renderFrases();
  }
  
  unsubscribe = onSnapshot(
    query(collection(db, 'wicitas'), orderBy('creado', 'desc')),
    (snap) => {
      frases = snap.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.favorito - a.favorito) || (a.orden || 0) - (b.orden || 0));
      savels('wiFrases', frases);
      renderFrases();
    },
    (e) => {
      console.error(e);
      Notificacion('Cargando desde caché', 'info');
    }
  );

  // 🧹 Cleanup
  return () => {
    if (unsubscribe) unsubscribe();
    window.removeEventListener('wiFresh', renderFrases); // ✅ AGREGAR ESTA LÍNEA
    $(document).off('click', '.md_guardar', onGuardar);
    $(document).off('click', '.btn_favorito', onFavorito);
    $(document).off('click', '.btn_editar', onEditar);
    $(document).off('click', '.btn_eliminar', onEliminar);
    $(document).off('click', '.phr_add');
    $('#mdFrase').remove();
    frases = [];
    
    console.log('📖 Citas limpiado');
  };
};