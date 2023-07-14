import React from 'react';
//import  styles from './Favorito.module.css';
import Container from 'componentes/Container'; 
import Banner from 'componentes/Banner';
import Titulo from 'componentes/Titulo';
import Card from 'componentes/Card';
import Cards from 'componentes/Cards';
//import filmes from 'json/db.json';
import {useFavoritoContext} from 'contextos/Favoritos'

const Favorito = () => {
    const {favorito}= useFavoritoContext()

    return ( 
            <>
                    <Banner imagem={"favoritos"}/>
                    <Container>
                    <Titulo>
                        <h1>Meus Favoritos</h1>
                    </Titulo>
                    <Cards>
                            {favorito.map(item => (
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
 
export default Favorito;