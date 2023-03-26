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

            <Input className="teamMates" id="teamMateDodgeball1Id" placeholder="Matrícula do Membro de Time 1" onChange={handler} />
            <Input className="teamMates" id="teamMateDodgeball2Id" placeholder="Matrícula do Membro de Time 2" onChange={handler} />
            <Input className="teamMates" id="teamMateDodgeball3Id" placeholder="Matrícula do Membro de Time 3" onChange={handler} />
            <Input className="teamMates" id="teamMateDodgeball4Id" placeholder="Matrícula do Membro de Time 4" onChange={handler} />
            <Input className="teamMates" id="teamMateDodgeball5Id" placeholder="Matrícula do Membro de Time 5" onChange={handler} />
            <Input className="teamMates" id="teamMateDodgeball6Id" placeholder="Matrícula do Membro de Time 6" onChange={handler} />
            <Input className="teamMates" id="teamMateDodgeball7Id" placeholder="Matrícula do Membro de Time 7" onChange={handler} />
            <Input className="teamMates" id="teamMateDodgeball8Id" placeholder="Matrícula do Membro de Time 8" onChange={handler} />
            <Input className="teamMates" id="teamMateDodgeball9Id" placeholder="Matrícula do Membro de Time 9" onChange={handler} />

        </div>
    );
};

export default Queimada;
