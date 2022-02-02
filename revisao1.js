// const = variável que não muda o valor(tem escopo de bloco)
// let = variável que muda de valor(tem escopo de bloco)
{
  const a = 1;
  let b = 2;
  var c = 4;
}

// console.log(c);

// =============================================================================

// Template String
let produto = "iphone";
// console.log(`O seu ${produto} foi encaminhado!`);

// =============================================================================

// Destructuring 
const [e, a, ...tra] = "Cod3r";
// console.log(e, a, ...tra);

const [x, ,y] = [1,3,2];
// console.log(x, y);

const eu = {
  nome: "Leanderson",
  idade: 18,
  sexo: "M"
};
const { idade: i, nome } = eu;
// console.log(i, nome);

// =============================================================================