// construir um menu que é possivel escolher um exercicio entre os exercicios anteriores,
// para ser executado.
// repita a sua execução, disponibilize as opcoes para o usuario, até que seja digitado"sair"

function exercicioLogin(){

let username = prompt("Digite um nome de usuário: ")

let senha = prompt("Digite a senha: ")

if ( username == "admin" && senha == "senha123"){
    console.log("Login bem sucedido");
} else {
console.log("Voce nao tem permissão de acesso")
}
}



let opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Login - Digite 1 ")

switch(opcao){
    case "1":
        exercicioLogin()
        break;

    default:
        break;
}



function exercicioDiaDaSemana(){

    let dia = prompt("Digite um dia da semana: ")
    
    if (dia == 1) {
        alert ("Segunda-feira")
    }
    
    else if (dia == 2) {
        alert ("Terça-feira")
    }
    
    else if (dia == 3) {
        alert ("Quarta-feira")
    }
    
    else if (dia == 4) {
        alert ("Quinta-feira")
    }
    
    else if (dia == 5) {
        alert ("Sexta-feira")
    }
    
    else if (dia == 6) {
        alert ("Sábado")
    }
    
    else if (dia == 7) {
        alert ("Domingo")
    }
    }

    let opcao2 = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Login \n\n2 - Dia Da Semana - Digite 2")

    
    switch(opcao2){
        case "2":
            exercicioDiaDaSemana()
            break;
    
        default:
            break;
    }



    function exercicioImparPar(){

        let numero = prompt ("Digite um numero")

        if (numero %2 == 0){
            alert ("par")
        }

        else if (numero %2 == 1){
            alert ("ímpar")
        }
        
        }
        
        
        
        let opcao3 = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Login  \n\n2 - Dia Da Semana  \n\n3 - Impar Par - Digite 3")
        
        switch(opcao3){
            case "3":
                exercicioImparPar()
                break;
        
            default:
                break;
        }
    
    function exercicioSequencia10(){

      
        for (let num = 0; num <= 10; num++) {
            console.log(num);
        }
        
        }
        
        

        let opcao4 = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Login  \n\n2 - Dia Da Semana  \n\n3 - Impar Par \n\n4 - Sequencia de 0 a 10 - Digite 4 ")
        
        switch(opcao4){
            case "4":
                Sequencia10()
                break;
        
            default:
                break;
        }
    function Pares10(){
        for (let num =0; num <= 10; num++){
            if (num%2 == 0){
                console.log(num);
            }
        }
        }
        
        

        let opcao5 = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Login  \n\n2 - Dia Da Semana  \n\n3 - Impar Par \n\n4 - Sequencia de 0 a 10 \n\n5 - Pares até 10 - Digite 5")
        
        switch(opcao5){
            case "5":
                Pares10()
                break;
        
            default:
                break;
        }



    
  
    