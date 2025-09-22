export default function embaralharCartas<T>(array: T[]): T[] {
  const cartas = [...array]; // copia para não alterar a original

  for (let i = cartas.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[random]] = [cartas[random], cartas[i]];
  }
  
  return cartas;
}