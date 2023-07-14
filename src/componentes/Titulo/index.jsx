import React from 'react';
import style from './Titulo.module.css'

// sempre q for texto usar children
const Titulo = ({children}) => {
    return ( 
        <div className={style.texto}>
            {children}
        </div>
     );
}
 
export default Titulo;