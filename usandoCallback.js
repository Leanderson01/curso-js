// sem promises, apenas callback

const http = require('http');

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, res =>{
    let result = '';

    res.on('data', dados => {
      result += dados;
    });

    res.on('end', () => {
      callback(JSON.parse(result));
    })
  });
};

let nomes = [];

// Callback Hell
getTurma('A', alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
  console.log(nomes); 
    getTurma('B', alunos => {
      nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`));
      console.log(nomes);
    });
      getTurma('C', alunos => {
        nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`));
        console.log(nomes);
      })
});