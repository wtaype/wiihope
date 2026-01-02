const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wiauth-Ctit9CEo.js","assets/main-VibjpwTS.js","assets/vendor-B2AETYxa.js","assets/init-BETm3AxJ.js","assets/firebase-03f_o6lD.js"])))=>i.map(i=>d[i]);
import{M as _,$ as o,g as m,_ as e,r as u,w as p}from"./main-VibjpwTS.js";import"./vendor-B2AETYxa.js";p({js:[()=>e(()=>import("./wiauth-Ctit9CEo.js"),__vite__mapDeps([0,1,2,3,4]))]});function d(a){_?.("Bienvenido "+a.nombre),o(".wiauth").html(`
    <div class="sesion">
      <img src="${a.imagen||"./smile.png"}" alt="${a.nombre}"><span>${a.nombre}</span>
    </div>
    <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> <span> Salir </span></button>
  `)}const w=(()=>{let a=m("wiSmile");a?l(a):r();function r(){o(".wiauth").html(`
      <button class="wibtn_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></button>
      <button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>
  `)}async function l(t){d(t);const{auth:s,onAuthStateChanged:i}=await e(async()=>{const{auth:n,onAuthStateChanged:c}=await import("./wiauth-Ctit9CEo.js");return{auth:n,onAuthStateChanged:c}},__vite__mapDeps([0,1,2,3,4]));i(s,n=>{if(!n)return u("wiSmile"),r()})}window.addEventListener("wiFresh",t=>l(t.detail)),o(document).on("click",".bt_salir",async()=>{const{auth:t,signOut:s}=await e(async()=>{const{auth:i,signOut:n}=await import("./wiauth-Ctit9CEo.js");return{auth:i,signOut:n}},__vite__mapDeps([0,1,2,3,4]));await s(t),location.reload(),u("wiSmile wiFlags")})})();export{w as header,d as personal};
