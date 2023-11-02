let valor = [9, 7, 2, 4, 3, 5]
valor.sort() //funçaõ para colocar na ordem crescente

// console.log(valor) 

// for(let posicao = 0; posicao < valor.length; posicao++) {
//     console.log(`A posição ${posicao} tem o valor numérico de: ${valor[posicao]}`)
// }

//---------logo aqui a baixo de uma forma mais simplificada-----------

for(let posicao in valor) {
    console.log(`A posição ${posicao} tem o valor numérico de: ${valor[posicao]}`)
}