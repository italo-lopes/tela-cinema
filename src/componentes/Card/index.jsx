import React  from 'react';
import styles from './Card.module.css'
import favoritarIncone from './favorite.png'
import desFavoritarIncone from './favorite_outline.png'
import {useFavoritoContext} from 'contextos/Favoritos'
import { memo } from "react";
import { useEffect} from 'react';
import { Link } from 'react-router-dom';

const Card = ({id,titulo,capa}) => {

      const {adicionarFIlme,favorito} = useFavoritoContext()

   


    useEffect(()=>{
        console.table(favorito)
  },[favorito])

    const incone = favorito.find(item=>item.id === id)?
                    favoritarIncone:
                    desFavoritarIncone  
    return ( 
        <div className={styles.container} >
             <Link className={styles.link}    to={`../player/${id}`}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            </Link>
            <img    
                src={incone}
                alt="Favorito filme"
                className={styles.favoritar}
                onClick={()=>  adicionarFIlme({id,titulo,capa})}
            />
        </div>
     );
}
 
export default memo(Card);  