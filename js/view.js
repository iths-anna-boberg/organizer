export default class View{
    
    constructor(){
        this.app = this.getElement("#root");
        this.main = this.getElement(".main");
        this.body = this.getElement("body");
        this.theCard;
        this.parentID;
        this.newParentID;
        this.temp;
    }

    toggleModal=()=>{
        let fade = this.createHtmlElement("div", "fade-layer")
        this.body.prepend(fade);
    }
    
    dragStart(e){
        this.theCard = e.target;
        this.parentID = e.target.parentElement.id;
        console.log("drag start, this parent id:",this.parentID)
        this.theCard.className =+ " hold";
        e.dataTransfer.setData("application/my-app", e.target.id);
        e.dataTransfer.setData("text/plain", e.target.innerText);
        e.dataTransfer.setData("text/html", e.target.outerHTML);
        e.dataTransfer.setData("text/uri-list", e.target.ownerDocument.location.href);
        e.dataTransfer.dropEffect = "move";
        this.temp = this.theCard.id
        setTimeout(()=>(this.theCard.className = "invisible"), 0);
        console.log("drag start, this temp är: ",this.temp)
        
    }
    
    dragEnd(e,handler){
        console.log("drag end");
        console.log("this parent id",this.parentID);
        this.newParentID = e.target.parentElement.id;
        let id = e.target.id;
        console.log("new parent id",this.newParentID)
        console.log("id är",id)
        // console.log("temp",this.temp)
        e.target.className = "card";
        handler(this.parentID,this.newParentID,id);
        
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
        const data = e.dataTransfer.getData("application/my-app");
        e.target.append(document.getElementById(data));
        console.log("drag drop logga data:", data)
        }
        
    }
    
    dragEventListeners(handler){
        let card = document.querySelectorAll(".card");
        for(let item of card){
            // console.log(item)
            item.addEventListener("dragstart", e=>{
                this.dragStart(e)});
            item.addEventListener("dragend", e=>{
                this.dragEnd(e,handler)});
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
                let iconContainer = this.createHtmlElement("div", "icon-container");
                let addIcon = this.createHtmlElement("i", "material-icons");
                addIcon.classList.add("steel")
                addIcon.innerText = "add_circle_outline";
                listItem.append(iconContainer);
                iconContainer.append(addIcon);

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

    addCardListener(handler){
        let icons = document.querySelectorAll(".steel");
        for(let icon of icons){
            icon.addEventListener("click", e=>{
                this.addCard(handler, icon, true);
            })
        }
    }

    listNameChangeEventListener(handler){
        let listNames = document.querySelectorAll(".category");
        for(let name of listNames){
            name.addEventListener("click", e=>{
                this.editmodeList(handler,name, true)})
        }
    }

    addCard(handler, element, flag){
        let addCardField = this.createHtmlElement("input", "card-input");
        let container = element.parentElement;
        let listID = container.parentElement.id;
        console.log(listID)
        if(flag){
            container.appendChild(addCardField);
            addCardField.value = "Write here ...";
            addCardField.focus();
            addCardField.addEventListener("keyup", e=>{
                if(e.key === "Enter"){ 
                    addCardField.blur()
                }
            })
            
            addCardField.addEventListener("focusout", () => {
                let input = addCardField.value;
                flag = false;
                handler(listID,input);
            })

        }

    }

    editmodeList(handler,name,flag){
        let id = name.parentElement.id;
        id = parseInt(id,10);
        let inputField = this.createHtmlElement("input", "category-input");
        if(flag){
            let text = name.innerText;
            let cardContainer = name.parentElement;
            name.innerHTML ="";
            cardContainer.prepend(inputField);
            inputField.focus();
            inputField.value = text;
            inputField.addEventListener("keyup", e=>{
                if(e.key === "Enter"){ 
                    inputField.blur()
                }
            })
        }else{
            name.innerText = inputField.value;
        }

        inputField.addEventListener("focusout", () => {
            let input = inputField.value;
            flag = false;
            name.innerHTML = input;
            console.log(id)
            handler(id,input);
        })

    }  

    newListItemListener(handler){ //SKA LYSSNA EFTER KLICK PÅ "SKAPA NY LISTA-KNAPP, FINNS EJ ÄNNU"

    }

    addListItem(handler, flag){ //SKA LÄGGA TILL SJÄLVA LISTAN

    }
    
    
}