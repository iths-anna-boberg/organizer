export default class View{
    
    constructor(){
        this.app = this.getElement("#root");
        this.main = this.getElement(".main");
        this.theCard;
        this.dragEventListeners();
    }
    
    dragStart(e){
        this.theCard = e.target;
        this.theCard.className =+ " hold";
        e.dataTransfer.setData("text/plain", e.target.id);
        e.dataTransfer.setData("application/my-app", e.target.id);
        e.dataTransfer.setData("text/plain", e.target.innerText);
        e.dataTransfer.setData("text/html", e.target.outerHTML);
        e.dataTransfer.setData("text/uri-list", e.target.ownerDocument.location.href);
        e.dataTransfer.dropEffect = "move";
        setTimeout(()=>(this.theCard.className = "invisible"), 0);
        console.log("start")
        
    }
    
    dragEnd(e){
        
        this.theCard.className = "card";
        console.log("drag end")
      
    }
    
    dragOver(e){
        e.preventDefault();
        // console.log("drag over",this.theCard)
        // e.dataTransfer.dropEffect = "move";
        if(e.target.className=="card"){
            console.log("Det var card")
        }
        
    }
    
    dragEnter(e){
        if(e.target.className=="card-container"){
            e.preventDefault();
            e.target.className += " hovered";
        }
        console.log("drag enter")
        
    }
    
    dragLeave(e){
        if(e.target.classList.contains("card-container")){
            e.target.className = "card-container"

        }
        console.log("drag leave")
        
    }
    
    dragDrop(e){
        if(e.target.classList.contains("card-container")){
            e.target.className = "card-container"
        // e.target.append(this.theCard)
        const data = e.dataTransfer.getData("application/my-app");
        e.target.append(document.getElementById(data));
        console.log("drag drop")
        }
        
    }
    
    dragEventListeners(){
        let card = document.querySelectorAll(".card");
        for(let item of card){
            // console.log(item)
            item.addEventListener("dragstart", this.dragStart);
            item.addEventListener("dragend", this.dragEnd);
        }
        let cardContainer = document.querySelectorAll(".card-container");
        for(let container of cardContainer){
            container.addEventListener("dragover", this.dragOver)
            container.addEventListener("dragenter", this.dragEnter)
            container.addEventListener("dragleave", this.dragLeave)
            container.addEventListener("drop", this.dragDrop)
        }
    }
    
    
    createHtmlElement(tag, className){
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        
        return element;
    }
    
    getElement(selector) {
        const element = document.querySelector(selector);
        
        return element;
    }
    
    displayLists(organizerList){
        
        while(this.main.firstChild){
            this.main.removeChild(this.main.firstChild)
        }
        
        if(organizerList.lengt == 0){
            let listItem = this.createHtmlElement("section", "card-container");
            this.main.append(listItem);
            let heading = this.createHtmlElement("h2", "category");
            heading.innerText = "You have no lists yet";
            listItem.append(heading);
        }else{
            organizerList.forEach(item =>{
                let listItem = this.createHtmlElement("section", "card-container");
                listItem.id = item.id;
                let heading = this.createHtmlElement("h2", "category");
                heading.innerText = item.name;
                this.main.append(listItem);
                listItem.append(heading);
                
                item.cards.forEach(card =>{
                    let cardItem = this.createHtmlElement("article", "card");
                    cardItem.id = card.id;
                    let cardText = this.createHtmlElement("h2");
                    cardText.innerText = card.title;
                    cardItem.setAttribute("draggable", "true");
                    listItem.append(cardItem);
                    cardItem.append(cardText);
                })
            })
            
        }
        
    }
}