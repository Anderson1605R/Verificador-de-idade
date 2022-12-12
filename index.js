function comparador() {
  let ano = document.getElementById("ano");
  let anoNumerico = Number(ano.value);
  const anoPC = new Date();
  let anoAtual = anoPC.getFullYear();
  let idade = anoAtual - anoNumerico;
  let genero = document.getElementsByName("gender");
  const foto = document.getElementById("imagem");
  const paragrafo = document.getElementById("paragraph");
  const paragrafo1 = document.getElementById("paragrafo1");

  if (genero[0].checked && idade <= 17) {
    paragrafo1.innerHTML = `Detectamos um menino de ${idade} anos`;
    foto.style.display = "block";
    foto.src = "img/menino.jpg";
    paragrafo.style.display = "none";
  } else if (genero[1].checked && idade <= 17) {
    paragrafo1.innerHTML = `Detectamos uma menina de ${idade} anos`;
    foto.style.display = "block";
    foto.src = "img/menina.jpg";
    paragrafo.style.display = "none";
  } else if (
    genero[0].checked &&
    idade >= 18 &&
    genero[0].checked &&
    idade <= 58
  ) {
    paragrafo1.innerHTML = `Detectamos um homem adulto de ${idade} anos`;
    foto.style.display = "block";
    foto.src = "img/homem-jovem.jpg";
    paragrafo.style.display = "none";
  } else if (
    genero[1].checked &&
    idade >= 18 &&
    genero[1].checked &&
    idade <= 58
  ) {
    paragrafo1.innerHTML = `Detectamos uma mulher adulta de ${idade} anos`;
    foto.style.display = "block";
    foto.src = "img/mulher-jovem.jpg";
    paragrafo.style.display = "none";
  } else if (genero[0].checked && idade > 58) {
    paragrafo1.innerHTML = `Detectamos um Senhor de ${idade} anos`;
    foto.style.display = "block";
    foto.src = "img/idoso.jpg";
    paragrafo.style.display = "none";
  } else if (genero[1].checked && idade > 58) {
    paragrafo1.innerHTML = `Detectamos uma Senhora de ${idade} anos`;
    foto.style.display = "block";
    foto.src = "img/idosa.jpg";
    paragrafo.style.display = "none";
  } else if (anoNumerico === 0 || anoNumerico > anoAtual)
    alert("Verifique a informação!");
}
