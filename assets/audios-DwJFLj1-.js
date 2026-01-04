import{$ as t}from"./main-zTcSWC62.js";import"./main-Du9_iL5O.js";import"./vendor-B2AETYxa.js";const I=()=>{t("#audioPlayer").html(`
<div class='mwb go3'>
<div class='player-container'>
<div class='visualizer'></div>
<div class='track-info'><h2 id='currentTrack'>Selecciona un capítulo</h2></div>
<div class='progress-container'>
<div class='progress-bar'><div class='progress'></div></div>
<div class='time-info dpw'><span id='currentTime'>0:00</span><span id='duration'>0:00</span></div>
</div>
<div class='controls dpc ipy'>
<button aria-label='control prev' class='control-btn' id='prevBtn'><svg viewBox='0 0 24 24'><rect></rect><polygon points='10,6 10,18 2,12'></polygon><polygon points='18,6 18,18 10,12'></polygon></svg></button>
<button aria-label='control play' class='control-btn play-btn' id='playBtn'><svg viewBox='0 0 24 24'><rect></rect><polygon points='8,6 20,12 8,18'></polygon></svg></button>
<button aria-label='control next' class='control-btn' id='nextBtn'><svg viewBox='0 0 24 24'><rect></rect><polygon points='14,6 14,18 22,12'></polygon><polygon points='6,6 6,18 14,12'></polygon></svg></button>
<button aria-label='control repetir' class='control-btn' id='repeatBtn'><svg viewBox='0 0 24 24'><rect></rect><path d='M8 10h8l-2-2m2 6h-8l2 2' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'></path></svg></button>
<div class='volume-container dpc'>
<button aria-label='control mute' class='control-btn' id='muteBtn'><svg viewBox='0 0 24 24'><rect></rect><polygon points='6,8 10,8 14,4 14,20 10,16 6,16'></polygon><path d='M15 9a2 3 0 0 1 0 6' stroke-width='2'></path><path d='M18 7.7a2 3 0 0 1 0 9' stroke-width='2'></path></svg></button>
<div class='volume-bar'>
<div class='volume-level'></div>
</div>
</div>
</div>
</div>
<div class='playlist-container'>
<div class='playlist-header'>
<span>Biblia Audio </span>
<input id='searchInput' placeholder='Buscar...' type='text'/>
</div>
<div class='playlist' id='playlist'></div>
</div>
</div>
  `);const b={"San Mateo":28,"San Marcos":16,"San Lucas":24,"San Juan":21,Hechos:28,Romanos:16,"1 Corintios":16,"2 Corintios":13,Galatas:6,Efesios:6,Filipenses:4,Colosenses:4,"1 Tesalonicenses":5,"2 Tesalonicenses":3,"1 Timoteo":6,"2 Timoteo":4,Tito:3,Filemon:1,Hebreos:13,Santiago:5,"1 San Pedro":5,"2 San Pedro":3,"1 San Juan":5,"2 San Juan":1,"3 San Juan":1,Judas:1,Apocalipsis:22},w="https://raw.githubusercontent.com/geluksee/hope/main/",o=new Audio;let n=0,u=!1,v=!1,c=[];const x=t("#playlist");let d=0;for(const[e,a]of Object.entries(b))for(let r=1;r<=a;r++){d++;const p=e.replace(/ /g,"_"),T=String(r).padStart(2,"0"),S=`${w}${d}_${p}_${T}.mp3`;c.push({book:e,chapter:r,title:`${e} - Capitulo ${r}`,index:d-1,url:S}),x.append(`<div class="playlist-item" data-index="${d-1}"><span class="number">${d}</span><span class="title">${e} - Capitulo ${r}</span></div>`)}const g=e=>isNaN(e)?"0:00":Math.floor(e/60)+":"+String(Math.floor(e%60)).padStart(2,"0");function s(e){e<0||e>=c.length||(n=e,o.src=c[e].url,t("#currentTrack").text(c[e].title),t(".playlist-item").removeClass("active"),t(`.playlist-item[data-index="${e}"]`).addClass("active"))}function i(){o.play().then(()=>{u=!0,t("#playBtn").html('<svg viewBox="0 0 24 24"><rect/><rect x="8" y="6" width="3" height="12"/><rect x="13" y="6" width="3" height="12"/></svg>')}).catch(e=>console.log(e))}function y(){o.pause(),u=!1,t("#playBtn").html('<svg viewBox="0 0 24 24"><rect/><polygon points="8,6 20,12 8,18"/></svg>')}function B(){n>0&&(s(n-1),i())}function k(){n<c.length-1?(s(n+1),i()):v&&(s(0),i())}t(o).on("timeupdate",()=>{const e=o.currentTime,a=o.duration;t("#currentTime").text(g(e)),t("#duration").text(g(a)),t(".progress").css("width",e/a*100+"%")}),t(o).on("ended",()=>{v?(s(n),i()):k()}),t(o).on("loadedmetadata",()=>{t("#duration").text(g(o.duration))}),t("#playBtn").click(()=>{o.src||s(0),u?y():i()}),t("#prevBtn").click(B),t("#nextBtn").click(k),t("#repeatBtn").click(function(){v=!v,t(this).toggleClass("pya")}),t(".progress-bar").click(e=>{const a=t(e.currentTarget).width();o.currentTime=e.offsetX/a*o.duration});let l=!1;function h(e){t(".volume-level").css("width",e*100+"%")}o.volume=1,h(o.volume),t(".volume-bar").click(e=>{const a=t(e.currentTarget).width(),p=e.offsetX/a;o.volume=p,l&&p>0&&(l=!1,t("#muteBtn").html('<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/><path d="M15 9a2 3 0 0 1 0 6" stroke-width="2"/><path d="M18 7.7a2 3 0 0 1 0 9" stroke-width="2"/></svg>'),o.muted=!1),h(p)}),t("#muteBtn").click(()=>{l=!l,o.muted=l,t("#muteBtn").html(l?'<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/></svg>':'<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/><path d="M15 9a2 3 0 0 1 0 6" stroke-width="2"/><path d="M18 7.7a2 3 0 0 1 0 9" stroke-width="2"/></svg>'),h(l?0:o.volume)}),t(document).on("click",".playlist-item",function(){s(parseInt(t(this).data("index"))),i(),m()}),t("#searchInput").on("input",function(){const e=t(this).val().toLowerCase();t(".playlist-item").each(function(){const a=t(this).text().toLowerCase();t(this).toggle(a.includes(e))})});function m(){localStorage.setItem("currentTrackIndex",n)}t(o).on("ended",m),t("#nextBtn,#prevBtn,#repeatBtn,#playBtn").click(m);const f=localStorage.getItem("currentTrackIndex");if(f!==null){const e=parseInt(f);!isNaN(e)&&e>=0&&e<c.length&&s(e)}t(".visualizer").click(()=>u?y():i()).html(`<div class="wave">${'<div class="wave-bar"></div>'.repeat(20)}</div>`)};export{I as wiAudios};
