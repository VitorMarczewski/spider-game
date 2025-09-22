import embaralharCartas from "./embaralharCartas";

export default function criarCartas(){
    const cartas = [];
    for(let i = 0; i<8; i++){
        for(let naipe = 0; naipe< 13; naipe++){
            cartas.push(naipe);
        }
    }
    
    const cartasEmbaralhadas = embaralharCartas(cartas);
    return cartasEmbaralhadas;
}