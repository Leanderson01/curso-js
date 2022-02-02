// Promises
function falarDepoisDe(segundos, frase){
  return new Promise((resolve, reject) => { //recebem dois parâmetros: resolve/
    // reject.
    setTimeout(() => {
      reject(frase); // a promise só aceita 1 parâmetro aqui dentro.
    }, segundos * 1000);
  });
};

// acionando a function...
falarDepoisDe(3, "massa!")
  .then(frase => frase.concat('!')) //.then ele vai acionar a promise, e
  // verificar o parâmetro que foi passado, no caso daqui, foi a "frase"
  .then(outraFrase => console.log(outraFrase)) // posso colocar quantos .then eu
  // quiser. 
  .catch(e => console.error(e)); // tratamento de erro da promise com o .catch