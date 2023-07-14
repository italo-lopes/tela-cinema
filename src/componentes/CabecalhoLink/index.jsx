import React from 'react';
import styles from './CabecalhoLink.module.css'
import { NavLink } from 'react-router-dom';

const CabecalhoLink = ({path,children}) => {
    return ( 
        <NavLink className={({isActive})=> `${styles.link}  ${isActive? styles.ativo : ''}` } to={path} end>
            {children}
        </NavLink>
     );
}
 
export default CabecalhoLink;

/* 
<NavLink >
            
</NavLink> 

<Link to={path}>
    {children}
</Link>

*/