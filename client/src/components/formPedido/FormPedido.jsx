import { useNavigate } from 'react-router-dom'
import './formPedido.css'

const FormPedido = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        //TODO
        navigate("/meusPedidos")
    }


    return (
        <div className='mb-5'>
            <div className="row justify-content-center d-flex">
                <div className="col-md-8">
                    <div className="card mt-5">
                        <div className="cabeca-card mt-5 display-5">Faça seu pedido!</div>

                        <div className="card-body">
                            <form method="POST" action="">
                                <div className="row mb-5 d-block">
                                    <label for="calzone"
                                        className="lb-login col-md-4 col-form-label">Escolha uma opção de calzone:</label>
                                    <div className="col-md-10 d-block m-auto">
                                        <select className="form-select" name="calzone" id="calzone">
                                            <option value="Calabresa">Calabresa</option>
                                            <option value="Queijo">Queijo</option>
                                            <option value="Frango">Frango</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-5 d-block">
                                    <label for="batata"
                                        className="lb-login col-md-4 col-form-label">Escolha uma opção de bata:</label>
                                    <div className="col-md-10 d-block m-auto">
                                        <select className="form-select" name="batata" id="batata">
                                            <option value="none">Não quero batata</option>
                                            <option value="p">Pequena</option>
                                            <option value="m">Média</option>
                                            <option value="g">Grande</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-5 d-block">
                                    <label for="bebida"
                                        className="lb-login col-md-4 col-form-label">Escolha uma opção de bebida:</label>
                                    <div className="col-md-10 d-block m-auto">
                                        <select className="form-select" name="bebida" id="bebida">
                                            <option value="none">Não quero bebida</option>
                                            <option value="refri">Refrigerante</option>
                                            <option value="suco">Suco de laranja</option>
                                            <option value="agua">Água mineral sem gás</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="d-flex w-75 justify-content-center m-auto">
                                    <div class="form-check w-100 balcao">
                                        <input class="form-check-input" type="radio" name="opcaoEntrega" id="balcao" />
                                        <label class="form-check-label" for="balcao">
                                            Balcão
                                        </label>
                                    </div>
                                    <div class="form-check w-100">
                                        <input class="form-check-input" type="radio" name="opcaoEntrega" id="delivery" checked />
                                        <label class="form-check-label" for="delivery">
                                            Delivery
                                        </label>
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    <button onClick={handleSubmit} type="submit" className="m-auto w-50 my-4 d-block p-2 botaoEntrar">
                                        Fazer Pedido
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="row justify-content-center endereco">
                        <div className="col-md-1">
                            <div className="card mt-5">
                                <div className="cabeca-card mt-5 display-5">Seu endereço</div>
                                <div className="card-body">
                                    <h6 className='text-start mt-2'>Caso você tenha selecionado a opção delivery, o pedido será entregue neste endereço:</h6>
                                </div>
                                <div>
                                    <p className='h4 mt-5 mb-5'>Rua Lorem ipsum dolor sit amet, 1500, Bairro, Cidade, Cep</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPedido