let numero = [5, 8, 2, 9, 3, 6, 4]
numero.push(7) //função para colocar mais um objeto no final
numero.sort() //função para colocar na ordem crescente
console.log(numero) //função imprimir
console.log(`O segundo valor do vetor é ${numero [2]}`) //função para informar qual o valor na posição 4
console.log(`O vetor tem ${numero.length} posições.`) //função para informar quantas posições tem o vetor

let posicao = numero.indexOf(1)
if (posicao == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${posicao}.`)
}

