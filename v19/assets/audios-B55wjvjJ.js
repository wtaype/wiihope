import{$ as t}from"./jquery-DduPepyT.js";import{s as g,N as w,g as h}from"./widev-DLeh02I3.js";import"./vendor-B2AETYxa.js";const z=()=>{t("#audioPlayer").html(`
<div class='mwb go3'>
<div class='plyr'>
<div class='viz' id='viz'><div class='wave'>${'<div class="wvs"></div>'.repeat(30)}</div></div>
<div class='info'><h2 id='ct'>Haz clic en el visualizador para iniciar</h2></div>
<div class='pgc'>
<div class='pgb'><div class='pg'></div></div>
<div class='time dpw'><span id='cur'>0:00</span><span id='dur'>0:00</span></div>
</div>
<div class='ctrls dpc'>
<button class='ctrl' id='prev'><i class='fas fa-backward'></i></button>
<button class='ctrl pby' id='play'><i class='fas fa-play'></i></button>
<button class='ctrl' id='next'><i class='fas fa-forward'></i></button>
<button class='ctrl' id='rep'><i class='fas fa-repeat'></i></button>
<div class='vol dpc'>
<button class='ctrl' id='mute'><i class='fas fa-volume-high'></i></button>
<div class='vb'><div class='vl'></div></div>
</div>
</div>
</div>
<div class='plst'>
<div class='plh dpw'>
<span class='ttl'>Biblia Audio</span>
<button class='ctrl fsc' id='full'><i class='fas fa-expand'></i></button>
<input id='src' placeholder='Buscar...' type='text'/>
</div>
<div class='pls' id='pls'></div>
</div>
</div>
  `);const y={"San Mateo":28,"San Marcos":16,"San Lucas":24,"San Juan":21,Hechos:28,Romanos:16,"1 Corintios":16,"2 Corintios":13,Galatas:6,Efesios:6,Filipenses:4,Colosenses:4,"1 Tesalonicenses":5,"2 Tesalonicenses":3,"1 Timoteo":6,"2 Timoteo":4,Tito:3,Filemon:1,Hebreos:13,Santiago:5,"1 San Pedro":5,"2 San Pedro":3,"1 San Juan":5,"2 San Juan":1,"3 San Juan":1,Judas:1,Apocalipsis:22},S="https://raw.githubusercontent.com/geluksee/hope/main/",a=new Audio,l={idx:0,playing:!1,repeat:!1,firstPlay:!0},n=[];Object.entries(y).forEach(([e,s],x)=>{Array.from({length:s},(m,d)=>{const f=n.length+1,$=`${S}${f}_${e.replace(/\s/g,"_")}_${String(d+1).padStart(2,"0")}.mp3`;n.push({book:e,chapter:d+1,title:`${e} - Capítulo ${d+1}`,url:$}),t("#pls").append(`<div class="pi" data-i="${f-1}"><span class="n">${f}</span><span class="t">${e} - Capítulo ${d+1}</span></div>`)})});const p=e=>isNaN(e)?"0:00":`${~~(e/60)}:${String(~~(e%60)).padStart(2,"0")}`,c=e=>t(".vl").css("width",`${e*100}%`),b=e=>t(".wvs").toggleClass("playing",e),o=e=>{e<0||e>=n.length||(l.idx=e,a.src=n[e].url,t("#ct").text(n[e].title),t(".pi").removeClass("active").eq(e).addClass("active")[0]?.scrollIntoView({behavior:"smooth",block:"center"}),!l.firstPlay&&w(`📖 ${n[e].title}`,"info",2e3),u())},i=()=>{!a.src&&o(0),a.play().then(()=>{Object.assign(l,{playing:!0,firstPlay:!1}),t("#play i").attr("class","fas fa-pause"),b(!0)}).catch(()=>w("Error al reproducir","error"))},v=()=>{a.pause(),l.playing=!1,t("#play i").attr("class","fas fa-play"),b(!1)},r=e=>{const s=l.idx+e;s>=0&&s<n.length?(o(s),i()):s>=n.length&&(o(0),i())};t(a).on({timeupdate:()=>{const{currentTime:e,duration:s}=a;t("#cur").text(p(e)),t("#dur").text(p(s)),t(".pg").css("width",`${e/s*100}%`)},ended:()=>l.repeat?(o(l.idx),i()):r(1),loadedmetadata:()=>t("#dur").text(p(a.duration))}),Object.entries({play:()=>l.playing?v():i(),prev:()=>r(-1),next:()=>r(1),rep:function(){l.repeat=!l.repeat,t(this).toggleClass("active"),u()},full:()=>{const e=t("#audioPlayer")[0];document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement?document.exitFullscreen?.()||document.webkitExitFullscreen?.()||document.mozCancelFullScreen?.():e.requestFullscreen?.()||e.webkitRequestFullscreen?.()||e.mozRequestFullScreen?.()},mute:()=>{a.muted=!a.muted,t("#mute i").toggleClass("fa-volume-high fa-volume-xmark"),c(a.muted?0:a.volume)}}).forEach(([e,s])=>t(`#${e}`).on("click",s)),t(document).on("fullscreenchange webkitfullscreenchange mozfullscreenchange",()=>{const e=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement);t("#full i").attr("class",`fas fa-${e?"compress":"expand"}`)}),t(".pgb").on("click",e=>a.currentTime=e.offsetX/e.currentTarget.offsetWidth*a.duration),t(".vb").on("click",e=>{const s=e.offsetX/e.currentTarget.offsetWidth;a.volume=s,a.muted=!1,t("#mute i").attr("class","fas fa-volume-high"),c(s),u()}),t(document).on("click",".pi",function(){o(+t(this).data("i")),i()}),t("#src").on("input",e=>{const s=e.target.value.toLowerCase();t(".pi").each((x,m)=>t(m).toggle(m.textContent.toLowerCase().includes(s)))}),t(document).on("keydown",e=>{if(e.target.tagName==="INPUT")return;const s={Space:()=>(e.preventDefault(),l.playing?v():i()),ArrowLeft:()=>r(-1),ArrowRight:()=>r(1),ArrowUp:()=>(e.preventDefault(),a.volume=Math.min(1,a.volume+.1),c(a.volume),u()),ArrowDown:()=>(e.preventDefault(),a.volume=Math.max(0,a.volume-.1),c(a.volume),u())};s[e.code]?.()||s[e.key]?.()});const u=()=>{g("audioActual",l.idx,168),g("aVolumen",a.volume,168),g("aRepetir",l.repeat,168)};(()=>{const e=h("audioActual");e!==null&&e>=0&&e<n.length&&o(e);const s=h("aVolumen");s&&(a.volume=s,c(s)),h("aRepetir")&&(l.repeat=!0,t("#rep").addClass("active"))})(),t(document).on("click","#viz",function(){a.src?l.playing?v():i():(o(0),i())})};export{z as wiAudios};
