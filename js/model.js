export default class Model {
    constructor(){
        this.organizerList = JSON.parse(localStorage.getItem("organizer")) || [];
    }

    save(){
        localStorage.setItem("organizer", JSON.stringify(this.organizerList));
    }

    addListItem(name){
        let listItem = {
            name: name,
            id: Date.now()
        }
        this.organizerList.push(listItem);
        this.save();
    }

    getListItem(id){
        return this.organizerList.find(object => object.id == id)
    }

    createCard(title){
        let card = {
            title: title,
            id: Date.now()
        }
        return card;
    }
    //Den måste hitta rätt lista för att kunna sätta in ett kort.

    addCardToListItem(id, card){
        let listItem = this.getListItem(id);
        let item = "card"
        listItem[item] = card;
        this.save();
    }

    addKey(card, key, value){
        card[key] = value;
    }

}