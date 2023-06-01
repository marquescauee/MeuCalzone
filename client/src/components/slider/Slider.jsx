import React from "react"
import './slider.css'

const Slider = () => {
    return (
        <div className="container" id="slide-container">
            <div className="carousel slide shadow pr-1 mt-5 bg-black rounded" id="slider" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        className="active"
                        data-bs-target="#slider"
                        data-bs-slide-to="0"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>

                    <button
                        type="button"
                        data-bs-target="#slider"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>

                    <button
                        type="button"
                        data-bs-target="#slider"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="assets/calzone_1.jpg" className="d-block w-100" alt="calzone 1" />
                        <div className="carousel-caption">
                            <h2>Que tal conhecer um sabor novo?</h2>
                            <p>Venha experimentar nossos calzones!</p>
                            <a href="localizacao.html" className="btn btn-dark">Ver localização</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="assets/calzone_2.jpg" className="d-block w-100" alt="calzone 2" />
                        <div className="carousel-caption">
                            <h2>Massa caseira</h2>
                            <p>Nós mesmos fabricamos nossos produtos. Nada aqui é artificial!</p>
                            <a href="contato.html" className="btn btn-dark">Entre em contato</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="assets/calzone_3.jpg" className="d-block w-100" alt="calzone 3" />
                        <div className="carousel-caption">
                            <h2>Ingredientes Frescos</h2>
                            <p>Todos os nossos ingredientes são de altíssima qualidade</p>
                            <a href="localizacao.html" className="btn btn-dark">Ver Localização</a>
                        </div>
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#slider"
                    data-bs-slide="prev"
                >
                    <i className="bi bi-chevron-compact-left arrow"></i>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#slider"
                    data-bs-slide="next"
                >
                    <i className="bi bi-chevron-compact-right arrow"></i>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider