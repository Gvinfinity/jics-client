import React, { useState } from "react";
import Input from "../Input";
import { DataContext } from "../FormMain";

import "./Atletismo.css";

const Atletismo = () => {
    const [nomedadupla, setnomedupla] = useState();
    let clicked = true;
    const [btnCorrida50, setCorrida50] = useState(clicked);
    const [btnCorrida100, setCorrida100] = useState(clicked);
    const [btnCorridaRevezamento, setCorridaRevezamento] = useState(clicked);
    const [btnSaltoDist, setSaltoDist] = useState(clicked);
    const [btnSaltoAlt, setSaltoAlt] = useState(clicked);
    const [btnArremesso, setArremesso] = useState(clicked);

    const clickCorrida50 = () => {
        setCorrida50(!btnCorrida50);
        DataContext._currentValue({
            Modalidade: "athletics",
            SubModalidade: "sprint50",
            Valor: btnCorrida50,
        });
    };

    const clickCorrida100 = () => {
        setCorrida100(!btnCorrida100);
        DataContext._currentValue({
            Modalidade: "athletics",
            SubModalidade: "sprint100",
            Valor: btnCorrida100,
        });
    };

    const clickSaltoDist = () => {
        setSaltoDist(!btnSaltoDist);
        DataContext._currentValue({
            Modalidade: "athletics",
            SubModalidade: "longJump",
            Valor: btnSaltoDist,
        });
    };

    const clickSaltoAlt = () => {
        setSaltoAlt(!btnSaltoAlt);
        DataContext._currentValue({
            Modalidade: "athletics",
            SubModalidade: "highJump",
            Valor: btnSaltoAlt,
        });
    };

    const clickArremesso = () => {
        setArremesso(!btnArremesso);
        DataContext._currentValue({
            Modalidade: "athletics",
            SubModalidade: "shotPut",
            Valor: btnArremesso,
        });
    };

    const clickCorridaRevezamento = () => {
        setCorridaRevezamento(!btnCorridaRevezamento);
        setnomedupla(btnCorridaRevezamento);
        DataContext._currentValue({
            Modalidade: "athletics",
            SubModalidade: "relay",
            Valor: btnCorridaRevezamento,
        });
    };

    const handlerInput = (event) => {
        DataContext._currentValue({
            Modalidade: "athletics",
            SubModalidade: event.target.id.replace("Relay", ""),
            Valor: event.target.value,
        });
    };

    return (
        <div>
            <h1 className="header">Atletismo</h1>
            <div className="divider"></div>
            <div className="atletismodata">
                <div>
                    <input
                        className="checkbox-round"
                        id="sprint50"
                        type="checkbox"
                        name="individual"
                        value="true"
                        onClick={clickCorrida50}
                    />
                    <label className="label">Corrida 50m</label>
                </div>
                <div>
                    <input
                        className="checkbox-round"
                        id="sprint100"
                        type="checkbox"
                        name="dupla"
                        value="true"
                        onClick={clickCorrida100}
                    />
                    <label className="label">Corrida 100m</label>
                </div>
                <div>
                    <input
                        className="checkbox-round"
                        id="relay"
                        type="checkbox"
                        name="dupla"
                        value="true"
                        onClick={clickCorridaRevezamento}
                    />
                    <label className="label">Corrida em Revezamento</label>
                </div>
                <div>
                    <input
                        className="checkbox-round"
                        id="longJump"
                        type="checkbox"
                        name="individual"
                        value="true"
                        onClick={clickSaltoDist}
                    />
                    <label className="label">Salto em Distância</label>
                </div>
                <div>
                    <input
                        className="checkbox-round"
                        id="highJump"
                        type="checkbox"
                        name="dupla"
                        value="true"
                        onClick={clickSaltoAlt}
                    />
                    <label className="label">Salto em Altura</label>
                </div>
                <div>
                    <input
                        className="checkbox-round"
                        id="shotPut"
                        type="checkbox"
                        name="individual"
                        value="true"
                        onClick={clickArremesso}
                    />
                    <label className="label">Arremesso de Peso</label>
                </div>
            </div>
            {nomedadupla && (
                <div>
                    <h2 className="subdiv">Time Revezamento</h2>
                    <p>Preencha as matrículas dos demais membros do time</p>

                    <Input id="teamMate1RelayId" placeholder={"Matrícula do Membro de Time 1"} onChange={handlerInput} />
                    <Input id="teamMate2RelayId" placeholder={"Matrícula do Membro de Time 2"} onChange={handlerInput} />
                    <Input id="teamMate3RelayId" placeholder={"Matrícula do Membro de Time 3"} onChange={handlerInput} />
                </div>
            )}
        </div>
    );
};

export default Atletismo;
