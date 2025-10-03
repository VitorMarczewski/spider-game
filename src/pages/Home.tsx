import styles from './Home.module.css';

import {criarCartas} from '../utils/criarCartas';
import Tableau from '../components/Tableau';
import Stock from '../components/Stock';

import type { Carta } from '../types/Carta';

export default function Home(){
    //total de 8 baralhos
    const cartas: Carta[] = criarCartas();
    //as primeiras 54 vão para o tableau
    const tableau: Carta[] = cartas.slice(0,54);
    //o resto das cartas vao para o stock
    const stock: Carta[] = cartas;

    return (
        <div className = {styles.home_container}>
            <div className={styles.game_container}>
                <>
                <Stock stock = {stock}/>
                <Tableau tableau={tableau}/>
                </>
            </div>
            
        </div>
    )
    
}


