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

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
