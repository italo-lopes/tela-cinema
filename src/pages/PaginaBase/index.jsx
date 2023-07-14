import React from 'react';
import Cabecalho from 'componentes/Cabecalho';
import Container from 'componentes/Container';
import { Outlet } from 'react-router-dom';
import Rodape from '../../componentes/Rodape'
import {FavoritoProvider} from '../../contextos/Favoritos';

function PaginaBase(){
    return (
        <main>
         <Cabecalho/>
         <FavoritoProvider>
            <Container>
                <Outlet/>
            </Container>
         </FavoritoProvider>
          <Rodape/>
        </main>   
    )
}

export default PaginaBase;