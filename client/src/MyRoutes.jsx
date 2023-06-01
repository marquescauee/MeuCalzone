import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './pages/Home';
import Localizacao from "./pages/Localizacao";
import LoginCadastro from "./pages/LoginCadastro";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/"></Route>
                <Route element={<Home />} path="/home"></Route>
                <Route element={<Localizacao />} path="/localizacao"></Route>
                <Route element={<LoginCadastro />} path="/loginCadastro"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes