export default class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.list = this.model.organizerList;
    }

    
}