function saudacao() {
    
    let nomePessoa = prompt("Digite seu nome: ")
    
    let horaAtual = new Date ().getHours()
    
    if (horaAtual > 6 && horaAtual < 13){
        window.alert("Bom dia " + nomePessoa)
    } else if (horaAtual >= 13 && horaAtual < 18){
        window.alert ("Boa tarde" + nomePessoa)
    } else {
        window.alert("Boa noite " + nomePessoa)
    }

}

// saudacao()

function somar(num1, num2, num3) {
    let soma = num1 + num2 + num3 

    return soma
}

// // let resultado = somar(5, 6, 9)
// // let resultado2 = somar(1, 1, 1)

// // console.log("O resultado é: " + resultado)


// professor.nome = prompt("Digite seu nome:")
// professor.sobrenome = prompt("Digite o seu sobrenome:")
// professor.idade = parseInt(prompt("Digite a sua idade:"))

// OU

let professor = {
    nome: "Thiago",
    sobrenome: "Nascimento",
    idade: 26
} 

let professor2 = {
    nome: "Felipe",
    sobrenome: "Tadeu",
    idade: 24
}

let produto = {
    nome:"Controle remoto",
    marca:"Philco",
    modelo:"XRCTFG-456",
    preco: 30.0
}

let window = {
    innerWidth: 784
}

console.log("Antes do desconto:" + produto.preco)

produto.preco

console.log("Depois do desconto" + produto.preco)
