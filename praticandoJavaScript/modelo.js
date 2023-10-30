function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/bomDia.png'
        document.body.style.background = '#60869c'
    } else if (hora >=12 && hora < 18) {
        img.src = 'imagens/boaTarde.png'
        document.body.style.background = '#9bda27'
    } else {
        img.src = 'imagens/boaNoite.png'
        document.body.style.background = '#151324'
    }
}
