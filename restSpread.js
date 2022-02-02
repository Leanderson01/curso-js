// usar spread com objeto

const func = {
  nome: "maria",
  salario: 1500
};

const clone = {ativo: true, ...func};
// console.log(clone);

// =============================================================================

// usar spread com array

const grupA = ["maria", "joão", "lucas", "paulo"];
const grupB = ["leo", ...grupA];

console.log(grupB);