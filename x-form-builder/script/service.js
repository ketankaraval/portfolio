// let headerData ={}
// let headerDataArray =[]
// function storeData(imgData){
//    header["id"] = Math.random();
//    header["position"]
// }
class XForm {
    constructor(form={}){
      this.form = form;
    }
   
    addAsset(position,logo){
        this.form.logos["assets"].push({file:logo,position:position});
    }
    addBanner(src){
        this.form.banner.img=src
    }
    setBanner(){

    }
    deleteAsset(id)
    {

    }
    getAssets(){
        let objx = localStorage.getItem('x-form');
        return JSON.parse(objx)
        
        // if(objx){
        //     Object.assign(this.form, JSON.parse(objx))
        // }
        // return objx
    }
    addHeaderColor(colorValue){
     this.form.headerTheme.color = colorValue
    }
    getHeaderColor(){
        return JSON.parse(localStorage.getItem('x-form')).headerTheme.color
    }
    addFooterColor(colorValue){
        this.form.footerTheme.color = colorValue
    }
    getFooterColor(){
        return JSON.parse(localStorage.getItem('x-form')).footerTheme.color

    }
    addMainColor(colorValue){
        this.form.mainTheme.color = colorValue
    }
    getMainColor(){
        return JSON.parse(localStorage.getItem('x-form')).mainTheme.color
    }
    getBanner(){
        let objx = localStorage.getItem('x-form');
        return JSON.parse(objx).banner.img
    }
    getAssetsByPosition(){
        let objx = localStorage.getItem('x-form');
        return JSON.parse(objx).logos.assets

    }
    getAssetBySection(section){
        return this.form[section].assets;
    }

    /** Field Methods */
    addFormField(type,label,placeholder)
    {
        this.form['form']['fields'].push({type:type,label:label,placeholder:placeholder});
    }
    getFormField()
    {
        let objx = localStorage.getItem('x-form');
        return JSON.parse(objx).form.fields
    }
    saveForm() {
        localStorage.setItem('x-form',JSON.stringify(this.form));
    }
    fetchForm(){
        let f = localStorage.getItem('x-form');
        if(f)
            Object.assign(this.form, JSON.parse(f))
    }

}

// objx.addAsset('header','middle',"http/gdtbshxn/llkxkhueg")
// console.log(objx)