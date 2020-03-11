import Model from "./model.js"
import View from "./view.js"
import Controller from "./controller.js"

const app = new Controller(new Model(), new View());

//** LÄGG TILL NY LISTA **
// let myList = app.model.addListItem("Städa")
//** SLUT LÄGG TILL NY LISTA **

// console.log(app.model.getListItem(1582121111184))

//--------------- LÄGG TILL KORT PÅ LISTA
// let card = app.model.createCard("Köket");
// let id = 1582201663045;
// app.model.addCardToListItem(id, card)
//--------------- SLUT LÄGG TILL KORT PÅ LISTA

//********* TESTA DELETE (LISTA)
// app.model.deleteListItem(1582139053791);
//********* SLUT DELETE

//---- *DELETE CARD* ----
// app.model.deleteCard(1582192576864, 1582192690109)
// ---- *SLUT DELETE CARD* ----

// ---------- Get CARD
// app.model.getCard


//------------ testa byta namn------------------

// app.model.organizerList[0].cards[2].title = "Kanelbullar"
// app.model.save();

// app.model.organizerList[0].name = "Titta på";
// app.model.save();

// app.model.changeListName(1582192570553, "Serier")

//------------ slut testa byta namn---------------

// console.log(app.model.getCard(1582192580161, 1582201710217))


// Rendera listor och deras cards och eventlyssnare
app.view.displayLists(app.model.organizerList);
app.view.dragEventListeners();




// console.log(app.model.organizerList)



//-----------------------flytta in allt detta i view-------------------

// let card = document.querySelectorAll(".card");
// let cardContainer = document.querySelectorAll(".card-container");
// let theCard;




// function dragStart(){
//     theCard = this
//     this.className =+ " hold";
//     setTimeout(()=>(this.className = "invisible"), 0);
// }

// function dragEnd(){
//     this.className = "card";
// }

// for(let item of card){
//     item.addEventListener("dragstart", dragStart)
//     item.addEventListener("dragend", dragEnd);
// }

// for(let container of cardContainer){
//     container.addEventListener("dragover", dragOver)
//     container.addEventListener("dragenter", dragEnter)
//     container.addEventListener("dragleave", dragLeave)
//     container.addEventListener("drop", dragDrop)
// }

// function dragOver(e){
//     e.preventDefault();
// }
// function dragEnter(e){
//     e.preventDefault();
//     this.className += " hovered";
// }
// function dragLeave(){
//     this.className = "card-container"
// }
// function dragDrop(){
//     this.className = "card-container"
//     this.append(theCard)
// }