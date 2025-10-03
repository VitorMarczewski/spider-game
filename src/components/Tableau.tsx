import styles from './Tableau.module.css';

import Pilha from './Pilha';
import { useEffect, useState } from 'react';

import { gerarIdUnico } from '../utils/criarCartas';

import type { Carta as typeCarta } from '../types/Carta';
import type { Pilha as typePilha } from '../types/Pilha';
import type { Tableau as typeTableau } from '../types/Tableau';

import type { EstadoGame } from '../types/EstadoGame';
interface TableauProps {
    tableau: typeCarta[];
}

export default function Tableau({ tableau }: TableauProps) {
    //controle o estado atual do game
    const [estadoGame, setEstadoGame] = useState<EstadoGame>("selecionando");
    //controla as pilhas
    const [pilhas, setPilhas] = useState<typeTableau>({ pilhas: [] });
    //controla a sequencia escolhida pelo jogador
    const [sequenciaSeleciona, setSequenciaSelecionada] = useState<typeCarta[]>([]);

    const [idPilhaSequencia, setIdPilhaSequencia] = useState<string | undefined>(undefined)




    //Vai monitorar mudanças
    useEffect(() => {
        let cartaIndex = 0;
        let novasPilhas: typeTableau = {
            pilhas: []
        };
        for (let i = 0; i < 10; i++) {
            let tamanhoPilha = i < 4 ? 6 : 5;
            const pilha: typePilha = { id: gerarIdUnico(), cartas: tableau.slice(cartaIndex, cartaIndex + tamanhoPilha).map(carta => ({ ...carta })) }
            if (pilha.cartas.length > 0) {
                pilha.cartas[pilha.cartas.length - 1].estaVirada = true;
            }
            novasPilhas.pilhas.push(pilha);
            cartaIndex += tamanhoPilha;
        }

        setPilhas(novasPilhas);

    }, [tableau])


   


    return (
        //CONTAINER
        <div className={styles.tableau_container}>

            {/* MAP DAS PILHAS */}
            {pilhas.pilhas.map((pilha) => (
                //PARA CADA PILHA VAI CRIAR UMA PILHA
                <Pilha
                    key={pilha.id}
                    pilhaObj={pilha}
                    estadoGame={estadoGame}
                    setEstadoGame={setEstadoGame}
                    sequencia={sequenciaSeleciona ? sequenciaSeleciona : []}
                    setSequencia={setSequenciaSelecionada}
                    setIdPilhaSequencia={setIdPilhaSequencia}
                    idPilhaSequencia={idPilhaSequencia}
                    
                />
            ))}
        </div>
    )

}
