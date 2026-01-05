import{$ as s}from"./jquery-DduPepyT.js";import{d as c}from"./init-DdA15ngG.js";import{k as E,q as C,l as D,c as z,m as _,d as n,a as m,s as B,n as M}from"./firebase-2Ha1qU0L.js";import{getls as w,wiDate as P,Notificacion as t,wiSpin as $,removels as u,cerrarTodos as q,abrirModal as N,savels as Y}from"./widev-DUJVx96k.js";import"./vendor-B2AETYxa.js";const j=()=>{let l=[],e=w("wiSmile"),v=null;window.addEventListener("wiFresh",i=>{e=i.detail,d()});const d=()=>{const i=s(".phrs");i.find(".phr_dinamica, .phr_add, .frases_empty").remove(),l.length?l.forEach((a,o)=>{const r=e?.email===a.email,f=P(a.actualizado||a.creado).get(a.actualizado||a.creado,"DD/MM/YYYY");i.append(`
          <div class="phr phr_dinamica ${a.favorito?"favorito":""}" style="animation-delay: ${o*.15}s" data-id="${a.id}">
            ${r?`
              <div class="phr_acciones">
                <button class="phr_btn btn_favorito ${a.favorito?"active":""}" data-id="${a.id}"><i class="fas fa-star"></i></button>
                <button class="phr_btn btn_editar" data-id="${a.id}"><i class="fas fa-edit"></i></button>
                <button class="phr_btn btn_eliminar" data-id="${a.id}"><i class="fas fa-trash-alt"></i></button>
              </div>
            `:""}
            <div class="phr_content">
              <p class="phr_cita">"${a.cita}"</p>
              <cite class="phr_ref">- ${a.libro}</cite>
            </div>
            <div class="phr_footer">
              <span>${f} - Por ${a.nombreShow||a.usuario}</span>
            </div>
          </div>
        `)}):i.append('<div class="frases_empty"><i class="fas fa-bible"></i><p>No hay frases todavía</p><p class="text-muted">¡Sé el primero en agregar una!</p></div>'),e?.email&&i.append(`<div class="phr phr_add" style="animation-delay: ${l.length*.15}s"><i class="fas fa-plus"></i><span>Agregar más citas</span></div>`)},b=(i=null)=>{if(!e?.email)return t("Debes iniciar sesión","warning");const a=i?l.find(r=>r.id===i):null,o=e.usuario||e.nombre||e.email.split("@")[0];s("#mdFrase").remove(),s("body").append(`
      <div id="mdFrase" class="wiModal">
        <div class="modalBody">
          <button class="modalX"><i class="fas fa-times"></i></button>
          <div class="modal_hd"><h3><i class="fas fa-${a?"edit":"plus"}"></i> ${a?"Editar":"Nueva"} Frase Bíblica</h3></div>
          <div class="modal_body">
            <div class="form_grp">
              <label><i class="fas fa-quote-left"></i> Cita Bíblica *</label>
              <textarea class="md-cita" rows="4" maxlength="500" placeholder="Escribe la cita bíblica aquí...">${a?.cita||""}</textarea>
              <small class="text-muted">Máximo 500 caracteres</small>
            </div>
            <div class="form_grp">
              <label><i class="fas fa-book"></i> Referencia Bíblica *</label>
              <input class="md-libro" maxlength="100" placeholder="Ej: Salmo 23:1" value="${a?.libro||""}">
            </div>
            <div class="form_row">
              <div class="form_grp">
                <label><i class="fas fa-sort-numeric-up"></i> Orden</label>
                <input type="number" class="md-orden" min="1" value="${a?.orden||l.length+1}">
              </div>
              <div class="form_grp">
                <label><i class="fas fa-user"></i> Nombre Público *</label>
                <input class="md-nombreShow" maxlength="50" placeholder="Tu nombre" value="${a?.nombreShow||o}">
              </div>
            </div>
            <div class="form_row">
              <div class="form_check">
                <input type="checkbox" id="md-favorito" ${a?.favorito?"checked":""}>
                <label for="md-favorito"><i class="fas fa-star"></i> Favorita?</label>
              </div>
              <div class="form_check">
                <input type="checkbox" id="md-publico" ${a?.publico!==!1?"checked":""}>
                <label for="md-publico"><i class="fas fa-eye"></i> Hacer pública</label>
              </div>
            </div>
          </div>
          <div class="modal_ftr">
            <button class="btn_pri md_guardar" data-id="${i||""}"><i class="fas fa-${a?"save":"plus"}"></i> ${a?"Actualizar":"Guardar"}</button>
          </div>
        </div>
      </div>
    `),N("mdFrase"),s(".md-cita").focus()},y=async function(){const i=s(".md-cita").val().trim(),a=s(".md-libro").val().trim(),o=s(".md-nombreShow").val().trim(),r=parseInt(s(".md-orden").val())||l.length+1,f=s("#md-favorito").is(":checked"),x=s("#md-publico").is(":checked"),g=s(this).data("id");if(!i||!a||!o)return t("Completa todos los campos","warning");if(i.length>500)return t("Cita muy larga (máx. 500)","warning");try{$(this,!0);const p={cita:i,libro:a,nombreShow:o,orden:r,favorito:f,publico:x,usuario:e.usuario||e.email.split("@")[0],email:e.email};g?(await _(n(c,"wicitas",g),{...p,actualizado:m()}),t("Frase actualizada","success")):(await B(n(c,"wicitas",`cita_${Date.now()}`),{...p,creado:m(),actualizado:m()}),t("Frase agregada","success")),u("wiFrases"),q()}catch{t("Error al guardar","error")}finally{$(this,!1)}},k=async function(i){i.stopPropagation();const a=s(this).data("id"),o=l.find(r=>r.id===a);if(!o||e?.email!==o.email)return t("Sin permisos","warning");try{const r=!o.favorito;s(this).toggleClass("active").closest(".phr").toggleClass("favorito"),await _(n(c,"wicitas",a),{favorito:r,actualizado:m()}),u("wiFrases")}catch{t("Error al actualizar","error"),s(this).toggleClass("active").closest(".phr").toggleClass("favorito")}},F=function(i){i.stopPropagation();const a=l.find(o=>o.id===s(this).data("id"));!a||e?.email!==a.email?t("Sin permisos","warning"):b(s(this).data("id"))},S=async function(i){i.stopPropagation();const a=s(this).data("id"),o=l.find(r=>r.id===a);if(!o||e?.email!==o.email)return t("Sin permisos","warning");if(confirm(`¿Eliminar "${o.libro}"?`))try{await M(n(c,"wicitas",a)),s(this).closest(".phr").fadeOut(300,function(){s(this).remove()}),u("wiFrases"),t("Frase eliminada","success")}catch{t("Error al eliminar","error")}};s(document).on("click",".md_guardar",y).on("click",".btn_favorito",k).on("click",".btn_editar",F).on("click",".btn_eliminar",S).on("click",".phr_add",()=>b());const h=w("wiFrases");return h&&(l=h,d()),v=E(C(z(c,"wicitas"),D("creado","desc")),i=>{l=i.docs.map(a=>({id:a.id,...a.data()})).sort((a,o)=>o.favorito-a.favorito||(a.orden||0)-(o.orden||0)),Y("wiFrases",l),d()},i=>{t("Cargando desde caché","info")}),()=>{v?.(),window.removeEventListener("wiFresh",d),s(document).off("click",".md_guardar").off("click",".btn_favorito").off("click",".btn_editar").off("click",".btn_eliminar").off("click",".phr_add"),s("#mdFrase").remove()}};export{j as wiCitas};
