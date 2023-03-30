import { useContext } from "react";
import jogos from "../Context/Jogos";

const Jogos = () => {
    const context = useContext(jogos);

    return context;
};

export default Jogos;
