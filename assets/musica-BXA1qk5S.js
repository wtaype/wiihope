import{$ as a}from"./jquery-DduPepyT.js";import{n as x,d as _,a as m,b as g,p as z,s as D,m as R,q as T,r as I,e as V}from"./init-CSJfxFOh.js";import{g as b,N as n,r as y,b as L,s as k}from"./widev-DLeh02I3.js";import"./vendor-B2AETYxa.js";const O=()=>{let o=[],r=b("wiSmile"),P=null;const u=new Audio,e={actual:null,playing:!1,repeat:!1,volume:.7,editando:null},p=()=>{a("#musica").html(`
      <div class='mwb mus_container ${r?.email?"autenticado":"no_auth"}'>
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
              ${r?.email?'<button class="mus_ctrl" id="musFav"><i class="fas fa-star"></i></button>':""}
            </div>
            <div class='mus_pgc'>
              <div class='mus_pgb'><div class='mus_pg'></div></div>
              <div class='mus_time dpw'><span id='musCur'>0:00</span><span id='musDur'>0:00</span></div>
            </div>
          </div>
          
          <div class='mus_plst'>
            <div class='mus_plh dpw'>
              <span class='mus_ttl'>🎵 Lista de Música (${o.length})</span>
              <input id='musSrc' placeholder='🔍 Buscar...' type='text'/>
            </div>
            <div class='mus_pls' id='musPls'></div>
          </div>
        </div>
        
        ${r?.email?`
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
        `:""}
      </div>
    `),E()};window.addEventListener("wiFresh",i=>{r=i.detail,p()});const C=i=>isNaN(i)?"0:00":`${~~(i/60)}:${String(~~(i%60)).padStart(2,"0")}`,E=()=>{const i=a("#musPls");if(i.empty(),!o.length)return i.html('<div class="mus_empty"><i class="fas fa-music"></i><p>No hay canciones todavía</p></div>');o.forEach((s,t)=>{const c=e.actual?.id===s.id,l=r?.email===s.email;i.append(`
        <div class="mus_pi ${c?"active":""} ${s.favorito?"fav":""}" data-id="${s.id}">
          <span class="mus_n">${t+1}</span>
          <div class="mus_pi_info">
            <span class="mus_t">${s.nombre}</span>
            <small class="mus_a">${s.cantante}</small>
          </div>
          ${l?`
            <div class="mus_acts">
              <button class="mus_act mus_act_fav ${s.favorito?"active":""}" data-id="${s.id}" title="Favorito"><i class="fas fa-star"></i></button>
              <button class="mus_act mus_act_edit" data-id="${s.id}" title="Editar"><i class="fas fa-edit"></i></button>
              <button class="mus_act mus_act_del" data-id="${s.id}" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
            </div>
          `:""}
        </div>
      `)})},f=i=>{i&&(e.actual=i,u.src=i.url,a("#musActual").text(`${i.nombre} - ${i.cantante}`),a(".mus_pi").removeClass("active").filter(`[data-id="${i.id}"]`).addClass("active")[0]?.scrollIntoView({behavior:"smooth",block:"center"}),a("#musFav").toggleClass("active",i.favorito),F())},d=()=>{if(!e.actual){if(!o.length)return n("No hay canciones","warning");f(o[0])}u.play().then(()=>{e.playing=!0,a("#musPlay i").attr("class","fas fa-pause"),n(`🎵 ${e.actual.nombre}`,"info",2e3)}).catch(()=>n("Error al reproducir","error"))},$=()=>{u.pause(),e.playing=!1,a("#musPlay i").attr("class","fas fa-play")},S=()=>{if(!o.length)return;const i=o.findIndex(t=>t.id===e.actual?.id),s=o[i+1]||o[0];f(s),d()},M=()=>{if(!o.length)return;const i=o.findIndex(t=>t.id===e.actual?.id),s=o[i-1]||o[o.length-1];f(s),d()};u.addEventListener("timeupdate",()=>{const{currentTime:i,duration:s}=u;isNaN(s)||(a("#musCur").text(C(i)),a("#musDur").text(C(s)),a(".mus_pg").css("width",`${i/s*100}%`))}),u.addEventListener("ended",()=>e.repeat?(u.currentTime=0,d()):S()),u.addEventListener("loadedmetadata",()=>a("#musDur").text(C(u.duration))),a(document).on("click","#musPlay",()=>e.playing?$():d()),a(document).on("click","#musPrev",M),a(document).on("click","#musNext",S),a(document).on("click","#musRep",function(){e.repeat=!e.repeat,a(this).toggleClass("active"),F()}),a(document).on("click","#musFav",async function(){if(!e.actual||r?.email!==e.actual.email)return n("Sin permisos","warning");const i=!e.actual.favorito;try{a(this).toggleClass("active"),await x(_(m,"wimusica",e.actual.id),{favorito:i,actualizado:g()}),e.actual.favorito=i,y("wiMusica")}catch(s){console.error(s),a(this).toggleClass("active"),n("Error","error")}}),a(document).on("click",".mus_pgb",function(i){u.duration&&(u.currentTime=i.offsetX/a(this).width()*u.duration)}),a(document).on("click",".mus_pi",function(i){if(a(i.target).closest(".mus_acts").length)return;const s=a(this).data("id"),t=o.find(c=>c.id===s);t&&(e.actual?.id===s?e.playing?$():d():(f(t),d()))}),a(document).on("input","#musSrc",function(){const i=a(this).val().toLowerCase();a(".mus_pi").each(function(){a(this).toggle(a(this).text().toLowerCase().includes(i))})});const A=()=>{a(".mus_inp_nombre, .mus_inp_cantante, .mus_inp_url").val(""),a(".mus_inp_tag").val("alabanza"),a("#musFavorito").prop("checked",!1),a("#musPublico").prop("checked",!0),e.editando=null,a("#formTitle").text("Agregar Canción"),a(".mus_guardar span").text("Guardar"),a(".mus_guardar i").attr("class","fas fa-save")};a(document).on("click","#musClear",A),a(document).on("click",".mus_act_fav",async function(i){i.stopPropagation();const s=a(this).data("id"),t=o.find(l=>l.id===s);if(!t||r?.email!==t.email)return n("Sin permisos","warning");const c=!t.favorito;try{a(this).toggleClass("active"),a(this).closest(".mus_pi").toggleClass("fav"),await x(_(m,"wimusica",s),{favorito:c,actualizado:g()}),t.favorito=c,y("wiMusica")}catch(l){console.error(l),a(this).toggleClass("active"),a(this).closest(".mus_pi").toggleClass("fav"),n("Error","error")}}),a(document).on("click",".mus_act_edit",function(i){i.stopPropagation();const s=o.find(t=>t.id===a(this).data("id"));if(!s||r?.email!==s.email)return n("Sin permisos","warning");e.editando=s.id,a(".mus_inp_nombre").val(s.nombre),a(".mus_inp_cantante").val(s.cantante),a(".mus_inp_url").val(s.url),a(".mus_inp_tag").val(s.tag||"alabanza"),a("#musFavorito").prop("checked",s.favorito),a("#musPublico").prop("checked",s.publico!==!1),a("#formTitle").text("Editar Canción"),a(".mus_guardar span").text("Actualizar"),a(".mus_guardar i").attr("class","fas fa-edit"),a(".mus_inp_nombre").focus(),a(".mus_form")[0]?.scrollIntoView({behavior:"smooth",block:"start"})}),a(document).on("click",".mus_act_del",async function(i){i.stopPropagation();const s=a(this).data("id"),t=o.find(c=>c.id===s);if(!t||r?.email!==t.email)return n("Sin permisos","warning");if(confirm(`¿Eliminar "${t.nombre}"?`))try{await z(_(m,"wimusica",s)),a(this).closest(".mus_pi").fadeOut(300,function(){a(this).remove()}),e.actual?.id===s&&($(),e.actual=null,a("#musActual").text("🎵 Selecciona una canción")),y("wiMusica"),n("🗑️ Eliminada","success")}catch(c){console.error(c),n("Error","error")}}),a(document).on("click",".mus_guardar",async function(){const i=a(".mus_inp_nombre").val().trim(),s=a(".mus_inp_cantante").val().trim(),t=a(".mus_inp_url").val().trim(),c=a(".mus_inp_tag").val(),l=a("#musFavorito").is(":checked"),v=a("#musPublico").is(":checked");if(!i||!s||!t)return n("Completa todos los campos","warning");if(!t.toLowerCase().includes(".mp3"))return n("Debe ser .mp3","warning");try{L(this,!0);const w={nombre:i,cantante:s,url:t,tag:c,favorito:l,publico:v,usuario:r.usuario||r.email.split("@")[0],email:r.email};e.editando?(await x(_(m,"wimusica",e.editando),{...w,actualizado:g()}),n("✅ Actualizada","success")):(await D(_(m,"wimusica",`musica_${Date.now()}`),{...w,creado:g(),actualizado:g()}),n("✅ Agregada","success")),y("wiMusica"),A()}catch(w){console.error(w),n("Error","error")}finally{L(this,!1)}});const F=()=>{e.actual&&k("musActual",e.actual.id,168),k("musVol",e.volume,168),k("musRep",e.repeat,168)},N=()=>{const i=b("musActual");if(i){const t=o.find(c=>c.id===i);t&&f(t)}const s=b("musVol");s!==null&&(u.volume=e.volume=s),b("musRep")&&(e.repeat=!0,a("#musRep").addClass("active"))},h=b("wiMusica");return h&&(o=h,p(),N()),P=R(T(V(m,"wimusica"),I("creado","desc")),async i=>{const s=i.docs.map(t=>({id:t.id,...t.data()}));if(r?.email){const t=s.filter(l=>l.email===r.email),c=s.filter(l=>l.email!==r.email&&l.publico!==!1);o=[...t,...c].sort((l,v)=>l.favorito!==v.favorito?v.favorito-l.favorito:(v.creado?.seconds||0)-(l.creado?.seconds||0))}else o=s.filter(t=>t.publico!==!1).sort((t,c)=>t.favorito!==c.favorito?c.favorito-t.favorito:(c.creado?.seconds||0)-(t.creado?.seconds||0));k("wiMusica",o,168),h?E():p(),!h&&N()},()=>n("Desde caché","info",2e3)),p(),()=>{P?.(),u.pause(),u.src="",window.removeEventListener("wiFresh",p),a(document).off("click"),console.log("🎵 Música limpiado")}};export{O as wiMusica};
