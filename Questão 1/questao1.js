window.onload = function onloadquestao1() {
  let questao1 = document.getElementById("questao1");
  questao1.innerHTML =
    "<label>Digite o valor de cada lado do triangulo</label> </br>" +
    "<input id='lado1' type='text' placeholder='Lado 1' onKeyPress='return SomenteNumero(event)'>" +
    "<input id='lado2' type='text' placeholder='Lado 2' onKeyPress='return SomenteNumero(event)'>" +
    "<input id='lado3' type='text' placeholder='Lado 3' onKeyPress='return SomenteNumero(event)'>" +
    "<input type='button' value='Calcular' onClick='verificaTriangulo()'>";
};

function verificaTriangulo() {
  lado1 = Number(document.getElementById("lado1").value);
  lado2 = Number(document.getElementById("lado2").value);
  lado3 = Number(document.getElementById("lado3").value);

  let resposta = "";
  if (lado1 == lado2 && lado2 == lado3) {
    resposta = "Equilatero";
  } else {
    if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
      resposta = "Escaleno";
    } else {
      resposta = "Isosceles";
    }
  }
  alert("Esse triangulo e um: " + resposta);
}
