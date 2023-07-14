import React from 'react';
import styles from './Cabecalho.module.css'
import logo from './logo.png'
import { Link } from 'react-router-dom';
import CabecalhoLink from 'componentes/CabecalhoLink';


const Cabecalho = () => {

    return ( 
        <header className={styles.cabecalho}>    
            <Link to = {'./'}>  
                <img className = {styles.cabecalho__img}src={logo}  alt = "texto"/>
            </Link>
            <nav className={styles.cabecalho__nav} >
                <CabecalhoLink path = '/'>
                    Home 
                </CabecalhoLink>
                <CabecalhoLink path = '/favorito'>
                    Favorito
                </CabecalhoLink>
            </nav>
         </header>
     ); 
}
export default Cabecalho;


// o children pode ser passada varios para link ou ate outros componentes