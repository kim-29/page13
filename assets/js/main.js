/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click',()=>{navMenu.classList.add('show-menu')})
navClose.addEventListener('click',()=>{navMenu.classList.remove('show-menu')})

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');
const clickedMenu = ()=>{
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu')
}
navLinks.forEach(navLink=>{navLink.addEventListener('click',clickedMenu)})

/*=============== ADD BLUR HEADER ===============*/
const blurHeader=()=>{
  const header = document.getElementById('header');
  window.scrollY>=50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header');  
}

window.addEventListener('scroll',blurHeader)

/*=============== SWIPER FAVORITES ===============*/ 
const swiper = new Swiper('.swiper',{
  loop:true,
  slidesPerView:'auto',
  centeredSlides:'auto',
  grabCursor:true,
  breakpoints:{
    768:{
      slidesPerView:3,
    }
  }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()=>{
  const scrollUp= document.getElementById('scroll-up');
  window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');  
}

window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const activeMenu = ()=>{
  const position = window.scrollY;
  sections.forEach(section=>{
    const Height = section.offsetHeight;
    const Top = section.offsetTop-58;
    const id = section.getAttribute('id');
    const navLink = document.querySelector('.nav__list a[href*='+id+']')
    if(Top <= position && Top+Height > position){
      navLink.classList.add('active-menu')
    }else{navLink.classList.remove('active-menu')}
  })
}
window.addEventListener('scroll',activeMenu);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
  origin:'top',distance:'60px',duration:2500,delay:400,
})
sr.reveal('.home__social, .favorite__container, .sponsor__container, .footer')
sr.reveal('.home__title span:nth-child(1)',{origin:'left',opacipy:1})
sr.reveal('.home__title span:nth-child(3)',{origin:'right',opacipy:1})
sr.reveal('.home__tooltip, .home__button,__model__button',{origin:'bottom'})
sr.reveal('.about__data',{origin:'left'})
sr.reveal('.about__img,.model__tooltip',{origin:'right'})

