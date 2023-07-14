import React from 'react';
//import styles from './Player.module.css'
import Banner from 'componentes/Banner';
import Titulo from 'componentes/Titulo';

import filmes from 'json/db.json';
import Cards from 'componentes/Cards';

import { useParams } from 'react-router-dom';
import Video from 'componentes/Video';
const Player = () => {
    const param = useParams()
    let novoFilme = filmes.find(item => item.id === Number(param.id))
    console.log(novoFilme)

    return (  
        <>
        <Banner imagem = "player" />
        {novoFilme? 
        <>
            <Titulo>
                <h1>{novoFilme.titulo}</h1>
            </Titulo>
            <Cards>
                <Video  {...novoFilme} />
            </Cards>
        </>
        :<h2>Erro componete de erro</h2>
        }
        </>

    );
}
 
export default  Player;