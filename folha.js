const entrada = document.getElementById("entrada");
const listcontainer = document.getElementById("list-container");
const limit = 10;

function add(){
    if(entrada.value === ''){
        alert("Digite uma tarefa");
    }
    else{
        if(listcontainer.children.length < limit){

            
            let li = document.createElement("li");
            li.innerHTML = entrada.value;
            listcontainer.appendChild(li);
        } 
        else{
            alert("Limite de tarefas não concluidas atingido");
        }

        
    }



}