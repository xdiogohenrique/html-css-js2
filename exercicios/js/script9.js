"use strict";
var nome = prompt("Insira o seu nome: ");
let atual = parseInt(prompt("Digite o ano atual : "));
let nascimento = parseInt(prompt("Digite o ano do seu nascimento: "));

alert(`Seu nome é: ${nome}
       Sua idade é: ${atual - nascimento}`);

