// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32
let value = 10
let which = "F"

switch (which) {
  case "C":
    const f = value * 9 / 5 + 32
    console.log("O valor foi convertido de Celsius para Fahrenheit.")
    console.log("O valor em Fahrenheit é: " + f)
    break;
  case "F":
    const c = (value - 32) * 5 / 9
    console.log("O valor foi convertido de Celsius para Fahrenheit.")
    console.log("O valor em Fahrenheit é: " + c)
    break;
  default:
    console.log("Valor inválido")
    break;
}
