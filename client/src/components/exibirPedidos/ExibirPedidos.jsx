import './exibirPedidos.css'

const ExibirPedidos = () => {
    return (
        <div className='divMargin'>
            <div className="d-flex justify-content-center text-light mainDiv">
                <h2>Pedidos Realizados:</h2>
            </div>
            <div id="tabela-preco" className="d-flex justify-content-center align-items-center">
                <table className="table table-bordered table-striped w-75 table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Pedido</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Tesoura + Máquina</th>
                            <td>R$35,00</td>
                        </tr>
                        <tr>
                            <th scope="row">Degradê navalhado</th>
                            <td>R$35,00</td>
                        </tr>
                        <tr>
                            <th scope="row">Luzes</th>
                            <td>R$40,00</td>
                        </tr>
                        <tr>
                            <th scope="row">Progressiva</th>
                            <td>R$60,00</td>
                        </tr>
                        <tr>
                            <th scope="row">Barba</th>
                            <td>R$25,00</td>
                        </tr>
                        <tr>
                            <th scope="row">Cabelo + Barba</th>
                            <td>R$50,00</td>
                        </tr>
                        <tr>
                            <th scope="row">Sobrancelha</th>
                            <td>R$15,00</td>
                        </tr>
                        <tr>
                            <th scope="row">Limpeza de pele (Máscara)</th>
                            <td>R$25,00</td>
                        </tr>
                        <tr>
                            <th scope="row">Hidratação</th>
                            <td>R$20,00</td>
                        </tr>
                        <tr>
                            <th scope="row">Coloração</th>
                            <td>R$25,00</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ExibirPedidos