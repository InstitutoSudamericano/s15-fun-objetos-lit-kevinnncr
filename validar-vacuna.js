let person = {name:"Kevin", age:20}

function validarvacuna(literalObject){
    if (literalObject.age<5 || literalObject.age>65){
        return `${literalObject.name} es aceptado`
    }
    return `${literalObject.name} no es aceptado`
}

let result = validarvacuna(person);

alert(result);