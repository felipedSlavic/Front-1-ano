export function formatarMoeda(valor){
    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        // estilo de formatação = moeda
        style: 'currency',
        //a moeda desejada
        currency: 'BRL'
    }).format(valor);
    return valorFormatado;
}