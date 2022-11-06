let getlist = document.getElementById("mylist");
 

class TodoList{
    constructor(element){
        this.ListElement=element;
        this.textList=[];
        this.li;
        this.getLi;
    }

    static createListItem(text){
        this.li=document.createElement('li');
        this.li.textContent=text;
        getlist.append(this.li);
    }

    update(){
        //getlist.removeChild(this.li);
        TodoList.createListItem(this.textList);
        this.getLi = document.querySelector("li");
        this.getLi.remove();
        TodoList.createListItem(this.textList);
    }

    add(text){
        this.textList.push(text);
        console.log(this.textList);
        this.update();
    }

    remove1(index){
        this.textList.splice(index,1);
        this.update();
    }
}

const todoApp=new TodoList(getlist);
todoApp.add("Tache à faire 1");
todoApp.add("Tache à faire 2");
todoApp.add("Tache à faire 3");
todoApp.add("Tache à faire 4");
todoApp.remove1(1);
//console.log(TodoList.createListItem("tache à faire"));