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

let nomes = [];


getTurma("A").then((alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  // console.log(nomes);
  getTurma("B").then((alunos) => {
    nomes = nomes.concat(alunos.map((b) => `B: ${b.nome}`));
    // console.log(nomes);
  });
  getTurma("C").then((alunos) => {
    nomes = nomes.concat(alunos.map((c) => `C: ${c.nome}`));
    // console.log(nomes);
  });
});

// Melhorando a promise
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  .then(turmas => [].concat(...turmas))
  .then(aluno => aluno.map(aluno => aluno.nome))
  .then(nomes => console.log(nomes))
  // caindo no catch
  .catch(e => console.error(e.message));
