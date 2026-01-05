import{$ as o}from"./jquery-DduPepyT.js";import{d}from"./init-BP-p3_J4.js";import{k as z,q as _,c as $,l as y,d as p,a as u,s as M,m as N}from"./firebase-B7KIcX3F.js";import{g as k,e as P,N as l,b as F,r as v,f as q,a as B,s as S}from"./widev-DLeh02I3.js";import"./vendor-B2AETYxa.js";const O=()=>{let t=[],r=k("wiSmile"),b=null;window.addEventListener("wiFresh",i=>{r=i.detail,n()});const n=()=>{const i=o(".phrs");i.find(".phr_dinamica, .phr_add, .frases_empty").remove(),t.length?t.forEach((a,s)=>{const e=r?.email===a.email,c=P(a.actualizado||a.creado).get(a.actualizado||a.creado,"DD/MM/YYYY");i.append(`
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
        `)}):i.append('<div class="frases_empty"><i class="fas fa-bible"></i><p>No hay frases todavía</p><p class="text-muted">¡Sé el primero en agregar una!</p></div>'),r?.email&&i.append(`<div class="phr phr_add" style="animation-delay: ${t.length*.15}s"><i class="fas fa-plus"></i><span>Agregar más citas</span></div>`)},h=(i=null)=>{if(!r?.email)return l("Debes iniciar sesión","warning");const a=i?t.find(e=>e.id===i):null,s=r.usuario||r.nombre||r.email.split("@")[0];o("#mdFrase").remove(),o("body").append(`
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
                <input type="number" class="md-orden" min="1" value="${a?.orden||t.length+1}">
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
    `),B("mdFrase"),o(".md-cita").focus()},x=async function(){const i=o(".md-cita").val().trim(),a=o(".md-libro").val().trim(),s=o(".md-nombreShow").val().trim(),e=parseInt(o(".md-orden").val())||t.length+1,c=o("#md-favorito").is(":checked"),m=o("#md-publico").is(":checked"),w=o(this).data("id");if(!i||!a||!s)return l("Completa todos los campos","warning");if(i.length>500)return l("Cita muy larga (máx. 500)","warning");try{F(this,!0);const f={cita:i,libro:a,nombreShow:s,orden:e,favorito:c,publico:m,usuario:r.usuario||r.email.split("@")[0],email:r.email};w?(await y(p(d,"wicitas",w),{...f,actualizado:u()}),l("Frase actualizada","success")):(await M(p(d,"wicitas",`cita_${Date.now()}`),{...f,creado:u(),actualizado:u()}),l("Frase agregada","success")),v("wiFrases"),q()}catch(f){console.error(f),l("Error al guardar","error")}finally{F(this,!1)}},E=async function(i){i.stopPropagation();const a=o(this).data("id"),s=t.find(e=>e.id===a);if(!s||r?.email!==s.email)return l("Sin permisos","warning");try{const e=!s.favorito;o(this).toggleClass("active").closest(".phr").toggleClass("favorito"),await y(p(d,"wicitas",a),{favorito:e,actualizado:u()}),v("wiFrases")}catch(e){console.error(e),l("Error al actualizar","error"),o(this).toggleClass("active").closest(".phr").toggleClass("favorito")}},C=function(i){i.stopPropagation();const a=t.find(s=>s.id===o(this).data("id"));!a||r?.email!==a.email?l("Sin permisos","warning"):h(o(this).data("id"))},D=async function(i){i.stopPropagation();const a=o(this).data("id"),s=t.find(e=>e.id===a);if(!s||r?.email!==s.email)return l("Sin permisos","warning");if(confirm(`¿Eliminar "${s.libro}"?`))try{await N(p(d,"wicitas",a)),o(this).closest(".phr").fadeOut(300,function(){o(this).remove()}),v("wiFrases"),l("Frase eliminada","success")}catch(e){console.error(e),l("Error al eliminar","error")}};o(document).on("click",".md_guardar",x).on("click",".btn_favorito",E).on("click",".btn_editar",C).on("click",".btn_eliminar",D).on("click",".phr_add",()=>h());const g=k("wiFrases");return g&&(t=g,n()),b=z(_($(d,"wicitas"),where("publico","==",!0)),i=>{const a=i.docs.map(s=>({id:s.id,...s.data()}));r?.email?getDocs(_($(d,"wicitas"),where("email","==",r.email),where("publico","==",!1))).then(s=>{const e=s.docs.map(c=>({id:c.id,...c.data()}));t=[...a,...e].sort((c,m)=>m.favorito-c.favorito||(c.orden||0)-(m.orden||0)),S("wiFrases",t),n()}):(t=a.sort((s,e)=>e.favorito-s.favorito||(s.orden||0)-(e.orden||0)),S("wiFrases",t),n())},i=>{console.error(i),l("Cargando desde caché","info")}),()=>{b?.(),window.removeEventListener("wiFresh",n),o(document).off("click",".md_guardar").off("click",".btn_favorito").off("click",".btn_editar").off("click",".btn_eliminar").off("click",".phr_add"),o("#mdFrase").remove(),console.log("📖 Citas limpiado")}};export{O as wiCitas};
