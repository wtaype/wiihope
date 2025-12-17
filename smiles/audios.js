import $ from 'jquery';

// MI AUDIO FUNCION
$(function(){
const books={
    "San Mateo":28,"San Marcos":16,"San Lucas":24,"San Juan":21,"Hechos":28,"Romanos":16,
    "1 Corintios":16,"2 Corintios":13,"Galatas":6,"Efesios":6,"Filipenses":4,"Colosenses":4,
    "1 Tesalonicenses":5,"2 Tesalonicenses":3,"1 Timoteo":6,"2 Timoteo":4,"Tito":3,"Filemon":1,
    "Hebreos":13,"Santiago":5,"1 San Pedro":5,"2 San Pedro":3,"1 San Juan":5,"2 San Juan":1,
    "3 San Juan":1,"Judas":1,"Apocalipsis":22
  };
  const baseUrl='https://raw.githubusercontent.com/geluksee/hope/main/';
  const audio=new Audio();
  let currentTrackIndex=0,isPlaying=false,repeat=false,tracks=[];
  const playlist=$("#playlist");
  let trackCounter=0; 
  for(const [book,chapters] of Object.entries(books)){
    for(let c=1;c<=chapters;c++){
      trackCounter++;
      const urlBookName=book.replace(/ /g,'_');
      const chapterPadded=String(c).padStart(2,'0');
      const trackUrl=`${baseUrl}${trackCounter}_${urlBookName}_${chapterPadded}.mp3`;
      tracks.push({book,chapter:c,title:`${book} - Capitulo ${c}`,index:trackCounter-1,url:trackUrl});
      playlist.append(`<div class="playlist-item" data-index="${trackCounter-1}"><span class="number">${trackCounter}</span><span class="title">${book} - Capitulo ${c}</span></div>`);
    }
  }
  const formatTime=s=>isNaN(s)?"0:00":Math.floor(s/60)+":"+String(Math.floor(s%60)).padStart(2,'0');
  function loadTrack(i){if(i<0||i>=tracks.length)return;currentTrackIndex=i;audio.src=tracks[i].url;$('#currentTrack').text(tracks[i].title);$('.playlist-item').removeClass('active');$(`.playlist-item[data-index="${i}"]`).addClass('active');}
  function playTrack(){audio.play().then(()=>{isPlaying=true;$('#playBtn').html('<svg viewBox="0 0 24 24"><rect/><rect x="8" y="6" width="3" height="12"/><rect x="13" y="6" width="3" height="12"/></svg>');}).catch(e=>console.log(e));}
  function pauseTrack(){audio.pause();isPlaying=false;$('#playBtn').html('<svg viewBox="0 0 24 24"><rect/><polygon points="8,6 20,12 8,18"/></svg>');}
  function prevTrack(){if(currentTrackIndex>0){loadTrack(currentTrackIndex-1);playTrack();}}
  function nextTrack(){if(currentTrackIndex<tracks.length-1){loadTrack(currentTrackIndex+1);playTrack();}else if(repeat){loadTrack(0);playTrack();}}
  // Actualizar tiempo
  $(audio).on('timeupdate',()=>{const c=audio.currentTime,d=audio.duration;$('#currentTime').text(formatTime(c));$('#duration').text(formatTime(d));$('.progress').css('width',((c/d)*100)+'%');});
  $(audio).on('ended',()=>{repeat?(loadTrack(currentTrackIndex),playTrack()):nextTrack();});
  $(audio).on('loadedmetadata',()=>{$('#duration').text(formatTime(audio.duration));});
  // Controles básicos
  $('#playBtn').click(()=>{if(!audio.src)loadTrack(0);isPlaying?pauseTrack():playTrack();});
  $('#prevBtn').click(prevTrack);
  $('#nextBtn').click(nextTrack);
  $('#repeatBtn').click(function(){repeat=!repeat;$(this).toggleClass('pya');});
  // Progreso al hacer click
  $('.progress-bar').click(e=>{const w=$(e.currentTarget).width();audio.currentTime=(e.offsetX/w)*audio.duration;});
  // Control de volumen con barra
  let isMuted=false;
  function updateVolumeBar(vol){
    $('.volume-level').css('width',(vol*100)+'%');
  }
  audio.volume=1;
  updateVolumeBar(audio.volume);
  $('.volume-bar').click(e=>{
    const w=$(e.currentTarget).width();
    const clickX=e.offsetX;
    const vol=clickX/w;
    audio.volume=vol;
    if(isMuted&&vol>0){
      isMuted=false;$('#muteBtn').html('<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/><path d="M15 9a2 3 0 0 1 0 6" stroke-width="2"/><path d="M18 7.7a2 3 0 0 1 0 9" stroke-width="2"/></svg>');
      audio.muted=false;
    }
    updateVolumeBar(vol);
  });
  $('#muteBtn').click(()=>{
    isMuted=!isMuted;
    audio.muted=isMuted;
    $('#muteBtn').html(isMuted?'<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/></svg>':'<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/><path d="M15 9a2 3 0 0 1 0 6" stroke-width="2"/><path d="M18 7.7a2 3 0 0 1 0 9" stroke-width="2"/></svg>');
    updateVolumeBar(isMuted?0:audio.volume);
  });
  // Selección de track en la lista
  $(document).on('click','.playlist-item',function(){
    loadTrack(parseInt($(this).data('index')));
    playTrack();
    saveCurrentTrack();
  });
  // Filtro de búsqueda
  $('#searchInput').on('input',function(){
    const query=$(this).val().toLowerCase();
    $('.playlist-item').each(function(){
      const text=$(this).text().toLowerCase();
      $(this).toggle(text.includes(query));
    });
  });
  // Guardando en LocalStorage 
  function saveCurrentTrack(){
    localStorage.setItem('currentTrackIndex', currentTrackIndex);
  }
  $(audio).on('ended',saveCurrentTrack);
  $('#nextBtn,#prevBtn,#repeatBtn,#playBtn').click(saveCurrentTrack);
  // Obteniendo en LocalStorage 
  const savedTrack=localStorage.getItem('currentTrackIndex');
  if(savedTrack!==null){
    const idx=parseInt(savedTrack);
    if(!isNaN(idx)&&idx>=0&&idx<tracks.length){
      loadTrack(idx);
    }
  }
// HACIENDO PAUSE Y WAVE PARA ANIMACIONES 
$('.visualizer').click(()=>isPlaying?pauseTrack():playTrack()).html(`<div class="wave">${'<div class="wave-bar"></div>'.repeat(20)}</div>`)
  
});