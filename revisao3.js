// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3};
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// =============================================================================

// Melhoras na Notação Literal
const nome = "Carla";
const pessoa = {
  nome,
  idade: 20
};

// console.log(pessoa);

// =============================================================================

// Criar funções de uma forma mais simples...
const something = {
  hi(){
    console.log("Hi!")
  }
}

// something.hi();

// =============================================================================

// Class
class Animal {};
class Cachorro extends Animal {
  falar(){
    return "au au!"
  }
};

// console.log(new Cachorro().falar());

// =============================================================================