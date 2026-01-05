const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wiauth-5Ag-27l7.js","assets/main-Cx2lrkeE.js","assets/jquery-DduPepyT.js","assets/vendor-B2AETYxa.js","assets/init-DcKKffQQ.js","assets/firebase-B8KvrrVe.js","assets/widev-B2SV2HW_.js"])))=>i.map(i=>d[i]);
import{_ as o}from"./main-Cx2lrkeE.js";import{$ as e}from"./jquery-DduPepyT.js";import{M as m,g as _,r as u,w as p}from"./widev-B2SV2HW_.js";import"./vendor-B2AETYxa.js";p({js:[()=>o(()=>import("./wiauth-5Ag-27l7.js"),__vite__mapDeps([0,1,2,3,4,5,6]))]});function d(t){m?.("Bienvenido "+t.nombre),e(".wiauth").html(`
    <div class="sesion">
      <img src="${t.imagen||"./smile.avif"}" alt="${t.nombre}"><span>${t.nombre}</span>
    </div>
    <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> <span> Salir </span></button>
  `)}const f=(()=>{let t=_("wiSmile");t?l(t):r();function r(){e(".wiauth").html(`
      <button class="wibtn_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></button>
      <button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>
  `)}async function l(a){d(a);const{auth:n,onAuthStateChanged:s}=await o(async()=>{const{auth:i,onAuthStateChanged:c}=await import("./wiauth-5Ag-27l7.js");return{auth:i,onAuthStateChanged:c}},__vite__mapDeps([0,1,2,3,4,5,6]));s(n,i=>{if(!i)return u("wiSmile"),r()})}window.addEventListener("wiFresh",a=>l(a.detail)),e(document).on("click",".bt_salir",async()=>{const{auth:a,signOut:n}=await o(async()=>{const{auth:s,signOut:i}=await import("./wiauth-5Ag-27l7.js");return{auth:s,signOut:i}},__vite__mapDeps([0,1,2,3,4,5,6]));await n(a),location.reload(),u("wiSmile wiFlags")})})();export{f as header,d as personal};
