import { useState } from "react"
import styles from './Stock.module.css'
import Carta from "./Carta";
interface stockProps{
    stock : number[]
}

export default function Stock({stock} :stockProps){
    const pilhas: number[][] = [];
    let start = 0;
    for(let i = 0; i < 4; i++){
        pilhas.push(stock.slice(start, start+10))
        start+=10
    }
    console.log(pilhas)
    return (
        <div className={styles.stock_container}>
            {pilhas.map((pilha,i)=>(
                <div className={styles.carta_stock}>
                    <Carta estaVirada ={false} numero={-1} style={{ zIndex: pilha.length - i }}/>
                </div>
            ))}
        </div>
    )   
}