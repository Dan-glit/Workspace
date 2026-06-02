
let contador = 10;


console.log("Valor inicial:", contador);

let resultadoPostIncremento = contador++;
console.log("Post-incremento (contador++):", resultadoPostIncremento);


console.log("Valor después de contador++:", contador);

let resultadoPreIncremento = ++contador;
console.log("Pre-incremento (++contador):", resultadoPreIncremento);


console.log("Valor actual:", contador);

let resultadoPostDecremento = contador--;
console.log("Post-decremento (contador--):", resultadoPostDecremento);


console.log("Valor después de contador--:", contador);

let resultadoPreDecremento = --contador;
console.log("Pre-decremento (--contador):", resultadoPreDecremento);

console.log("Valor final:", contador);