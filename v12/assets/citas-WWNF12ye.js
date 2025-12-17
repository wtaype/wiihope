import{g as b,$ as s,N as e,c as u,r as f,h as _,j as w,s as $}from"./main-DzzBqIwH.js";import{d as c}from"./init-C9_gHB69.js";import{o as y,q as F,e as k,c as x,u as h,d as m,b as n,s as C,a as q}from"./firebase-BK5RP8AR.js";import"./vendor-B2AETYxa.js";let l=b("wiSmile"),o=[];const v=()=>{const t=s(".phrs");t.find(".phr_dinamica, .phr_add, .frases_empty").remove(),o.length?o.forEach(a=>{const i=l?.email===a.email;t.append(`
        <div class="phr phr_dinamica ani ${a.favorito?"favorito":""}" data-id="${a.id}">
          ${i?`
            <div class="phr_acciones">
              <button class="phr_btn btn_favorito ${a.favorito?"active":""}" data-id="${a.id}"><i class="fas fa-star"></i></button>
              <button class="phr_btn btn_editar" data-id="${a.id}"><i class="fas fa-edit"></i></button>
              <button class="phr_btn btn_eliminar" data-id="${a.id}"><i class="fas fa-trash-alt"></i></button>
            </div>
          `:""}
          <blockquote class="sld"><p class="bqt">"${a.cita}"</p><cite class="bqa">- ${a.libro}</cite></blockquote>
        </div>
      `)}):t.append('<div class="frases_empty ani anip"><i class="fas fa-bible"></i><p>No hay frases todavía</p><p class="text-muted">¡Sé el primero en agregar una!</p></div>'),l?.email&&t.append('<div class="phr phr_add ani"><i class="fas fa-plus"></i><span>Agregar más citas</span></div>'),setTimeout(()=>s(".phrs .ani").addClass("anip"),100)};(()=>{const t=b("wiFrases");t&&(o=t,v()),y(F(x(c,"wicitas"),k("creado","desc")),a=>{o=a.docs.map(i=>({id:i.id,...i.data()})).sort((i,r)=>r.favorito-i.favorito||(i.orden||0)-(r.orden||0)),$("wiFrases",o),v()},a=>{console.error(a),e("Cargando desde caché","info")})})();const g=(t=null)=>{if(!l?.email)return e("Debes iniciar sesión","warning");const a=t?o.find(r=>r.id===t):null,i=!!a;s("#mdFrase").remove(),s("body").append(`
    <div id="mdFrase" class="wiModal">
      <div class="modalBody">
        <button class="modalX"><i class="fas fa-times"></i></button>
        <div class="modal_hd"><h3><i class="fas fa-${i?"edit":"plus"}"></i> ${i?"Editar":"Nueva"} Frase Bíblica</h3></div>
        <div class="modal_body">
          <div class="form_grp">
            <label><i class="fas fa-quote-left"></i> Cita Bíblica *</label>
            <textarea class="md-cita" rows="4" maxlength="500" placeholder="Escribe la cita bíblica aquí...">${a?.cita||""}</textarea>
            <small class="text-muted">Máximo 500 caracteres</small>
          </div>
          <div class="form_grp">
            <label><i class="fas fa-book"></i> Referencia Bíblica *</label>
            <input class="md-libro" maxlength="100" placeholder="Ej: Salmo 23:1" value="${a?.libro||""}">
            <small class="text-muted">Libro, capítulo y versículo</small>
          </div>
          <div class="form_grp">
            <label><i class="fas fa-sort-numeric-up"></i> Orden</label>
            <input type="number" class="md-orden" min="1" value="${a?.orden||o.length+1}">
            <small class="text-muted">Menor número = aparece primero</small>
          </div>
          <div class="form_check">
            <input type="checkbox" id="md-favorito" ${a?.favorito?"checked":""}>
            <label for="md-favorito"><i class="fas fa-star"></i> Marcar como favorita</label>
          </div>
        </div>
        <div class="modal_ftr">
          
          <button class="btn_pri md_guardar" data-id="${t||""}"><i class="fas fa-${i?"save":"plus"}"></i> ${i?"Actualizar":"Guardar"}</button>
        </div>
      </div>
    </div>
  `),w("mdFrase"),s("#mdFrase .md-cita").focus()};s(document).on("click",".md_guardar",async function(){const t=s(".md-cita").val().trim(),a=s(".md-libro").val().trim(),i=parseInt(s(".md-orden").val())||o.length+1,r=s("#md-favorito").is(":checked"),p=s(this).data("id");if(!t||!a)return e("Completa todos los campos","warning");if(t.length>500)return e("Cita muy larga (máx. 500)","warning");try{u(this,!0);const d={cita:t,libro:a,orden:i,favorito:r,usuario:l.usuario||l.email.split("@")[0],email:l.email};p?(await h(m(c,"wicitas",p),{...d,actualizado:n()}),e("Frase actualizada","success")):(await C(m(c,"wicitas",`cita_${Date.now()}`),{...d,creado:n(),actualizado:n()}),e("Frase agregada","success")),f("wiFrases"),_()}catch(d){console.error(d),e("Error al guardar","error")}finally{u(this,!1)}});s(document).on("click",".btn_favorito",async function(t){t.stopPropagation();const a=s(this).data("id"),i=o.find(r=>r.id===a);if(!i||l?.email!==i.email)return e("Sin permisos","warning");try{const r=!i.favorito;s(this).toggleClass("active").closest(".phr").toggleClass("favorito"),await h(m(c,"wicitas",a),{favorito:r,actualizado:n()}),f("wiFrases")}catch(r){console.error(r),e("Error al actualizar","error"),s(this).toggleClass("active").closest(".phr").toggleClass("favorito")}});s(document).on("click",".btn_editar",function(t){t.stopPropagation();const a=o.find(i=>i.id===s(this).data("id"));if(!a||l?.email!==a.email)return e("Sin permisos","warning");g(s(this).data("id"))});s(document).on("click",".btn_eliminar",async function(t){t.stopPropagation();const a=s(this).data("id"),i=o.find(r=>r.id===a);if(!i||l?.email!==i.email)return e("Sin permisos","warning");if(confirm(`¿Eliminar "${i.libro}"?`))try{await q(m(c,"wicitas",a)),s(this).closest(".phr").fadeOut(300,()=>s(this).remove()),f("wiFrases"),e("Frase eliminada","success")}catch(r){console.error(r),e("Error al eliminar","error")}});s(document).on("click",".phr_add",()=>g());
