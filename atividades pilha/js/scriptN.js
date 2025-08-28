let pilha = [];

    function Navegar() {
      let pesquisa = document.getElementById("Pesquisa").value;
      if (pesquisa !== "") {
        pilha.push(pesquisa); 
        document.getElementById("Pesquisa").value = "";
        mostrarPilha();
      }
    }

    function VoltarNavegador() {
      if (pilha.length > 0) {
        alert("Você saiu do " + pilha.pop() + " e volto pra o " + pilha[pilha.length-1]); 
        mostrarPilha();
      } else {
        alert("Você n pesquisou nenhuma pagina");
      }
    }

    function NavegadorAtual() {
      if (pilha.length > 0) {
        alert("Você esta na pagina do: " + pilha[pilha.length - 1]); 
      } else {
        alert("Nenhuma pagina pesquisada");
      }
    }

    function mostrarPilha() {
      let lista = document.getElementById("Navegador");
      lista.innerHTML = "";
      for (let i = pilha.length - 1; i >= 0; i--) {
        let li = document.createElement("li");
        li.textContent = pilha[i];
        lista.appendChild(li);
      }
    }