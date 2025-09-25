import styles from './Tableau.module.css';
import Carta from './Carta';

interface Carta{
    id: string;
    numero: number;
    estaVirada: boolean;
}

interface TableauProps{
    tableau: Carta[];
}

export default function Tableau({tableau}: TableauProps){
    const pilhas : Carta[][] = [];
    let cartaIndex = 0;

    for(let i = 0; i< 10; i++){
        let tamanhoPilha = i < 4 ? 6 : 5; 
        const pilha = tableau.slice(cartaIndex, cartaIndex + tamanhoPilha).map(carta => ({...carta}))

        if(pilha.length > 0){
            pilha[pilha.length -1].estaVirada = true;
        }

        pilhas.push(pilha);

        cartaIndex+= tamanhoPilha;
    }
    
    function handleCartaClick(carta: Carta, pilha: number, indexCarta: number){
        let pilhaAtual : Carta[] = pilhas[pilha];

        
            let ultimaCartaSequencia = pilhaAtual[indexCarta];
            for(let i = indexCarta; i < pilhaAtual.length -1; i++ ){
                
                if(pilhaAtual[i].numero - pilhaAtual[i +1].numero != 1){

                    console.log("sequencia acabou aqui")
                }
            }
            if(ultimaCartaSequencia){
                
            }
            
        
        
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
                            key={carta.id}
                            carta= {carta}
                            style={{marginTop: i === 0 ? 0: -370 }}
                            onCartaClick ={()=> handleCartaClick(carta,pilhaIndex,i)}
                        />
                ))}
            </div>
        ))}
        </div>
    )
}

