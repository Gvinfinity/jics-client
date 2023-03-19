import React, { useState } from "react";
import Input from "../Input";
import { DataContext } from "../FormMain";

import "./Badminton.css";

const Badminton = () => {
    const [nomedadupla, setnomedupla] = useState();
    let clicked = true;
    const [btnIndividual, setIndividual] = useState(clicked);
    const [btnDupla, setDupla] = useState(clicked);

    const clickindividual = () => {
        setIndividual(!btnIndividual);
        DataContext._currentValue({
            Modalidade: "badminton",
            SubModalidade: "singles",
            Valor: btnIndividual,
        });
    };

    const clickdupla = () => {
        setDupla(!btnDupla);
        setnomedupla(btnDupla);
        DataContext._currentValue({
            Modalidade: "badminton",
            SubModalidade: "doubles",
            Valor: btnDupla,
        });
    };
    const handlerInputDupla = (event) => {
        DataContext._currentValue({
            Modalidade: "badminton",
            SubModalidade: "pairId",
            Valor: event.target.value,
        });
    };

    return (
        <div>
            <h1 className="header">Badminton</h1>
            <div className="divider"></div>
            <div className="badmintondata">
                <div>
                    <input
                        className="checkbox-round"
                        type="checkbox"
                        name="individual"
                        value="true"
                        onClick={clickindividual}
                    />
                    <label className="label">Individual</label>
                </div>
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
            </div>
            {nomedadupla && (
                <Input
                    placeholder={"Nome da Dupla"}
                    onChange={handlerInputDupla}
                />
            )}
        </div>
    );
};

export default Badminton;
