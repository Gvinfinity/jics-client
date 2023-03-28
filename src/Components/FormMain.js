import React, { useState, createContext } from "react";
import { toast } from "react-toastify";
import Select from "react-select";

import Modalidades from "./Modalidades";
import Volei from "./InputsModalidades/Volei";
import Futebol from "./InputsModalidades/Futebol";
import Queimada from "./InputsModalidades/Queimada";
import Tenis from "./InputsModalidades/Tenis";
import Domino from "./InputsModalidades/Domino";
// import Badminton from "./InputsModalidades/Badminton";
import Atletismo from "./InputsModalidades/Atletismo";
import JogosEle from "./InputsModalidades/JogosEle";

import verifyInput from "../Utils/verifyInput";

import "./FormMain.css";

let Data = "Sem dado";

const dados = {
    name: "",
    email: "",
    id: "",
    course: "",
    term: "",
    learningModel: "",
    sex: "",
    subscription: {
        volley: {
            doubles: false,
            teams: false,
            pairId: "",
            teamName: "",
            teamMate1Id: "",
            teamMate2Id: "",
            teamMate3Id: "",
        },

        soccer: {
            teams: false,
            teamName: "",
            teamMate1Id: "",
            teamMate2Id: "",
            teamMate3Id: "",
            teamMate4Id: "",
            teamMate5Id: "",
            teamMate6Id: "",
            teamMate7Id: "",
            teamMate8Id: "",
            teamMate9Id: "",
        },

        dodgeball: {
            teams: false,
            teamName: "",
            teamMate1Id: "",
            teamMate2Id: "",
            teamMate3Id: "",
            teamMate4Id: "",
            teamMate5Id: "",
            teamMate6Id: "",
            teamMate7Id: "",
            teamMate8Id: "",
            teamMate9Id: "",
        },

        tableTennis: {
            single: false,
            doubles: false,
            pairId: "",
        },
        chess: false,
        domino: {
            doubles: false,
            pairId: "",
        },

        electronic: {
            FIFA23: false,
            // Tetris: false,
            JustDance: false,
        },

        athletics: {
            sprint50: false,
            sprint100: false,
            relay: false,
            teamMate1Id: "",
            teamMate2Id: "",
            teamMate3Id: "",
            longJump: false,
            highJump: false,
            shotPut: false,
        },
        // badminton: {
        //     single: false,
        //     doubles: false,
        //     pairId: "",
        // },
    },
};

const options = {
    cursos: [
        { name: "course", value: "MECA", label: "Mecatrônica" },
        { name: "course", value: "SEG", label: "Segurança do Trabalho" },
        { name: "course", value: "EDIF", label: "Edificações" },
        { name: "course", value: "ENG", label: "Engenharia Mecânica" },
    ],
    sexos: [
        { name: "sex", value: "MAN", label: "Masculino" },
        { name: "sex", value: "WOMAN", label: "Feminino" },
    ],
    modelos: [
        { name: "learningModel", value: "INT", label: "Integrado" },
        { name: "learningModel", value: "SUB", label: "Subsequente" },
        { name: "learningModel", value: "SUP", label: "Superior" },
    ],
    periodos: [],
};

for (var i = 1; i <= 10; i++) {
    options.periodos.push({
        name: "term",
        value: String(i),
        label: String(i) + "°",
    });
}

const styles = {
    control: (baseStyles, _state) => ({
        ...baseStyles,
        backgroundColor: "#E2E8F0",
        color: "#7a7a7a",
        borderRadius: "1.1rem",
        border: "none",
        marginTop: "0.8rem",
        fontFamily: "ComfoortaMidi",
    }),
    menuList: (baseStyles, _state) => ({
        ...baseStyles,
        backgroundColor: "#E2E8F0",
        fontFamily: "ComfoortaMidi",
    }),
};

const requiredFields = ["name", "email", "id", "course", "term", "learningModel", "sex"];

export const DataContext = createContext((newData) => {
    const { Modalidade, SubModalidade, Valor } = newData;
    dados.subscription[Modalidade][SubModalidade] = Valor;
});

const FormMain = () => {

    const [isFormFilled, setIsFormFilled] = useState(false);

    const dropdowns = {
        curso: {
            selectedOption: false,
            setSelectedOption: false,
            options: options.cursos,
        },
        sexo: {
            selectedOption: false,
            setSelectedOption: false,
            options: options.sexos,
        },
        modelo: {
            selectedOption: false,
            setSelectedOption: false,
            options: options.modelos,
        },
        periodo: {
            selectedOption: false,
            setSelectedOption: false,
            options: options.periodos,
        },
    };

    let clicked = false;
    const [btnModalidade, setModalidade] = useState(clicked);

    const [jogos, setjogos] = useState({
        titulo: "o errado aqui",
        volley: false,
        soccer: false,
        dodgeball: false,
        tableTennis: false,
        chess: false,
        // badminton: false,
        domino: false,
        electronic: false,
        athletics: false,
    });
    const certo = {
        Titulo: "O certo aqui",
        volley: jogos.volley,
        soccer: jogos.soccer,
        dodgeball: jogos.dodgeball,
        tableTennis: jogos.tableTennis,
        chess: jogos.chess,
        // badminton: jogos.badminton,
        domino: jogos.domino,
        electronic: jogos.electronic,
        athletics: jogos.athletics,
    };

    const addJogos = (objJogos) => {
        setjogos({
            volley: objJogos.volley,
            soccer: objJogos.soccer,
            dodgeball: objJogos.dodgeball,
            tableTennis: objJogos.tableTennis,
            chess: objJogos.chess,
            // badminton: objJogos.badminton,
            domino: objJogos.domino,
            electronic: objJogos.electronic,
            athletics: objJogos.athletics,
        });
        dados.subscription.soccer.teams = objJogos.soccer;
        dados.subscription.dodgeball.teams = objJogos.dodgeball;
        dados.subscription.chess = objJogos.chess;
        dados.subscription.domino.doubles = objJogos.domino;
    };

    const save = (event) => {
        const { name, value } = event.target || event;
        dados[name] = value;
        setIsFormFilled(requiredFields.every((value) => dados[value] != ""));
    };

    const eventClick = () => {
        setModalidade(!btnModalidade);
    };

    const submit = async () => {
        
        const unfilled = verifyInput(dados, requiredFields);
        const l = document.getElementsByClassName("wrong");

        if (l.length > 0) {
            const length = l.length;
            for ( let i = 0; i < length; i++ ) {
                l[0].classList.remove("wrong");
            }
        }

        const teamSports = [
            dados.subscription.volley.teams && certo.volley,
            dados.subscription.volley.doubles && certo.volley,
            dados.subscription.tableTennis.doubles && certo.tableTennis,
            dados.subscription.soccer.teams,
            dados.subscription.dodgeball.teams,
        ].reduce((memory, value) => memory + value, 0);

        const individualSports = [
            dados.subscription.tableTennis.single && certo.tableTennis,
            certo.athletics,
            certo.electronic,
            dados.subscription.chess,
            dados.subscription.domino.doubles,
        ].reduce((memory, value) => memory + value, 0);

        if(unfilled.length === 0) {
            if ( teamSports > 3 ) {
                toast.error("O número de esportes coletivos excedeu o limite de 3, por favor remova!");
            } else if ( teamSports + individualSports > 6 ) {
                toast.error("O número de esportes total excedeu o limite de 6, por favor remova!");
            } else {
                const response = await toast.promise(
                    fetch("http://localhost:8080/register",{
                        method: "POST",
                        mode: "cors",
                        body: JSON.stringify(dados),
                        headers: new Headers({"Content-Type": "application/json"})
                    }),
                    {
                        pending: "Adicionando inscrição...",
                        error: "Incapaz de conectar ao servidor, tente novamente mais tarde!"
                    }
                );
    
                const body = await response.json();
    
                if ( response.status === 500 ) {
                    toast.error( 
                        <div>
                            Houve um erro interno no servidor!<br/>
                            Contate suporte em <a href="mailto:g.soares@ifpeopensource.com.br?subject=JICS%20Erro%Inscricao">g.soares@ifpeopensource.com.br</a>
                        </div>,
                        {
                            closeOnClick: false
                        });
                } else if ( response.status === 400 ) {
                    if ( body.error.code == "_id_") {
                        toast.error( "O estudante já efetuou sua inscrição!" );
                        const studentIdField = document.getElementById("idMain");
                        studentIdField.classList.add("shake", "wrong");
                    } else if ( body.error.code == "students_email_key") {
                        toast.error( "O estudante já efetuou sua inscrição!" );
                        const studentIdField = document.getElementById("emailMain");
                        studentIdField.classList.add("shake", "wrong");
                    }
                } else if ( response.status === 418 ) {
                    toast.warning( 
                        <div>
                            Algumas modalidades solicitadas ultrapassaram
                            o limite estipulado para seu curso!
                        </div> 
                    );
                    console.log(body.limited);
                    for (let e in body.limited) {
                        const sportField = document.getElementById(e);
                        sportField.add("overfull");
                    }
                }
                
            }
            

        } else {
            toast.error("Existem campos inválidos, por favor verifique os dados!");
            for ( let e in unfilled) {
                let unfilledField = document.getElementById(unfilled[e]);
                if (["courseMain", "sexMain", "termMain", "learningModelMain"].indexOf(unfilled[e]) >= 0) {
                    unfilledField = unfilledField.getElementsByTagName("div")[0];
                }

                unfilledField.classList.add("shake", "wrong");
                setTimeout(() => {
                    unfilledField.classList.remove("shake");
                }, 500); 
            }
        }
        
    };

    return (
        <DataContext.Provider value={Data}>
            <form className="containerHeader">
                <input
                    className="formField"
                    id="nameMain"
                    placeholder="Nome"
                    onChange={save}
                    name="name"
                    required
                />
                <input
                    className="formField"
                    id="emailMain"
                    placeholder="Email"
                    onChange={save}
                    name="email"
                    required
                />
                <input
                    className="formField"
                    id="idMain"
                    placeholder="Matrícula"
                    onChange={save}
                    name="id"
                    required
                />
                <div className="containerForm">
                    <Select
                        defaultValue={dropdowns.curso.selectedOption}
                        onChange={(dropdowns.curso.setSelectedOption, save)}
                        options={dropdowns.curso.options}
                        className="flexItem"
                        id="courseMain"
                        placeholder="Curso"
                        styles={styles}
                        required
                        hideSelectedOptions
                    />
                    <Select
                        defaultValue={dropdowns.modelo.selectedOption}
                        onChange={(dropdowns.modelo.setSelectedOption, save)}
                        options={dropdowns.modelo.options}
                        styles={styles}
                        hideSelectedOptions
                        required
                        className="flexItem"
                        id="learningModelMain"
                        placeholder="Modelo de Ensino"
                    />
                    <div className="break"></div>
                    <Select
                        defaultValue={dropdowns.periodo.selectedOption}
                        onChange={(dropdowns.periodo.setSelectedOption, save)}
                        options={dropdowns.periodo.options}
                        styles={styles}
                        hideSelectedOptions
                        required
                        className="flexItem"
                        id="termMain"
                        placeholder="Período"
                    />
                    <Select
                        defaultValue={dropdowns.sexo.selectedOption}
                        onChange={(dropdowns.sexo.setSelectedOption, save)}
                        options={dropdowns.sexo.options}
                        styles={styles}
                        hideSelectedOptions
                        required
                        className="flexItem"
                        id="sexMain"
                        placeholder="Naipe"
                    />
                </div>
                <button
                    onClick={eventClick}
                    className="modalidade formField"
                    placeholder="Modalidades"
                    type="button"
                >
                    Modalidades
                </button>
                <Modalidades show={btnModalidade} setar={addJogos} />
                {certo.volley && <Volei />}
                {certo.soccer && <Futebol />}
                {certo.dodgeball && <Queimada />}
                {certo.tableTennis && <Tenis />}
                {certo.domino && <Domino />}
                {certo.electronic && <JogosEle />}
                {certo.athletics && <Atletismo />}
                {/* {certo.badminton && <Badminton />} */}
                
                <button type="button" disabled={!isFormFilled} className="submit" onClick={submit}>
                    Concluir
                </button>
            </form>
        </DataContext.Provider>
    );
};

export default FormMain;
