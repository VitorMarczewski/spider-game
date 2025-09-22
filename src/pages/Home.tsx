import styles from './Home.module.css';

import criarCartas from '../utils/criarCartas';
import Tableau from '../components/Tableau';
import Stock from '../components/Stock';

export default function Home(){
    const cartas = criarCartas();
    const tableau = cartas.slice(0,54);
    const stock = cartas;

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


