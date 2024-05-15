// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

// inicializar os primeiros dois numeros da sequencia deFibonacci.
let fib1 = 1;
let fib2 = 2;

//Imprime os primeiros dez numeros da sequencia deFibonacci
console.log("Os primeiros dez numeros da sequencia de Fibonacci são: ")
console.log(fib1);
console.log(fib2);

//Intera para calcular e imprimir os proximos 8 numeros 

for(let i = 2; i < 10; i++){
    let nextfib = fib1 + fib2;
    console.log(nextfib);

    //Atualizar os valores da fib1 e fib2 para os proximos cálculos
    fib1 = fib2;
    fib2 = nextfib;
}
