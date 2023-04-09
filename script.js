//Cria um array base de frases e aloca ele no localStorage
let arrayFrases = [
    {
        frase: "Conhece-te a ti mesmo",
        autor: "Sócrates",
        ano: "469 a.C. - 399 a.C."
    },
    {
        frase: "Nada é permanente, exceto a mudança",
        autor: "Heráclito",
        ano: "535 a.C. - 475 a.C."
    },
    {
        frase: "O ignorante afirma, o sábio duvida, o sensato reflete",
        autor: "Aristóteles",
        ano: "384 a.C. - 322 a.C."
    },
    {
        frase: "Pensar é o trabalho mais difícil que existe. Talvez por isso tão poucos se dediquem a ele",
        autor: "Platão",
        ano: "427 a.C. - 347 a.C."
    },
    {
        frase: "As almas mais fortes encontram na tempestade a sua calmaria",
        autor: "Heráclito",
        ano: "535 a.C. - 475 a.C."
    },
    {
        frase: "O homem é a medida de todas as coisas",
        autor: "Protágoras",
        ano: "480 a.C. - 411 a.C."
    }
]

atualizarLocalStorage();

//Acessa um objeto aleatório presente no localStorage
function gerarFraseAleatoria() {

    let arrayJSON = localStorage.getItem('frases');
    let objetoArray = JSON.parse(arrayJSON);

    console.log(objetoArray);

    let randomIndex = Math.floor(Math.random() * objetoArray.length);
    let randomFrase = objetoArray[randomIndex];

    let frase = randomFrase.frase;
    let autor = randomFrase.autor;
    let ano = randomFrase.ano;

    return { frase, autor, ano }

}

//captura os elementos, aloca os valores e os muda quando o botão é clicado
function mudarCardAleatorio() {
    let objetoValores = gerarFraseAleatoria();

    console.log(objetoValores);
    //frase
    let pFrase = document.getElementById("fraseAleatoria");
    pFrase.textContent = `"${objetoValores.frase}"`;

    //autor e ano
    let pAutorAno = document.getElementById("autoAnoAleatorio");
    pAutorAno.textContent =`- ${objetoValores.autor} (${objetoValores.ano})`

}

//Cria um objeto com as entradas fornecidas pelo usuário
function criarObjetoCard() {
    //captura os valores informados pelo usuário
    let frase = document.getElementById("objFrase").value;
    let autor = document.getElementById("objAutor").value;
    let anoNascimento = document.getElementById("objAnoNascimento").value;
    let anoFalecimento = document.getElementById("objAnoFalecimento").value;
    let anoNascimentoAc = document.getElementById("objAnoAc");
    let anoNascimentoDc = document.getElementById("objAnoDc");

    //aplica uma verificação
    if (frase === "" || autor === "" || anoNascimento === "" || anoFalecimento === "" || anoNascimentoAc.value === "" || anoNascimentoDc.value === "") {
        alert("Por favor, preencha todas as informações!");
        return;
    }

    arrayFrases.push({
        frase: frase,
        autor: autor,
        ano: `${anoNascimento} ${anoNascimentoAc.value} - ${anoFalecimento} ${anoNascimentoDc.value}`
    })

    atualizarLocalStorage();

    //limpa os campos após o envio
    document.getElementById("objFrase").value = "";
    document.getElementById("objAutor").value = "";
    document.getElementById("objAnoNascimento").value = "";
    document.getElementById("objAnoFalecimento").value = "";
    anoNascimentoAc.value = "";
    anoNascimentoDc.value = "";

}

//coloca os itens presentes no localStorage dentro de uma lista não ordenada e faz a verificação se a lista está aberta ou não 
function mostrarLista() {
    let lista = document.getElementById("frases_lista-ul");
    let dadosLista = JSON.parse(localStorage.getItem("frases"));

    if(lista.innerHTML === '') {
        for(let i=0; i<dadosLista.length; i++) {
            let item = document.createElement("li");
            let pFrase = document.createElement("p");
            let pAutor = document.createElement("p");
    
            pFrase.textContent = dadosLista[i].frase;
            pAutor.textContent = `- ${dadosLista[i].autor} (${dadosLista[i].ano})`;
    
            item.appendChild(pFrase);
            item.appendChild(pAutor);
            lista.appendChild(item);
        }
    } else {
        lista.innerHTML = '';
    }
}

//aloca o array de objetos no localStorage e o atualiza
function atualizarLocalStorage() {
    let arrayFrasesStorage = JSON.stringify(arrayFrases);
    localStorage.setItem("frases", arrayFrasesStorage);
}
