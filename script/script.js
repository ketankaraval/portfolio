let navMenuContainer = document.querySelector(".navMenu")
let navMenuItems = document.querySelector(".navMenu__item")
console.log(window.innerWidth)
if(window.innerWidth < 600){
    console.log("check")
}
const navItemsAnimation = ()=>{
   
}
navItemsAnimation();
const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  //######################animations for nav menu#######################//
  const menuBtn = document.querySelector(".menu-btn")
  const menuItems = document.querySelector('.navMenu')
  //main toggle
  menuBtn,addEventListener('click',()=>{
    menuBtn.classList.toggle("open")
    menuItems.classList.toggle("open")
  })
//######################for fun with images#######################//
//********************************magnifying glass functions****************//
 

const zoom = document.getElementById("zoom-box-container");
zoom.addEventListener(
  "mousemove",
  function (e) {
    let original = document.getElementById("magn_img");
    let magnified = document.getElementById("large-img");
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;
    let imgWidth = original.width;
    let imgHeight = original.height;
    // console.log(imgWidth)
//  console.log(imgHeight)
    // console.log(x)
    //  console.log
    // console.log((imgHeight/ y) * 100)
    let xPercentage = (x / imgWidth) * 100;
    let yPercentage = (y / imgHeight) * 100;

    // background of the magnified image horizontal
    magnified.style.backgroundPositionX = xPercentage + "%";
    // // background of the magnified image vertical
    magnified.style.backgroundPositionY = yPercentage + "%";

    // Move the magnifying glass with the mouse movement.
    magnified.style.left = x  -50 + "px";
    magnified.style.top = y -50 + "px";
  },
  false
);
//**************************slider img section**************//
let stableSlide = document.getElementById('nonmovable-slide')
let nonstableSlide = document.getElementById('movable_slide')
let slider = document.getElementById('slider')
let imgHeight = stableSlide.clientHeight;
let imgWidth = stableSlide.clientWidth;
slider.addEventListener("input",compareImg)
function compareImg(event){
    let a = stableSlide.clientWidth / 2
    let x = slider.value;
    let movable_img = document.getElementById('movable-img')
    movable_img.style.clipPath = "polygon(0 0," + x + "% 0," + x + "% 100%, 0 100%)";
}
//######################skill counter#######################//
// let skillValue = document.getElementById("number");
let skillValue = Array.from(document.getElementsByClassName("ratings"))
console.log(number)
console.log(skillValue.innerHTML)
console.log(number.innerHTML)

skillValue.forEach((value)=>{
    console.log(value.dataset.val)
    let counter = 0;
    setInterval(()=>{
        if(counter == value.dataset.val){
            clearInterval();
        }else{
            counter += 1;
           value.innerHTML = counter + "%";
        }
    },40)
})
//######################work card sorting#######################//
let cards = Array.from(document.getElementsByClassName("project"))

let alltag = document.getElementById("all_tag")
let htmlCsstag = document.getElementById("html&css_tag")
let jstag = document.getElementById("js_tag")
let apitag = document.getElementById("api_tag")
alltag.addEventListener('click',()=>{
    cards.forEach((value)=>{
        value.style.display = "flex";
    })
})
htmlCsstag.addEventListener('click',()=>{
    cards.forEach((value)=>{
        if(value.dataset.techno_used3 == "js" || value.dataset.techno_used4 == "api" ){
            value.style.display = "none";
        }else{
            value.style.display = "flex";
        }
    })
})
jstag.addEventListener('click',()=>{
    cards.forEach((value)=>{
        if(value.dataset.techno_used3 == "js"){
            value.style.display = "flex";
        }else{
            value.style.display = "none";
        }
    })
})
apitag.addEventListener('click',()=>{
    cards.forEach((value)=>{
        console.log(value.dataset.techno_used4)
        if(value.dataset.techno_used4 == "api"){
            console.log(value.dataset.techno_used4)
            value.style.display = "flex";
        }else{
            value.style.display = "none";
        }
    })
})

//######################navbar fixation#######################//
const navbar = document.querySelector('header');
window.onscroll = () => {
    if (window.scrollY > 300) {
        console.log("ok")
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    } if(window.innerWidth < 600){
        navbar.classList.remove('nav-active');
    }
};
//****************************typing effect*********************//
let txt = "KETAN KARAVAL"
let i = 0 ;
let speed = 500
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typing-text").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
     
    }
  }
typeWriter()
