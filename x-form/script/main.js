let slideIndex = 0;
showSlides();
function showSlides(){
            let i;
            let slides = document.getElementsByClassName("carousal-image");
            let dots = document.getElementsByClassName("dot")
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
              dots[i].style.backgroundColor = "transparent"
            }
           
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].style.backgroundColor ="white"
            
            setTimeout(showSlides, 2000); // Change image every 2 seconds
          }
    

