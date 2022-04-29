const edad = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout,
});

edad.question("cuantos años tienes?: ", edad=>{
    if(edad >= 18){
        console.log(`es mayor de edad ${edad}`);
    }else{
        console.log(`es menor de edad ${edad}`);
    }
    
});
