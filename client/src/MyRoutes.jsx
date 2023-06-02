import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './pages/Home';
import Localizacao from "./pages/Localizacao";
import LoginCadastro from "./pages/LoginCadastro";
import Pedido from "./pages/Pedido";
import MeusPedidos from "./pages/MeusPedidos";
import Admin from "./pages/Admin";
import AdminClientes from "./pages/AdminClientes";
import AdminProduto from "./pages/AdminProdutos";
import AdminEditCliente from "./pages/AdminEditCliente";
import AdminEditProduto from "./pages/AdminEditProduto";

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

                <Route element={<AdminEditCliente />} path="/admin/clientes/{id}"></Route>
                <Route element={<AdminEditProduto />} path="/admin/produtos/{id}"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes