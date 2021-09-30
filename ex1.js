// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

let grades = 86
console.log("Bem-Vindo ao Sistema de Notas Escolares! Aqui iremos calcular para você o seu tipo!")
console.log("Os tipos são: A, B, C, D e F. E eles serão aplicados de acordo com a sua nota.")
function readNotes() {
  if (grades >= 90) {
    console.log('Parabéns! A sua nota foi "A".')
  } else if (grades >= 80 && grades <= 89) {
    console.log('Nice! Sua nota foi "B".')
  } else if (grades >= 70 && grades <= 79) {
    console.log('Você passou, mas pode melhorar! Sua nota foi "C".')
  } else if (grades >= 60 && grades <= 69) {
    console.log('Você não passou, mas não desanime! Sua nota foi "D"')
  } else if (grades < 60) {
    console.log('Você não passou... Tente focar mais um pouco que irá conseguir! Sua nota foi "F"')
  } else {
    console.log("Não entendi a sua resposta, por favor tente novamente")
  }
}
readNotes(grades)