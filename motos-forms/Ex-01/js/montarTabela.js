import { formatarMoeda } from "./formatarMoeda.js";

document.addEventListener('DOMContentLoaded', () => { 

  const tbody = document.querySelector('#motosTable');
  const form = document.querySelector('#dadosMoto');
    
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const modeloMoto = document.querySelector('#modeloMoto').value;
    const tempo = parseFloat(document.querySelector('#tempoCarregamento').value);
    const autonomia = parseFloat(document.querySelector('#autonomiaKM').value);
    const kmRodados = parseFloat(document.querySelector('#kmRodado').value);

    if (!modeloMoto || !tempo || !autonomia || !kmRodados) {
      alert('Preencha todos os campos!');
      return;
    }

    const numeroCarregamentos = (kmRodados / autonomia).toFixed(1);
    const gastoMes = ((numeroCarregamentos * tempo) * 0.82).toFixed(2);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${modeloMoto}</td>
      <td>${tempo}</td>
      <td>${autonomia}</td>
      <td>${kmRodados}</td>
      <td>${numeroCarregamentos}</td>
      <td>${formatarMoeda(gastoMes)}</td>
    `;

    tbody.prepend(tr);
    form.reset();

    console.log(tr);
    
  });
});
