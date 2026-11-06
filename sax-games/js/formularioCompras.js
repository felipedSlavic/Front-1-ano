import { formataMoeda } from "./formataMoeda.js";

document.addEventListener('DOMContentLoaded', () => {

const formulario = document.querySelector('#formularioGames'); 
const tbody = document.querySelector('#dadosDaCompra');


formulario.addEventListener('submit', function(parametro) {

parametro.preventDefault();

const nome = document.querySelector('#nomeCliente').value.trim();
const email = document.querySelector('#emailCliente').value.trim();

const tipoDeGame = document.querySelector('#tipoGame');
const nomedoGame  = tipoDeGame.options[tipoDeGame.selectedIndex].text.split('-')[0].trim();

const tipoDeCliente = document.querySelector('#tipoCliente').value;
const numeroParcelas = document.querySelector('#numParcelas').value;
const precoOriginal = document.querySelector('#tipoGame').value;

let descontoAplicado = 0;
let valorFinal = 0;
let valorParcelado = 0;

if(tipoDeCliente === "Cliente B"){
    descontoAplicado = precoOriginal * 0.10;
} else if(tipoDeCliente === "Cliente C"){
    descontoAplicado = precoOriginal * 0.20;
}

valorFinal = precoOriginal - descontoAplicado;
valorParcelado = valorFinal/numeroParcelas;

const tr = document.createElement('tr');

tr.innerHTML = `
<td>${nome}</td>
<td>${email}</td>
<td>${nomedoGame}</td>
<td>${tipoDeCliente}</td>
<td>${numeroParcelas}</td>
<td>${formataMoeda(precoOriginal)}</td>
<td>${formataMoeda(descontoAplicado.toFixed(2))}</td>
<td>${formataMoeda(valorFinal.toFixed(2))}</td>
<td>${numeroParcelas}x de ${formataMoeda(valorParcelado.toFixed(2))}</td>
`

tbody.prepend(tr);
formulario.reset();
document.querySelector('#nomeCliente').focus();
})

})

