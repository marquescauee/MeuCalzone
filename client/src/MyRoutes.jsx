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

import { useAutCtx } from "./context/AuthContext";

const PrivateCliente = ({ Item }) => {
    const { signed } = useAutCtx()
    
    return (signed > 0 ) ? <Item /> : <LoginCadastro />
}

const PrivateAdmin = ({Item}) => {
    const {signed} = useAutCtx()
    const { tipo } = useAutCtx()
    
    return (signed > 0 && tipo === 'a') ? <Item /> : (signed > 0 ? <Home /> : <LoginCadastro />)
}


const MyRoutes = () => {

    const {signed} = useAutCtx()
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/"></Route>
                    <Route element={<Home />} path="/index"></Route>
                    <Route element={<Home />} path="/home"></Route>
                    <Route element={<Localizacao />} path="/localizacao"></Route>
                    {
                         !signed &&
                        <Route element={<LoginCadastro />} path="/loginCadastro"></Route>
                    }

                    <Route element={<PrivateCliente Item={Pedido} />} path="/pedido"></Route>
                    <Route element={<PrivateCliente Item={MeusPedidos} />} path="/meusPedidos"></Route>

                    <Route element={<PrivateAdmin Item={Admin} />} path="/admin"></Route>
                    <Route element={<PrivateAdmin Item={AdminClientes} />} path="/admin/clientes"></Route>
                    <Route element={<PrivateAdmin Item={AdminProdutos} />} path="/admin/produtos"></Route>
                    <Route element={<PrivateAdmin Item={AdminTipos} />} path="/admin/tipos"></Route>

                    <Route element={<PrivateAdmin Item={EditCliente} />} path="/clientes/edit/:id"></Route>
                    <Route element={<PrivateAdmin Item={EditProduto} />} path="/produtos/edit/:id"></Route>
                    <Route element={<PrivateAdmin Item={EditTipoProduto} />} path="/tipos/edit/:id"></Route>

                    <Route path="*" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes