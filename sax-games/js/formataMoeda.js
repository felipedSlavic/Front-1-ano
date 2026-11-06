export function formataMoeda (valor) {
    const numFormatado = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
    
    return numFormatado;

}