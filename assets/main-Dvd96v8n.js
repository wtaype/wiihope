const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/citas-5_f1ys_5.js","assets/widev-C0ACljq9.js","assets/vendor-B2AETYxa.js","assets/firebase-Bx3K95Ib.js","assets/audios-DaWT3sX1.js","assets/acerca-CgrZoPcK.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./main-U__pJSML.js";import{w as t,$ as s}from"./widev-C0ACljq9.js";import"./vendor-B2AETYxa.js";const r=async()=>{s("#wiMainContent").html(`
    <div class="phrs mwb dpw frases" id="frases"></div>
    <div class="mp3 audio" id="audioPlayer"></div>
    <div class="about awb mwb dpvc" id="acerca"></div>
  `).children().css("opacity",0).animate({opacity:1},400)},e=async()=>{await r(),t("#frases",async()=>(await i(async()=>{const{wiCitas:a}=await import("./citas-5_f1ys_5.js");return{wiCitas:a}},__vite__mapDeps([0,1,2,3]))).wiCitas()),t("#audioPlayer",async()=>(await i(async()=>{const{wiAudios:a}=await import("./audios-DaWT3sX1.js");return{wiAudios:a}},__vite__mapDeps([4,1,2]))).wiAudios()),t("#acerca",async()=>(await i(async()=>{const{wiAcerca:a}=await import("./acerca-CgrZoPcK.js");return{wiAcerca:a}},__vite__mapDeps([5,1,2]))).wiAcerca())};export{e as init,r as render};
