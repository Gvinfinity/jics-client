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

    const handlerQuarteto = (event) => {
        
        DataContext._currentValue({
            Modalidade: "volley",
            SubModalidade: event.target.id.replace("Volley", ""),
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
                        id="volleyDoubles"
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
                        id="volleyTeams"
                        type="checkbox"
                        name="quarteto"
                        value="true"
                        onClick={clickquarteto}
                    />
                    <label className="label">Quarteto</label>
                </div>
            </div>
            {nomedadupla && (
                <div>
                    <h2 className="subdiv">Dupla</h2>


                    <Input
                        id="pairIdVolley"
                        onChange={handlerInputDupla}
                        placeholder={"Matricula da dupla"}
                    />
                </div>
            )}
            {nomedaquarteto && (
                <div>
                    <h2 className="subdiv">Quarteto</h2>
                    <p>Preencha as matrículas dos demais membros do time</p>

                    <Input className="teamName" id="teamNameVolley" placeholder="Nome da Equipe" onChange={handlerQuarteto}/>

                    <Input className="teamMates" id="teamMate1VolleyId" placeholder="Matrícula do Membro de Time 1" onChange={handlerQuarteto} />
                    <Input className="teamMates" id="teamMate2VolleyId" placeholder="Matrícula do Membro de Time 2" onChange={handlerQuarteto} />
                    <Input className="teamMates" id="teamMate3VolleyId" placeholder="Matrícula do Membro de Time 3" onChange={handlerQuarteto} />
                </div>
                
            )}
        </div>
    );
};

export default Volei;
