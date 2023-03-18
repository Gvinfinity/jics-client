import React from 'react';
import Input from '../Input';
import './Queimada.css';
import { DataContext } from '../FormMain';

const Queimada = () => {
    const handler = (event) => {
        DataContext._currentValue({
            Modalidade: 'Queimada',
            SubModalidade: 'NomeDaEquipe',
            Valor: event.target.value,
        });
    };

    return (
        <div>
            <h1 className="header">Queimada</h1>
            <div class="divider"></div>
            <Input placeholder="Nome da Equipe" onChange={handler} />
        </div>
    );
};

export default Queimada;
