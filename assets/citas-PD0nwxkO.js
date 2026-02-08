import{g as x,$ as t,w as $,d as h,N as n,a as O,r as S,c as G,s as F}from"./main-DYTJreox.js";import{n as H,q as D,w as T,f as N,p as A,d as y,b as C,s as K,r as R,e as U}from"./firebase-JzOrHdc0.js";import"./main-fyJN7TfT.js";import"./vendor-B2AETYxa.js";const W=()=>{const f="wiFrases";let c=[],d=[],b=0,l=x("wiSmile"),u=[],z=5,p=!1;const B=4,g=8;t("#citas").html(`
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
          ${l?.email?'<button class="citas_add"><i class="fas fa-plus"></i> Nuevo</button>':""}
        </div>
      </div>
      <div class="phrs">${'<div class="phr skc"></div>'.repeat(6)}</div>
      <div class="load_more_section" id="loadMoreSection" style="display:none;">
        <button class="btn_load_more" id="btnLoadMore"><i class="fas fa-chevron-down"></i><span>Cargar Más</span></button>
      </div>
    </div>
  `);const L=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),w=()=>{const s=p?u.length:z,i=u.slice(0,s);t(".categorias_list").html(`
      <button class="cat_btn active" data-cat="todas"><i class="fas fa-book"></i> Todas <span>(${c.length})</span></button>
      ${i.map(a=>`<button class="cat_btn" data-cat="${a.nombre}">${a.nombre} <span>(${a.count})</span></button>`).join("")}
    `),t(".btn_ver_mas").toggle(u.length>z&&!p).html(`<i class="fas fa-chevron-${p?"up":"down"}"></i> ${p?"Ver menos":"Ver más"}`)},_=(s=g,i=!1)=>{const a=t(".phrs");if(i&&(a.find(".phr_dinamica, .frases_empty").remove(),a.find(".skc").remove(),b=0),!d.length){a.append('<div class="frases_empty"><i class="fas fa-bible"></i><p>No hay frases en esta categoría</p></div>'),t("#loadMoreSection").hide();return}t(".frases_empty").remove();const o=b,r=b+s;d.slice(o,r).forEach((e,k)=>{const m=l?.email===e.email,v=new Date(e.actualizado?.seconds*1e3||e.creado?.seconds*1e3).toLocaleDateString(),I=L(e.nombreShow||e.usuario);a.append(`
        <div class="phr phr_dinamica ${e.favorito?"favorito":""}" style="animation-delay:${k*.05}s;opacity:0" data-id="${e.id}">
          ${m?`<div class="phr_acciones">
            <button class="phr_btn btn_editar" data-id="${e.id}"><i class="fas fa-edit"></i></button>
            <button class="phr_btn btn_eliminar" data-id="${e.id}"><i class="fas fa-trash-alt"></i></button>
          </div>`:""}
          ${e.favorito||m?`<div class="phr_estrella ${e.favorito?"active":""} ${m?"editable":""}" data-id="${e.id}"><i class="fas fa-star"></i></div>`:""}
          <div class="phr_content">
            <p class="phr_cita">"${e.cita}"</p>
            <cite class="phr_ref">- ${e.libro}</cite>
          </div>
          <div class="phr_footer">
            <span><i class="fas fa-calendar-alt"></i> ${v}</span>
            <span><i class="fas fa-user"></i> ${I}</span>
          </div>
        </div>
      `)}),setTimeout(()=>a.find(".phr_dinamica:not(.visible)").addClass("visible"),50),b=r,b<d.length?t("#loadMoreSection").fadeIn(200):t("#loadMoreSection").fadeOut(200)},M=(s=null)=>{if(!l?.email)return n("Inicia sesión","warning");const i=s?c.find(o=>o.id===s):null,a=l.usuario||l.nombre||l.email.split("@")[0];t("#mdFrase").remove(),t("body").append(`
      <div id="mdFrase" class="wiModal">
        <div class="modalBody">
          <button class="modalX"><i class="fas fa-times"></i></button>
          <div class="modal_hd"><h3><i class="fas fa-${i?"edit":"plus"}"></i> ${i?"Editar":"Nueva"} Frase</h3></div>
          <div class="modal_body">
            <div class="form_grp"><label><i class="fas fa-quote-left"></i> Cita *</label><textarea class="md-cita" rows="4" maxlength="500" placeholder="Cita bíblica...">${i?.cita||""}</textarea></div>
            <div class="form_grp"><label><i class="fas fa-book"></i> Referencia *</label><input class="md-libro" maxlength="100" placeholder="Ej: Salmo 23:1" value="${i?.libro||""}"></div>
            <div class="form_grp"><label><i class="fas fa-tag"></i> Categoría *</label><input class="md-categoria" maxlength="50" placeholder="Ej: Gracias, Perdón, Amor..." value="${i?.categoria||""}"></div>
            <div class="form_row">
              <div class="form_grp"><label><i class="fas fa-sort-numeric-up"></i> Orden</label><input type="number" class="md-orden" min="1" value="${i?.orden||c.length+1}"></div>
              <div class="form_grp"><label><i class="fas fa-user"></i> Nombre *</label><input class="md-nombreShow" maxlength="50" value="${i?.nombreShow||a}"></div>
            </div>
            <div class="form_row">
              <div class="form_check"><input type="checkbox" id="md-favorito" ${i?.favorito?"checked":""}><label for="md-favorito"><i class="fas fa-star"></i> Favorita</label></div>
              <div class="form_check"><input type="checkbox" id="md-publico" ${i?.publico!==!1?"checked":""}><label for="md-publico"><i class="fas fa-eye"></i> Pública</label></div>
            </div>
          </div>
          <div class="modal_ftr"><button class="btn_pri md_guardar" data-id="${s||""}"><i class="fas fa-save"></i> Guardar</button></div>
        </div>
      </div>
    `),O("mdFrase"),t(".md-cita").focus()},P=async function(){const s=t(".md-cita").val().trim(),i=t(".md-libro").val().trim(),a=t(".md-nombreShow").val().trim(),o=t(".md-categoria").val().trim(),r=parseInt(t(".md-orden").val())||c.length+1,e=t("#md-favorito").is(":checked"),k=t("#md-publico").is(":checked"),m=t(this).data("id");if(!s||!i||!a||!o)return n("Completa todos los campos","warning");if(s.length>500)return n("Cita muy larga (máx. 500)","warning");try{$(this,!0);const v={cita:s,libro:i,categoria:o,nombreShow:a,orden:r,favorito:e,publico:k,usuario:l.usuario||l.email.split("@")[0],email:l.email};m?await A(y(h,"wicitas",m),{...v,actualizado:C()}):await K(y(h,"wicitas",`cita_${Date.now()}`),{...v,creado:C(),actualizado:C()}),n(m?"Actualizada ✓":"Agregada ✓","success"),S(f),G()}catch(v){console.error(v),n("Error al guardar","error")}finally{$(this,!1)}},V=async function(s){if(s.stopPropagation(),!t(this).hasClass("editable"))return;const i=t(this).data("id"),a=c.find(o=>o.id===i);if(!a||l?.email!==a.email)return n("Sin permisos","warning");try{const o=!a.favorito;t(this).toggleClass("active").closest(".phr").toggleClass("favorito"),await A(y(h,"wicitas",i),{favorito:o,actualizado:C()}),S(f)}catch(o){console.error(o),n("Error","error"),t(this).toggleClass("active").closest(".phr").toggleClass("favorito")}},q=function(s){s.stopPropagation();const i=c.find(a=>a.id===t(this).data("id"));!i||l?.email!==i.email?n("Sin permisos","warning"):M(i.id)},j=async function(s){s.stopPropagation();const i=t(this).data("id"),a=c.find(o=>o.id===i);if(!a||l?.email!==a.email)return n("Sin permisos","warning");if(confirm(`¿Eliminar "${a.libro}"?`))try{await R(y(h,"wicitas",i)),t(this).closest(".phr").fadeOut(300,function(){t(this).remove()}),S(f),n("Eliminada ✓","success")}catch(o){console.error(o),n("Error","error")}};window.addEventListener("wiFresh",s=>{l=s.detail}),t(document).on("click",".cat_btn",function(){t(".cat_btn").removeClass("active"),t(this).addClass("active");const s=t(this).data("cat");d=s==="todas"?[...c]:c.filter(a=>a.categoria===s);const i=t(".citas_orden").val();d.sort((a,o)=>i==="favoritas"?o.favorito-a.favorito||(o.actualizado?.seconds||0)-(a.actualizado?.seconds||0):i==="recientes"?(o.actualizado?.seconds||o.creado?.seconds||0)-(a.actualizado?.seconds||a.creado?.seconds||0):(a.actualizado?.seconds||a.creado?.seconds||0)-(o.actualizado?.seconds||o.creado?.seconds||0)),_(g,!0)}).on("change",".citas_orden",function(){t(".cat_btn.active").trigger("click")}).on("click",".btn_ver_mas",()=>{p=!p,w()}).on("click",".citas_add",()=>M()).on("click","#btnLoadMore",function(){$(this,!0,"Cargando"),setTimeout(()=>{_(B);const s=t(".phrs .phr").last();s.length&&s.offset()&&t("html, body").animate({scrollTop:s.offset().top-100},350),$(this,!1,"Cargar Más")},500)}).on("click",".md_guardar",P).on("click",".phr_estrella",V).on("click",".btn_editar",q).on("click",".btn_eliminar",j);const E=x(f);E&&(c=d=E,u=[...new Set(c.map(s=>s.categoria).filter(Boolean))].map(s=>({nombre:s,count:c.filter(i=>i.categoria===s).length})).sort((s,i)=>i.count-s.count),w(),_(g,!0)),H(D(N(h,"wicitas"),T("publico","==",!0)),s=>{const i=s.docs.map(a=>({id:a.id,...a.data()}));l?.email?U(D(N(h,"wicitas"),T("email","==",l.email))).then(a=>{const o=a.docs.map(r=>({id:r.id,...r.data()}));c=d=[...i.filter(r=>r.email!==l.email),...o].sort((r,e)=>e.favorito-r.favorito||(e.actualizado?.seconds||0)-(r.actualizado?.seconds||0)),u=[...new Set(c.map(r=>r.categoria).filter(Boolean))].map(r=>({nombre:r,count:c.filter(e=>e.categoria===r).length})).sort((r,e)=>e.count-r.count),F(f,c),w(),_(g,!0)}):(c=d=i.sort((a,o)=>o.favorito-a.favorito||(o.actualizado?.seconds||0)-(a.actualizado?.seconds||0)),u=[...new Set(c.map(a=>a.categoria).filter(Boolean))].map(a=>({nombre:a,count:c.filter(o=>o.categoria===a).length})).sort((a,o)=>o.count-a.count),F(f,c),w(),_(g,!0))},s=>{console.error(s),n("Cargando desde caché","info")}),console.log("📖 Citas cargado")};export{W as citas};
