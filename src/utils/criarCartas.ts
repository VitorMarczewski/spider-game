import embaralharCartas from "./embaralharCartas";
import type { Carta } from "../types/Carta";
//criarCartas() : gera um array de objetos do tipo Carta com o total de 8 baralhos com 13 cartas 
 function criarCartas() {

    const cartas: Carta[] = [];

    for (let i = 0; i < 8; i++) {
        for (let valor = 0; valor < 13; valor++) {
            cartas.push(
                {
                    id: gerarIdUnico(),
                    numero: valor + 1,
                    estaVirada: false,
                    estaSelecionada: false
                }

            );
        }
    }

    const cartasEmbaralhadas = embaralharCartas(cartas);
    return cartasEmbaralhadas;
}


function gerarIdUnico(): string { // ✅ string minúsculo
    return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

export  {gerarIdUnico,criarCartas};

