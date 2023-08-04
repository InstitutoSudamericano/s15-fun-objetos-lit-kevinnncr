
let fullname = "kevin criollo";
let age = 40;
let skills = ["deportista", "Desarrollador de software", "diseñador"];
let address = { mainStreet: "monay", secondaryStreet: "valle"};

function showCurriculum(name, age, skills, address) {
    let formatedSkills = skills.join('\n\t');
    let formatedAddress = `${address.mainStreet}\t${address.secondaryStreet}\t${address.streetNumber}`;
    let message = `Name: ${name}\nAge: ${age}\nSkills:\n\t${formatedSkills}\nAddress:\n\t${formatedAddress}`;
    return message;
}

let hojadeVida = showCurriculum(fullname, age, skills, address);

console.log(hojadeVida);