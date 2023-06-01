import './card.css'

const Card = () => {
    return (
        <div className="d-flex justify-content-evenly container-card ">
            <div className="card">
                <img src="assets/garcom.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Temos os melhores profissionais da região e possuímos um ótimo controle de qualidade em nosso atendimento visando o bem-estar do cliente.</p>
                    </div>
            </div>

            <div className="card">
                <img src="assets/restaurante.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Em nosso restaurante, o que você consome acumula pontos que podem ser trocado por mais produtos!</p>
                    </div>
            </div>

            <div className="card">
                <img src="assets/calzones_multi.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Possuímos uma lista extensa de calzones do mais variados tipos. Você vai se surpreender!</p>
                    </div>
            </div>
        </div>
    )
}

export default Card