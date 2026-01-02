import{g as y,$ as i,N as e,a as F,r as p,c as x,b as C,s as E}from"./main-Cx6eND33.js";import{d as l}from"./init-BETm3AxJ.js";import{o as q,q as S,a as z,c as B,u as k,d as m,s as f,b as D,e as M}from"./firebase-03f_o6lD.js";import"./vendor-B2AETYxa.js";const A=()=>{let r=[],c=y("wiSmile"),u=null;window.addEventListener("wiFresh",s=>{c=s.detail,n()});const n=()=>{const s=i(".phrs");s.find(".phr_dinamica, .phr_add, .frases_empty").remove(),r.length?r.forEach(a=>{const t=c?.email===a.email;s.append(`
          <div class="phr phr_dinamica ani ${a.favorito?"favorito":""}" data-id="${a.id}">
            ${t?`
              <div class="phr_acciones">
                <button class="phr_btn btn_favorito ${a.favorito?"active":""}" data-id="${a.id}"><i class="fas fa-star"></i></button>
                <button class="phr_btn btn_editar" data-id="${a.id}"><i class="fas fa-edit"></i></button>
                <button class="phr_btn btn_eliminar" data-id="${a.id}"><i class="fas fa-trash-alt"></i></button>
              </div>
            `:""}
            <blockquote class="sld"><p class="bqt">"${a.cita}"</p><cite class="bqa">- ${a.libro}</cite></blockquote>
          </div>
        `)}):s.append('<div class="frases_empty ani anip"><i class="fas fa-bible"></i><p>No hay frases todavía</p><p class="text-muted">¡Sé el primero en agregar una!</p></div>'),c?.email&&s.append('<div class="phr phr_add ani"><i class="fas fa-plus"></i><span>Agregar más citas</span></div>'),setTimeout(()=>i(".phrs .ani").addClass("anip"),100)},v=(s=null)=>{if(!c?.email)return e("Debes iniciar sesión","warning");const a=s?r.find(o=>o.id===s):null,t=!!a;i("#mdFrase").remove(),i("body").append(`
      <div id="mdFrase" class="wiModal">
        <div class="modalBody">
          <button class="modalX"><i class="fas fa-times"></i></button>
          <div class="modal_hd"><h3><i class="fas fa-${t?"edit":"plus"}"></i> ${t?"Editar":"Nueva"} Frase Bíblica</h3></div>
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
              <input type="number" class="md-orden" min="1" value="${a?.orden||r.length+1}">
              <small class="text-muted">Menor número = aparece primero</small>
            </div>
            <div class="form_check">
              <input type="checkbox" id="md-favorito" ${a?.favorito?"checked":""}>
              <label for="md-favorito"><i class="fas fa-star"></i> Marcar como favorita</label>
            </div>
          </div>
          <div class="modal_ftr">
            <button class="btn_pri md_guardar" data-id="${s||""}"><i class="fas fa-${t?"save":"plus"}"></i> ${t?"Actualizar":"Guardar"}</button>
          </div>
        </div>
      </div>
    `),C("mdFrase"),i("#mdFrase .md-cita").focus()},b=async function(){const s=i(".md-cita").val().trim(),a=i(".md-libro").val().trim(),t=parseInt(i(".md-orden").val())||r.length+1,o=i("#md-favorito").is(":checked"),$=i(this).data("id");if(!s||!a)return e("Completa todos los campos","warning");if(s.length>500)return e("Cita muy larga (máx. 500)","warning");try{F(this,!0);const d={cita:s,libro:a,orden:t,favorito:o,usuario:c.usuario||c.email.split("@")[0],email:c.email};$?(await k(m(l,"wicitas",$),{...d,actualizado:f()}),e("Frase actualizada","success")):(await D(m(l,"wicitas",`cita_${Date.now()}`),{...d,creado:f(),actualizado:f()}),e("Frase agregada","success")),p("wiFrases"),x()}catch(d){console.error(d),e("Error al guardar","error")}finally{F(this,!1)}},h=async function(s){s.stopPropagation();const a=i(this).data("id"),t=r.find(o=>o.id===a);if(!t||c?.email!==t.email)return e("Sin permisos","warning");try{const o=!t.favorito;i(this).toggleClass("active").closest(".phr").toggleClass("favorito"),await k(m(l,"wicitas",a),{favorito:o,actualizado:f()}),p("wiFrases")}catch(o){console.error(o),e("Error al actualizar","error"),i(this).toggleClass("active").closest(".phr").toggleClass("favorito")}},g=function(s){s.stopPropagation();const a=r.find(t=>t.id===i(this).data("id"));if(!a||c?.email!==a.email)return e("Sin permisos","warning");v(i(this).data("id"))},_=async function(s){s.stopPropagation();const a=i(this).data("id"),t=r.find(o=>o.id===a);if(!t||c?.email!==t.email)return e("Sin permisos","warning");if(confirm(`¿Eliminar "${t.libro}"?`))try{await M(m(l,"wicitas",a)),i(this).closest(".phr").fadeOut(300,function(){i(this).remove()}),p("wiFrases"),e("Frase eliminada","success")}catch(o){console.error(o),e("Error al eliminar","error")}};i(document).on("click",".md_guardar",b),i(document).on("click",".btn_favorito",h),i(document).on("click",".btn_editar",g),i(document).on("click",".btn_eliminar",_),i(document).on("click",".phr_add",()=>v());const w=y("wiFrases");return w&&(r=w,n()),u=q(S(B(l,"wicitas"),z("creado","desc")),s=>{r=s.docs.map(a=>({id:a.id,...a.data()})).sort((a,t)=>t.favorito-a.favorito||(a.orden||0)-(t.orden||0)),E("wiFrases",r),n()},s=>{console.error(s),e("Cargando desde caché","info")}),()=>{u&&u(),window.removeEventListener("wiFresh",n),i(document).off("click",".md_guardar",b),i(document).off("click",".btn_favorito",h),i(document).off("click",".btn_editar",g),i(document).off("click",".btn_eliminar",_),i(document).off("click",".phr_add"),i("#mdFrase").remove(),r=[],console.log("📖 Citas limpiado")}};export{A as wiCitas};
