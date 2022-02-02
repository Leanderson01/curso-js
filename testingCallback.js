// sem promise

const bestGame = "valorant";

function whatIsTheBestGame(callback, errorCallback) {
  if (bestGame === "lol") {
    callback({
      name: bestGame,
      message: "Sim, só não é tão divertido rs :p"
    });
  } else{
    errorCallback({
      name: 'Não não, tente de novo :D',
      message: "De certa forma, parabéns por não jogar lol :D"
    });
  }
};

whatIsTheBestGame((result) => {
  console.log(`Sim é o ${result.name}!! Ps: ${result.message}`);
}, (err) => {
  console.log(`${err.name}!! Ps: ${err.message}`);
});