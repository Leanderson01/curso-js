// Percorrer a string com o for Of
for (let letras of "Cod3r"){
  // console.log(letras);
};

// testando com uma array
const assuntosEcma = ['Map', 'Set', 'Promise'];

// laço for convencional "in"
for (let i in assuntosEcma){
  // console.log(i); // se fosse pra retornar o conteúdo: assuntosEcma[i]
};

// laço for Of "of"
for (let assunto of assuntosEcma){
  // console.log(assunto);
};

// verificando isso, pode-se observar que no laço convencional "in" ele retorna
// o número das posições da minha array
// já o for Of "of" retorna o conteúdo dentro da minha array

// =============================================================================

// Parte 2

const assuntoMap = new Map([
  ['Map', {abordado: true}],
  ['Set', {abordado: true}],
  ['Promises', {abordado: false}]
]);

// com for Of "of"
for (let assunto of assuntoMap){
  // console.log(assunto);
}

// acessando as chaves do array
for (let chaves of assuntoMap.keys()){
  // console.log(chaves);
}

// acessando os valores do array
for (let valores of assuntoMap.values()){
  // console.log(valores);
};

// usando o destructuring para acessar chave e valor do array
// o .entries retorna um par de chave e valor do objeto
for (let [ch, vl] of assuntoMap.entries()) {
  // console.log(ch, vl);
}

// com forEach
assuntoMap.forEach((vl, ch) => {
  // console.log(ch, vl);
});

// =============================================================================

// Parte 3
const s = new Set(['a', 'b', 'c']);

for (let letra of s) {
  console.log(letra);
}
