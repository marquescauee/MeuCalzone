import React from "react";
import Home from './pages/site/Home'
import Localizacao from './pages/site/Localizacao'
import LoginCadastro from './pages/site/LoginCadastro'
import Pedido from './pages/site/Pedido'
import MeusPedidos from './pages/site/MeusPedidos'
import Admin from './pages/admin/Admin'
import AdminClientes from './pages/admin/AdminClientes'
import AdminProdutos from './pages/admin/AdminProdutos'
import AdminTipos from './pages/admin/AdminTipos'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditCliente from "./components/modalCliente/EditCliente";
import EditProduto from "./components/modalProduto/EditProduto";
import EditTipoProduto from "./components/modalTipos/EditTipoProduto";

const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/"></Route>
                    <Route element={<Home />} path="/index"></Route>
                    <Route element={<Home />} path="/home"></Route>
                    <Route element={<Localizacao />} path="/localizacao"></Route>
                    <Route element={<LoginCadastro />} path="/loginCadastro"></Route>

                    <Route element={<Pedido />} path="/pedido"></Route>
                    <Route element={<MeusPedidos />} path="/meusPedidos"></Route>
                    <Route element={<Admin />} path="/admin"></Route>
                    <Route element={<AdminClientes />} path="/admin/clientes"></Route>
                    <Route element={<AdminProdutos />} path="/admin/produtos"></Route>
                    <Route element={<AdminTipos />} path="/admin/tipos"></Route>

                    <Route element={<EditCliente />} path="/clientes/edit/:id"></Route>
                    <Route element={<EditProduto />} path="/produtos/edit/:id"></Route>
                    <Route element={<EditTipoProduto />} path="/tipos/edit/:id"></Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes