import Model from "./model.js"
import View from "./view.js"
import Controller from "./controller.js"

const app = new Controller(new Model(), new View());

// let myList = app.model.addListItem("Fyra")
// console.log(app.model.organizerList)

// console.log(app.model.getListItem(1582121111184))

//---------------
// let hey = app.model.createCard("Lite text");

// let object = app.model.getListItem(1582121803240)
//-----------------

// app.model.addCardToListItem(object, hey)

// console.log(hey)
// let id = 1582120717149;

// app.model.addCardToListItem(id, hey)




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