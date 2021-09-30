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

//let é global, e também local
console.log("> Existe 'x' antes do bloco?", x)

{
  let x = 0
  console.log(x)
}

console.log("> Existe 'x' depois do bloco?", x)











