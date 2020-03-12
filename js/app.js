import Model from "./model.js"
import View from "./view.js"
import Controller from "./controller.js"

const app = new Controller(new Model(), new View());

// app.view.toggleModal()



//** LÄGG TILL NY LISTA **
// let myList = app.model.addListItem("Lista nr 4")
//** SLUT LÄGG TILL NY LISTA **

// console.log(app.model.getListItem(1582121111184))

//--------------- LÄGG TILL KORT PÅ LISTA
// let card = app.model.createCard("Ok att ta bort1");
// let id = 1584017458841;
// app.model.addCardToListItem(id, card)
//--------------- SLUT LÄGG TILL KORT PÅ LISTA

//********* TESTA DELETE (LISTA)
// app.model.deleteListItem(1582139053791);
//********* SLUT DELETE

//---- *DELETE CARD* ----
// app.model.deleteCard(1584017453993, 507779)
// ---- *SLUT DELETE CARD* ----

// ---------- Get CARD
// app.model.getCard


//------------ testa byta namn------------------

// app.model.organizerList[2].cards[3].title = "Söndag"
// app.model.organizerList[2].cards[3].id = 147400000000000000
// app.model.save();

// app.model.organizerList[0].name = "Titta på";
// app.model.save();

// app.model.changeListName(1582201663045, "TEST3")

//------------ slut testa byta namn---------------

// console.log(app.model.getCard(1582192580161, 1582201710217))


// Rendera listor och deras cards och eventlyssnare
// app.view.displayLists(app.model.organizerList);
// app.view.dragEventListeners();




// console.log(app.model.organizerList)

