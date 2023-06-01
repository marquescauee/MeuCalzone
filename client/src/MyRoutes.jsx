import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './pages/Home';
import Localizacao from "./pages/Localizacao";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/"></Route>
                <Route element={<Home />} path="/home"></Route>
                <Route element={<Localizacao />} path="/localizacao"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes