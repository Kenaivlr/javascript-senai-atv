let pilha = []


function empilharPratos(){
    let nome = document.getElementById("prato").value;
    if (nome !== ""){
        pilha.push(nome);
        document.getElementById("prato").value = ""

    }
}

function desempilharPratos(){
    if (pilha.length > 0){
        alert ("O prato " + pilha.pop() + " foi removido do Menu");
        mostrarMenu()
    }else {
        alert("O Menu está vazio!");
    }
}

function mostrarMenu(){
    let lista = document.getElementById("Menu");
    lista.innerHTML = "";
    for (let i = pilha.length - 1; i >= 0; i--) {
        let li = document.createElement("li");
        li.textContent = pilha[i];
        lista.appendChild(li);
    }
}