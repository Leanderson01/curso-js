// Tagged Template = processa uma template dentro de uma função
function tag(partes, ...valores){
  console.log(partes);
  console.log(valores);
  return "outra string";
};

const aluno = "Leo";
const situacao = "aprovado";
console.log(tag`${aluno} está ${situacao}`);