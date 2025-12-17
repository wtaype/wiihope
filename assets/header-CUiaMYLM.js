const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wiauth-BHk9F7Vl.js","assets/main-Dbqe6aoX.js","assets/vendor-B2AETYxa.js","assets/firebase-Df3JCjk-.js"])))=>i.map(i=>d[i]);
import{M as m,$ as e,g as _,_ as r,r as u,f as p,h as g}from"./main-Dbqe6aoX.js";import"./vendor-B2AETYxa.js";import"./firebase-Df3JCjk-.js";g({js:[()=>r(()=>import("./wiauth-BHk9F7Vl.js"),__vite__mapDeps([0,1,2,3]))]});function h(a){m?.("Bienvenido "+a.nombre),e(".wiauth").html(`
    <div class="sesion">
      <img src="${a.imagen||"./smile.png"}" alt="${a.nombre}"><span>${a.nombre}</span>
    </div>
    <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> <span> Salir </span></button>
  `)}const f=(()=>{let a=_("wiSmile");a?l(a):s();function s(){e(".wiauth").html(`
      <button class="wibtn_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></button>
      <button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>
  `)}async function l(i){h(i);const{auth:n,onAuthStateChanged:o}=await r(async()=>{const{auth:t,onAuthStateChanged:c}=await import("./wiauth-BHk9F7Vl.js");return{auth:t,onAuthStateChanged:c}},__vite__mapDeps([0,1,2,3]));o(n,t=>{if(!t)return u("wiSmile"),s()})}e(document).on("click",".bt_salir",async()=>{const{auth:i,signOut:n}=await r(async()=>{const{auth:o,signOut:t}=await import("./wiauth-BHk9F7Vl.js");return{auth:o,signOut:t}},__vite__mapDeps([0,1,2,3]));await n(i),u("wiSmile wiciudades wifechas smileIP wiHoras wiNotas"),s(),p.navigate("/"),location.reload()})})();export{f as header,h as personal};
