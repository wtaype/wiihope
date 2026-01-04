const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wiauth-58xi8ZVq.js","assets/main-CMD2S7ps.js","assets/main-CJcKvWGL.js","assets/vendor-B2AETYxa.js","assets/init-DcKKffQQ.js","assets/firebase-B8KvrrVe.js"])))=>i.map(i=>d[i]);
import{_ as o}from"./main-CMD2S7ps.js";import{M as m,$ as e,g as _,r as u,w as p}from"./main-CJcKvWGL.js";import"./vendor-B2AETYxa.js";p({js:[()=>o(()=>import("./wiauth-58xi8ZVq.js"),__vite__mapDeps([0,1,2,3,4,5]))]});function d(t){m?.("Bienvenido "+t.nombre),e(".wiauth").html(`
    <div class="sesion">
      <img src="${t.imagen||"./smile.png"}" alt="${t.nombre}"><span>${t.nombre}</span>
    </div>
    <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> <span> Salir </span></button>
  `)}const b=(()=>{let t=_("wiSmile");t?l(t):r();function r(){e(".wiauth").html(`
      <button class="wibtn_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></button>
      <button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>
  `)}async function l(a){d(a);const{auth:i,onAuthStateChanged:s}=await o(async()=>{const{auth:n,onAuthStateChanged:c}=await import("./wiauth-58xi8ZVq.js");return{auth:n,onAuthStateChanged:c}},__vite__mapDeps([0,1,2,3,4,5]));s(i,n=>{if(!n)return u("wiSmile"),r()})}window.addEventListener("wiFresh",a=>l(a.detail)),e(document).on("click",".bt_salir",async()=>{const{auth:a,signOut:i}=await o(async()=>{const{auth:s,signOut:n}=await import("./wiauth-58xi8ZVq.js");return{auth:s,signOut:n}},__vite__mapDeps([0,1,2,3,4,5]));await i(a),location.reload(),u("wiSmile wiFlags")})})();export{b as header,d as personal};
