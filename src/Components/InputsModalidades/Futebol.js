import React from "react";
import Input from "../Input";
import { DataContext } from "../FormMain";
import "./Futebol.css";

const Futebol = () => {
    const handler = (event) => {
        DataContext._currentValue({
            Modalidade: "soccer",
            SubModalidade: "teamName",
            Valor: event.target.value,
        });
    };

    return (
        <div>
            <h1 className="header">Futebol</h1>
            <div className="divider"></div>
            <Input placeholder="Nome da Equipe" onChange={handler} />
        </div>
    );
};

export default Futebol;
