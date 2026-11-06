import { motos } from "./motos.js";

const motosGrid = document.querySelector('#listaMotos');


function mostrarCards(moto) {
    
    let motoMaisCara = 0;
    motosGrid.innerHTML = "";
    
    
    const motosFiltradas = moto.filter(item => item.preco > 45000 && item.preco < 135000);
    
    
    motosFiltradas.forEach(item => {
        
        
        motosGrid.innerHTML += `
        <div class="col-md-4 my-2">            
        <div class="card">
        <div class="card-body">
        <h6 class="card-title text-danger align-items-center">${item.marca} - ${item.modelo}</h6>
        <div class="d-flex justify-content-around">
        <p class="m-0">Ano: ${item.ano_fabricacao}</p>
        <p class="m-0">Km rodados: ${item.km_rodados_mes}</p>
        </div>        
        <div class="d-flex justify-content-around">
        <p class="m-0">Carga Total: ${item.tempo_carregamento}</p>
        <p class="m-0">Autonomia: ${item.autonomia}</p>
        </div> 
        <h3 class="text-center text-danger my-4">${item.preco}</h3>       
        </div>
        </div>           
        </div>
        `;

         if (item.preco >= motoMaisCara) {
            motoMaisCara = item.preco;
        }
        
    });
    



    document.querySelector('#totalMoto').textContent = motosFiltradas.length;
    document.querySelector('#motoCaro').textContent = motoMaisCara;

}

mostrarCards(motos);
