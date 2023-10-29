function somar() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var som = n1 + n2
    ressom.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong> ${som}</strong>`
}
function subtrair() {
    var tn3 = window.document.getElementById('txtn3')
    var tn4 = window.document.getElementById('txtn4')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var sub = n3 - n4
    ressub.innerHTML = `A subtração entre ${n3} e ${n4} é igual a <strong> ${sub}</strong>` 
}
function multiplicar(){
    var tn5 = window.document.querySelector('input#txtn5')
    var tn6 = window.document.querySelector('input#txtn6')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var mul = n5 * n6
    resmul.innerHTML = `A multiplicação entre ${n5} e ${n6} é igual a <strong> ${mul}</strong>`
}
function dividir(){
    var tn7 = window.document.querySelector('input#txtn7')
    var tn8 = window.document.querySelector('input#txtn8')
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var div = n7 / n8 
    resdiv.innerHTML = `A divisão entre ${n7} e ${n8} é igual a <strong> ${div}</strong>`
}