var champ = document.querySelector('.bigForm');
var court = document.querySelector('.court');
var long = document.querySelector('.long');
var mdp = document.querySelector('.littleForm2');
var verifier = document.querySelector('.littleForm3');
var errormdp = document.querySelector('.errormdp');
var verifemail = document.querySelector('.bigForm2');
var manque = document.querySelector('.manque');



champ.addEventListener('blur',function(){
  if(champ.value.length < 4 && champ.value.length >= 1){
    court.style.display='block';
  }
  else if(champ.value.length > 12){
    long.style.display='block';
  }
  else if(champ.value.length = 0){
    court.style.display='';
    long.style.display='';
  }

  else if (champ.value.length >=4 && champ.value.length <=12){
    court.style.display='';
    long.style.display='';
  }

  else{
    long.style.display='';
    court.style.display='';
  }

})

  verifier.addEventListener('blur',function(){
    if (mdp.value != verifier.value){
      errormdp.style.display='block';
    }

    else if (mdp.value = verifier.value){
      errormdp.style.display='';
    }

    else{
      errormdp.style.display='';
    }
  })


  verifemail.addEventListener('blur',function(){

   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(verifemail.value))
   {
      manque.style.display='block';
   }
   else
   {
    manque.style.display='';
   }

});
