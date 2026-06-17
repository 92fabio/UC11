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

    const DataLancamento = document.getElementById('dataLancamento');
    const dataLancamento = DataLancamento.value;
    const dataLancamentoAno = dataLancamento ? new Date(dataLancamento + 'T00:00:00').getFullYear() : null;

     if (!dataLancamento) { 
        alert("Informe uma data de lançamento válida.");
        return;
    }
    if (dataLancamentoAno < anoProducao) { 
        alert("A data de lançamento possui um conflito com o ano de produção.");
        return;
    }
    if (dataLancamentoAno > anoAtual + 5) { 
        alert("A data de lançamento não pode ser depois de 5 anos no futuro.");
        return;
    }

const DuracaoMinutos = document.getElementById('duracaoMinutos');
const duracaoTexto = DuracaoMinutos.value.trim();

if (!/^\d+$/.test(duracaoTexto)) {
    alert("Informe uma duração válida (somente números inteiros).");
    return;
}

const duracaoMinutos = parseInt(duracaoTexto, 10);

if (duracaoMinutos < 1) {
    alert("A duração informada é muito curta.");
    return;
}

if (duracaoMinutos > 600) {
    alert("A duração informada é muito longa.");
    return;
}

const GeneroPrincipal = document.getElementById('generoPrincipal');
const generoPrincipal = GeneroPrincipal.value;
const generosPermitidos = ['Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Suspense', 'Terror', 'Documentário', 'Animação'];

 if (!generoPrincipal) { 
    alert("Selecione um gênero principal.");
    return;
}
if (!generosPermitidos.some(g => g.toLowerCase() === generoPrincipal.toLowerCase())) {
    alert("O gênero principal informado é inválido.");
    return;
    }

const Subgenero = document.getElementById('subgenero');
const subgenero = Subgenero.value;
const subgenerosPermitidos = ['Crime', 'Fantasia', 'Mistério', 'Biografia', 'Musical', 'Guerra', 'Esporte', 'Família', 'Psicológico', 'Super-herói'];

 if (!subgenero) { 
        alert("Selecione um subgênero.");
        return;
}
if (!subgenerosPermitidos.some(s => s.toLowerCase() === subgenero.toLowerCase())) {
    alert("O subgênero informado é inválido.");
    return;
}

const Classificacao = document.getElementById('classificacao');
const classificacao = Classificacao.value;
const classificacoesPermitidas = ['Livre', '10', '12', '14', '16', '18'];

if (!classificacao) { 
    alert("Selecione a classificação indicativa.");
    return;
}
if (!classificacoesPermitidas.some(c => c.toLowerCase() === classificacao.toLowerCase())) {
    alert("A classificação indicativa informada é inválida.");
    return;
}

const PaisOrigem = document.getElementById('paisOrigem');
const paisOrigem = PaisOrigem.value;
const paisesPermitidos = ['Brasil', 'Estados Unidos', 'Reino Unido', 'França', 'Alemanha', 'Espanha', 'Itália', 'Canadá', 'Argentina', 'Japão', 'Coreia do Sul', 'Índia'];

if (!paisOrigem) { 
    alert("Selecione o país de origem.");
    return;
}
if (!paisesPermitidos.some(p => p.toLowerCase() === paisOrigem.toLowerCase())) { 
    alert("O país de origem informado é inválido.");
    return;
}

const IdiomaOriginal = document.getElementById('idiomaOriginal');
const idiomaOriginal = IdiomaOriginal.value;
const idiomasPermitidos = ['Português', 'Inglês', 'Espanhol', 'Francês', 'Alemão', 'Italiano', 'Japonês', 'Coreano', 'Mandarim', 'Hindi'];

if (!idiomaOriginal) { 
    alert("Selecione o idioma original.");
    return;
}
if (!idiomasPermitidos.some(i => i.toLowerCase() === idiomaOriginal.toLowerCase())) { 
    alert("O idioma original informado é inválido.");
    return;
}

const regexNomeDiretor = /^[A-Za-zÀ-ÿ'-]+(?:\s+[A-Za-zÀ-ÿ'-]+)+$/;

const Diretor = document.getElementById('diretor');
const nomeDiretor = Diretor.value.trim().replace(/\s+/g, ' ');

if (nomeDiretor.length < 2) { 
    alert("O nome completo do diretor deve ser informado.");
    return;
}

if (nomeDiretor.length > 150) { 
    alert("O nome do diretor informado é muito longo.");
    return;
}

if (!regexNomeDiretor.test(nomeDiretor)) { 
    alert("Informe um nome válido para o diretor (Nome e Sobrenome).");
    return;
}

const Produtora = document.getElementById('produtora');
const produtora = Produtora.value.trim().replace(/\s+/g, ' ');

if (produtora.length < 2) { 
    alert("O nome informado da produtora é muito curto.");
    return;
}
if (produtora.length > 200) { 
    alert("O nome informado da produtora é muito longo.");
    return;
}

const Distribuidora = document.getElementById('distribuidora');
const distribuidora = Distribuidora.value.trim().replace(/\s+/g, ' ');

if (distribuidora.length < 2) { 
    alert("O nome informado da distribuidora é muito curto.");
    return;
}
if (distribuidora.length > 200) { 
    alert("O nome informado da distribuidora é muito longo.");
    return;
}

const Orcamento = document.getElementById('orcamento');
const orcamento = parseFloat(Orcamento.value.trim());

if (isNaN(orcamento) || orcamento < 0) { 
    alert("O orçamento informado deve ser um valor numérico válido maior ou igual a zero.");
    return;
}

const ReceitaBilheteria = document.getElementById('receitaBilheteria');
const receitaBilheteria = parseFloat(ReceitaBilheteria.value.trim());

 if (isNaN(receitaBilheteria) || receitaBilheteria < 0) { 
    alert("A receita de bilheteria deve ser um valor numérico válido maior ou igual a zero.");
    return;
}

const NotaMedia = document.getElementById('notaMedia');
const notaMedia = parseFloat(NotaMedia.value.trim());

if (isNaN(notaMedia) || notaMedia < 0 || notaMedia > 10) { 
    alert("A nota média deve ser um número entre 0 e 10.");
    return;
}

const Status = document.getElementById('status');
const status = Status.value;
const statusPermitidos = ['Em Produção', 'Pós-Produção', 'Lançado', 'Cancelado', 'Arquivado'];

if (!status) { 
    alert("Selecione o status atual do filme."); 
    return;
}
if (!statusPermitidos.some(s => s.toLowerCase() === status.toLowerCase())) { 
    alert("O status informado é inválido."); 
    return;
}

const Streaming = document.getElementById('streaming');
const disponibilidadeStreaming = Streaming.value;
const disponibilidadesPermitidas = ['Sim', 'Não'];

if (!disponibilidadeStreaming) { 
        alert("Selecione se está disponível para streaming."); 
        return;
}
if (!disponibilidadesPermitidas.some(d => d.toLowerCase() === disponibilidadeStreaming.toLowerCase())) { 
    alert("A opção de disponibilidade de streaming é inválida."); 
    return;
}

    
    alert("Formulário validado com sucesso!");
    return true;
}





  


