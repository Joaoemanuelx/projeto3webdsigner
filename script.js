// funções card 1
const botaoClique = document.getElementById("botaoClique");
const botaoLimpar = document.getElementById("botaoLimpar");
const resultadoEvento = document.getElementById("resultadoEvento");

botaoClique.addEventListener("click", function() {
    resultadoEvento.textContent = 'Evento click acionado! O botão foi clicado.';
});

botaoLimpar.addEventListener("click", function() {
    resultadoEvento.textContent = 'Aguardando um clique...';
});

const areaMouse = document.getElementById("areaMouse");
const resultadoMouse = document.getElementById("resultadoMouse");
const posicaoMouse = document.getElementById("posicaoMouse");

areaMouse.addEventListener("mouseover", function() {
    resultadoMouse.textContent = 'Evento mouseover acionado! O mouse entrou na área.';
});

areaMouse.addEventListener("mouseout", function() {
    resultadoMouse.textContent = 'Evento mouseout acionado! O mouse saiu da área.';
});

areaMouse.addEventListener("dblclick", function() {
    resultadoMouse.textContent = 'Evento dblclick acionado! Você deu um clique duplo.';
});

areaMouse.addEventListener("mousemove", function(event) {
    posicaoMouse.textContent = `Posição ${event.clientX}, ${event.clientY}`;
});

// funções card 2
const campoTeclado = document.getElementById("campoTeclado");
const resultadoTeclado = document.getElementById("resultadoTeclado");

campoTeclado.addEventListener("keydown", function(event) {
    resultadoTeclado.textContent = `Evento keydown acionado! Tecla pressionada: ${event.key}`;
});

campoTeclado.addEventListener("keyup", function(event) {
    resultadoTeclado.textContent = `Evento keyup acionado! Tecla liberada: ${event.key}`;
});

// funções card 3
const campoNome = document.getElementById("campoNome");
const saudacao = document.getElementById("saudacao");
const resultadoCampo = document.getElementById("resultadoCampo");
const resultadoFormulario = document.getElementById("resultadoFormulario");
const opcaoEvento = document.getElementById("opcaoEvento");
const formularioEventos = document.getElementById("formularioEventos");

campoNome.addEventListener("input", function(event) {
    const nome = event.target.value.trim();
    saudacao.textContent = nome ? `Olá, ${nome}! voce acionou o evento input.` : "Digite seu nome para ver a saudação.";
});

campoNome.addEventListener("focus", function() {
    resultadoCampo.textContent = "Evento focus acionado! O campo recebeu foco.";
});

campoNome.addEventListener("blur", function() {
    resultadoCampo.textContent = "Evento blur acionado! O campo perdeu foco.";
});

opcaoEvento.addEventListener("change", function(event) {
    const opcaoSelecionada = event.target.value;
    resultadoCampo.textContent = `Evento change acionado! Opção selecionada: ${opcaoSelecionada}`;
});

formularioEventos.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = campoNome.value.trim();
    resultadoFormulario.textContent = name ? `Evento submit acionado! Formulário enviado por ${name}` : "Evento submit acionado! Formulário enviado sem nome.";
});

// funções card 4
const botaoQuerySelector = document.querySelector("#btQuerySelector");
const resultadoQuerySelector = document.querySelector("#resultadoQuerySelector");

botaoQuerySelector.addEventListener("click", function() {
    const titulo = document.querySelector("h1");
    titulo.style.color = "#0b5ed7";
    resultadoQuerySelector.textContent = `querySelector() encontrou: "${titulo.textContent}".`;
});

// funções card 5
const botaoQuerySelectorAll = document.querySelector("#btQuerySelectorAll");
const resultadoQuerySelectorAll = document.querySelector("#resultadoQuerySelectorAll");

botaoQuerySelectorAll.addEventListener("click", function() {
    const itens = document.querySelectorAll(".itemQuerySelectorAll");
    resultadoQuerySelectorAll.textContent = `querySelectorAll() encontrou ${itens.length} elementos.`;
});

// funções card 6
const botaoStyle = document.querySelector("#btStyle");
const amostraStyle = document.querySelector("#amostraStyle");
const resultadoStyle = document.querySelector("#resultadoStyle");

botaoStyle.addEventListener("click", function() {
    amostraStyle.style.color = "#0b5ed7";
    amostraStyle.style.backgroundColor = "#e7f1ff";
    amostraStyle.style.fontWeight = "bold";
    resultadoStyle.textContent = "As propriedades style foram alteradas.";
});

// funções card 7
const botaoCreateElement = document.querySelector("#btCreateElement");
const areaCreateElement = document.querySelector("#areaCreateElement");
const resultadoCreateElement = document.querySelector("#resultadoCreateElement");

botaoCreateElement.addEventListener("click", function() {
    const novoElemento = document.createElement("p");
    novoElemento.textContent = "Novo elemento criado com createElement()!";
    novoElemento.className = "amostra";
    areaCreateElement.appendChild(novoElemento);
    resultadoCreateElement.textContent = "Um novo parágrafo foi adicionado à página.";
});

// funções card 8
const botaoAlert = document.querySelector("#btAlert");
const botaoConfirm = document.querySelector("#btConfirm");
const resultadoDialogos = document.querySelector("#resultadoDialogos");

botaoAlert.addEventListener("click", function() {
    alert("Olá! Esta mensagem foi exibida com alert().");
    resultadoDialogos.textContent = "alert() foi executado.";
});

botaoConfirm.addEventListener("click", function() {
    const resposta = confirm("Você confirma esta ação?");
    resultadoDialogos.textContent = resposta ? "confirm() retornou true: ação confirmada." : "confirm() retornou false: ação cancelada.";
});

// // funções card 12
// const amostraConteudo = document.getElementById("amostraConteudo");
// const botaoInnerHTML = document.getElementById("botaoInnerHTML");
// const botaoInnerText = document.getElementById("botaoInnerText");
// const resultadoConteudo = document.getElementById("resultadoConteudo");

// botaoInnerHTML.addEventListener("click", function() {
//   amostraConteudo.innerHTML = "<strong>HTML inserido</strong> O texto em negrito foi criado com innerHTML.";
//   resultadoConteudo.textContent = "O navegador interpretou a marcação HTML inserida.";
// });

// botaoInnerText.addEventListener("click", function() {
//   amostraConteudo.innerText = "Conteúdo substituído como texto renderizado usando innerText.";
//   resultadoConteudo.textContent = "O conteúdo foi substituído por texto, sem interpretar marcação HTML.";
// });

// // funções card 13
// const amostraClasses = document.getElementById("amostraClasses");
// const botaoAdicionarClasse = document.getElementById("botaoAdicionarClasse");
// const botaoRemoverClasse = document.getElementById("botaoRemoverClasse");
// const botaoAlternarClasse = document.getElementById("botaoAlternarClasse");
// const resultadoClasses = document.getElementById("resultadoClasses");

// botaoAdicionarClasse.addEventListener("click", function() {
//   amostraClasses.classList.add("destaque");
//   resultadoClasses.textContent = "classList.add() adicionou a classe destaque.";
// });

// botaoRemoverClasse.addEventListener("click", function() {
//   amostraClasses.classList.remove("destaque");
//   resultadoClasses.textContent = "classList.remove() removeu a classe destaque.";
// });

// botaoAlternarClasse.addEventListener("click", function() {
//   const destaqueAtivo = amostraClasses.classList.toggle("destaque");
//   resultadoClasses.textContent = destaqueAtivo ? "classList.toggle() adicionou a classe destaque." : "classList.toggle() removeu a classe destaque.";
// });

// // funções card 14
// const linkAtributo = document.getElementById("linkAtributo");
// const botaoDefinirAtributo = document.getElementById("botaoDefinirAtributo");
// const botaoConsultarAtributo = document.getElementById("botaoConsultarAtributo");
// const botaoRemoverAtributo = document.getElementById("botaoRemoverAtributo");
// const resultadoAtributo = document.getElementById("resultadoAtributo");

// botaoDefinirAtributo.addEventListener("click", function() {
//   linkAtributo.setAttribute("style", "display: inline-block; padding: 8px; background-color: #fff2c5; color: #102d63; border-radius: 6px;");
//   resultadoAtributo.textContent = "O atributo style foi definido e o visual do link foi alterado.";
// });

// botaoConsultarAtributo.addEventListener("click", function() {
//   const estilo = linkAtributo.getAttribute("style");
//   resultadoAtributo.textContent = estilo ? `getAttribute() retornou: "${estilo}".` : "O atributo style ainda não foi definido.";
// });

// botaoRemoverAtributo.addEventListener("click", function() {
//   linkAtributo.removeAttribute("style");
//   resultadoAtributo.textContent = "removeAttribute() removeu o atributo style.";
// });

/* =======================================
   4. EVENTOS LOAD E SCROLL
======================================= */

// const resultadoLoad = document.getElementById("resultadoLoad");
// const resultadoScroll = document.getElementById("resultadoScroll");

// function paginaCarregada() {
//   resultadoLoad.textContent =
//     "Evento load acionado! A página foi carregada.";
// }

// if (document.readyState === "complete") {
//   paginaCarregada();
// } else {
//   window.addEventListener("load", paginaCarregada);
// }

// window.addEventListener("scroll", function () {
//   const posicao = Math.round(window.scrollY);

//   resultadoScroll.textContent =
//     `Evento scroll acionado! Posição vertical: ${posicao} px.`;
// }, { passive: true });


// /* =======================================
//    5. SELECIONAR E MODIFICAR O DOM
// ======================================= */

// const paragrafo = document.getElementById("paragrafoPrincipal");
// const resultadoDOM = document.getElementById("resultadoDOM");

// // Alterar texto
// document.getElementById("btnTexto").addEventListener("click", function () {
//   paragrafo.textContent = "O texto foi alterado pelo JavaScript!";

//   resultadoDOM.textContent = "Texto alterado com sucesso!";
// });

// // Mudar cor
// document.getElementById("btnCor").addEventListener("click", function () {
//   const corAtual = paragrafo.style.color;

//   paragrafo.style.color =
//     corAtual === "red" ? "#071d4e" : "red";

//   resultadoDOM.textContent = "A cor do parágrafo foi modificada!";
// });

// // Ocultar ou mostrar
// document.getElementById("btnOcultar").addEventListener("click", function () {
//   paragrafo.hidden = !paragrafo.hidden;

//   this.textContent = paragrafo.hidden
//     ? "Mostrar parágrafo"
//     : "Ocultar parágrafo";

//   resultadoDOM.textContent = paragrafo.hidden
//     ? "Parágrafo ocultado!"
//     : "Parágrafo exibido!";
// });

// // Contar parágrafos da demonstração
// document.getElementById("btnContar").addEventListener("click", function () {
//   const paragrafos = document.querySelectorAll(
//     ".exemplos-js .paragrafo-dom"
//   );

//   resultadoDOM.textContent =
//     `Foram encontrados ${paragrafos.length} parágrafos no exemplo.`;
// });


// /* =======================================
//    6. CRIAR ELEMENTOS HTML
// ======================================= */

// const campoItem = document.getElementById("novoItem");
// const lista = document.getElementById("listaItens");

// // Criar novos elementos
// document.getElementById("btnAdicionar").addEventListener("click", function () {
//   const texto = campoItem.value.trim();

//   if (texto === "") {
//     alert("Digite um texto antes de adicionar!");
//     return;
//   }

//   const novoElemento = document.createElement("li");

//   novoElemento.textContent = texto;

//   lista.appendChild(novoElemento);

//   campoItem.value = "";
//   campoItem.focus();
// });

// // Limpar lista
// document.getElementById("btnLimpar").addEventListener("click", function () {
//   lista.replaceChildren();
// });

// // Adicionar pressionando Enter
// campoItem.addEventListener("keydown", function (evento) {
//   if (evento.key === "Enter") {
//     evento.preventDefault();
//     document.getElementById("btnAdicionar").click();
//   }
// });
