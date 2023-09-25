import Inicio from "pages/Inicio";
import Favoritos from "pages/Inicio/Favoritos";
import NaoEncontrada from "pages/Inicio/NaoEncontrada";
import PaginaBase from "pages/Inicio/PaginaBase";
import Player from "pages/Inicio/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes(){
    return(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<PaginaBase/>}>
            <Route index element={<Inicio/>}/>
            <Route path="Favoritos" element={<Favoritos/>}/>
            <Route path=":id" element={<Player/>}/>
            <Route path="*" element={<NaoEncontrada/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}