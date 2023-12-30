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

            //botão de excluir 
            let excluir = document.createElement("button");
            excluir.innerHTML = "Remover";
            excluir.onclick = function(){
            listcontainer.removeChild(li);}
            li.appendChild(excluir);
        } 
        else{
            alert("Limite de tarefas não concluidas atingido");
        }

        
    }



}