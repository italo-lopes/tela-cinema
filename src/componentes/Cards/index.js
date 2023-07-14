import React from 'react';
import styles from './Cards.module.css'


const Cards = ({children}) => {
    return ( 
        <section className = {styles.cards}>
                {children}
        </section>
     );
}
 
export default Cards;