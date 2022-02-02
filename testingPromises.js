// com promise
const bestGame = "lol";

const p = new Promise((resolve, reject) => {
  if (bestGame === "lol") {
    resolve({
      name: bestGame,
      message: "Sim, só não é tão divertido rs :p"
    });
  } else {
    reject({
      name: 'Não não, tente de novo :D',
      message: "De certa forma, parabéns por não jogar lol :D"
    });
  };
});

p
  .then(result => {
    console.log(`Sim é o ${result.name}!! Ps: ${result.message}`);
  })
  .catch(err => {
    console.log(`${err.name}!! Ps: ${err.message}`);
  });