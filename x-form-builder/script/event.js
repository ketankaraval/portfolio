 
 const form = document.querySelectorAll(".form_changer")
 const submitInput = document.querySelector("#form-submit")
 function getDataForm(e){
   e.preventDefault()   
    let obj ={}
    const form1 = document.forms.namedItem("formInfo")
    var formData = new FormData(form1);
    console.log(formData)
    for(var [key,value] of formData){
        obj[key]=value
    }
     console.log(obj)
    // console.log(index)
     changeData(obj)

   }
    submitInput.addEventListener("click",getDataForm)
  //************************* event listner for saving data on page ***********************//  
    let savebtn = document.getElementById("saveData")
    savebtn.addEventListener('click',datasaving)
 
