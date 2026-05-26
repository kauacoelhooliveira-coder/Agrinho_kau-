// BOTÃO MODO ESCURO

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    // Adiciona ou remove a classe dark-mode
    document.body.classList.toggle("dark-mode");

});


// MENSAGEM DINÂMICA

const mensagemBtn = document.getElementById("mensagemBtn");
const mensagem = document.getElementById("mensagem");

mensagemBtn.addEventListener("click", () => {

    mensagem.innerHTML =
    "🌱 A sustentabilidade garante alimento hoje sem comprometer o amanhã!";

});


// VALIDAÇÃO DO FORMULÁRIO

const formulario = document.getElementById("formulario");
const resultadoForm = document.getElementById("resultadoForm");

formulario.addEventListener("submit", function(event){

    // Impede envio automático
    event.preventDefault();

    // Captura valores
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagemTexto = document.getElementById("mensagemTexto").value;

    // Validação simples
    if(nome === "" || email === "" || mensagemTexto === ""){

        resultadoForm.innerHTML =
        "⚠️ Preencha todos os campos.";

        resultadoForm.style.color = "red";

    } else {

        resultadoForm.innerHTML =
        "✅ Mensagem enviada com sucesso!";

        resultadoForm.style.color = "green";

        // Limpa formulário
        formulario.reset();
    }

});


// INTERAÇÃO EXTRA

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.backgroundColor = "#c8e6c9";

    });

    card.addEventListener("mouseleave", () => {

        card.style.backgroundColor = "white";

    });

});
