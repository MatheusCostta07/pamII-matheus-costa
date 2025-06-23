//Ex1
console.log("Exercício 1:")
console.log("")

var v1 = window.prompt("Digite um valor e o programa dirá se é par ou ímpar:")

if (v1 % 2 == 0) {
    const para = document.createElement("p");
    para.innerText = "O número " ,v1, " é par";
    document.body.appendChild(para);

} else{
    const para = document.createElement("p");
    para.innerText = "O número ", v1, " é impar";
    document.body.appendChild(para);
}

//Ex2
console.log("")
console.log("Exercício 2:")
console.log("")

var v2 = window.prompt("Digite um número e o programa verificará se o número é positivo, negativo ou zero:")

if (v2 < 0){

    console.log("O número é negativo")

} else if (v2 == 0){

    console.log("O número é zero")
    
} else {

    console.log("O número é positivo")
}

//Ex3
console.log("")
console.log("Exercício 3:")
console.log("")

var v3 = window.prompt("Digite um número e o programa somará do número 1 até ele:")

let i = 1;

while (i <= v3) {
    console.log(i)
    i++;
}

//Ex4
console.log("")
console.log("Exercício 4:")
console.log("")

var v4 = window.prompt("Digite um número e o programa dirá se ele é um número primo:")



//Ex5
console.log("")
console.log("Exercício 5:")
console.log("")

var str = window.prompt("Digite uma palavra e o programa contará quantas letras ela tem:")
var v5 = str.length

console.log(v5)


//Ex6
console.log("")
console.log("Exercício 6:")
console.log("")

var srt = window.prompt("Digite uma palavra:")

var arrSrt = srt.split("")

var arrN = arrSrt.reverse()

console.log(arrN.join(""))