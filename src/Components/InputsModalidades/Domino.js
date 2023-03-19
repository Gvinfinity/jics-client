import React from "react";
import Input from "../Input";
import { DataContext } from "../FormMain";

import "./Domino.css";

const Domino = () => {
    const handlerInputDupla = (event) => {
        DataContext._currentValue({
            Modalidade: "domino",
            SubModalidade: "pairId",
            Valor: event.target.value,
        });
    };

    return (
        <div>
            <h1 className="header">Domino</h1>
            <div className="divider"></div>
            <Input placeholder="Matrícula da Dupla" onChange={handlerInputDupla} />
        </div>
    );
};

export default Domino;
