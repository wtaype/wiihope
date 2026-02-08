import{$ as t,N as C,s as T,g as F}from"./main-BARQQjOO.js";import"./main-B23-m-1d.js";import"./vendor-B2AETYxa.js";import"./firebase-JzOrHdc0.js";const B=()=>{t("#biblia").html(`
    <div class="biblia_container">
      <div class="biblia_hero"><h2><i class="fas fa-bible"></i> Audio Biblia en Quechua</h2></div>
      <div class="biblia_layout">
        <div class="biblia_player">
          <canvas id="audioCanvas" class="audio_canvas"></canvas>
          <div class="player_info"><h3 class="current_title">Selecciona un capítulo</h3><p class="current_book"></p></div>
          <div class="player_progress">
            <div class="progress_container"><div class="progress_bg"><div class="progress_fill"></div></div></div>
            <div class="progress_time"><span class="time_current">0:00</span><span class="time_duration">0:00</span></div>
          </div>
          <div class="player_controls">
            <button class="btn_control btn_prev" title="Anterior"><i class="fas fa-step-backward"></i></button>
            <button class="btn_control btn_play" title="Reproducir"><i class="fas fa-play"></i></button>
            <button class="btn_control btn_next" title="Siguiente"><i class="fas fa-step-forward"></i></button>
            <button class="btn_control btn_repeat" title="Repetir"><i class="fas fa-repeat"></i></button>
            <div class="volume_control">
              <button class="btn_control btn_volume" title="Volumen"><i class="fas fa-volume-up"></i></button>
              <div class="volume_container"><div class="volume_bg"><div class="volume_fill"></div></div></div>
            </div>
          </div>
        </div>
        <div class="biblia_playlist">
          <div class="playlist_header">
            <h3><i class="fas fa-headphones"></i> Playlist</h3>
            <div class="playlist_actions"><button class="btn_icon btn_fullscreen" title="Pantalla completa"><i class="fas fa-expand"></i></button></div>
          </div>
          <div class="search_bar"><i class="fas fa-search search_icon"></i><input type="text" id="searchInput" placeholder="Buscar libro o capítulo..." autocomplete="off"></div>
          <div class="playlist_list" id="playlistList"></div>
        </div>
      </div>
    </div>
  `);const A={"San Mateo":28,"San Marcos":16,"San Lucas":24,"San Juan":21,Hechos:28,Romanos:16,"1 Corintios":16,"2 Corintios":13,Galatas:6,Efesios:6,Filipenses:4,Colosenses:4,"1 Tesalonicenses":5,"2 Tesalonicenses":3,"1 Timoteo":6,"2 Timoteo":4,Tito:3,Filemon:1,Hebreos:13,Santiago:5,"1 San Pedro":5,"2 San Pedro":3,"1 San Juan":5,"2 San Juan":1,"3 San Juan":1,Judas:1,Apocalipsis:22},P="https://raw.githubusercontent.com/geluksee/hope/main/",s=new Audio,c=[];let b=0,o=!1,v=!1,E=!0,i,l,y,d=[];Object.entries(A).forEach(([e,a])=>Array.from({length:a},(m,n)=>{const g=c.length+1;c.push({book:e,chapter:n+1,title:`${e} - Capítulo ${n+1}`,url:`${P}${g}_${e.replace(/\s/g,"_")}_${String(n+1).padStart(2,"0")}.mp3`,num:g})}));const w=e=>isNaN(e)?"0:00":`${~~(e/60)}:${String(~~(e%60)).padStart(2,"0")}`,h=()=>{if(!i||!l)return;l.clearRect(0,0,i.width,i.height);const e=45,a=i.width/e,m=a*.65,n=m/2,g=o?s.currentTime*2.5:0,$=l.createLinearGradient(0,i.height,0,i.height*.3);$.addColorStop(0,getComputedStyle(document.documentElement).getPropertyValue("--mco").trim()),$.addColorStop(1,getComputedStyle(document.documentElement).getPropertyValue("--hv").trim()),d=d.length?d:Array(e).fill(0);for(let r=0;r<e;r++){const L=o?Math.sin(g+r*.18)*Math.sin(g*.3+r*.1):Math.sin(r*.3);d[r]+=((L+1)/2*i.height*.65+i.height*.1-d[r])*(o?.06:.02);const V=d[r],u=r*a+(a-m)/2,f=i.height-V;l.fillStyle=$,l.beginPath(),l.moveTo(u+n,f),l.lineTo(u+m-n,f),l.arcTo(u+m,f,u+m,f+n,n),l.lineTo(u+m,i.height),l.lineTo(u,i.height),l.lineTo(u,f+n),l.arcTo(u,f,u+n,f,n),l.fill()}y=requestAnimationFrame(h)},I=()=>{y&&(cancelAnimationFrame(y),y=null),i&&l&&l.clearRect(0,0,i.width,i.height),d=[]},p=()=>t("#playlistList").html(c.map((e,a)=>`
    <div class="playlist_item ${a===b?"active":""}" data-index="${a}">
      <span class="item_number">${e.num}</span>
      <div class="item_info"><span class="item_title">${e.title}</span><span class="item_book">${e.book}</span></div>
      ${a===b&&o?'<i class="fas fa-volume-high item_playing"></i>':""}
    </div>
  `).join("")),_=e=>{if(e<0||e>=c.length)return;b=e;const a=c[e];s.src=a.url,s.load(),t(".current_title").text(a.title),t(".current_book").text(a.book),p(),!E&&C(`📖 ${a.title}`,"info",2e3),T("bibliaIndex",b,168)},R=()=>{o?(s.pause(),o=!1,t(".btn_play i").attr("class","fas fa-play"),I(),p()):(s.src||_(0),s.play().then(()=>{o=!0,E=!1,t(".btn_play i").attr("class","fas fa-pause"),h(),p()}).catch(()=>C("Error al reproducir","error")))},k=e=>{const a=b+e;a>=0&&a<c.length?(_(a),s.src=c[a].url,s.play().then(()=>{o=!0,t(".btn_play i").attr("class","fas fa-pause"),h(),p()})):a>=c.length&&(_(0),s.play().then(()=>{o=!0,t(".btn_play i").attr("class","fas fa-pause"),h(),p()}))};if(t(s).on({timeupdate:()=>{const{currentTime:e,duration:a}=s;t(".time_current").text(w(e)),t(".time_duration").text(w(a)),t(".progress_fill").css("width",`${e/a*100}%`)},ended:()=>v?(s.currentTime=0,s.play()):k(1),loadedmetadata:()=>t(".time_duration").text(w(s.duration)),error:()=>C("Error al cargar audio","error")}),t(".btn_play").on("click",R),t("#audioCanvas").on("click",R),t(".btn_prev").on("click",()=>k(-1)),t(".btn_next").on("click",()=>k(1)),t(".btn_repeat").on("click",function(){v=!v,t(this).toggleClass("active"),T("bibliaRepeat",v,168)}),t(".btn_volume").on("click",()=>{s.muted=!s.muted,t(".btn_volume i").attr("class",`fas ${s.muted?"fa-volume-mute":"fa-volume-up"}`)}),t(".volume_container").on("click",function(e){const a=e.offsetX/t(this).width();s.volume=a,s.muted=!1,t(".btn_volume i").attr("class","fas fa-volume-up"),t(".volume_fill").css("width",`${a*100}%`),T("bibliaVolume",a,168)}),t(".progress_container").on("click",function(e){s.duration&&(s.currentTime=e.offsetX/t(this).width()*s.duration)}),t(document).on("click",".playlist_item",function(){_(parseInt(t(this).data("index"))),s.play().then(()=>{o=!0,t(".btn_play i").attr("class","fas fa-pause"),h(),p()})}),t("#searchInput").on("input",function(){const e=t(this).val().toLowerCase();t(".playlist_item").each(function(){t(this).toggle(t(this).text().toLowerCase().includes(e))})}),t(".btn_fullscreen").on("click",()=>{const e=t(".biblia_container")[0];document.fullscreenElement?document.exitFullscreen?.()||document.webkitExitFullscreen?.()||document.mozCancelFullScreen?.():e.requestFullscreen?.()||e.webkitRequestFullscreen?.()||e.mozRequestFullScreen?.()}),t(document).on("fullscreenchange webkitfullscreenchange mozfullscreenchange",()=>{t(".btn_fullscreen i").attr("class",`fas fa-${document.fullscreenElement||document.webkitFullscreenElement?"compress":"expand"}`)}),i=t("#audioCanvas")[0],i){l=i.getContext("2d");const e=()=>{const a=devicePixelRatio||1;i.width=i.offsetWidth*a,i.height=i.offsetHeight*a,i.style.width=`${i.offsetWidth}px`,i.style.height=`${i.offsetHeight}px`,l.scale(a,a)};e(),t(window).on("resize",e),h()}p();const x=F("bibliaIndex");x!==null&&x>=0&&x<c.length&&_(x),F("bibliaRepeat")&&(v=!0,t(".btn_repeat").addClass("active"));const S=F("bibliaVolume");S?(s.volume=S,t(".volume_fill").css("width",`${S*100}%`)):(s.volume=.7,t(".volume_fill").css("width","70%")),console.log("✅ Biblia Audio cargado")};export{B as biblia};
