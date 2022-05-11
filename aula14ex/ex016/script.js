function contar(){
    var res = document.querySelector('div#res')
    var ini = document.querySelector('input#txtinicio').value
    var fim = document.querySelector('input#txtfim').value
    var passo = document.querySelector('input#txtpasso').value
    if(ini.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = `Impossível contar!` 
    }else if(passo == '0' && ini<fim){
        //Contage Crescente
        alert('Passo Inválido! Considerando PASSO 1')
        passo = 1
        res.innerHTML =  `Contando:`
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(passo)
        
        for(var c =i; c<=f;c+=p){
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }else if(passo == '0' && ini>fim){
        //Contagem Decrescente
        alert('Passo Inválido! Considerando PASSO -1')
        passo = 1
        res.innerHTML =  `Contando:`
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(passo)

        for(let c=i;c>=f;c-= p){
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }else{
        res.innerHTML =  `Contando:`
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(passo)
        if(i < f){
            //Contagem Crescente
            for(var c =i; c<=f;c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }   
        }else{
            //Contagem Decrescente
            for(let c=i;c>=f;c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
} 