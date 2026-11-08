// funções card 1
const botaoClique = document.getElementById("btClique");
const botaoLimpar = document.getElementById("btLimpar");
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

// funções card 7
const botaoQuerySelector = document.querySelector("#btQuerySelector");
const resultadoQuerySelector = document.querySelector("#resultadoQuerySelector");

botaoQuerySelector.addEventListener("click", function() {
    const titulo = document.querySelector("h1");
    titulo.style.color = "#0b5ed7";
    resultadoQuerySelector.textContent = `querySelector() encontrou: "${titulo.textContent}".`;
});

// funções card 8
const botaoQuerySelectorAll = document.querySelector("#btQuerySelectorAll");
const resultadoQuerySelectorAll = document.querySelector("#resultadoQuerySelectorAll");

botaoQuerySelectorAll.addEventListener("click", function() {
    const itens = document.querySelectorAll(".itemQuerySelectorAll");
    resultadoQuerySelectorAll.textContent = `querySelectorAll() encontrou ${itens.length} elementos.`;
});

// funções card 9
const botaoStyle = document.querySelector("#btStyle");
const amostraStyle = document.querySelector("#amostraStyle");
const resultadoStyle = document.querySelector("#resultadoStyle");

botaoStyle.addEventListener("click", function() {
    amostraStyle.style.color = "#0b5ed7";
    amostraStyle.style.backgroundColor = "#e7f1ff";
    amostraStyle.style.fontWeight = "bold";
    resultadoStyle.textContent = "As propriedades style foram alteradas.";
});

// funções card 10
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

// funções card 11
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
