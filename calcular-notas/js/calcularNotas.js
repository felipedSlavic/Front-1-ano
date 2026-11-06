// O comando abaixo, é usado para prevenir, ele faz com que toda a página carregue antes da função ser executado

// Pegando na página o form e o elemento de tabela
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#dados');
    const histórico = document.querySelector('.historico')

    // Cancelar o evento padrão
    form.addEventListener('submit', (e) => {

         e.preventDefault();   //Cancelamos os envio do formulário 

         
         //  O Método TRIM é uma função interessante do JS, pois ele apaga os epsaços entre as extremidades da label, 
         // não entre as strings e sim nas EXTREMIDADES!
         
         
         //Recuperar o nome e a disciplina 
         const nomeAluno = document.querySelector('#nomeAluno').value.trim();
         const disciplina = document.querySelector('#disciplina').value;

         if(disciplina === '0') {
            alert('Por favor, selecione uma disciplina válida')
            document.querySelector('#disciplina').focus();
            return; 

            // QUANDO o RETURN estiver vazio, sem nenhum comando o var, ele ent n irá retornar nada, ele irá cancelar algo, 
            // neste caso o if
         }

        //  pegando os checkpoints - para facilitar vou colocar em um array 
        //Converter os dados cadastrados na entrada do usuário de String para number
        const ckp = [
            Number(document.querySelector('#ckp01').value.trim()),
            Number(document.querySelector('#ckp02').value.trim()),
            Number(document.querySelector('#ckp03').value.trim()),
        ];


        // Pegar o Sprint e GS 

        const sprint01 = Number(document.querySelector('#sprint01').value.trim());
        const sprint02 = Number(document.querySelector('#sprint02').value.trim());
        const globalSolution = Number(document.querySelector('#globalSolution').value.trim());

        // para pegar os maiores checkpoints, usamos :
        // se o resultado de b - a for positivo == b vem antes de a
        // se o resultado de b - a for negativo == a vem antes de b

        // Isto é um metódo com dois valores parâmetros 
        ckp.sort((a, b) => b - a);
        console.log(ckp);


        const mediaCheckpoint = ((ckp[0] + ckp[1])/2);
        const mediaSprint = ((sprint01 + sprint02)/2);

        const mediaApoio = (mediaCheckpoint + mediaSprint) / 2;
        const mediaSemestral = ((mediaApoio) * 0.4 + (globalSolution * 0.6));

        // criar a linha e as td 
        // Uso com Template String 
        //Método innerHTML, injeta-se html 

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${nomeAluno}</td>
        <td>${disciplina}</td>
        <td>${ckp[0].toFixed(1)}</td>
        <td>${ckp[1].toFixed(1)}</td>
        <td>${mediaCheckpoint.toFixed(1)}</td>
        <td>${sprint01.toFixed(1)}</td>
        <td>${sprint02.toFixed(1)}</td>
        <td>${mediaSprint.toFixed(1)}</td>
        <td>${globalSolution.toFixed(1)}</td>
        <td>${mediaSemestral.toFixed(1)}</td>
        `;


        histórico.prepend(tr);
        form.reset();
        form.nomeAluno.focus();
    })


});
