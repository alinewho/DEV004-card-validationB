import validator from './validator.js';
function errorVacio () {
  const verificaInput = document.getElementById("cardnumber").value;
  if (verificaInput === "") {
    alert ("Por favor ingresa un número válido de tarjeta")
  }
  else {
    const valido = validator.isValid(verificaInput);
    const enmascarado = validator.maskify(verificaInput);
    if (valido === true) {
      const exito = document.getElementById("result").innerHTML = "El número de tarjeta " + enmascarado + " es válido";
      exito.style.color = "green";
    }
    else {
      document.getElementById("result").innerHTML = "El número de tarjeta es inválido";
    }
    document.getElementById("cardnumber").value = "";
  }
}
const btnValidate = document.getElementById("validate_button");
btnValidate.addEventListener("click", errorVacio);


