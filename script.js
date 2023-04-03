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
let arrayFrasesStorage = JSON.stringify(arrayFrases);
localStorage.setItem("frases", arrayFrasesStorage);

//Acessa um objeto aleatório presente no localStorage
function gerarFraseAleatoria() {
    let arrayJSON = localStorage.getItem('frases');
    let objetoArray = JSON.parse(arrayJSON);

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
    //frase
    let pFrase = document.getElementById("fraseAleatoria");
    pFrase.textContent = `"${objetoValores.frase}"`;

    //autor e ano
    let pAutorAno = document.getElementById("autoAnoAleatorio");
    pAutorAno.textContent =`- ${objetoValores.autor} (${objetoValores.ano})`
}

