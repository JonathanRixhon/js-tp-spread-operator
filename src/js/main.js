(()=>{const animation={
    init(){
        document.documentElement.classList.add("js-enabled");

        this.oldChaine=document.querySelector("h1");
        this.chaine=this.oldChaine.textContent.toUpperCase()

        this.oldChaine.removeChild(this.oldChaine.firstChild)

        for (let i=0; i< this.chaine.length;i++){
            this.newElt=document.createElement("span")
            if (this.chaine[i]!==" "){
                this.newElt.textContent=this.chaine[i]
            }else{
                this.newElt.textContent="\u00A0";
            }
            document.querySelector("h1.jump").insertAdjacentElement("beforeend", this.newElt)
        }
    }
}
animation.init();})()