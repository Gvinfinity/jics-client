import React from "react";
import Input from "../Input";
import "./Queimada.css";
import { DataContext } from "../FormMain";

const Queimada = () => {
    const handler = (event) => {
        DataContext._currentValue({
            Modalidade: "dodgeball",
            SubModalidade: event.target.id.replace("Dodgeball", ""),
            Valor: event.target.value,
        });
    };

    return (
        <div>
            <h1 className="header">Queimada</h1>
            <div className="divider"></div>

            <h2 className="subdiv">Equipe</h2>
            <Input className="teamName" id="teamNameDodgeball" placeholder="Nome da Equipe" onChange={handler} />

            <h2 className="subdiv">Time</h2>
            <p>Preencha as matrículas dos demais membros do time</p>

            <Input className="teamMates" id="teamMate1DodgeballId" placeholder="Matrícula do Membro de Time 1" onChange={handler} />
            <Input className="teamMates" id="teamMate2DodgeballId" placeholder="Matrícula do Membro de Time 2" onChange={handler} />
            <Input className="teamMates" id="teamMate3DodgeballId" placeholder="Matrícula do Membro de Time 3" onChange={handler} />
            <Input className="teamMates" id="teamMate4DodgeballId" placeholder="Matrícula do Membro de Time 4" onChange={handler} />
            <Input className="teamMates" id="teamMate5DodgeballId" placeholder="Matrícula do Membro de Time 5" onChange={handler} />
            <Input className="teamMates" id="teamMate6DodgeballId" placeholder="Matrícula do Membro de Time 6" onChange={handler} />
            <Input className="teamMates" id="teamMate7DodgeballId" placeholder="Matrícula do Membro de Time 7" onChange={handler} />
            <Input className="teamMates" id="teamMate8DodgeballId" placeholder="Matrícula do Membro de Time 8" onChange={handler} />
            <Input className="teamMates" id="teamMate9DodgeballId" placeholder="Matrícula do Membro de Time 9" onChange={handler} />

        </div>
    );
};

export default Queimada;
