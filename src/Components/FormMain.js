import React, { useState, createContext } from "react";
import "./FormMain.css";
import Modalidades from "./Modalidades";
import Volei from "./InputsModalidades/Volei";
import Futebol from "./InputsModalidades/Futebol";
import Queimada from "./InputsModalidades/Queimada";
import Tenis from "./InputsModalidades/Tenis";
import Domino from "./InputsModalidades/Domino";
import Badminton from "./InputsModalidades/Badminton";
import Atletismo from "./InputsModalidades/Atletismo";
import JogosEle from "./InputsModalidades/JogosEle";
import Select from "react-select";
let Data = "Sem dado";

const dados = {
    name: "",
    email: "",
    course: "",
    term: "",
    learningModel: "",
    sex: "",
    sports: {
        volley: {
            doubles: false,
            teams: false,
            pairId: "",
            teamName: "",
        },

        soccer: {
            teams: false,
            teamName: "",
        },

        dodgeball: {
            teams: false,
            teamName: "",
        },

        tableTennis: {
            singles: false,
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
            Tetris: false,
            JustDance: false,
        },

        athletics: {
            sprint50: false,
            sprint100: false,
            relay: false,
            pairId: "",
            longJump: false,
            highJump: false,
            shotPut: false,
        },
        badminton: {
            singles: false,
            doubles: false,
            pairId: "",
        },
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

export const DataContext = createContext((newData) => {
    const { Modalidade, SubModalidade, Valor } = newData;
    dados.sports[Modalidade][SubModalidade] = Valor;
});

const FormMain = () => {
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
        badminton: false,
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
        badminton: jogos.badminton,
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
            badminton: objJogos.badminton,
            domino: objJogos.domino,
            electronic: objJogos.electronic,
            athletics: objJogos.athletics,
        });
        dados.sports.soccer.teams = objJogos.soccer;
        dados.sports.dodgeball.teams = objJogos.dodgeball;
        dados.sports.chess = objJogos.chess;
        dados.sports.domino.doubles = objJogos.domino;
    };

    const save = (event) => {
        const { name, value } = event.target || event;
        dados[name] = value;
    };

    const eventClick = () => {
        setModalidade(!btnModalidade);
    };

    const submit = () => {
        console.log(dados);
    };

    return (
        <DataContext.Provider value={Data}>
            <form className="containerHeader">
                <input
                    className="mainName formField"
                    placeholder="Nome"
                    onChange={save}
                    name="name"
                />
                <input
                    className="mainEmail formField"
                    placeholder="Email"
                    onChange={save}
                    name="email"
                />
                <div className="containerForm">
                    <Select
                        defaultValue={dropdowns.curso.selectedOption}
                        onChange={(dropdowns.curso.setSelectedOption, save)}
                        options={dropdowns.curso.options}
                        className="mainCourse flexItem"
                        placeholder="Curso"
                        styles={styles}
                        hideSelectedOptions
                    />
                    <Select
                        defaultValue={dropdowns.modelo.selectedOption}
                        onChange={(dropdowns.modelo.setSelectedOption, save)}
                        options={dropdowns.modelo.options}
                        styles={styles}
                        hideSelectedOptions
                        className="mainModelo flexItem"
                        placeholder="Modelo de Ensino"
                    />
                    <div className="break"></div>
                    <Select
                        defaultValue={dropdowns.periodo.selectedOption}
                        onChange={(dropdowns.periodo.setSelectedOption, save)}
                        options={dropdowns.periodo.options}
                        styles={styles}
                        hideSelectedOptions
                        className="mainPeriodo flexItem"
                        placeholder="Período"
                    />
                    <Select
                        defaultValue={dropdowns.sexo.selectedOption}
                        onChange={(dropdowns.sexo.setSelectedOption, save)}
                        options={dropdowns.sexo.options}
                        styles={styles}
                        hideSelectedOptions
                        className="mainSexo flexItem"
                        placeholder="Sexo Biológico"
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
                {certo.badminton && <Badminton />}
                <button type="button" className="submit" onClick={submit}>
                    Concluir
                </button>
            </form>
        </DataContext.Provider>
    );
};

export default FormMain;
