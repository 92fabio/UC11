function fnValidacao() {
    const tituloFilme = document.getElementById("tituloFilme").value.trim();
    
    // Campo vazio ou apenas espaços
    if (tituloFilme.length == 0) {
        alert("Título do Filme é obrigatório.");
        return false;
    }

    // Mais de 200 caracteres
    if (tituloFilme.length > 200) {
        alert("Título do Filme deve conter no máximo 200 caracteres.");
        return false;
    }

    const caracteresEspeciais = /[!@#$%^&*(),.?":{}|<>]/g;
    if (caracteresEspeciais.test(tituloFilme)) {
        alert("O campo Título do Filme não pode conter caracteres especiais.");
        return false;
    }

    const tituloOriginal = document.getElementById("tituloOriginal").value.trim();

    if (tituloOriginal.length == 0) {
          alert("Título original é obrigatorio.");
          return false;
     }

      if (tituloOriginal.length > 200){
        alert("Título original deve conter no máximo 200 caracteres ");
        return false;
    }

    const campoAnoProducao = document.getElementById('anoProducao');
    const anoProducaoTexto = campoAnoProducao.value.trim();

    const anoAtual = new Date().getFullYear();
    const regexNumeros = /^\d+$/;

    if (!regexNumeros.test(anoProducaoTexto)) {
        alert("O campo ano de produção deve conter apenas números.");
        return false;
    }

    const anoProducao = parseInt(anoProducaoTexto, 10);

    if (anoProducao <= 1888) {
       alert("Este campo so é válido a partir de 1888.");
       return false;
    }

    if (anoProducao > anoAtual + 5) {
       alert("O campo ano de produção não pode ser depois de 5 anos.");
       return false;
}

}



  


