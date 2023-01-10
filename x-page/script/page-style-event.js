let showAll = document.getElementById('showAll')
showAll.addEventListener('click',()=>{
    document.getElementsByClassName('eccomerce-sect')[0].style.display="grid"
    document.getElementsByClassName('app-sect')[0].style.display="grid"
    document.getElementsByClassName('eccomerce-sect')[0].style.marginBottom ="0"
    showAll.classList.add('active-buttons')
    showEccomerce.classList.remove("active-buttons")
    showApps.classList.remove("active-buttons")

})
let showEccomerce = document.getElementById('eccomerce')
showEccomerce.addEventListener('click',()=>{
    document.getElementsByClassName('app-sect')[0].style.display="none"
    document.getElementsByClassName('eccomerce-sect')[0].style.display="grid"
    document.getElementsByClassName('eccomerce-sect')[0].style.marginBottom ="15rem"
    showAll.classList.remove('active-buttons')
    showEccomerce.classList.add("active-buttons")
    showApps.classList.remove("active-buttons")
})
let showApps = document.getElementById('apps')
showApps.addEventListener('click',()=>{
    document.getElementsByClassName('eccomerce-sect')[0].style.display="none"
    document.getElementsByClassName('app-sect')[0].style.display="grid"
    showAll.classList.remove('active-buttons')
    showEccomerce.classList.remove("active-buttons")
    showApps.classList.add("active-buttons")
})
// let appimg3 = document.getElementById('img6')
// appimg3.addEventListener('mouseover',()=>{
//     document.getElementsByClassName('slider-sect')[0].style.height ="100%"
// })

//****************magnifying glass functions****************//
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
/* magnifying image effect */

