function real(partes, ...valores) {
  const result = [];
  valores.forEach((valor, index) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
    result.push(partes[index], valor);
  });
  return result.join('');
};

const preco = 29.99
const parcela = 11

console.log(real`1x de ${preco} ou 3x de ${parcela}`);