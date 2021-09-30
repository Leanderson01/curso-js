/*
  *Scope:
    -> O scope determina a visibilidade de uma var dentro do js
  
  *Block Statement
    -> Quando criamos um bloco de código ele também irá criar um
    escopo próprio, a qual chamamos de "block-scoped"
    {//criando um bloco

  //Posso colocar qualquer código aqui!

}//fechando o bloco
*/

/*
let e const são apenas locais, e por isso só irão funcionar no escopo onde
foram declaradas
*/

console.log("> Existe 'x' antes do bloco?", y)

{
  let y = 0
  console.log(y)
}

console.log("> Existe 'y' depois do bloco?", y)











