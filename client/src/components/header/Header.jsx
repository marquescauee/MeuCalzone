import React from "react"
import './header.css'

const Header = () => {
    return (
        <div>
            <header className="d-flex flex-wrap align-items-center py-2 mb-3 line-header">
                <nav className="w-75 m-auto d-flex align-items-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none navTitle">
                        <span className="fs-4 text-light">
                            <img src="assets/calzone_logo2.png" width="80" alt=""/>
                        </span>
                        <span className="navMeuCalzone">Meu Calzone</span>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="index.html" className="nav-link text-light"
                            aria-current="page">Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="localizacao.html" className="nav-link text-light">Localização
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="contato.html" className="nav-link text-dark bg-warning">Login/Cadastro
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
