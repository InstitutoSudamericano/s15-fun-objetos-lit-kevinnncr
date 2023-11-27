let estudiantes = [{nombre: "pancho", edad: 82},{nombre: "karen", edad: 29}];

function Students(array){
    let message = "";
    for (let i =0; i<array.length;i++){
        message += "Mi nombre es " + estudiantes[i].nombre + " y tengo " + estudiantes[i].edad + " años \n";
    }
    return message;
}

let lista = Students(estudiantes);

console.log(lista)