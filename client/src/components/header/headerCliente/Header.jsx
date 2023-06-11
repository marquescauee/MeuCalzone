import React from "react"
import './header.css'
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div>
            <header className="d-flex flex-wrap align-items-center py-2 mb-3 line-header">
                <nav className="w-75 m-auto d-flex align-items-center">
                    <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none navTitle">
                        <span className="fs-4 text-light">
                            <img src="assets/calzone_logo2.png" width="80" alt="" />
                        </span>
                        <span className="navMeuCalzone">Meu Calzone :)</span>
                    </Link>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={"/"}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to={"/localizacao"}>Localização</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light bg-warning text-dark noHover" to={"/loginCadastro"}>Login/Cadastro</Link>

                            {/* {
                                autCtx.user.nome &&
                                 <div className="dropdown">
                                    <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Olá, {autCtx.user.nome}!
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link to={"/"} onClick={sair} className="dropdown-item">Sair</Link>
                                    </div>
                                </div>
                            } */}

                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header



