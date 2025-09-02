const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")

/* =============== Show Menu ============== */
if(navToggle){
  navToggle.addEventListener('click' , () =>{
    navMenu.classList.add("show-menu")
  })
}

/* =============== Menu Hidden ============== */
if(navClose){
  navClose.addEventListener('click' , () =>{
    navMenu.classList.remove("show-menu")
  })
}

/* =============== change background header ============== */
function scrollHeader(){
  const header = document.getElementById("header")
  //when the scroll is greater than 80 viewport height , add the class header to the tag header
  if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/* =============== Remove Menu Mobile ============== */
const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
  const navMenu = document.getElementById("nav-menu")
  //when we click on eacj nav link , we remove the show menu class
  navMenu.classList.remove("show-menu")
}

/* =============== theme customization ============== */
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
//opan modal

const openThemeModal = () => {
  themeModal.style.display='grid';
}
theme.addEventListener("click", openThemeModal);

//close modal
const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = 'none';
  }
}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);


/* =============== fonts============== */

//remove active class from spans or font size selectors

const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove("active");
  })
}

fontSizes.forEach(size => {
  size.addEventListener('click', () => {

    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if(size.classList.contains('font-size-1')){
      fontSize = '12px';
    }
    else if(size.classList.contains('font-size-2')){
      fontSize = '14px';
    }
    else if(size.classList.contains('font-size-3')){
      fontSize = '16px';
    }
    else if(size.classList.contains('font-size-4')){
      fontSize = '18px';
    }
    //change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;

  })
})
/* =============== primary colors ============== */

//remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}

colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColorClass();
    if(color.classList.contains('color-1'))
    {
      primaryHue = 252;
    }
    else if(color.classList.contains('color-2'))
    {
      primaryHue = 52;
    }
    else if(color.classList.contains('color-3'))
    {
      primaryHue = 352;
    }
    else if(color.classList.contains('color-4'))
    {
      primaryHue = 152;
    }
    else if(color.classList.contains('color-5'))
    {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty('--primary-color-hue', primaryHue)
  })
})

/* =============== theme ============== */
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change bg color
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click', () => {
   //add active class

  Bg1.classList.add('active');
  //remove active class

  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  //remove customized changes from local storage
  window.location.reload();
})
Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  //add active class

  Bg2.classList.add('active');
  //remove active class

  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
})

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  //add active class

  Bg3.classList.add('active');
  //remove active class

  Bg2.classList.remove('active');
  Bg1.classList.remove('active');
  changeBG();
})


/* =============== section active link ============== */
const sections = document.querySelectorAll("section[id]");

//add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
  //get current scroll position
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    sectionID = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav-menu a[href*=' + sectionID + ']').classList.add("active-link")
    }
    else {
      document.querySelector('.nav-menu a[href*=' + sectionID + ']').classList.remove("active-link")

    }
  })
}






navLinks.forEach(n => n.addEventListener('click', linkAction))
/* =============== Open Modal ============== */
function openModal(src) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
/* =============== swiper ============== */
 var swiper = new Swiper(".references-wrapper", {
    Loop: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


  
  const roles = ["IT Specialist", "System Engineer","Designer", "Content Writer", "Adventurer"];
  let currentIndex = 0;
  let charIndex = 0;
  const typingSpeed = 150;
  const erasingSpeed = 80;
  const delayBetweenWords = 2000;

  const dynamicText = document.querySelector(".dynamic-text");

  function type() {
    if (charIndex < roles[currentIndex].length) {
      dynamicText.textContent += roles[currentIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }

  function erase() {
    if (charIndex > 0) {
      dynamicText.textContent = roles[currentIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      currentIndex = (currentIndex + 1) % roles.length;
      setTimeout(type, typingSpeed);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, delayBetweenWords);
  });

  
