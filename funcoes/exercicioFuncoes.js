// construir um menu que é possivel escolher um exercicio entre os exercicios anteriores,
// para ser executado.
// repita a sua execução, disponibilize as opcoes para o usuario, até que seja digitado"sair"

function Login() {

    let username = prompt("Digite um nome de usuário: ")

    let senha = prompt("Digite a senha: ")

    if (username == "andre" && senha == "senha123") {
        console.log("Login bem sucedido");
    } else {
        console.log("Voce nao tem permissão de acesso")
    }
}

function Nascimento() {

    let data = parseInt(prompt("Digite seu ano  de nascimento: "))

    if (data <= "2005") {
        alert("Maior de idade")
        console.log("Maior de idade")
    }

    else {
        alert("Menor de idade")
        console.log("Menor de idade")
    }
}



function DiaDaSemana() {

    let dia = prompt("Digite um dia da semana: ")

    if (dia == 1) {
        alert("Segunda-feira")
    }

    else if (dia == 2) {
        alert("Terça-feira")
    }

    else if (dia == 3) {
        alert("Quarta-feira")
    }

    else if (dia == 4) {
        alert("Quinta-feira")
    }

    else if (dia == 5) {
        alert("Sexta-feira")
    }

    else if (dia == 6) {
        alert("Sábado")
    }

    else if (dia == 7) {
        alert("Domingo")
    }
}


function ImparPar() {

    let numero = prompt("Digite um numero")

    if (numero % 2 == 0) {
        alert("par")
    }

    else if (numero % 2 == 1) {
        alert("ímpar")
    }

}

function Sequencia10() {


    for (let num = 0; num <= 10; num++) {
        console.log(num);
    }

}


function Pares10() {
    for (let num = 0; num <= 10; num++) {
        if (num % 2 == 0) {
            console.log(num);
        }
    }
}


function Impares50() {
    for (let num = 0; num <= 50; num++) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
}

let opcao

opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Login \n\n2 - Data de Nascimento \n\n3 - Dia Da Semana  \n\n4 - Impar Par \n\n5 - Sequencia de 0 a 10 \n\n6 - Pares até 10 \n\n7 - Impares 50 ")

while (opcao !== "sair") {

    switch (opcao) {

        case "1":
            Login()
            break;

        case "2":
            Nascimento()
            break;

        case "3":
            DiaDaSemana()
            break;

        case "4":
            ImparPar()
            break;

        case "5":
            Sequencia10()
            break;

        case "6":
            Pares10()
            break;

        case "7":
            Impares50()
            break;

        default:
            break;
    }

    opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Login \n\n2 - Data de Nascimento \n\n3 - Dia Da Semana  \n\n4 - Impar Par \n\n5 - Sequencia de 0 a 10 \n\n6 - Pares até 10 \n\n7 - Impares 50 ")

}


// do {

//     opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Login \n\n2 - Data de Nascimento \n\n3 - Dia Da Semana  \n\n4 - Impar Par \n\n5 - Sequencia de 0 a 10 \n\n6 - Pares até 10 \n\n7 - Impares 50 ")

// } while (opcao != "sair ")







// let opcao7 = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Login \n\n2 - Data de Nascimento \n\n3 - Dia Da Semana  \n\n4 - Impar Par \n\n5 - Sequencia de 0 a 10 \n\n6 - Pares até 10 \n\n7 - Impares 50 - Digite 7")

// switch (opcao7) {
//     case "7":
//         Impares50()
//         break;

//     default:
//         break;
// }





