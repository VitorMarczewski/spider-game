import styles from './Tableau.module.css';
import Carta from './Carta';

interface TableauProps{
    tableau: number[];
}

export default function Tableau({tableau}: TableauProps){
    const pilhas : number[][] = []
    let cartaIndex = 0;

    for(let i = 0; i< 10; i++){
        let numCartas= i < 4 ? 6 : 5;
        pilhas.push(tableau.slice(cartaIndex, cartaIndex + numCartas))
        cartaIndex += numCartas;
    }

    
    return(
        //CONTAINER
        <div className={styles.tableau_container}>

            {/* MAP DAS PILHAS */}
            {pilhas.map((pilha, pilhaIndex) => (
                //PARA CADA PILHA VAI CRIAR UMA PILHA
                <div className={styles.tableau_pilha} key={pilhaIndex}>
                    {/*MAP DE CADA PILHA*/}
                    {pilha.map((carta, i) => (
                        
                        //RENDERIZA UMA CARTA
                        <Carta
                            key={i}
                            numero={carta +1}
                            style={{marginTop: i === 0 ? 0: -370 }}
                            estaVirada={i === pilha.length -1}
                        />
                ))}
            </div>
        ))}
        </div>
    )
}

