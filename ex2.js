// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.

familyBox = {
  income: [
    1000, 2000, 3000
  ],
  outgoing: [
    2000, 1000, 1500
  ]
}

function Sum(array) {
  let total = 0;

  for (let value of array) {
    total += value
  }

  return total
}

function familyCalc() {
  const calcIncomes = Sum(familyBox.income)
  const calcOutgoing = Sum(familyBox.outgoing)

  const total = calcIncomes - calcOutgoing
  const itsOk = total >= 0

  let msg = "Saldo Negativo!"

  if (total >= 0) {
    msg = "Saldo Positivo!"
  }

  console.log("A sua situação é: " + itsOk + "E o seu saldo é: " + total)

}

console.log(familyCalc())