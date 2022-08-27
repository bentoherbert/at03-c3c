window.onload = function onloadquestao2() {
  let questao2 = document.getElementById("questao2");
  questao2.innerHTML =
    "<label>Digite um número: </label> </br>" +
    "<input id='valora' type='text' placeholder='Digite o valor de A: ' onKeyPress='return SomenteNumero(event)'>" +
    "<input id='valorb' type='text' placeholder='Digite o valor de B: ' onKeyPress='return SomenteNumero(event)'>" +
    "<input id='valorc' type='text' placeholder='Digite o valor de C: ' onKeyPress='return SomenteNumero(event)'>" +
    "<input type='button' value='Calcule' onClick='verificaBhaskara()'>";
};

function verificaBhaskara() {
  valora = Number(document.getElementById("valora").value);
  valorb = Number(document.getElementById("valorb").value);
  valorc = Number(document.getElementById("valorc").value);
  
  let quadradodeb = valorb**2;
  let delta = quadradodeb - 4 * valora * valorc;
  // Classificação do Delta.
  if (delta < 0) {
    document.write("Não é possível calcular pois o Delta é negativo.");
    return;
  }
  if (delta == 0) {
    document.write("O Delta é zero, portando os valores de X1 e X2 serão iguais.<br>");
    return;
  }

  let valordebneg = valorb * -1; /* Inverte o sinal do B*/
  let raizdedelta = Math.sqrt(delta); /* Calcula a raiz do Delta, no caso, feito pela função Math.sqrt(variável) */
  let divisor = 2 * valora; /* Calcula do divisor, que irá dividir b + raiz de delta */
  let resultadox1 = (valordebneg + raizdedelta) / divisor; /* Calcula o x1 */
  let resultadox2 = (valordebneg - raizdedelta) / divisor; /* Calcula o x2 */

  //Apresentação da fórmula de delta e seu cálculo para o usuário.
  document.write("∆ = b² - 4ac </br>");
  document.write("∆ = " + quadradodeb + " - 4 * " + valora + " * " + valorc);
  document.write("</br> ∆ = " + delta);

  //Fórmula de Bhaskara
  document.write("<br> Calculando Bhaskara <br>");
  document.write("<br> x = -b +- √∆ / 2a");
  document.write("<br> x = " + valordebneg + " +- " + raizdedelta + "2" + valora);
  document.write("<br><br>x1 = " + quadradodeb + " + " + raizdedelta + " / " + divisor);
  document.write("<br>x1 = " + resultadox1);
  document.write("<br><br>x2 = " + quadradodeb + " - " + raizdedelta + " / " + divisor);
  document.write("<br>x2 = " + resultadox2);
}
