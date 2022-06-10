let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}

