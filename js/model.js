export default class Model {
    constructor(){
        this.organizerList = JSON.parse(localStorage.getItem("organizer")) || [];
    }

    save(){
        localStorage.setItem("organizer", JSON.stringify(this.organizerList));
    }

    deleteListItem(id){
        this.organizerList = this.organizerList.filter(item => item.id !==id);
        this.save();

    }

    deleteCard(listID, cardID){ 
        this.organizerList.find(object => object.id == listID).cards = this.organizerList.find(object => object.id == listID).cards.filter(item => item.id !==cardID)
        this.save();
    }

    addListItem(name){
        let listItem = {
            name: name,
            id: Date.now(),
            cards: [],
        }
        this.organizerList.push(listItem);
        this.save();
    }

    getListItem(id){
        return this.organizerList.find(object => object.id == id)
    }

    getCard(listID, cardID){
        return this.getListItem(listID).cards.find(card => card.id ==cardID);
    }

    createCard(title){
        let card = {
            title: title,
            id: Date.now()
        }
        return card;
    }

    addCardToListItem(id, card){
        let listItem = this.getListItem(id);
        listItem.cards.push(card);
        this.save();
    }

    changeListName(itemID, value){
        let itemToChange = this.getListItem(itemID);
        itemToChange.name = value;
        this.save();    
    }

    changeCardValue(listID, cardID, key, value){ //EJ KLAR
        let cardToChange = this.getCard(listID, cardID);

    }

}