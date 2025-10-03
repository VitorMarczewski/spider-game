import type { Carta } from "../types/Carta";
//embaralharCartas(): rebe um array do tipo Carta e retorna elas embaralhadas
export default function embaralharCartas<T>(array: Carta[]): Carta[] {
  const cartas = [...array]; // copia para não alterar a original

  for (let i = cartas.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[random]] = [cartas[random], cartas[i]];
  }
  
  return cartas;
}