import type { Carta as typeCarta } from "../types/Carta";
import type { Pilha as typePilha } from "../types/Pilha"

import type { EstadoGame } from "../types/EstadoGame";
import Carta from "./Carta";
import { useEffect, useState } from "react";
import styles from './Pilha.module.css';

interface PilhaProps {
    pilhaObj: typePilha;
    estadoGame: EstadoGame;
    setEstadoGame: React.Dispatch<React.SetStateAction<EstadoGame>>;
    sequencia?: typeCarta[];
    setSequencia: (sequencia: typeCarta[]) => void;
    setIdPilhaSequencia: (id: string | undefined) => void;
    idPilhaSequencia?: string;
}

export default function Pilha({ pilhaObj, estadoGame, setEstadoGame, sequencia, setSequencia, setIdPilhaSequencia, idPilhaSequencia }: PilhaProps) {
    const [pilha, setPilha] = useState<typePilha>(pilhaObj);

    useEffect(() => {
        if (sequencia) {
            sequencia.forEach(carta => console.log(carta))
        }
        if (sequencia && pilha.id === idPilhaSequencia && estadoGame === "moverSequencia") {

            excluirSequencia(sequencia);
        }
    }, [sequencia, idPilhaSequencia, estadoGame])



    function selecionarSequencia(carta: typeCarta, indexCarta: number) {

        let sequencia: typeCarta[] = [];
        let sequenciaValida: boolean = true;

        for (let i = indexCarta; i < pilha.cartas.length; i++) {
            let cartaAtual: typeCarta = pilha.cartas[i];
            let prox: typeCarta = pilha.cartas[i + 1];

            sequencia.push(cartaAtual);
            if (!prox) {

                break;
            }
            else if (cartaAtual.numero - prox.numero == 1) {
                //CARTA DA SEQUENCIA É VALIDA
                sequencia.push(prox);
                cartaAtual = prox;
            }
            else if (cartaAtual.numero - prox.numero != 1) {
                sequenciaValida = false;
                
                break;
            }

        }
        if (sequenciaValida) {
            setPilha(prevPilha => prevPilha ? {
                ...prevPilha,
                cartas: prevPilha.cartas.map(carta =>
                    sequencia.some(cartaSequencia => cartaSequencia.id === carta.id)
                        ? { ...carta, estaSelecionada: true }
                        : carta
                )
            } : prevPilha);

            setSequencia(sequencia);
            setIdPilhaSequencia(pilha.id)
            setEstadoGame("movendo");
        } else {
            setSequencia([]);
            setEstadoGame("selecionando");
            setIdPilhaSequencia(undefined);
            alert('sequencia invalida')
        }


    }
    function moverSequencia(sequencia: typeCarta[], cartaSelecionada: typeCarta) {

        if (cartaSelecionada.numero - sequencia[0].numero === 1) {
            setPilha(prevPilha => prevPilha ? {
                ...prevPilha,
                cartas: [...prevPilha.cartas, ...sequencia]
            } : prevPilha);
            setEstadoGame("moverSequencia")
        } else {
            setIdPilhaSequencia(undefined);
            setSequencia([]);
            setEstadoGame("selecionando")
            alert('movimento inválido');
        }
    }

    function excluirSequencia(sequencia: typeCarta[]) {

        setPilha(prevPilha => {
            let novasCartas = prevPilha.cartas.filter(
                carta => !sequencia.some(remover => remover.id === carta.id)
            );

            if (novasCartas.length > 0) {
                novasCartas = novasCartas.map((carta, i) =>
                    i === novasCartas.length - 1
                        ? { ...carta, estaVirada: true }
                        : carta
                );
            }

            return { ...prevPilha, cartas: novasCartas };
        });



        setIdPilhaSequencia(undefined);
        setSequencia([]);
        setEstadoGame("selecionando")

    }

    useEffect(() => {

    }, [pilha])
    return (
        <div className={styles.pilha}>
            {pilha.cartas.map((carta, i) => (
                <div key={i}>
                    <Carta
                        key={carta.id}
                        carta={carta}
                        style={{ marginTop: i === 0 ? 0 : -370 }}
                        onCartaClick={sequencia && sequencia.length > 0 ? () => moverSequencia(sequencia, carta) : () => selecionarSequencia(carta, i)}
                    />
                </div>
            ))}
        </div>

    )
}