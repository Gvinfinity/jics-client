import React from "react";
import Input from "../Input";
import { DataContext } from "../FormMain";
import "./Futebol.css";

const Futebol = () => {
    const handler = (event) => {
        DataContext._currentValue({
            Modalidade: "soccer",
            SubModalidade: event.target.id.replace("Soccer", ""),
            Valor: event.target.value,
        });
    };

    return (
        <div>
            <h1 className="header">Futebol</h1>
            <div className="divider"></div>
            <h2 className="subdiv">Equipe</h2>
            <Input className="teamName" id="teamNameSoccer" placeholder="Nome da Equipe" onChange={handler} />

            <h2 className="subdiv">Time</h2>
            <p>Preencha as matrículas dos demais membros do time</p>

            <Input className="teamMates" id="teamMate1SoccerId" placeholder="Matrícula do Membro de Time 1*" onChange={handler} />
            <Input className="teamMates" id="teamMate2SoccerId" placeholder="Matrícula do Membro de Time 2*" onChange={handler} />
            <Input className="teamMates" id="teamMate3SoccerId" placeholder="Matrícula do Membro de Time 3*" onChange={handler} />
            <Input className="teamMates" id="teamMate4SoccerId" placeholder="Matrícula do Membro de Time 4*" onChange={handler} />
            <Input className="teamMates" id="teamMate5SoccerId" placeholder="Matrícula do Membro de Time 5" onChange={handler} />
            <Input className="teamMates" id="teamMate6SoccerId" placeholder="Matrícula do Membro de Time 6" onChange={handler} />
            <Input className="teamMates" id="teamMate7SoccerId" placeholder="Matrícula do Membro de Time 7" onChange={handler} />
            <Input className="teamMates" id="teamMate8SoccerId" placeholder="Matrícula do Membro de Time 8" onChange={handler} />
            <Input className="teamMates" id="teamMate9SoccerId" placeholder="Matrícula do Membro de Time 9" onChange={handler} />
        </div>
    );
};

export default Futebol;
