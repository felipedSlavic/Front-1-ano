// O document.querySelector, serve para conseguir pegar o ID do documento HTML, dessa forma ele ja linka o ID do form no JS
// OBS: A segunda parte dele o ("addEventListener") é um escutador de eventos, ele vai ouvir, monitorar o evento.
// Este evento é o submit, o fato do fo formulário enviar os dados, ou nesse caso, ao menos tentar enviar o cont do form a um back-end
// () => {} Função detro do comando do form, que é inicializada quando o formulário foi enviado
// O parametro é uma variável, que irá receber informações, e então será realizada na função. Ele fica dentro do () da Função
// É comum. os devs usarem como o nome da variável, parametro. "e" de Event
// alert("Formulário não foi enviado,  não perdi as informações")



// --> Pegamos o Formulário e atribuimos um listener para o submit passando como parâmetro


document.querySelector('#criarConta').addEventListener('submit', function(e) {
    // Cancelando o evento "submit", por meio do preventDefault
    e.preventDefault();
    
    

// Pegar o tbody para depois colocar os dados do formulário
const tbody = document.querySelector('#dadosConta');

// Pegando os dados do formulário
// Criando um array (vetor)

const campos = [
    document.querySelector('#usuario'),
    document.querySelector('#senha'),
    document.querySelector('#email'),
    document.querySelector('#dataCadastro'),
    document.querySelector('#tipoConta')
]
    

// Criar uma tr
const tr = document.createElement('tr');

campos.forEach(campo => {
    // Criar a coluna, a td
    const td = document.createElement('td');

    // Passar o valor que foi digitado para dentro da td criada
    td.textContent = campo.value;

    // Colocar a td dentro da tr
    tr.append(td);

    console.log(campo);
    

})

// Colocar a tr no tbody
tbody.append(tr);


// Limpar o formulário
this.reset();

})
