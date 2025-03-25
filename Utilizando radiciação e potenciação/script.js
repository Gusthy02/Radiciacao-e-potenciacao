// Entrada de valores
// De novo usei Replace

let numeroA = parseInt(Math.ceil(
    prompt("Digite um número inteiro inteiro: ").replace(",", "."), -1
));

let numeroB = parseInt(Math.ceil(
    prompt("Digite outro número inteiro inteiro: ").replace(",", "."), -1
));

// Desenvolvimento

let potenciaA = numeroA**2;
let potenciaB = numeroB**3;

let raizQuadrada = Math.sqrt(potenciaA + potenciaB);

// Saída

alert("A raiz quadrada da soma das potencias é: " + raizQuadrada.toFixed(2))
