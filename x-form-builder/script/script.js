let previewData = new XForm(xform);
var index ;
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  var dropBox = document.querySelectorAll(".drop")
function allowDrop(ev) {
     ev.preventDefault();
    colorchange(ev);
    ChangeWhite(ev);
  }
function drop(ev) {
     ev.preventDefault();
     let droppedTypeId = ev.dataTransfer.getData("text");
     dropCheckerForm(ev)
     switch(droppedTypeId){
        case "img":
            if(ev.target.childElementCount<1){
           if(dropChecker1(ev)){
            createInputFile(ev);
           }
        }
        break;
        case "input":
           if(dropCheckerForm(ev)){
            addInputFile(ev,"text")
           }
             
        break;
        case "radio-list":
           if(dropCheckerForm(ev)){
          addInputFile(ev,"radio")
           }
            break;
        case "checkbox":
            if(dropCheckerForm(ev)){
                addInputFile(ev,"checkbox")
            }    
     }
    
 }
    
function createInputFile(ev){
        let eleLogoUpload = document.createElement("input")
        eleLogoUpload.type ="file"
       ev.target.appendChild(eleLogoUpload);
    eleLogoUpload.onchange =  ()=>{
        const preview = eleLogoUpload.files[0];
    let eleLogoPreview = document.createElement("img")
    //************************ file reader API************************//
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        eleLogoPreview.src = reader.result;
        eleLogoPreview.style.height = "8rem"
        let imgPosition = ev.target.id
        previewData.addAsset(imgPosition,eleLogoPreview.src)
    },false)
    if(preview){
        reader.readAsDataURL(preview)
        ev.target.appendChild(eleLogoPreview);
    }
}
} 
//**********/ banner img preview /***********//
let bannerImgInput = document.getElementById('main-img')
let bannerImgContainer = document.getElementsByClassName('main-img-selector')
bannerImgInput.onchange= ()=>{
 const preview = bannerImgInput.files[0]
 let eleLogoPreview = document.createElement("img")
 const reader = new FileReader();
 reader.addEventListener("load",()=>{
    eleLogoPreview.src = reader.result;
    eleLogoPreview.style.width = "80%"
     previewData.addBanner(eleLogoPreview.src)
 },false)
 if(preview){
    reader.readAsDataURL(preview)
    bannerImgContainer[0].appendChild(eleLogoPreview);
    bannerImgInput.style.display = "none"
    document.getElementById('imgText').style.display ="none"
}
}

//**************************banner img section********************//

function colorchange(ev){
        setTimeout(()=>{
            for(let i = 0; i<6;i++){
                if(ev.target==dropBox[i])
                dropBox[i].style.backgroundColor = "red"
            }
        },0)
}
function ChangeWhite(ev){
        setTimeout(()=>{
            for(let i = 0; i<6;i++){
                if(ev.target==dropBox[i])
                dropBox[i].style.backgroundColor = "white"
            }
        },1000)
}
function dropChecker1(ev){
    let dropPlace1 = document.getElementsByClassName('drop')
   let temp = []
    for(let i=0;i<dropPlace1.length;i++){
        temp[i] = dropPlace1[i].className
    }
    // console.log(ev.target.className)
    if(temp.indexOf(ev.target.className)!==-1){
        return true;
    }
    else{
        return false;
    }
}
function dropCheckerForm(ev){
    let dropPlace = document.getElementsByClassName('form-dropbox')
        // console.log(dropPlace[0].className)
    let temp = []
    for(let i=0;i<dropPlace.length;i++){
        temp[i] = dropPlace[i].className
    }
    // console.log(temp)
  
    if(temp.indexOf(ev.target.className)!==-1){
        return true;
    }
    else{
        return false;
    }
}
// --------------------functions for text box drop------------------//
function dragText(ev){
    ev.dataTransfer.setData("text",ev.target.id)
    let x = ev.dataTransfer.getData("text")
    // console.log(x)
}
function addInputFile(ev,text){
    //--------wrapper div creation---------//
    let createDiv = document.createElement("div")
    createDiv.style.display = "flex"
    createDiv.style.flexDirection = "column"
    //-------------creating input according to dragged item-----------//
    if(text=="text"){
        createDiv.innerHTML =`<div class='button-wrapper' name="formdata">
        <label class="lableName">Name</label>
        <div class='buttons'>
            <button class="cancel-btn">
                <i class="fa-sharp fa-solid fa-xmark"></i>
            </button>
            <button class="edit-btn">
                <i class="fa-solid fa-pen"></i>
            </button>
        </div>
      
        <input type='${text}' placeholder='name' class='createInput' name='inputType' value=''>
        </div>`
    }else{
    
        createDiv.innerHTML =`<div class='button-wrapper radio-checkbox-container' name="formdata">
    <div class='buttons'>
        <button class="cancel-btn">
            <i class="fa-sharp fa-solid fa-xmark"></i>
        </button>
        <button class="edit-btn">
            <i class="fa-solid fa-pen"></i>
        </button>
    </div>
    <input type='${text}' placeholder='name' class='createInput radio-checkbox' name='inputType' value=''>
    <label class="lableName">Name</label>
    
    </div>`

    }
    ev.target.append(createDiv);
    delInput()
    openEditBox()
}
openEditBox=()=>{
    let editbuttons = document.querySelectorAll(".edit-btn")
    editbuttons.forEach((item,i)=>{
        item.addEventListener("click",()=>{
            document.getElementsByClassName('form_changer')[0].style.scale = "1";
            index = i
        })
    })
} 
function delInput(){
    let cancelButtons = document.querySelectorAll(".cancel-btn")
    cancelButtons.forEach((item,i)=>{
        item.addEventListener("click",()=>{
            document.getElementsByClassName('button-wrapper')[i].style.display ="none"
        //     document.getElementsByClassName('button-wrapper')[i].setAttribute('id','deletableItem')
        //    console.log(document.getElementById('deletableItem'))
        //      document.getElementById('deletableItem').remove()
        })
    })
}

function removeEditBox(){
    document.getElementsByClassName('form_changer')[0].style.scale = "0";
}
function datasaving(){
    previewData.saveForm()
}

const changeData = (obj)=>{
    let lablename = document.querySelectorAll(".lableName")
    let inputType = document.querySelectorAll(".createInput")
    if(obj.checkBox){
        lablename[index].innerText = obj.lblName
    }
     if(obj.isRequired){
        inputType[index].type = obj.typeInput
        inputType[index].value = obj.typeInput
        inputType[index].placeholder = obj.placeHolder
     }else{
        inputType[index].type = "hidden"
     }
 
   
}


//************color change for header ***********//
const headerColorPicker = document.getElementById("header-color")
headerColorPicker.addEventListener("change",()=>{
    //  alert(headerColorPicker.value)
    
     previewData.addHeaderColor(headerColorPicker.value)
})
//************color change for footer ***********//
const footerColorPicker = document.getElementById("footer-color")
footerColorPicker.addEventListener("change",()=>{
    previewData.addFooterColor(footerColorPicker.value)
})
//************color change for footer ***********//
const mainColorPicker = document.getElementById("main-color")
mainColorPicker.addEventListener("change",()=>{
    previewData.addMainColor(mainColorPicker.value)
})

//************for adding form data in objects ************//
let registerBtn = document.getElementsByClassName("register")


registerBtn[0].addEventListener("click",()=>{
   
    const finalForm = document.forms.namedItem("formdata")
    const temp = document.getElementsByClassName('form-dropbox')
    
    let formContainer = Array.from(temp[0].children)

    for(let i=1;i<formContainer.length;i++){  
        let temp2 = Array.from(formContainer[i].children[0].children)
        //  arr1.push(formContainer[i].children[0].firstElementChild)
        console.log(temp2[2].tagName)
         let labelName
         let placeHolder
         let inputType
        temp2.forEach((value,index)=>{
            if(temp2[index].tagName=="LABEL"){
                console.log("job done")
             labelName = temp2[index].innerHTML
            }
            if(temp2[index].tagName=='INPUT'){
                 inputType = temp2[index].type
                 placeHolder = temp2[index].placeholder
            }     
        })
        previewData.addFormField(inputType,labelName,placeHolder)
    }
    console.log(previewData.form)
})


