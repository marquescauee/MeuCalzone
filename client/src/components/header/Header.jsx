import React from "react"
import './header.css'
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div>
            <header className="d-flex flex-wrap align-items-center py-2 mb-3 line-header">
                <nav className="w-75 m-auto d-flex align-items-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none navTitle">
                        <span className="fs-4 text-light">
                            <img src="assets/calzone_logo2.png" width="80" alt="" />
                        </span>
                        <span className="navMeuCalzone">Meu Calzone :)</span>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={"/"}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to={"/localizacao"}>Localização</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light bg-warning text-dark noHover" to={"/loginCadastro"}>Login/Cadastro</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header



