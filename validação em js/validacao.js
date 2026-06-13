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

      if (tituloOriginal.length > 200){
        alert("Título original deve conter no máximo 200 caracteres ");
        return false;

          const anoProducao = document.getElementById("anoProducao")

    if(anoProducao.value.trim() <=1987)
    {
        alert("Ano anterior de 1987 nao é aceitavel")
        anoProducao.value="";
        anoProducao.focus();
        return;

    }

    if(anoProducao.value.trim() > 2026)
    {
        alert("Ano nao pode ser maior que 2031")
        anoProducao.value="";
        anoProducao.focus();
        return;

    }

     if(regexData.test(anoProducao.value.trim() || anoProducao.valeu.trim()==""))
    {   alert("O Campo Ano de Producao precisar se preenchido  ")
        anoProducao.value="";
        anoProducao.focus();
        return;

       }
    }
  }
}

