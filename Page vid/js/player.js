function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
        var vars = query.split("&");
       for (let i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var uio = getQueryVariable("video");

var container = document.querySelector('.containerVideo');
if (uio == 19) {
container.innerHTML += '<video  src='+data.films[uio].src+' autoplay loop class="bloc"></video>';
console.log(uio);
}else {
container.innerHTML += '<video  src='+data.films[uio].src+' class="bloc"></video>';
console.log(uio);
}

  var play = document.querySelector('.play');
  var pause = document.querySelector('.pause');
  var stop = document.querySelector('.stop');
  var volume = document.querySelector('.volume');
  var skipPlus = document.querySelector('.skipPlus');
  var skipMoins = document.querySelector('.skipMoins');
  var ecran = document.querySelector('.ecran');
  var ecran2 = document.querySelector('.ecran2');
  var video = document.querySelector('.bloc');
  var currentBar = document.querySelector('.currentBar');
  var barreNavigation = document.querySelector('.barreNavigation');
  var slidecontainer = document.querySelector('#slidecontainer');
  var slider = document.querySelector('.slider');
  var sliderVolume = document.querySelector('.slider::-webkit-slider-thumb');
  var progressbar = document.querySelector('.progressBar');
  var body = document.querySelector('body');
var timer = document.querySelector('.timerTxt');
  var value = 10;
  var duree = 0;
  var sound = 0;




  play.addEventListener('click',function(){

  play.style.display='none';
  pause.style.display='block';
  video.play();

});

  pause.addEventListener('click',function(){

    pause.style.display='none';
    play.style.display='block';
    video.pause();

  });

  stop.addEventListener('click' ,function(){

    pause.style.display='none';
    play.style.display='block';
    video.pause();
    video.currentTime=0;

  })


  ecran.addEventListener('click',function(){

  ecran.style.display = 'none';
  ecran2.style.display = 'block';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.marginLeft = '0%';
  container.style.marginTop = '0%';
  container.style.marginRight = '0%';
  container.style.marginBottom = '0%';
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.right = '0';
  container.style.bottom = '0';
  play.style.width = '30px';
  play.style.height = '30px';
  play.style.bottom = '10%';
  play.style.left = '2%';
  pause.style.width = '65px';
  pause.style.height = '30px';
  pause.style.bottom = '10%';
  stop.style.width = '60px';
  stop.style.height = '30px';
  stop.style.bottom = '8%';
  stop.style.left = '4.8%';
  volume.style.width = '60px';
  volume.style.height = '35px';
  volume.style.bottom = '5%';
  volume.style.left = '9%';
  slidecontainer.style.width = '100px';
  slidecontainer.style.bottom = '14px';
  slidecontainer.style.left = '12%';
  slider.style.height = '10px';
  progressbar.style.width = '1000px';
  progressbar.style.height = '15px';
  progressbar.style.bottom = '14px';
  progressbar.style.left = '22%';
  container.webkitRequestFullscreen();




  })

  ecran2.addEventListener('click',function(){


    ecran.style.display = 'block';
  ecran2.style.display = 'none';
  container.style.width = '37.8%';
  container.style.height = '44vh';
  container.style.marginLeft = '3.2%';
  container.style.marginTop = '6.9%';
  container.style.top = '0';
  container.style.left = '0';
  container.style.position = 'absolute';
  play.style.width = '13px';
  play.style.height = '13px';
  play.style.bottom = '20%';
  play.style.left = '2%';
  pause.style.width = '25px';
  pause.style.height = '13px';
  pause.style.bottom = '20%';
  pause.style.left = '1%';
  stop.style.width = '20px';
  stop.style.height = '12px';
  stop.style.bottom = '20%';
  stop.style.left = '4.8%';
  volume.style.width = '25px';
  volume.style.height = '15px';
  volume.style.bottom = '15%';
  volume.style.left = '8.5%';
  slidecontainer.style.width = '50px';
  slidecontainer.style.bottom = '22%';
  slidecontainer.style.left = '12%;';
  slider.style.height = '5px';
  progressbar.style.width = '350px';
  progressbar.style.height = '10px';
  progressbar.style.bottom = '24%';
  progressbar.style.left = '24%';
  document.webkitExitFullscreen();


  })

document.addEventListener('keyup', function(event) {

  if (event.keyCode === 27) {
    document.webkitExitFullscreen();
    ecran.style.display = 'block';
    ecran2.style.display = 'none';
    container.style.width = '37.8%';
    container.style.height = '44vh';
    container.style.marginLeft = '3.2%';
    container.style.marginTop = '6.9%';
    container.style.top = '0';
    container.style.left = '0';
    container.style.position = 'absolute';
    play.style.width = '13px';
    play.style.height = '13px';
    play.style.bottom = '20%';
    play.style.left = '2%';
    pause.style.width = '25px';
    pause.style.height = '13px';
    pause.style.bottom = '20%';
    pause.style.left = '1%';
    stop.style.width = '20px';
    stop.style.height = '12px';
    stop.style.bottom = '20%';
    stop.style.left = '4.8%';
    volume.style.width = '25px';
    volume.style.height = '15px';
    volume.style.bottom = '15%';
    volume.style.left = '8.5%';
    slidecontainer.style.width = '50px';
    slidecontainer.style.bottom = '22%';
    slidecontainer.style.left = '12%;';
    slider.style.height = '5px';
    progressbar.style.width = '350px';
    progressbar.style.height = '10px';
    progressbar.style.bottom = '24%';
    progressbar.style.left = '24%';


  }
})

  skipPlus.addEventListener('dblclick', function(){

    video.currentTime+=10;
  })

  skipMoins.addEventListener('dblclick', function(){

    video.currentTime-=10;
  })

  video.ontimeupdate = function() {
      duree = (video.currentTime/video.duration)*100;
      currentBar.style.width=duree+"%";

      var minute = Math.floor(video.currentTime/60);
      var seconde = Math.floor(((video.currentTime/60)-minute)*60);
      if (seconde < 10) {
          seconde = '0'+seconde;
      }
      timer.textContent=minute+':'+seconde+' / '+data.films[uio].duration;
          };

        var choix = document.querySelector(".slider2");
        choix.addEventListener('click',function() {

            video.currentTime=(choix.value/100)*video.duration;
            currentBar.style.width=choix.value+"%";
        });



  slider.addEventListener('change',function() {
      sound = slider.value/100;
      video.volume = sound;
  })

volume.addEventListener('click', function() {
  video.volume = 0;
  slider.value = 0;

})


video.addEventListener('click', function() {
  barreNavigation.classList.toggle('display');
})


var titre = document.querySelector(".titre");
titre.textContent = data.films[uio].title;

var text = document.querySelector(".textLorem");
text.innerHTML = data.films[uio].description;

var sug = document.querySelectorAll(".videoContain");
var rand = [];

 for (let i=0;i<sug.length;i++) {
     sug[i].innerHTML = '<img src='+data.films[i].thumbnail+' class="cardImg"></img>';
     sug[i].addEventListener('click',function() {
         location.href='pageVid.html?video='+i;
     })
 };


var plus = document.querySelector('.plus');
var suggtest = 4;
var ert = [];
plus.addEventListener('click',function() {
     for (let i=0;i<sug.length;i++) {
     ert[i] = suggtest;
     sug[i].innerHTML = '<img src='+data.films[suggtest].thumbnail+' class="cardImg"></img>';
     sug[i].addEventListener('click',function() {
         location.href='pageVid.html?video='+ert[i];
     })
    suggtest++;
 };
});

var moin = document.querySelector('.moin');
moin.addEventListener('click',function() {
    if (suggtest == 4 ){
        return;
    } else {
    suggtest= suggtest - 8;
    console.log(suggtest);
     for (let i=0;i<sug.length;i++) {
     ert[i] = suggtest;
     sug[i].innerHTML = '<img src='+data.films[suggtest].thumbnail+' class="cardImg"></img>';
     sug[i].addEventListener('click',function() {
         location.href='pageVid.html?video='+ert[i];
     })
    suggtest++;
 };
}
});





if (uio != 19 ) {
    var rate = document.querySelector(".descriptionRating");
    var author = document.querySelector(".descriptionAuthor");
    author.innerHTML = '<p>Réalisé par <span class="authorUrl">'+data.films[uio].author+'</span> en '+data.films[uio].year+'</p>';
    rate.innerHTML = '<p>Note : '+data.films[uio].rating+' / 5<br>Durée : " '+data.films[uio].duration+' "</p>';
    var authorUrl = document.querySelector(".authorUrl");
    authorUrl.addEventListener('click',function() {
    location.href=data.films[uio].author_url;  
});
    
};









