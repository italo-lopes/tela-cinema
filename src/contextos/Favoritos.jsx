import React from 'react';
import { useState } from 'react';
import { createContext,useContext } from 'react';

export const FavoritoContext = createContext();
FavoritoContext.displayName ="Favorito";

export const FavoritoProvider=({children})=>{
    const [favorito,setFavorito] = useState([])
    return(
        <FavoritoContext.Provider 
        value = {{favorito,setFavorito}}>
            {children}
        </FavoritoContext.Provider> 
   )
}

export const useFavoritoContext = ()=>{
    const {favorito,setFavorito} = useContext(FavoritoContext)
        
    const adicionarFIlme = (favObj)=>{    
        console.log(favObj)
        // const temFilme = filmes.find(item=>item.id === id)
          let verificacao =   favorito.filter(item=>item.id === favObj.id)
           // const favoritoRepitodo = favorito.some(item=>item.id === favObj.id)
            // retornar um booleano
          const novo = [...favorito]    
          novo.push(favObj)

           verificacao.length === 0
           ?  (setFavorito(novo))
           :  (setFavorito(antigo => antigo.filter(item=>item.id !== favObj.id)))     



    return ''
    }


    return({
        favorito,
        setFavorito,
        adicionarFIlme
    })
}