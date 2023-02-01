const validator = {
  isValid: function (cardNumber) {
    const division = cardNumber.split("").reverse(); //divido cada digito y lo reverso
    //console.log(division); //imprimo para revisar si sí funcionó
    const arr2 = []; //contiene mis posiciones pares
    const arr3 = []; //contiene mis posiciones impares
    const arrDouble = []; //contiene mis pares multiplicados *2
    const doblesSumados = []; //contiene mis pares ya habiendo pasado el filtro >= 10
    for (let i = 0; i < division.length; i++) {    //b) Divido mi array en [cada segundo dígito (en posición par)] y [posiciones impares (digitos nones)]
      if (i % 2 === 0) {
        arr3.push(division[i]);
      }
      if (i % 2 === 1) {
        arr2.push(division[i]); 
      }
    }
    arr2.forEach(function (element) {  //Aquí multiplico los elementos pares de mi array *2
      //console.log(element * 2);
      arrDouble.push(element * 2);
    });
    for (let h = 0; h < arrDouble.length; h++) {   //ciclo for que va a buscar >= 10
      if (arrDouble[h] >= 10) {
        const sum = arrDouble[h].toString().split("").map(Number);
        const suma = sum.reduce(function () {
          return sum[0] + sum[1];
        }, 0);
        //console.log("suma total de los mayores a 10", suma);
        doblesSumados.push(suma);
      } else {
        doblesSumados.push(arrDouble[h]);
      }
    }

    const arraysJuntos = [...arr3, ...doblesSumados];

    let sumaFinal = 0;
    for (const number of arraysJuntos) {
      sumaFinal += parseInt(number);
    }
    if (sumaFinal % 10 === 0) {
      //alert("El número de tarjeta es válido")
      return true;
    } else {
      //alert("El número de tarjeta es inválido. Inténtalo de nuevo");
      return false;
    }
  },
  maskify: function (cardNumber) {
    const lastFourDigits = cardNumber.slice(-4);
    const maskedNumber = lastFourDigits.padStart(cardNumber.length, '#')
    return maskedNumber;
  }
};

export default validator;
