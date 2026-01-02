const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wiauth-BeH92zK4.js","assets/main-nRR3RGxs.js","assets/vendor-B2AETYxa.js","assets/init-CQeNqYn0.js","assets/firebase-BK5RP8AR.js"])))=>i.map(i=>d[i]);
import{M as _,$ as e,g as m,_ as r,r as u,d as p,f as g}from"./main-nRR3RGxs.js";import"./vendor-B2AETYxa.js";g({js:[()=>r(()=>import("./wiauth-BeH92zK4.js"),__vite__mapDeps([0,1,2,3,4]))]});function d(a){_?.("Bienvenido "+a.nombre),e(".wiauth").html(`
    <div class="sesion">
      <img src="${a.imagen||"./smile.png"}" alt="${a.nombre}"><span>${a.nombre}</span>
    </div>
    <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> <span> Salir </span></button>
  `)}const b=(()=>{let a=m("wiSmile");a?l(a):s();function s(){e(".wiauth").html(`
      <button class="wibtn_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></button>
      <button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>
  `)}async function l(i){d(i);const{auth:n,onAuthStateChanged:o}=await r(async()=>{const{auth:t,onAuthStateChanged:c}=await import("./wiauth-BeH92zK4.js");return{auth:t,onAuthStateChanged:c}},__vite__mapDeps([0,1,2,3,4]));o(n,t=>{if(!t)return u("wiSmile"),s()})}e(document).on("click",".bt_salir",async()=>{const{auth:i,signOut:n}=await r(async()=>{const{auth:o,signOut:t}=await import("./wiauth-BeH92zK4.js");return{auth:o,signOut:t}},__vite__mapDeps([0,1,2,3,4]));await n(i),u("wiSmile wiciudades wifechas smileIP wiHoras wiNotas"),s(),p.navigate("/"),location.reload()})})();export{b as header,d as personal};
