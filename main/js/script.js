
var dfg = document.querySelectorAll(".l-cards__item");

for (let i = 0; i < dfg.length; i++) {
    dfg[i].innerHTML = '<img src='+data.films[i].thumbnail+' class="cardImg"></img>';
    dfg[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+i;
    })
};

var sdf = document.querySelector(".l-cards__list2");

for (let i = 0; i < data.films.length; i++) {
    sdf.innerHTML += '<div class="dunno"><div class="non"><p class="oui">'+data.films[i].title+'</p></div><img src='+data.films[i].thumbnail+' class="l-cards__item2"></img></div>';
};

var yui = document.querySelectorAll(".l-cards__item2");
var butt = document.querySelectorAll(".inactive-button");
var buttAct = document.querySelector(".active");
var all = document.querySelector(".all");
var dunno = document.querySelectorAll(".dunno");

all.addEventListener('click',function() {
    sdf.innerHTML = " ";
for (let i = 0; i < data.films.length; i++) {
    sdf.innerHTML += '<div class="dunno"><div class="non"><p class="oui">'+data.films[i].title+'</p></div><img src='+data.films[i].thumbnail+' class="l-cards__item2"></img></div>';
};
yui = document.querySelectorAll(".dunno");
    dunno = document.querySelectorAll('.non');

      for (let a = 0; a < dfg.length; a++) {
          dfg[a].addEventListener('mouseover', function() {

              for (let i = 0; i < dfg.length; i++) {
                  if (i !== a) {
                      dfg[i].classList.add('over');
                      dfg[i].style.opacity = 0.3;
                      dfg[i].style.transitionDuration = "1s";
                  }
              }
          });

          dfg[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  dfg[i].classList.remove('over');
                  dfg[i].style.opacity = 1;
                  dfg[i].style.transitionDuration = "1s";
              }
          });
      }



      for (let a = 0; a < yui.length; a++) {
          yui[a].addEventListener('mouseover', function() {
              console.log(a)
              for (let i = 0; i < yui.length; i++) {
                  if (i !== a) {
                      yui[i].classList.add('over');
                      dunno[a].style.display = 'block';
                      dunno[a].addEventListener('mouseover',function() {
                           yui[i].classList.add('over');
                          dunno[a].style.display = 'block';
                          yui[i].style.opacity = 0.3;
                      });
                      yui[i].style.opacity = 0.3;
                  }
              }
          });

          yui[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  yui[i].classList.remove('over');
                  dunno[a].style.display = 'none';
                   dunno[a].addEventListener('mouseout',function() {
                           yui[i].classList.remove('over');
                          dunno[a].style.display = 'none';
                          yui[i].style.opacity = 1;
                      });
                  yui[i].style.opacity = 1;

              }
          });
}
for (let i = 0; i < yui.length; i++) {
    yui[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+i;
});
        dunno[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+i;
    });
};
});
var bestFilm = 1;
var titleName = document.querySelector(".title_name");
titleName.innerHTML = '<span class="strongText">'+data.films[bestFilm].title+'</span>';
var heroSubhl = document.querySelector(".hero_subhl");
heroSubhl.textContent = 'Réalisé par '+data.films[bestFilm].author;
var heroDesc = document.querySelector(".hero_desc");
heroDesc.textContent = data.films[bestFilm].description;
var heroButton = document.querySelector(".hero_buttons");
heroButton.innerHTML =  '<a href="../Page%20vid/pageVid.html?video='+bestFilm+'" class="button">Regarder</a>';

var action = document.querySelector(".action");

action.addEventListener('click',function() { 
var jetest = [];
var e = 0;
    var filtre = "Action";
        sdf.innerHTML = " ";
        for (let i = 0; i < data.films.length; i++) {
            if (data.films[i].category == filtre) {
                jetest[e]=[i];
                e++;
                console.log(jetest);
                sdf.innerHTML += '<div class="dunno"><div class="non"><p class="oui">'+data.films[i].title+'</p></div><img src='+data.films[i].thumbnail+' class="l-cards__item2"></img></div>';
            }
    };
    yui = document.querySelectorAll(".l-cards__item2");
    dunno = document.querySelectorAll('.non');

      for (let a = 0; a < dfg.length; a++) {
          dfg[a].addEventListener('mouseover', function() {

              for (let i = 0; i < dfg.length; i++) {
                  if (i !== a) {
                      dfg[i].classList.add('over');
                      dfg[i].style.opacity = 0.3;
                      dfg[i].style.transitionDuration = "1s";
                  }
              }
          });

          dfg[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  dfg[i].classList.remove('over');
                  dfg[i].style.opacity = 1;
                  dfg[i].style.transitionDuration = "1s";
              }
          });
      }



      for (let a = 0; a < yui.length; a++) {
          yui[a].addEventListener('mouseover', function() {
              console.log(a)
              for (let i = 0; i < yui.length; i++) {
                  if (i !== a) {
                      yui[i].classList.add('over');
                      dunno[a].style.display = 'block';
                      dunno[a].addEventListener('mouseover',function() {
                           yui[i].classList.add('over');
                          dunno[a].style.display = 'block';
                          yui[i].style.opacity = 0.3;
                      });
                      yui[i].style.opacity = 0.3;
                  }
              }
          });

          yui[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  yui[i].classList.remove('over');
                  dunno[a].style.display = 'none';
                   dunno[a].addEventListener('mouseout',function() {
                           yui[i].classList.remove('over');
                          dunno[a].style.display = 'none';
                          yui[i].style.opacity = 1;
                      });
                  yui[i].style.opacity = 1;

              }
          });
}

    for (let i = 0; i < yui.length; i++) {
    yui[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+jetest[i];
    });
        dunno[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+jetest[i];
    });
    };
    });

var animation = document.querySelector(".animation");

animation.addEventListener('click',function() { 
     
var jetest = [];
var e = 0;
    var filtre = "Animation";
        sdf.innerHTML = " ";
        for (let i = 0; i < data.films.length; i++) {
            if (data.films[i].category == filtre) {
                jetest[e]=[i];
                e++;
                console.log(jetest);
                sdf.innerHTML += '<div class="dunno"><div class="non"><p class="oui">'+data.films[i].title+'</p></div><img src='+data.films[i].thumbnail+' class="l-cards__item2"></img></div>';
            }
    };
    yui = document.querySelectorAll(".l-cards__item2");
    dunno = document.querySelectorAll('.non');

      for (let a = 0; a < dfg.length; a++) {
          dfg[a].addEventListener('mouseover', function() {

              for (let i = 0; i < dfg.length; i++) {
                  if (i !== a) {
                      dfg[i].classList.add('over');
                      dfg[i].style.opacity = 0.3;
                      dfg[i].style.transitionDuration = "1s";
                  }
              }
          });

          dfg[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  dfg[i].classList.remove('over');
                  dfg[i].style.opacity = 1;
                  dfg[i].style.transitionDuration = "1s";
              }
          });
      }



      for (let a = 0; a < yui.length; a++) {
          yui[a].addEventListener('mouseover', function() {
              console.log(a)
              for (let i = 0; i < yui.length; i++) {
                  if (i !== a) {
                      yui[i].classList.add('over');
                      dunno[a].style.display = 'block';
                      dunno[a].addEventListener('mouseover',function() {
                           yui[i].classList.add('over');
                          dunno[a].style.display = 'block';
                          yui[i].style.opacity = 0.3;
                      });
                      yui[i].style.opacity = 0.3;
                  }
              }
          });

          yui[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  yui[i].classList.remove('over');
                  dunno[a].style.display = 'none';
                   dunno[a].addEventListener('mouseout',function() {
                           yui[i].classList.remove('over');
                          dunno[a].style.display = 'none';
                          yui[i].style.opacity = 1;
                      });
                  yui[i].style.opacity = 1;

              }
          });
}
    for (let i = 0; i < yui.length; i++) {
    yui[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+jetest[i];
    });
        dunno[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+jetest[i];
    });
    };
    });


var comedy = document.querySelector(".comedie");

comedy.addEventListener('click',function() { 
     
var jetest = [];
var e = 0;
    var filtre = "Comedy";
        sdf.innerHTML = " ";
        for (let i = 0; i < data.films.length; i++) {
            if (data.films[i].category == filtre) {
                jetest[e]=[i];
                e++;
                console.log(jetest);
                sdf.innerHTML += '<div class="dunno"><div class="non"><p class="oui">'+data.films[i].title+'</p></div><img src='+data.films[i].thumbnail+' class="l-cards__item2"></img></div>';
            }
    };
    yui = document.querySelectorAll(".l-cards__item2");
    dunno = document.querySelectorAll('.non');

      for (let a = 0; a < dfg.length; a++) {
          dfg[a].addEventListener('mouseover', function() {

              for (let i = 0; i < dfg.length; i++) {
                  if (i !== a) {
                      dfg[i].classList.add('over');
                      dfg[i].style.opacity = 0.3;
                      dfg[i].style.transitionDuration = "1s";
                  }
              }
          });

          dfg[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  dfg[i].classList.remove('over');
                  dfg[i].style.opacity = 1;
                  dfg[i].style.transitionDuration = "1s";
              }
          });
      }



      for (let a = 0; a < yui.length; a++) {
          yui[a].addEventListener('mouseover', function() {
              console.log(a)
              for (let i = 0; i < yui.length; i++) {
                  if (i !== a) {
                      yui[i].classList.add('over');
                      dunno[a].style.display = 'block';
                      dunno[a].addEventListener('mouseover',function() {
                           yui[i].classList.add('over');
                          dunno[a].style.display = 'block';
                          yui[i].style.opacity = 0.3;
                      });
                      yui[i].style.opacity = 0.3;
                  }
              }
          });

          yui[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  yui[i].classList.remove('over');
                  dunno[a].style.display = 'none';
                   dunno[a].addEventListener('mouseout',function() {
                           yui[i].classList.remove('over');
                          dunno[a].style.display = 'none';
                          yui[i].style.opacity = 1;
                      });
                  yui[i].style.opacity = 1;

              }
          });
}
    for (let i = 0; i < yui.length; i++) {
    yui[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+jetest[i];
    });
        dunno[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+jetest[i];
    });
    };
    });

var horreur = document.querySelector(".horreur");

horreur.addEventListener('click',function() { 
     
var jetest = [];
var e = 0;
    var filtre = "Horror / Thriller";
        sdf.innerHTML = " ";
        for (let i = 0; i < data.films.length; i++) {
            if (data.films[i].category == filtre) {
                jetest[e]=[i];
                e++;
                console.log(jetest);
                sdf.innerHTML += '<div class="dunno"><div class="non"><p class="oui">'+data.films[i].title+'</p></div><img src='+data.films[i].thumbnail+' class="l-cards__item2"></img></div>';
            }
    };
    yui = document.querySelectorAll(".l-cards__item2");
    dunno = document.querySelectorAll('.non');

      for (let a = 0; a < dfg.length; a++) {
          dfg[a].addEventListener('mouseover', function() {

              for (let i = 0; i < dfg.length; i++) {
                  if (i !== a) {
                      dfg[i].classList.add('over');
                      dfg[i].style.opacity = 0.3;
                      dfg[i].style.transitionDuration = "1s";
                  }
              }
          });

          dfg[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  dfg[i].classList.remove('over');
                  dfg[i].style.opacity = 1;
                  dfg[i].style.transitionDuration = "1s";
              }
          });
      }



      for (let a = 0; a < yui.length; a++) {
          yui[a].addEventListener('mouseover', function() {
              console.log(a)
              for (let i = 0; i < yui.length; i++) {
                  if (i !== a) {
                      yui[i].classList.add('over');
                      dunno[a].style.display = 'block';
                      dunno[a].addEventListener('mouseover',function() {
                           yui[i].classList.add('over');
                          dunno[a].style.display = 'block';
                          yui[i].style.opacity = 0.3;
                      });
                      yui[i].style.opacity = 0.3;
                  }
              }
          });

          yui[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  yui[i].classList.remove('over');
                  dunno[a].style.display = 'none';
                   dunno[a].addEventListener('mouseout',function() {
                           yui[i].classList.remove('over');
                          dunno[a].style.display = 'none';
                          yui[i].style.opacity = 1;
                      });
                  yui[i].style.opacity = 1;

              }
          });
}
    for (let i = 0; i < yui.length; i++) {
    yui[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+jetest[i];
    });
    dunno[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+jetest[i];
    });
    };
    });


for (let i = 0; i < butt.length; i++) {
    butt[i].addEventListener('click',function() {
        butt[i].className ='active';
        buttAct.className ='inactive-button';
        buttAct = document.querySelector(".active");
    })
};


for (let i = 0; i < yui.length; i++) {
    yui[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+i;
});
        dunno[i].addEventListener('click',function() {
        location.href='../Page%20vid/pageVid.html?video='+i;
    });
};

var dunno = document.querySelectorAll('.non');

      for (let a = 0; a < dfg.length; a++) {
          dfg[a].addEventListener('mouseover', function() {

              for (let i = 0; i < dfg.length; i++) {
                  if (i !== a) {
                      dfg[i].classList.add('over');
                      dfg[i].style.opacity = 0.3;
                      dfg[i].style.transitionDuration = "1s";
                  }
              }
          });

          dfg[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  dfg[i].classList.remove('over');
                  dfg[i].style.opacity = 1;
                  dfg[i].style.transitionDuration = "1s";
              }
          });
      }



      for (let a = 0; a < yui.length; a++) {
          yui[a].addEventListener('mouseover', function() {
              console.log(a)
              for (let i = 0; i < yui.length; i++) {
                  if (i !== a) {
                      yui[i].classList.add('over');
                      dunno[a].style.display = 'block';
                      dunno[a].addEventListener('mouseover',function() {
                           yui[i].classList.add('over');
                          dunno[a].style.display = 'block';
                          yui[i].style.opacity = 0.3;
                      });
                      yui[i].style.opacity = 0.3;
                  }
              }
          });

          yui[a].addEventListener('mouseout', function() {
              for (let i = 0; i < yui.length; i++) {
                  yui[i].classList.remove('over');
                  dunno[a].style.display = 'none';
                   dunno[a].addEventListener('mouseout',function() {
                           yui[i].classList.remove('over');
                          dunno[a].style.display = 'none';
                          yui[i].style.opacity = 1;
                      });
                  yui[i].style.opacity = 1;

              }
          });
}





