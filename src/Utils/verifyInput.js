export default function verifyInput(dados, _requiredFields) {

    let invalidFields = new Array();

    const emailRE = /^[\w]+@discente.ifpe.edu.br$/;
    const idRE = /\d{5}.{2,5}\d{4}/g;

    if (!emailRE.test(dados.email)) {
        invalidFields.push("email");
    }

    if (!idRE.test(dados.id)) {
        invalidFields.push("id");
    }

    if (dados.term > 8 && dados.course != "ENG") {
        invalidFields.push("term", "course");
    }

    if ((dados.course != "ENG" && dados.learningModel == "SUP") || (dados.course == "ENG" && dados.learningModel != "SUP")) {
        invalidFields.push("learningModel", "course");
    }

    if (!dados.name) {
        invalidFields.push("name");
    }

    return invalidFields;
}