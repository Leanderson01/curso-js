// com promise

const http = require("http");

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let result = "";

      res.on("data", (dados) => {
        result += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(result));
        } catch(e) {
          reject(e);
        }
      });
    });
  });
};

// ES8
// Simplificar a Promise
let obterAlunos = async () => {
  const ta = await getTurma('A');
  const tb = await getTurma('B');
  const tc = await getTurma('C');
  return [].concat(ta,tb,tc);
} //retorna um objeto AsyncFunction

obterAlunos().then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes));