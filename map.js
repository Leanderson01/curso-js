const tec = new Map();

tec.set('react', {framework: false});
tec.set('angular', {framework: true});

console.log(tec.react); //forma errada de pegar o valor
console.log(tec.get('react')); //forma correta de pegar o valor
console.log(tec.get('angular').framework); //também pode ser usado assim

const chavesVariadas = new Map([
  [function(){} , 'Função'],
  [{}, 'Objeto'],
  [123, 'Números']
]);

// verificar a chave e o valor dentro do meu elemento
chavesVariadas.forEach((vl, ch) => {
  console.log(vl, ch);
});

// .has() vai retornar true/false se o que você passar para ele estiver 
// dentro do elemento
console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));

// .size vai verificar a extensão do elemento
console.log(chavesVariadas.size);

// Não pode ter uma chave duplicada
chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');

console.log(chavesVariadas);
