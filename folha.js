const entrada = document.getElementById("entrada");
const listcontainer = document.getElementById("list-container");

function add(){
    if(entrada.value === ''){
        alert("Digite uma tarefa");
    }
    else{

        let li = document.createElement("li");
        li.innerHTML = entrada.value;
        listcontainer.appendChild(li);

        
    }



}