function gerarTabuada(){
    var res = document.querySelector('div#res')
    var num = document.querySelector('input#txtnumero').value
    var tab = document.querySelector('select#seltab')
    if(num.length == 0){
        alert('Por favor, digite um número!')
        tab.innerHTML = ''
    }else{
        let c = 1
        tab.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}