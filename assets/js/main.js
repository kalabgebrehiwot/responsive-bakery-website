/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav--menu");
const navtoggle = document.getElementById("nav-toggle");
const navclose = document.getElementById("nav-close");
/*show menu */
if (navtoggle) {
  navtoggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu')
    console.log("clicked");
  });
}
/*menu hidden */
if (navclose) {
  navclose.addEventListener("click", ()=>{
    navMenu.classList.remove('show-menu')
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navlink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
  const navMenu = document.getElementById('nav--menu')
   //when we click on each nav_link, we remove the show-menu  click//
   navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = ()=>{
  const header = document.getElementById('header')
  //when the scroll is greater than 50 viewport height,aadd the scroll-header class to the header tag//
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
/*=============== SHOW SCROLL UP ===============*/
const scrollup = () =>{
  const scrollup = document.getElementById('scroll-up')
  //when the scroll is higher than 350 viewport height, add the//
  this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                      : scrollup.classList.remove('show-scroll')
}  
window.addEventListener('scroll', scrollup)  
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = ( ) =>{
  const scrollDown = window.scrollY
   sections.forEach(current =>{
     const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = current.querySelector('.nav__menu a[href*=' + sectionId + ']')
     if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClasss.classList.remove('active-link')
      }else{
        sectionsClass.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll',scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = scrollReveal({
  origin:'top',
  distance:'40px',
  opacity:1,
  scale:1.1,
  duration:2500,
  delay:300,
})
sr.reveal('.home__data, .about__img, .about__data')

sr.reveal('.home__image', .footer__img-1, .footer__img-2 {rotate:{z: -15} })
sr.reveal('.home__bread, .about__bread' , {rotate:{z:15}})
sr.reveal('.home__footer' , {scale: 1, origin:'bottom'})

sr.reveal('.new__card:nth-child(1) img', {rotate:{z: -30}, distance: 0})
sr.reveal('.new__card:nth-child(2) img', {rotate:{z: 15}, distance: 0, delay:600})
sr.reveal('.new__card:nth-child(3) img', {rotate:{z: -30}, distance: 0,delay:900})

sr.reveal('.favorite__card img', {interval:100, rotate:{z: 15}, distance: 0 })

sr.reveal('.footer__container', { scale: 1})