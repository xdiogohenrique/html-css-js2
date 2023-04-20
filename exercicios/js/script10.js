"use strict";

let queroSubir = parseInt(prompt("Quantos metros você deseja subir: "));
let alturaDegraus = parseInt(prompt("Qual a altura de cada degrau da escada: "));


alert(` Para subir ${queroSubir} metro(s)
    você vai ter que subir ${(queroSubir*100)/alturaDegraus} de degraus 
    de ${alturaDegraus} de centimetro`);
 

