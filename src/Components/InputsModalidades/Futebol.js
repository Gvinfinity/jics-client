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

            <h2 className="subdiv">Time Titular</h2>

            <Input className="teamMates" id="teamMateSoccer1Id" placeholder="Matrícula do Membro de Time 1" onChange={handler} />
            <Input className="teamMates" id="teamMateSoccer2Id" placeholder="Matrícula do Membro de Time 2" onChange={handler} />
            <Input className="teamMates" id="teamMateSoccer3Id" placeholder="Matrícula do Membro de Time 3" onChange={handler} />
            <Input className="teamMates" id="teamMateSoccer4Id" placeholder="Matrícula do Membro de Time 4" onChange={handler} />
            
            <h2 className="subdiv">Time Reserva</h2>
            <Input className="teamReserves" id="teamReserveSoccer1" placeholder="Matrícula do Reserva de Time 1" onChange={handler} />
            <Input className="teamReserves" id="teamReserveSoccer2" placeholder="Matrícula do Reserva de Time 2" onChange={handler} />
            <Input className="teamReserves" id="teamReserveSoccer3" placeholder="Matrícula do Reserva de Time 3" onChange={handler} />
            <Input className="teamReserves" id="teamReserveSoccer4" placeholder="Matrícula do Reserva de Time 4" onChange={handler} />
            <Input className="teamReserves" id="teamReserveSoccer5" placeholder="Matrícula do Reserva de Time 5" onChange={handler} />
        </div>
    );
};

export default Futebol;
