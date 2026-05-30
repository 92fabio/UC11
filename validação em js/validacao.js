function fnValidacao() {
   const campoTituloFilme = document.getElementById("tituloFilme")
  
   if(campoTituloFilme.value.trim() == "") {
    return console.log('preencha o campo titulo filme')
   }

   console.log(campoTituloFilme.value)

   if(campoTituloFilme.value.length <=1){
    return console.log('preencha o campo titulo filme com mais de 1 caracter')
   }

   if(campoTituloFilme.value.length >= 200){
    return console.log('preencha o campo titulo filme com menos de 200 caracteres')
   }

    campoTituloFilme.value.split('').map((letra) => {{
        letra = '@' ? console.log(true) : ''
        letra = '#' ? console.log(true) : ''
        letra = '$' ? console.log(true) : ''
        letra = '%' ? console.log(true) : ''
        letra = '&' ? console.log(true) : ''
        letra = '*' ? console.log(true) : ''
     }

   })
}