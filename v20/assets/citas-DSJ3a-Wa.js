import{$ as o}from"./jquery-DduPepyT.js";import{d}from"./init-BP-p3_J4.js";import{k as M,q as $,w as v,c as y,l as k,d as p,a as u,s as N,m as P}from"./firebase-B7KIcX3F.js";import{g as F,e as q,N as l,b as S,r as b,f as B,a as Y,s as x}from"./widev-DLeh02I3.js";import"./vendor-B2AETYxa.js";const j=()=>{let r=[],t=F("wiSmile"),h=null;window.addEventListener("wiFresh",i=>{t=i.detail,n()});const n=()=>{const i=o(".phrs");i.find(".phr_dinamica, .phr_add, .frases_empty").remove(),r.length&&i.find(".skc").remove(),r.length?r.forEach((a,s)=>{const e=t?.email===a.email,c=q(a.actualizado||a.creado).get(a.actualizado||a.creado,"DD/MM/YYYY");i.append(`
        <div class="phr phr_dinamica ${a.favorito?"favorito":""}" style="animation-delay: ${s*.15}s" data-id="${a.id}">
          ${e?`
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
            <span>${c} - Por ${a.nombreShow||a.usuario}</span>
          </div>
        </div>
      `)}):i.append('<div class="frases_empty"><i class="fas fa-bible"></i><p>No hay frases todavía</p><p class="text-muted">¡Sé el primero en agregar una!</p></div>'),t?.email&&i.append(`<div class="phr phr_add" style="animation-delay: ${r.length*.15}s"><i class="fas fa-plus"></i><span>Agregar más citas</span></div>`)},g=(i=null)=>{if(!t?.email)return l("Debes iniciar sesión","warning");const a=i?r.find(e=>e.id===i):null,s=t.usuario||t.nombre||t.email.split("@")[0];o("#mdFrase").remove(),o("body").append(`
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
                <input type="number" class="md-orden" min="1" value="${a?.orden||r.length+1}">
              </div>
              <div class="form_grp">
                <label><i class="fas fa-user"></i> Nombre Público *</label>
                <input class="md-nombreShow" maxlength="50" placeholder="Tu nombre" value="${a?.nombreShow||s}">
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
    `),Y("mdFrase"),o(".md-cita").focus()},E=async function(){const i=o(".md-cita").val().trim(),a=o(".md-libro").val().trim(),s=o(".md-nombreShow").val().trim(),e=parseInt(o(".md-orden").val())||r.length+1,c=o("#md-favorito").is(":checked"),m=o("#md-publico").is(":checked"),_=o(this).data("id");if(!i||!a||!s)return l("Completa todos los campos","warning");if(i.length>500)return l("Cita muy larga (máx. 500)","warning");try{S(this,!0);const f={cita:i,libro:a,nombreShow:s,orden:e,favorito:c,publico:m,usuario:t.usuario||t.email.split("@")[0],email:t.email};_?(await k(p(d,"wicitas",_),{...f,actualizado:u()}),l("Frase actualizada","success")):(await N(p(d,"wicitas",`cita_${Date.now()}`),{...f,creado:u(),actualizado:u()}),l("Frase agregada","success")),b("wiFrases"),B()}catch(f){console.error(f),l("Error al guardar","error")}finally{S(this,!1)}},C=async function(i){i.stopPropagation();const a=o(this).data("id"),s=r.find(e=>e.id===a);if(!s||t?.email!==s.email)return l("Sin permisos","warning");try{const e=!s.favorito;o(this).toggleClass("active").closest(".phr").toggleClass("favorito"),await k(p(d,"wicitas",a),{favorito:e,actualizado:u()}),b("wiFrases")}catch(e){console.error(e),l("Error al actualizar","error"),o(this).toggleClass("active").closest(".phr").toggleClass("favorito")}},D=function(i){i.stopPropagation();const a=r.find(s=>s.id===o(this).data("id"));!a||t?.email!==a.email?l("Sin permisos","warning"):g(o(this).data("id"))},z=async function(i){i.stopPropagation();const a=o(this).data("id"),s=r.find(e=>e.id===a);if(!s||t?.email!==s.email)return l("Sin permisos","warning");if(confirm(`¿Eliminar "${s.libro}"?`))try{await P(p(d,"wicitas",a)),o(this).closest(".phr").fadeOut(300,function(){o(this).remove()}),b("wiFrases"),l("Frase eliminada","success")}catch(e){console.error(e),l("Error al eliminar","error")}};o(document).on("click",".md_guardar",E).on("click",".btn_favorito",C).on("click",".btn_editar",D).on("click",".btn_eliminar",z).on("click",".phr_add",()=>g());const w=F("wiFrases");return w&&(r=w,n()),h=M($(y(d,"wicitas"),v("publico","==",!0)),i=>{const a=i.docs.map(s=>({id:s.id,...s.data()}));t?.email?getDocs($(y(d,"wicitas"),v("email","==",t.email),v("publico","==",!1))).then(s=>{const e=s.docs.map(c=>({id:c.id,...c.data()}));r=[...a,...e].sort((c,m)=>m.favorito-c.favorito||(c.orden||0)-(m.orden||0)),x("wiFrases",r),n()}):(r=a.sort((s,e)=>e.favorito-s.favorito||(s.orden||0)-(e.orden||0)),x("wiFrases",r),n())},i=>{console.error(i),l("Cargando desde caché","info")}),()=>{h?.(),window.removeEventListener("wiFresh",n),o(document).off("click",".md_guardar").off("click",".btn_favorito").off("click",".btn_editar").off("click",".btn_eliminar").off("click",".phr_add"),o("#mdFrase").remove(),console.log("📖 Citas limpiado")}};export{j as wiCitas};
