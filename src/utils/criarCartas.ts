import embaralharCartas from "./embaralharCartas";

export default function criarCartas(){
    
    const cartas = [];
    for(let i = 0; i<8; i++){
        for(let valor = 0; valor< 13; valor++){
            cartas.push(
                {
                    id: gerarIdUnico(),
                    numero:  valor +1,
                    estaVirada: false
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