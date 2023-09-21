/* operador de igual (valor boolean)

    == ----- igual ----- a == b ----- verdadeiro se a for igual a b
    === ---- identico ---- a === b ---- verdadeiro se a for identico a b  
    != ---- diferente ----- a!=b ---- verdadeiro se o a for diferente de b
    !== ---- não identico em tipo e conteúdo --- a!==b verdadeiro se a não for idêntico a b
    < ----- menor que ----- a<b ------ verdadeiro quando a for menor que b
    <= ---- menor igual que ---- a <= b ---- verdadeiro quando a for menor ou igual a b
    > ---- maior que -------- a>b ------ verdadeiro quando a for maior que b
    >= ---- maior igual que ---- a >= b ---- verdadeiro quando a for maior ou igual a b
  

*/

const a = 3
const b = 3

//igual
console.log(a==b)

//três sinais de igual indicam a verificação do tipo primitivo, que nesse caso, b é string
console.log(a===b)

//não idêntico
console.log(a!==b)

//diferente
console.log(a!=b)

//menor que
console.log(a<b)

// menor igual que
console.log(a<=b)

// maior igual que
console.log(a>=b)

