let previewData = new XForm(xform)
let a = previewData.getAssetsByPosition()
// console.log(a)
function createImg(){
    return document.createElement("img")
}
// let img1preview = document.getElementById("img1");
// imgpre = document.createElement("img")
// img1preview.appendChild(imgpre)
// let a = previewData.getAssets()
// console.log(a)
  let b = previewData.getAssets()

 for (let i in b.logos.assets){
switch(b.logos.assets[i].position){
    case"drop-1":
    addImgSrc1(b.logos.assets[i].file,"drop-1")
    break;
    case"drop-2":
    addImgSrc1(b.logos.assets[i].file,"drop-2")
    break;
    case"drop-3":
    addImgSrc1(b.logos.assets[i].file,"drop-3")
    break;
    case"drop-4":
    addImgSrc1(b.logos.assets[i].file,"drop-4")
    break;
    case"drop-5":
    addImgSrc1(b.logos.assets[i].file,"drop-5")
    break;
    case"drop-6":
    addImgSrc1(b.logos.assets[i].file,"drop-6")
    break;
}
}
// imgpre.src = b.header.assets[1].file
function addImgSrc1(url,id){
   let x = createImg();
   let imgPreview = document.getElementById(id)
   console.log(imgPreview)
   imgPreview.appendChild(x);
   x.classList.add("img-container")
   x.src = url
} 
// let asset =  b.logos.assets
// console.log(asset.length)
// for (let i = 1; i< asset.length;i++){
//     console.log(b.logos.assets[i].position)
//     let temp = b.logos.assets[i].position
//     console.log(temp)
//     let box = document.getElementById(temp)
//     let c = document.createElement("img")
//     c.src = "text"
//     console.log(box)
//     box.appendChild(c)
// }
// for(let i in b.logos)


//***************************banner section***********************//
let bannerSect = document.getElementsByClassName("bannerSection")
let d = previewData.getBanner()
console.log(d)

const addBanner=()=>{
 let bannerImg = document.createElement("img")
 bannerImg.src = previewData.getBanner()
 bannerSect[0].appendChild(bannerImg)
}
addBanner()
//*************set header background**********//
let headerSect = document.querySelector("header")
console.log(headerSect)
headerSect.style.backgroundColor = previewData.getHeaderColor();
let y = previewData.getHeaderColor()
console.log(y)
const footersect = document.querySelector("footer")
footersect.style.backgroundColor = previewData.getFooterColor();
const mainSect = document.querySelector("main")
mainSect.style.backgroundColor = previewData.getMainColor();

//************* form data**********//

let formInfo = previewData.getFormField()
console.log(formInfo)
for(let eachData of formInfo){
    console.log(eachData.type)
    let createDiv = document.createElement("div")
createDiv.style.display = "flex"
createDiv.style.flexDirection = "column"
if(eachData.type=="text"||eachData.type=="email"){
    createDiv.innerHTML =`<div class='button-wrapper' name="formdata">
    <label class="lableName">${eachData.label}</label>
    <input type=${eachData.type} placeholder=${eachData.placeholder} class='createInput' name='inputType' value=''>
    </div>`
}else{
    createDiv.innerHTML =`<div class='button-wrapper' name="formdata">
    <input type=${eachData.type} placeholder=${eachData.placeholder} class='createInput radio-checkbox' name='inputType' value=''>
    <label class="lableName">${eachData.label}</label>
    </div>`  
}

let formDiv = document.getElementsByClassName("inputForm")
formDiv[0].appendChild(createDiv)
}

//*************************** section***********************//