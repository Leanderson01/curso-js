// não aceita repetição e não é indexado

const times = new Set();

times.add('Vasco');
times.add('Palmeiras');
times.add('Ceará');
// vou tentar forçar uma repetição
times.add('Vasco');

// verificando...
console.log(times);

// ver a extensão do meu elemento
console.log(times.size);

// ver se 'Ceará' existe dentro de 'times'
console.log(times.has('Ceará'));

// deletando 'Palmeiras' de 'times'
times.delete('Palmeiras');

// verificando se 'Palmeiras' realmente foi deletado
console.log(times.has('Palmeiras'));

// =============================================================================

// Parte 2

// removendo repetições de uma array
const nomes = ['leo', 'maria', 'joão', 'paulo', 'leo'];
const nomesSet = new Set(nomes);

// verificando se realmente o segundo 'leo' foi deletado
console.log(nomesSet);

