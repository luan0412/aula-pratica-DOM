function analisar(){
    let n1 = document.getElementById("n1").value
    n1 = parseInt(n1)
    let res = document.getElementById("res1")
    if (n1>= 2 && n1<=10 ) {
        res.innerHTML = "Número dentro dos parâmetros"
    } else {
        res.innerHTML = "Digite um número entre 2 a 10"
    }
}

function analisar2(){
    let n2 = document.getElementById("n2").value
    n2 = parseInt(n2)
    let res = document.getElementById("res2")
    if (n2>= 2 && n2<=10 ) {
        res.innerHTML = "Número dentro dos parâmetros"
    } else {
        res.innerHTML = "Digite um número entre 2 a 10"
    }
}

function somar() {
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let res = document.getElementById("res3")

    n1 = parseInt(n1)
    n2 = parseInt(n2)

    let soma = n1 + n2

    if (n2>= 2 && n2<=10 && n1>= 2 && n1<=10 ) {
        
        res.innerHTML = `O resultado das somas é ${soma}`
    }else{
        res.innerHTML = "Digite um valor válido"
    }
}