let result = prompt ("Adivinhe o número que estou pensando? Entre 0 e 10");
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
  result = prompt("Você errou, tente novamente!")
  xAttempts++
}
if (xAttempts > 1) {

  alert ("Parabéns! Você acertou o número em " + xAttempts + "tentativas.")
} else {
  alert (`Parabéns! Você acertou o número em ${xAttempts} tentativa apenas. Incrível!`)
}

// para que a gente evite o uso de muitos sinais de mais, também podemos escrever da seguinte forma:
// alert (`Parabéns! Você acertou o número em ${xAttempts} tentativas.`)