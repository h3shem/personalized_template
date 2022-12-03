let navbar = document.querySelector(".navbar");
let headernav = document.querySelector('.headernav');
let logo = document.querySelector('.logo');
let subscrip1 = document.querySelector('.subscrip1');
let groub_section = document.querySelector('.groub_section');
let home = document.querySelector('.home');
let gooooles = document.querySelector('.gooooles');
let sectiongooles = document.querySelector('.sectiongooles');


let slidenav=0;




navbar.addEventListener('click',navshow);
function navshow(){
  if(slidenav===0){
    navbar.style.top='10vh';
    slidenav=10;

  }
 else{
    navbar.style.top='-100vh';
    slidenav=0;

  }
    
}

window.onscroll=function(){
    let value= scrollY;
    console.log(value);

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    

        headernav.classList.remove("navbaranme");
        logo.classList.remove("logochange");
        subscrip1.classList.remove("logochange");

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween:20,
         
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          
          });

      }
      else{
        if(scrollY<=200){
          home.classList.add("active");
          gooooles.classList.remove("active");
          sectiongooles.classList.remove("active");

        }
        else if(scrollY>220 && scrollY<700 ){
          home.classList.remove("active");
          gooooles.classList.add("active");
          sectiongooles.classList.remove("active");


        }
        else if(scrollY>800 && scrollY<1400){
          home.classList.remove("active");
          gooooles.classList.remove("active");
          sectiongooles.classList.add("active");
        }
        else{
          home.classList.remove("active");
          gooooles.classList.remove("active");
          sectiongooles.classList.remove("active");

        }

        if(scrollY>=2){
            headernav.classList.add("navbaranme");
            logo.classList.add("logochange");
            subscrip1.classList.add("logochange");
        }
        else{
            headernav.classList.remove("navbaranme");
            logo.classList.remove("logochange");
            subscrip1.classList.remove("logochange");
    
        }

      


        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween:20,
        
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
           
          });


      }
}


