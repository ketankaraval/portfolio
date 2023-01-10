console.log("first-step")
const displayMobileView = document.querySelector("header");
document.getElementById('navBar-loader').addEventListener("click",()=>{
   
    // document.getElementsByClassName('nav_right')[0].style.width = "100%"
    // document.getElementsByClassName('lower_nav')[0].style.width = "100%"
    document.getElementsByClassName('overlay')[0].style.width = "0"
    document.getElementById('navBar-loader').style.display = "none"
    document.getElementById('navBar-cancel').style.display = "block"

})
document.getElementById('navBar-cancel').addEventListener('click',()=>{
   
    // document.getElementsByClassName('nav_right')[0].style.width = "0"
    // document.getElementsByClassName('lower_nav')[0].style.width = "0"
    document.getElementsByClassName('overlay')[0].style.width = "100%"
    document.getElementById('navBar-loader').style.display = "block"
    document.getElementById('navBar-cancel').style.display = "none"
})
document.getElementById('my_account').addEventListener('mouseover',displayContent)
function displayContent(){
   
    document.getElementsByClassName('dropdown-content')[0].style.display = "block" 
     
}
document.getElementById("login").addEventListener('click',loginPageDisplay)
function loginPageDisplay(){
    if(document.getElementsByClassName('dropdown-content')[0].style.display == 'none'){
    console.log("check2")
    document.getElementById('login_page').style.visibility = 'visible'
    document.getElementById('login_page').style.height = "100vh"
    // document.getElementById('login_page').style.width = "100vw"
    }
}
// document.getElementById("search_box").addEventListener('mouseleave',()=>{
//     console.log("check2")
//     document.getElementById("search_box").style.width = "10rem"; 
// }) 
document.getElementsByClassName('dropdown-content')[0].addEventListener('mouseleave',()=>{
    document.getElementsByClassName('dropdown-content')[0].style.display = "none"
})
document.getElementById('services').addEventListener('mouseover',()=>{
    document.getElementsByClassName('display-serv')[0].style.display = 'block'
})
document.getElementsByClassName('display-serv')[0].addEventListener('mouseleave',()=>{
    document.getElementsByClassName('display-serv')[0].style.display = 'none'
})
document.getElementById('about').addEventListener('mouseover',()=>{
    document.getElementsByClassName('about-display')[0].style.display ='block'
})
document.getElementsByClassName('about-display')[0].addEventListener('mouseleave',()=>{
    document.getElementsByClassName('about-display')[0].style.display ='none'
})
