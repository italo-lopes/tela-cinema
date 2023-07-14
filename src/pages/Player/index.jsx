import React, { useEffect, useState } from 'react';
//import styles from './Player.module.css'
import Banner from 'componentes/Banner';
import Titulo from 'componentes/Titulo';

//import filmes from 'json/db.json';
import Cards from 'componentes/Cards';

import { useParams } from 'react-router-dom';
import Video from 'componentes/Video';
const Player = () => {
    const [video,setVideo] = useState([])

    const param = useParams()

    useEffect(()=>{
        fetch(
        `https://my-json-server.typicode.com/italo-lopes/banco-tela-cinema/video?id=${param.id}`
        ).then(
            res=>res.json()
        ).then(
            res=>{setVideo(...res)}
        )
    },[param.id])

    // let novoFilme = filmes.find(item => item.id === Number(param.id))
    // console.log(novoFilme)

    return (  
        <>
        <Banner imagem = "player" />
        {video? 
        <>
            <Titulo>
                <h1>{video.titulo}</h1>
            </Titulo>
            <Cards>
                <Video  {...video} />
            </Cards>
        </>
        :<h2>Erro componete de erro</h2>
        }
        </>

    );
}
 
export default  Player;