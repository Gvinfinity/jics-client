export default function verifyInput(dados, _requiredFields) {

    let invalidFields = new Array();

    const emailRE = /^[\w]+@discente.ifpe.edu.br$/;
    const idRE = /^\d{5}.{2,5}\d{4}$/;

    if (!emailRE.test(dados.email)) {
        invalidFields.push("emailMain");
    }

    if (!idRE.test(dados.id)) {
        invalidFields.push("idMain");
    }

    if (dados.term > 8 && dados.course != "ENG") {
        invalidFields.push("termMain", "courseMain");
    }

    if ((dados.course != "ENG" && dados.learningModel == "SUP") || (dados.course == "ENG" && dados.learningModel != "SUP")) {
        invalidFields.push("learningModelMain", "courseMain");
    }

    if (!dados.name) {
        invalidFields.push("nameMain");
    }

    let teamsValidation = {};

    if ( dados.subscription.volley.teams ) {
        for (let i = 1; i <= 3; i++) {
            teamsValidation[`teamMateVolley${i}Id`] = dados.subscription.volley[`teamMate${i}Id`];
        }
    }

    if ( dados.subscription.volley.doubles ) {
        teamsValidation["pairIdVolley"] = dados.subscription.volley.pairId;
    }

    if ( dados.subscription.tableTennis.doubles) {
        teamsValidation["pairIdTableTennis"] = dados.subscription.tableTennis.pairId;
    }
    
    if ( dados.subscription.soccer.teams ) {
        for (let i = 1; i <= 4; i++) {
            teamsValidation[`teamMate${i}SoccerId`] = dados.subscription.soccer[`teamMate${i}Id`];
        }
    }    

    if ( dados.subscription.dodgeball.teams ) {
        for (let i = 1; i <= 9; i++) {
            teamsValidation[`teamMate${i}DodgeballId`] = dados.subscription.dodgeball[`teamMate${i}Id`];
        }
    }

    if ( dados.subscription.domino.doubles ) {
        teamsValidation["pairIdDomino"] = dados.subscription.domino["pairId"];
    }

    if ( dados.subscription.athletics.relay ) {
        teamsValidation["pairIdRelay"] = dados.subscription.athletics["pairId"];
    }

    for (const field in teamsValidation) {
        if (!idRE.test(teamsValidation[field])) {
            invalidFields.push(field);
        }
    }
    
    return invalidFields;
}
