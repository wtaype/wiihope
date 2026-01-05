import{g as w,$ as s,a as C,N as r,b as _,r as u,c as z,d as D,s as B}from"./widev-C0ACljq9.js";import{g as N,i as A,a as I,o as M,q as P,b as j,c as q,u as $,d as m,s as p,e as Y,f as H}from"./firebase-Bx3K95Ib.js";import"./vendor-B2AETYxa.js";const O={apiKey:"AIzaSyBjxEEEZ83B7wSwHlNNHjhdxna_XOyEWwU",authDomain:"wiihope.firebaseapp.com",projectId:"wiihope",storageBucket:"wiihope.firebasestorage.app",messagingSenderId:"966620743950",appId:"1:966620743950:web:0e7770708166ba08e66f5f"},y=A(O);I(y);const l=N(y),X=()=>{let c=[],t=w("wiSmile"),b=null;window.addEventListener("wiFresh",i=>{t=i.detail,n()});const n=()=>{const i=s(".phrs");i.find(".phr_dinamica, .phr_add, .frases_empty").remove(),c.length?c.forEach((a,e)=>{const o=t?.email===a.email,f=C(a.actualizado||a.creado).get(a.actualizado||a.creado,"DD/MM/YYYY");i.append(`
          <div class="phr phr_dinamica ${a.favorito?"favorito":""}" style="animation-delay: ${e*.15}s" data-id="${a.id}">
            ${o?`
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
        `)}):i.append('<div class="frases_empty"><i class="fas fa-bible"></i><p>No hay frases todavía</p><p class="text-muted">¡Sé el primero en agregar una!</p></div>'),t?.email&&i.append(`<div class="phr phr_add" style="animation-delay: ${c.length*.15}s"><i class="fas fa-plus"></i><span>Agregar más citas</span></div>`)},v=(i=null)=>{if(!t?.email)return r("Debes iniciar sesión","warning");const a=i?c.find(o=>o.id===i):null,e=t.usuario||t.nombre||t.email.split("@")[0];s("#mdFrase").remove(),s("body").append(`
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
                <input type="number" class="md-orden" min="1" value="${a?.orden||c.length+1}">
              </div>
              <div class="form_grp">
                <label><i class="fas fa-user"></i> Nombre Público *</label>
                <input class="md-nombreShow" maxlength="50" placeholder="Tu nombre" value="${a?.nombreShow||e}">
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
    `),D("mdFrase"),s(".md-cita").focus()},k=async function(){const i=s(".md-cita").val().trim(),a=s(".md-libro").val().trim(),e=s(".md-nombreShow").val().trim(),o=parseInt(s(".md-orden").val())||c.length+1,f=s("#md-favorito").is(":checked"),x=s("#md-publico").is(":checked"),g=s(this).data("id");if(!i||!a||!e)return r("Completa todos los campos","warning");if(i.length>500)return r("Cita muy larga (máx. 500)","warning");try{_(this,!0);const d={cita:i,libro:a,nombreShow:e,orden:o,favorito:f,publico:x,usuario:t.usuario||t.email.split("@")[0],email:t.email};g?(await $(m(l,"wicitas",g),{...d,actualizado:p()}),r("Frase actualizada","success")):(await Y(m(l,"wicitas",`cita_${Date.now()}`),{...d,creado:p(),actualizado:p()}),r("Frase agregada","success")),u("wiFrases"),z()}catch(d){console.error(d),r("Error al guardar","error")}finally{_(this,!1)}},F=async function(i){i.stopPropagation();const a=s(this).data("id"),e=c.find(o=>o.id===a);if(!e||t?.email!==e.email)return r("Sin permisos","warning");try{const o=!e.favorito;s(this).toggleClass("active").closest(".phr").toggleClass("favorito"),await $(m(l,"wicitas",a),{favorito:o,actualizado:p()}),u("wiFrases")}catch(o){console.error(o),r("Error al actualizar","error"),s(this).toggleClass("active").closest(".phr").toggleClass("favorito")}},E=function(i){i.stopPropagation();const a=c.find(e=>e.id===s(this).data("id"));!a||t?.email!==a.email?r("Sin permisos","warning"):v(s(this).data("id"))},S=async function(i){i.stopPropagation();const a=s(this).data("id"),e=c.find(o=>o.id===a);if(!e||t?.email!==e.email)return r("Sin permisos","warning");if(confirm(`¿Eliminar "${e.libro}"?`))try{await H(m(l,"wicitas",a)),s(this).closest(".phr").fadeOut(300,function(){s(this).remove()}),u("wiFrases"),r("Frase eliminada","success")}catch(o){console.error(o),r("Error al eliminar","error")}};s(document).on("click",".md_guardar",k).on("click",".btn_favorito",F).on("click",".btn_editar",E).on("click",".btn_eliminar",S).on("click",".phr_add",()=>v());const h=w("wiFrases");return h&&(c=h,n()),b=M(P(q(l,"wicitas"),j("creado","desc")),i=>{c=i.docs.map(a=>({id:a.id,...a.data()})).sort((a,e)=>e.favorito-a.favorito||(a.orden||0)-(e.orden||0)),B("wiFrases",c),n()},i=>{console.error(i),r("Cargando desde caché","info")}),()=>{b?.(),window.removeEventListener("wiFresh",n),s(document).off("click",".md_guardar").off("click",".btn_favorito").off("click",".btn_editar").off("click",".btn_eliminar").off("click",".phr_add"),s("#mdFrase").remove(),console.log("📖 Citas limpiado")}};export{X as wiCitas};
