// Arrow Function
const soma = (a, b) => a+b;
// console.log(soma(1,2));

// =============================================================================

// This
// o this, referência o escopo onde ele está localizado,
// então pode ser lido como: "nesse/aqui..."
const lexico = () => console.log(this === module.exports);
// lexico();

// =============================================================================

// Parâmetro Default
const log = (text = "Estou aqui!") => {
  console.log(text)
};

// com o parâmetro default, mesmo que o valor não seja passado quando chamarmos
// a function, ele irá assumir o que pré-definirmos dentro do seu parâmetro

// log();
// log("sei lá");

// =============================================================================

// Operador Rest
function total (...numeros){
  let total = 0;
  numeros.forEach(n => total += n );
  return total;
}

// console.log(total(1,2,3,4,5,6));