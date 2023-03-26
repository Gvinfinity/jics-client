import React, { useState } from "react";
import { DataContext } from "../FormMain";

import "./Atletismo.css";

const JogosEle = () => {
    let clicked = true;
    const [btnFIFA23, setFIFA23] = useState(clicked);
    // const [btnTetris, setTetris] = useState(clicked);
    const [btnJustDance, setJustDance] = useState(clicked);

    const clickFIFA23 = () => {
        setFIFA23(!btnFIFA23);
        DataContext._currentValue({
            Modalidade: "electronic",
            SubModalidade: "FIFA23",
            Valor: btnFIFA23,
        });
    };

    // const clickTetris = () => {
    //     setTetris(!btnTetris);
    //     DataContext._currentValue({
    //         Modalidade: "electronic",
    //         SubModalidade: "Tetris",
    //         Valor: btnTetris,
    //     });
    // };

    const clickJustDance = () => {
        setJustDance(!btnJustDance);
        DataContext._currentValue({
            Modalidade: "electronic",
            SubModalidade: "JustDance",
            Valor: btnJustDance,
        });
    };

    return (
        <div>
            <h1 className="header">Jogos Eletrônicos</h1>
            <div className="divider"></div>
            <div className="atletismodata">
                <div>
                    <input
                        className="checkbox-round"
                        type="checkbox"
                        name="individual"
                        value="true"
                        onClick={clickFIFA23}
                    />
                    <label className="label">FIFA23</label>
                </div>
                {/* <div>
                    <input
                        className="checkbox-round"
                        type="checkbox"
                        name="dupla"
                        value="true"
                        onClick={clickTetris}
                    />
                    <label className="label">Tetris</label>
                </div> */}
                <div>
                    <input
                        className="checkbox-round"
                        type="checkbox"
                        name="dupla"
                        value="true"
                        onClick={clickJustDance}
                    />
                    <label className="label">JustDance</label>
                </div>
            </div>
        </div>
    );
};

export default JogosEle;
