export default class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.list;
        this.render();
    }

    render(){
        this.list = this.model.organizerList;
        this.view.displayLists(this.list);
        this.view.dragEventListeners(this.moveCard_handler);
        this.view.listNameChangeEventListener(this.changeListName_handler);
        this.view.addCardListener(this.addCard_handler);
    }

    changeListName_handler =(id, value)=>{
        this.model.changeListName(id, value);
        this.render();
    }

    addCard_handler = (id, value)=>{
        let card = this.model.createCard(value);
        this.model.addCardToListItem(id, card);
        this.render();
    }

    moveCard_handler = (parentID, newID, id)=>{
        //Tar id och flyttar kort från en lista till en annan
        parentID = parseInt(parentID,10);
        newID = parseInt(newID,10);
        id = parseInt(id,10);

        //hämta kort
        const card = this.model.getCard(parentID, id); 

        console.log("parent id: ",parentID, "id: ",id, "new id: ",newID)
        //ta bort kort från gammal lista

        this.model.deleteCard(parentID, id);
        this.list=this.model.organizerList;
        console.log("har den tagits bort?",this.list)

        //lägga till kort i ny lista
        this.model.addCardToListItem(newID,card);
        console.log(this.list)

        this.render();
    }

    
}