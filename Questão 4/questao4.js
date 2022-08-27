window.onload = function onloadquestao4() {
  let questao4 = document.getElementById("questao4");
  questao4.innerHTML =
    "<label>Digite um número: </label> </br>" +
    "<input id='num' type='text' placeholder='Digite o número' onKeyPress='return SomenteNumero(event)'>" +
    "<input type='button' value='Clique' onClick='verificaArray()'>";
};

function verificaArray() {
  // Variavél do limite que foi preenchido no input.
  n = Number(document.getElementById("num").value);
  // Array que irá receber os acréscimos.
  let arrayNum = [];
  // Looping
  for (let i = 1; i <= n; i++) {
    // Looping para identificar os números
    if (i % 5 == 0 && i % 9 == 0) {
      arrayNum.push("LuidyMoura");
    } else if (i % 9 == 0 && i % 5 != 0) {
      arrayNum.push("Moura");
    } else if (i % 5 == 0 && i % 9 != 0) {
      arrayNum.push("Luidy");
    } else {
      arrayNum.push(i);
    }
  }
  document.write(arrayNum);
}
