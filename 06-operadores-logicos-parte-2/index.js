/*

&& ---- e  

*/ 

const a = 2
const b = 2

console.log(a=== b && a<=b)
// V e V = V

console.log(a===b && a<b)
// V e F = F

console.log(a>b && a===b)
// F e V = F

console.log(a>b && a<b)
// F e F = F


/*

 || ---- OR ---- ou

*/ 

const c = 4
const d = 4

console.log(c===d || c<=d)
//V ou V = V

console.log(c===d || c<d)
// V ou F = V

console.log(c<d || c===d)
//F ou V = V

console.log(c>d || c<d)
//F ou F = F

/*

 ! ---- NOT ---- não

*/ 

const e = 3
const f = 3

console.log(!(e===f))
// F

console.log(!(e<f))
//V