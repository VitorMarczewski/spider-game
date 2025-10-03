
import styles from './Stock.module.css'
import Carta from "./Carta";

interface Carta{
    id: string;
    numero: number;
    estaVirada: boolean;
}
interface stockProps{
    stock : Carta[]
}

export default function Stock({stock} :stockProps){
    const pilhas: Carta[][] = [];
    let start = 0;
    for(let i = 0; i < 4; i++){
        let pilha = stock.slice(start,start+10).map((carta)=>({...carta}));
        
        pilhas.push(pilha);
        start+=10
    }
    return (
        <div className={styles.stock_container}>
           <p>stock</p>
        </div>
    )   
}