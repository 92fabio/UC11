function fnValidacao() {
 const fabio = /^[a-zA-ZÀ-ÿ0-9\s\-:,.!?()]+$/;
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

   if(!fabio.test(campoTituloFilme)){

    alert=("funcionou")
    return console.log('preencha o campo titulo filme com menos de 200 caracteres')
   }else{
    alert=("não funcionou")
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