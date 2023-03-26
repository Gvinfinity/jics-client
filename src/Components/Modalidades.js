/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Modalidades.css";
import Jogos from "../Context/Jogos";

const Modalidades = (props) => {
    let [stateVolei, setVolei] = useState(false);
    let [stateFutebol, setFutebol] = useState(false);
    let [stateQueimada, setQueimada] = useState(false);
    let [stateTenis, setTenis] = useState(false);
    let [stateXadrez, setXadrez] = useState(false);
    let [stateDomino, setDomino] = useState(false);
    let [stateJogosEle, setJogosEle] = useState(false);
    let [stateAtletismo, setAtletismo] = useState(false);
    // let [stateBadminton, setBadminton] = useState(false);


    const clickVolei = () => {
        setVolei(!stateVolei);
        stateVolei = !stateVolei;
        enviar();
    };

    const clickFutebol = () => {
        setFutebol(!stateFutebol);
        stateFutebol = !stateFutebol;

        enviar();
    };

    const clickQueimada = () => {
        setQueimada(!stateQueimada);
        stateQueimada = !stateQueimada;
        enviar();
    };

    const clickTenis = () => {
        setTenis(!stateTenis);
        stateTenis = !stateTenis;
        enviar();
    };

    const clickXadrez = () => {
        setXadrez(!stateXadrez);
        stateXadrez = !stateXadrez;
        enviar();
    };

    const clickDomino = () => {
        setDomino(!stateDomino);
        stateDomino = !stateDomino;
        enviar();
    };

    const clickJogosEle = () => {
        setJogosEle(!stateJogosEle);
        stateJogosEle = !stateJogosEle;
        enviar();
    };
    const clickAtletismo = () => {
        setAtletismo(!stateAtletismo);
        stateAtletismo = !stateAtletismo;
        enviar();
    };
 
    // const clickBadminton = () => {
    //     setBadminton(!stateBadminton);
    //     stateBadminton = !stateBadminton;
    //     enviar();
    // };

    const enviar = () => {
        setTimeout(() => {
            props.setar({
                volley: stateVolei,
                soccer: stateFutebol,
                dodgeball: stateQueimada,
                tableTennis: stateTenis,
                chess: stateXadrez,
                domino: stateDomino,
                electronic: stateJogosEle,
                athletics: stateAtletismo,
                // badminton: stateBadminton,
            });
        }, 200);
    };

    return (
        <Jogos.Provider value={stateVolei}>
            {props.show && (
                <ul className="list-modalidade">
                    <li className="item " onClick={clickVolei}>
                        <span className="checkbox ">
                            <i
                                className={
                                    (stateVolei && "  fa-solid fa-check ") ||
                                    "  fa-solid fa-check check-icon "
                                }
                            ></i>
                        </span>
                        <span className="itemText">Vôlei</span>
                    </li>
                    <li className="item" onClick={clickFutebol}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateFutebol && "  fa-solid fa-check ") ||
                                    "  fa-solid fa-check check-icon "
                                }
                            ></i>
                        </span>
                        <span className="itemText">Futebol</span>
                    </li>
                    <li className="item" onClick={clickQueimada}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateQueimada && "  fa-solid fa-check ") ||
                                    "  fa-solid fa-check check-icon "
                                }
                            ></i>
                        </span>
                        <span className="itemText">Queimada</span>
                    </li>
                    <li className="item" onClick={clickTenis}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateTenis && "  fa-solid fa-check ") ||
                                    "  fa-solid fa-check check-icon "
                                }
                            ></i>
                        </span>
                        <span className="itemText">Tênis de mesa</span>
                    </li>
                    <li className="item" onClick={clickXadrez}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateXadrez && "  fa-solid fa-check ") ||
                                    "  fa-solid fa-check check-icon "
                                }
                            ></i>
                        </span>
                        <span className="itemText">Xadrez</span>
                    </li>
                    <li className="item" onClick={clickDomino}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateDomino && "  fa-solid fa-check ") ||
                                    "  fa-solid fa-check check-icon "
                                }
                            ></i>
                        </span>
                        <span className="itemText">Dominó</span>
                    </li>
                    <li className="item" onClick={clickJogosEle}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateJogosEle && "  fa-solid fa-check ") ||
                                    "  fa-solid fa-check check-icon "
                                }
                            ></i>
                        </span>
                        <span className="itemText">Jogos Eletrônicos</span>
                    </li>
                    <li className="item" onClick={clickAtletismo}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateAtletismo && "  fa-solid fa-check ") ||
                                    "  fa-solid fa-check check-icon "
                                }
                            ></i>
                        </span>
                        <span className="itemText">Atletismo</span>
                    </li>
                    {/* <li className="item" onClick={clickBadminton}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateBadminton && "  fa-solid fa-check ") ||
                                    "  fa-solid fa-check check-icon "
                                }
                            ></i>
                        </span>
                        <span className="itemText">Badminton</span>
                    </li> */}
                </ul>
            )}
        </Jogos.Provider>
    );
};

export default Modalidades;
