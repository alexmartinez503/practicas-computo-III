const op = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout,
});


console.log("suma");
console.log("resta");
console.log("multiplicar");
console.log("dividir");
console.log("cancelar");

op.question("que operacion desea realizar: ", operations =>{
   
    if (operations == 'suma'){

        op.question("ingrese el primer numero: ", num1 =>{
            op.question("ingrese el segundo numero: ", num2 =>{
                
                const suma= parseFloat(num1) + parseFloat(num2);
                console.log("el resultado de la suma es: ", suma);
            })
        });  
        } else if (operations == 'resta') {
        
            op.question("ingrese el primer numero: ", num1 =>{
                op.question("ingrese el segundo numero: ", num2 =>{
                    
                    const resta= parseFloat(num1) - parseFloat(num2);
                    console.log("el resultado de la resta es: ", resta);
                })
            });
            }else if (operations == 'multiplicar'){
                op.question("ingrese el primer numero: ", num1 =>{
                    op.question("ingrese el segundo numero: ", num2 =>{
                        
                        const multi=parseFloat(num1) * parseFloat(num2);
                        console.log("el resultado de la multiplicacion es: ", multi);
                    })
                });
            }else if (operations == 'dividir'){
                op.question("ingrese el primer numero: ", num1 =>{
                    op.question("ingrese el segundo numero: ", num2 =>{
                        
                        const div=parseFloat(num1) / parseFloat(num2);
                        console.log("el resultado de la division es: ", div);
                    })
                });
            }
        
})
