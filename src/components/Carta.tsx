import styles from "./Carta.module.css";
import { useEffect, useState } from "react";

import Verso from "./../assets/cartas/verso.jpg";
import Carta1 from './../assets/cartas/1.jpg';
import Carta2 from './../assets/cartas/2.jpg';
import Carta3 from './../assets/cartas/3.jpg';
import Carta4 from './../assets/cartas/4.jpg';
import Carta5 from './../assets/cartas/5.jpg';
import Carta6 from './../assets/cartas/6.jpg';
import Carta7 from './../assets/cartas/7.jpg';
import Carta8 from './../assets/cartas/8.jpg';
import Carta9 from './../assets/cartas/9.jpg';
import Carta10 from './../assets/cartas/10.jpg';
import Carta11 from './../assets/cartas/11.jpg';
import Carta12 from './../assets/cartas/12.jpg';
import Carta13 from './../assets/cartas/13.jpg';

import type { Carta } from "../types/Carta";

// Array com todas as cartas
const imagens = [Carta1, Carta2, Carta3, Carta4, Carta5, Carta6, Carta7, Carta8, Carta9, Carta10, Carta11, Carta12, Carta13,];


interface CartaProps {
    style?: React.CSSProperties; // permite passar style
    carta: Carta;
    onCartaClick?: () => void;
    

}

export default function Carta({ style, carta, onCartaClick}: CartaProps) {
    
   

    function handleSubmit() {
        if (onCartaClick) {
            onCartaClick();
        }

    }

    return (
        <div className={`${styles.carta_container} ${carta.estaSelecionada ? styles.selecionada : ""}`} style={style} >
            {/*@ts-ignore */}
            <img className={styles.carta} src={carta.estaVirada ? imagens[carta.numero - 1] : Verso} alt="carta" onClick={carta.estaVirada ? (() => (handleSubmit())) : null} />
        </div>
    )
}