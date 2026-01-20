import{$ as e}from"./jquery-DduPepyT.js";import{s as m,N as w,g}from"./widev-DLeh02I3.js";import"./vendor-B2AETYxa.js";const T=()=>{e("#biblia").html(`
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
  `);const y={"San Mateo":28,"San Marcos":16,"San Lucas":24,"San Juan":21,Hechos:28,Romanos:16,"1 Corintios":16,"2 Corintios":13,Galatas:6,Efesios:6,Filipenses:4,Colosenses:4,"1 Tesalonicenses":5,"2 Tesalonicenses":3,"1 Timoteo":6,"2 Timoteo":4,Tito:3,Filemon:1,Hebreos:13,Santiago:5,"1 San Pedro":5,"2 San Pedro":3,"1 San Juan":5,"2 San Juan":1,"3 San Juan":1,Judas:1,Apocalipsis:22},S="https://raw.githubusercontent.com/geluksee/hope/main/",a=new Audio,l={idx:0,playing:!1,repeat:!1,firstPlay:!0},i=[];Object.entries(y).forEach(([t,s],x)=>{Array.from({length:s},(v,o)=>{const f=i.length+1,$=`${S}${f}_${t.replace(/\s/g,"_")}_${String(o+1).padStart(2,"0")}.mp3`;i.push({book:t,chapter:o+1,title:`${t} - Capítulo ${o+1}`,url:$}),e("#pls").append(`<div class="pi" data-i="${f-1}"><span class="n">${f}</span><span class="t">${t} - Capítulo ${o+1}</span></div>`)})});const r=t=>isNaN(t)?"0:00":`${~~(t/60)}:${String(~~(t%60)).padStart(2,"0")}`,d=t=>e(".vl").css("width",`${t*100}%`),h=t=>e(".wvs").toggleClass("playing",t),n=t=>{t<0||t>=i.length||(l.idx=t,a.src=i[t].url,e("#ct").text(i[t].title),e(".pi").removeClass("active").eq(t).addClass("active")[0]?.scrollIntoView({behavior:"smooth",block:"center"}),!l.firstPlay&&w(`📖 ${i[t].title}`,"info",2e3),p())},c=()=>{!a.src&&n(0),a.play().then(()=>{Object.assign(l,{playing:!0,firstPlay:!1}),e("#play i").attr("class","fas fa-pause"),h(!0)}).catch(()=>w("Error al reproducir","error"))},b=()=>{a.pause(),l.playing=!1,e("#play i").attr("class","fas fa-play"),h(!1)},u=t=>{const s=l.idx+t;s>=0&&s<i.length?(n(s),c()):s>=i.length&&(n(0),c())};e(a).on({timeupdate:()=>{const{currentTime:t,duration:s}=a;e("#cur").text(r(t)),e("#dur").text(r(s)),e(".pg").css("width",`${t/s*100}%`)},ended:()=>l.repeat?(n(l.idx),c()):u(1),loadedmetadata:()=>e("#dur").text(r(a.duration))}),Object.entries({play:()=>l.playing?b():c(),prev:()=>u(-1),next:()=>u(1),rep:function(){l.repeat=!l.repeat,e(this).toggleClass("active"),p()},full:()=>{const t=e("#biblia")[0];document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement?document.exitFullscreen?.()||document.webkitExitFullscreen?.()||document.mozCancelFullScreen?.():t.requestFullscreen?.()||t.webkitRequestFullscreen?.()||t.mozRequestFullScreen?.()},mute:()=>{a.muted=!a.muted,e("#mute i").toggleClass("fa-volume-high fa-volume-xmark"),d(a.muted?0:a.volume)}}).forEach(([t,s])=>e(`#${t}`).on("click",s)),e(document).on("fullscreenchange webkitfullscreenchange mozfullscreenchange",()=>{const t=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement);e("#full i").attr("class",`fas fa-${t?"compress":"expand"}`)}),e(".pgb").on("click",t=>a.currentTime=t.offsetX/t.currentTarget.offsetWidth*a.duration),e(".vb").on("click",t=>{const s=t.offsetX/t.currentTarget.offsetWidth;a.volume=s,a.muted=!1,e("#mute i").attr("class","fas fa-volume-high"),d(s),p()}),e(document).on("click",".pi",function(){n(+e(this).data("i")),c()}),e("#src").on("input",t=>{const s=t.target.value.toLowerCase();e(".pi").each((x,v)=>e(v).toggle(v.textContent.toLowerCase().includes(s)))});const p=()=>{m("audioActual",l.idx,168),m("aVolumen",a.volume,168),m("aRepetir",l.repeat,168)};(()=>{const t=g("audioActual");t!==null&&t>=0&&t<i.length&&n(t);const s=g("aVolumen");s&&(a.volume=s,d(s)),g("aRepetir")&&(l.repeat=!0,e("#rep").addClass("active"))})(),e(document).on("click","#viz",function(){a.src?l.playing?b():c():(n(0),c())})};export{T as wiAudios};
