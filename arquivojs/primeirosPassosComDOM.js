var p1 = window.document.getElementsByTagName('p')[0]
        var d = window.document.getElementById('msg')
        var h = window.document.getElementsByClassName('titulo')[0]
        var p2 = window.document.querySelector('p#subtitulo2')
        window.document.write('Esta escrito assim: ' + p1.innerText)
        d.innerText = 'Estou aguardando...'
        d.style.background = 'black'
        h.style.color = 'gray'
        p2.style.color = 'black'