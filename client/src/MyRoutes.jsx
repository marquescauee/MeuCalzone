import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './pages/site/Home';
import Localizacao from "./pages/site/Localizacao";
import LoginCadastro from "./pages/site/LoginCadastro";
import Pedido from "./pages/site/Pedido";
import MeusPedidos from "./pages/site/MeusPedidos";
import Admin from "./pages/admin/Admin";
import AdminClientes from "./pages/admin/AdminClientes";
import AdminProduto from "./pages/admin/AdminProdutos";
import AdminTipos from "./pages/admin/AdminTipos";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/"></Route>
                <Route element={<Home />} path="/home"></Route>
                <Route element={<Localizacao />} path="/localizacao"></Route>

                <Route element={<LoginCadastro />} path="/loginCadastro"></Route>

                <Route element={<Pedido />} path="/pedido"></Route>
                <Route element={<MeusPedidos />} path="/meusPedidos"></Route>

                <Route element={<Admin />} path="/admin"></Route>
                <Route element={<AdminClientes />} path="/admin/clientes"></Route>
                <Route element={<AdminProduto />} path="/admin/produtos"></Route>
                <Route element={<AdminTipos />} path="/admin/tipos"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes