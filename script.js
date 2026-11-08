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

