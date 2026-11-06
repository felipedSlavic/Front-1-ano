// para usar o objeto precisamos fazer a importação dele
import { carros } from "./carros.js";
import { formatarMoeda } from "./formatarMoeda.js";


// pegando o gridCards, será nele que iremos montar os cards através do objeto carros
const gridCards = document.querySelector('#gridCards');



// O querySelector normalmente, ele só pega o primeiro elemnto que ele encontra
// Para aplicação de classes, então, usamos querySelectorAll
// pegando todos os botões com a classe filtro

const botoesFiltro = document.querySelectorAll('.filtro');

//Pegando o elemento para receber as buscas efetuadas
const buscasRealizadas = document.querySelector('#buscasRealizadas');

// Criar um array para as buscas,para armazenar

const arrayBuscas =  [];


// pegar o formulario 
const formBusca = document.querySelector('#busca');


//Pegando o campo de busca

const txtBusca = document.querySelector('#txtBusca');


// Cancelar o evento padrão (neste caso o SUBMIT) e chamar uma funcção no lugar da execução do evento
formBusca.addEventListener('submit', (e) => {

// cancelando o evento 
e.preventDefault();

// aqui temos a parte para efetuar a busca - Recuperar o termo digitado 
const termo = txtBusca.value.trim().toLowerCase();

// verificar se temos no mínimo 3 caracteres na busca

if(termo.length < 3){
    alert('Por Favor, digite no minímo três caracteres'); 
    return;
}

// Verificar se existe a string digitada nas propriedades marca e modelo, 
// se retornar true- ele vai armazenar no array os carros encontrados


// INCLUDES ("magica")

const resultadoBusca = carros.filter(parametroCarro => 
parametroCarro.modelo.toLowerCase().includes(termo) || 
parametroCarro.marca.toLowerCase().includes(termo) ||
parametroCarro.cor.toLowerCase().includes(termo)
); 



// Salvando as buscas 
arrayBuscas.push(termo);

// exibir o array na tela
buscasRealizadas.textContent = arrayBuscas.join(' - ');

// Chamar a função, mostrar cards, passando o array de resultadoBUsca

mostrarCards(resultadoBusca);

// Limpar o campo de busca

txtBusca.value = '';

})

function mostrarCards(lista) {


    // Antes de montar vamos limpar a lista, se não ficará. la embaixo e vc com cara de ...

    gridCards.innerHTML = '';

    // percorrer o array de objetos carros e, PARA CADA OBJETO, gere um card com as informações desejadas
    lista.forEach(carro => {
        // montando os cards dentro do gridCards
        gridCards.innerHTML += `
   <div class="col-md-6 col-lg-4 my-3">
        <a href="" class="text-decoration-none">
            <div class="card">
                <img src="${carro.foto}" class="card-img-top" alt="${carro.modelo} - ${carro.marca}">
                <div class="card-body">
                    <h5 class="card-title">${carro.modelo} - ${carro.marca}</h5>
                    <div class="d-flex justify-content-between mb-2">
                        <p>${carro.cor}</p>
                        <p>${carro.ano}</p>
                    </div>
                    <div class="d-flex justify-content-between m-0 mb-2">
                        <p>${carro.transmissao}</p>
                        <p>${carro.combustivel}</p>
                    </div>
                    <h4 class="text-center text-danger">${formatarMoeda(carro.preco)}</h4>
                </div>
            </div>
        </a>
    </div>
    `

    });
    document.querySelector('#totalCarros').textContent = lista.length;

} //Fim da função mostrarCArds

mostrarCards(carros);

// Função para buscar filtros
function aplicarFiltro(tipo){
// criar um array para receber os carros filtrados

let filtrados = [];

switch (tipo) {
    case "antes2000":
        // O filter() é um excelente método de array, do JS, javascript. Ele irá filtrar o array, e gerar um novo array com 
        // os carros filtrados, ele irá percorrer o array certinho e  irá gerar um exatamente com o q vc quer

        filtrados = carros.filter((carro) => {
            return carro.ano <= 2000;
        }) 
        break;

        case "depois2010":
            filtrados = carros.filter(carro => carro.ano > 2010);
            // outro jeito
         break;

         case  "acima120000":
            filtrados = carros.filter(carro => carro.preco > 120000);
         break;

          case  "vermelhos":
            filtrados = carros.filter(carro => carro.cor.toLowerCase() === 'vermelho');
         break;
        
    default:
        filtrados = carros;
        break;
}
// Chamar a função mostracards passando os arrays filtrados

mostrarCards(filtrados);
}



// percorrer o array de botoes para pegar o botao que foi clicado

botoesFiltro.forEach(botao => {
    botao.addEventListener('click' , (e) => {
        // target é um comando interessante, ele seleciona o alvo
        const tipo = e.target.dataset.filtro;
        // função que fará a busca conforme o botão  clicado 
        aplicarFiltro(tipo);
        
    })
})

const estilo = document.createElement('style');
estilo.textContent = `
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .card {
        transition: transform 0.2s, box-shadow 0.2s;}`;
document.head.appendChild(estilo);