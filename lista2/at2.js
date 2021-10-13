function maiusculo() {
    var nome = document.getElementById("nome").value
    let res = document.getElementById("res1")

    nome = nome.toString()
    
    res.innerHTML = nome.toUpperCase()  
}

function maisDez(){
    let n1 = document.getElementById("idade").value
    let res = document.getElementById("res2")

    n1 = parseInt(n1)

    n1 += 10
    
    res.innerHTML = n1
}


function tudo() {
    var nome = document.getElementById("nome").value
    let n1 = document.getElementById("idade").value
    let res = document.getElementById("res3")

    nome = nome.toString()
    n1 = parseInt(n1)

    res.innerHTML = "oi"
    res.innerHTML = `Seu nome é ${nome.toUpperCase()}, daqui a 10 anos você terá ${n1 += 10}`

}