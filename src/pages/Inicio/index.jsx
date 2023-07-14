import React from 'react';
//import styles from './Inicio.module.css';
import Banner from '../../componentes/Banner';
import Titulo from 'componentes/Titulo';
import Card from 'componentes/Card';    
import Container from 'componentes/Container';  
import Cards from 'componentes/Cards';   
import filmes from 'json/db.json';
import { memo } from "react";
// import { useEffect, useState } from 'react'; - virou contex

const Inicio = () => {


    return ( 
        <>
        
            <Banner imagem={"home"}/>
            <Container>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Cards>
            {filmes.map(item => (
                            <Card
                             key = {item.id}
                            {...item}
                            />          
            ))}
            </Cards>
            </Container>
        </>
     );
}
 
export default memo(Inicio);