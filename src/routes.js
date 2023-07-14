import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Inicio from "pages/Inicio";
import Favorito from "pages/Favoritos";
import Player from 'pages/Player';
import NaoEncontrada from 'NaoEncontradas';
import PaginaBase from 'pages/PaginaBase';

function AppRoutes(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Inicio/>}></Route>
                    <Route path="favorito" element={<Favorito/>}></Route>
                    <Route path="player/:id" element={<Player/>}> </Route>
                    <Route path="*" element={<NaoEncontrada/>}> </Route>
                </Route>
            </Routes>    
        </BrowserRouter>
    )

}

export default AppRoutes;   