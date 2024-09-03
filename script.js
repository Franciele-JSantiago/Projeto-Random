
//let min = 10;
//let max = 20;
//let numeroaleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
//console.log(numeroaleatorio)//


function generationNumber() {

  const min = Math.ceil(document.querySelector(".input-min").value)
  const max = Math.floor(document.querySelector(".input-max").value)

  const result = Math.floor(Math.random() * (max - min + 1)) + min;


  alert(result)
}


