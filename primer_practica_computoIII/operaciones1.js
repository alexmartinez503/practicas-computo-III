const {sum, rest, multi, div}= require('./operaciones.js');
const op = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout,
});


op.question("que operacion desea realizar: 1.suma 2. resta",op);
if (op == 1){
console.log("ingrese los el primer numero",a);
console.log("ingrese el segundo numero", b);


    const result = sum(a,b);

    console.log("el resultado de la suma es: ", result);
    
} else if (op == 2) {
        console.log("ingrese los el primer numero",a);
        console.log("ingrese el segundo numero", b);


    const result = rest(a,b);

    console.log("el resultado de la resta es: ", result);
    }