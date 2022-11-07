let getlist = document.getElementById("mylist");//récupération de la balise ul
let get_input = document.querySelector("input");//récupération de la balise input
let btn = document.querySelector("button"); //récupération de la balise btn
// let get_span = document.querySelector('svg')

class TodoList{
    constructor(element){
        this.ListElement = element;
        this.textList = [];
    }

    static createListItem(text){
        let li = document.createElement('li');
        // let span = document.createElement('span');
        li.textContent = text;
       li.innerHTML+= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" /></svg>'
      
        getlist.append(li);
        // li.append(span)
        return li;
    }

    update(){
        let getLi = document.querySelectorAll("li");
        getLi.forEach(el=>el.remove())
        this.textList.forEach(el=>this.ListElement.append(TodoList.createListItem(el)));
    }

    add(text){
        this.textList.push(text);
        this.update();
    }

    remove1(index){
        this.textList.splice(index,1);
        this.update();
    }
}

const todoApp=new TodoList(getlist);
// todoApp.add("Tache à faire 1");
// todoApp.add("Tache à faire 2");
// todoApp.add("Tache à faire 3");
// todoApp.add("Tache à faire 4");
// todoApp.remove1(1);
// console.log(TodoList.createListItem("tache à faire"));

// function changes() {
//     let get_div = document.querySelector('div');
//    get_div.style.backgroundColor = "black";
//    get_div.style.color = 'white';
// }
console.log(get_input);
console.log(btn);

document.addEventListener('DOMContentLoaded',function(event){

    btn.addEventListener('click',function (event){
        todoApp.add(get_input.value);
        get_input.value = " "
        console.log('click');
    })
    
    // let get_span = document.querySelectorAll('svg');
    // console.log(get_span);
    // get_span.forEach(el =>el.addEventListener('click',function (event){
    //     console.log('vous avez cliqué')
    //     let get_li=event.target.parentNode.parentNode;
    //     get_li.remove();
    // }))
    document.addEventListener('click',function (e){
        //recupère tout ce qui se trouve dans la balise targé
        let elmt_target = e.target.parentElement.innerHTML;
        //met les éléments recupérés dans un tableau
        let arr = elmt_target.split('<');
        //on prend le premier element du tableau
        let li_test = arr[0];

        //on vérifie si li_test est toujours dans le tableau textlist puis on le supprime
        todoApp.textList.forEach(function (el,i) {
            if(el===li_test){
                todoApp.remove1(i);
            }
        })

    })
})
    

