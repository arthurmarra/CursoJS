function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano').value
    var res = document.querySelector('div#res')
    if(fano.length == 0 || fano > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade<10){
                //Criança
                img.setAttribute('src', 'bbhomem.png')
            }else if (idade<21){
                //Jovem
                img.setAttribute('src', 'jovemhomem.png')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src', 'homemadulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'homemvelho.png')
            }
        }else{
            gênero = 'Mulher'
            if(idade >=0 && idade<10){
                //Criança
                img.setAttribute('src', 'bbmulher.png')
            }else if (idade<21){
                //Jovem
                img.setAttribute('src', 'jovemmulher.png')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src', 'mulheradulta.png')
            }else{
                //Idoso
                img.setAttribute('src', 'mulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) 
    }
}