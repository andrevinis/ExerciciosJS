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

    
    
    let opcao = window.prompt("MENU\nDigite a opção desejada:\n\n2 - exercicio Dia Da Semana")
    
    switch(opcao){
        case "2":
            exercicioDiaDaSemana()
            break;
    
        default:
            break;
    }