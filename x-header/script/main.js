const cancel =()=>{
   
    document.getElementById('login_page').style.height = "0"
    setTimeout(()=>{
      document.getElementById('login_page').style.visibility = 'hidden'
    },1000)
    
}