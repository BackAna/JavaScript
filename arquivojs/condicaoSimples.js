function verificar() {
    var txtn = window.document.querySelector('input#txtnacao')
    var resultado = window.document.querySelector('div#resultado')
    var res = String(txtn.value)
    resultado.innerHTML = `<p>Desculpe você é estrangeiro.</p>`
        if (res == "Brasil") {
            resultado.innerHTML = `<p> Se seu país é <strong> ${res}</strong> Você é brasileiro</p>.`
        }
}