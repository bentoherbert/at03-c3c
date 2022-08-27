window.onload = function onloadquestao3() {
  let questao3 = document.getElementById("questao3");
  questao3.innerHTML =
    "<label>Digite um número: </label> </br>" +
    "<input id='nota' type='text' placeholder='Digite a nota do aluno: ' onKeyPress='return SomenteNumero(event)'>" +
    "<input type='button' value='Calcule' onClick='verificaNota()'>";
};

function verificaNota() {
  nota = Number(document.getElementById("nota").value);

  const notaCorrigida = arredondar();

  if (notaCorrigida < 40) {
    document.write(`Aluno foi reprovado com nota ${notaCorrigida}`);
    return;
  } else {
    document.write(`Aluno foi aprovado com nota ${notaCorrigida}`);
    return;
  }
}

function arredondar() {
  if (nota < 38) {
    return nota;
  } else if (nota % 5 >= 3) {
    return (nota = nota + (5 - (nota % 5)));
  } else {
    return (nota = nota - (nota % 5));
  }
}
