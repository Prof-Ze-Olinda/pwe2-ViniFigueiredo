"use strict";

const botao = document.getElementById("startBtn");

botao.addEventListener("click", () => {
    const nome = prompt("Qual é o seu nome?");

    let anoNascimento = prompt("Qual é o seu ano de nascimento?");

    const anoAtual = 2025;

    const anoNascimentoInt = parseInt(anoNascimento);

    const idade = anoAtual - anoNascimentoInt;

    alert("Olá, " + nome + " Você tem " + idade + " anos.");

    const confirmacao = confirm("Essa idade está correta?");

    if (confirmacao) {
        console.log("Usuário confirmou a idade.");
    } else {
        console.warn("Usuário negou a idade.");
    }

    if (confirmacao) {
        alert("Que bom!");
    } else {
        alert("Ops, então revise seu ano de nascimento.");
    }
});
