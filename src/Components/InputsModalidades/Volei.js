import React, { useState } from "react";
import Input from "../Input";
import "./Volei.css";
import { DataContext } from "../FormMain";

const Volei = () => {
    const [nomedadupla, setnomedadupla] = useState();
    const [nomedaquarteto, setnomequarteto] = useState();
    let clicked = true;
    const [btnDupla, setDupla] = useState(clicked);
    const [btnQuarteto, setQuarteto] = useState(clicked);

    const clickdupla = () => {
        setDupla(!btnDupla);
        setnomedadupla(btnDupla);
        DataContext._currentValue({
            Modalidade: "volley",
            SubModalidade: "doubles",
            Valor: btnDupla,
        });
    };

    const clickquarteto = () => {
        setQuarteto(!btnQuarteto);
        setnomequarteto(btnQuarteto);
        DataContext._currentValue({
            Modalidade: "volley",
            SubModalidade: "teams",
            Valor: btnQuarteto,
        });
    };

    const handlerInputDupla = (event) => {
        DataContext._currentValue({
            Modalidade: "volley",
            SubModalidade: "pairId",
            Valor: event.target.value,
        });
    };
    const handlerInputQuarteto = (event) => {
        DataContext._currentValue({
            Modalidade: "volley",
            SubModalidade: "teamName",
            Valor: event.target.value,
        });
    };

    return (
        <div className="volei">
            <h1 className="header">Vôlei</h1>
            <div className="divider"></div>
            <div className="voleidata">
                <div>
                    <input
                        className="checkbox-round"
                        type="checkbox"
                        name="dupla"
                        value="true"
                        onClick={clickdupla}
                    />
                    <label className="label">Dupla</label>
                </div>
                <div>
                    <input
                        className="checkbox-round"
                        type="checkbox"
                        name="quarteto"
                        value="true"
                        onClick={clickquarteto}
                    />
                    <label className="label">Quarteto</label>
                </div>
            </div>
            {nomedadupla && (
                <Input
                    onChange={handlerInputDupla}
                    placeholder={"Matricula da dupla"}
                />
            )}
            {nomedaquarteto && (
                <Input
                    placeholder={"Nome da Equipe"}
                    onChange={handlerInputQuarteto}
                />
            )}
        </div>
    );
};

export default Volei;
