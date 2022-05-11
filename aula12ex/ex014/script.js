function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora>=0 && hora<12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Agora são ${hora} horas! BOM DIA!`
    }else if(hora>=12 && hora<18){
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Agora são ${hora} horas! BOA TARDE!`
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        msg.innerHTML = `Agora são ${hora} horas! BOA NOITE!`
    }
}
