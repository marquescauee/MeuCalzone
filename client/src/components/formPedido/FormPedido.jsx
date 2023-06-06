import { useNavigate } from 'react-router-dom'
import './formPedido.css'
import { useState } from 'react'

const FormPedido = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        //TODO
        navigate("/meusPedidos")
    }

    const [calzone, setCalzone] = useState(1)
    const [quantidadeCalzone, setQuantidadeCalzone] = useState(1)
    const [calzones, setCalzones] = useState([])

    const [batata, setBatata] = useState(0)
    const [quantidadeBatata, setQuantidadeBatata] = useState(1)
    const [batatas, setBatatas] = useState([])

    const [bebida, setBebida] = useState(0)
    const [quantidadeBebida, setQuantidadeBebida] = useState(1)
    const [bebidas, setBebidas] = useState([])

    const [entrega, setEntrega] = useState('')

    const handleCalzones = (e) => {
        e.preventDefault()

        let calzoneBanco = {
            id: 1,
            tipo: 'C',
            descricao: 'calabresa',
        }

        calzoneBanco.quantidade = quantidadeCalzone

        setCalzones([...calzones, calzoneBanco])
        setQuantidadeCalzone(1)
    }

    const handleBatatas = (e) => {
        e.preventDefault()

        let batataBanco = {
            id: 1,
            tipo: 'B',
            descricao: 'Pequena',
        }

        batataBanco.quantidade = quantidadeBatata

        setBatatas([...batatas, batataBanco])
    }

    const handleBebidas = (e) => {
        e.preventDefault()

        let bebidaBanco = {
            id: 1,
            tipo: 'B',
            descricao: 'Refrigerante',
        }

        bebidaBanco.quantidade = quantidadeBebida

        setBebidas([...bebidas, bebidaBanco])
    }

    const removeCalzone = (calzone) => {
        console.log(calzones)
        let newCalzonesArray = calzones.filter(c => c.id !== calzone.id)
        setCalzones(newCalzonesArray)

    }

    const removeBatata = (batata) => {
        let newBatatasArray = batatas.filter(b => b.id !== batata.id)
        setBatatas(newBatatasArray)
    }

    const removeBebida = (bebida) => {
        let newBebidasArray = bebidas.filter(b => b.id !== bebida.id)
        setBebidas(newBebidasArray)
    }

    return (
        <div className='mb-5'>
            <div className="row justify-content-center d-flex">
                <div className="col-md-8 d-flex w-100 justify-content-evenly">
                    <div className="card mt-5">
                        <div className="cabeca-card mt-5 display-5">Faça seu pedido!</div>

                        <div className="card-body">
                            <form method="POST" action="" onSubmit={handleSubmit}>
                                <div className="row mb-1 d-block">
                                    <label htmlFor="calzone"
                                        className="lb-login col-md-4 col-form-label">Escolha uma opção de calzone:</label>
                                    <div className="col-md-10 d-block m-auto">
                                        <select className="form-select" name="calzone" id="calzone" onChange={e => setCalzone(e.target.value)}>
                                            <option value="Calabresa">Calabresa</option>
                                            <option value="Queijo">Queijo</option>
                                            <option value="Frango">Frango</option>
                                        </select>
                                    </div>
                                </div>

                                {
                                    calzone !== 0 &&

                                    <div>
                                        <label htmlFor="quantidade"
                                            className="lb-login col-form-label">Quantidade:</label>
                                        <div className='d-flex justify-content-start align-items-center gap-4'>
                                            <input type="number" min={1} className="form-control margemEsquerda w-20" id="qtdCreatePedidoCalzone" aria-describedby="qtdCreatePedido" value={quantidadeCalzone} onChange={e => setQuantidadeCalzone(e.target.value)} />

                                            <button className='border-0 bg-transparent' onClick={handleCalzones}>
                                                <img src="/assets/plus.png" width={25} height={25} className='bg-success' alt="" />
                                            </button>
                                        </div>
                                    </div>

                                }

                                <div className="row mb-1 d-block">
                                    <label htmlFor="batata"
                                        className="lb-login col-md-4 col-form-label">Escolha uma opção de batata:</label>
                                    <div className="col-md-10 d-block m-auto">
                                        <select className="form-select" name="batata" id="batata" onChange={e => setBatata(e.target.value)}>
                                            <option value="0">Não quero batata</option>
                                            <option value="p">Pequena</option>
                                            <option value="m">Média</option>
                                            <option value="g">Grande</option>
                                        </select>
                                    </div>
                                </div>

                                {
                                    batata !== 0 &&

                                    <div>
                                        <label htmlFor="quantidade"
                                            className="lb-login col-form-label">Quantidade:</label>
                                        <div className='d-flex justify-content-start align-items-center gap-4'>
                                            <input type="number" min={1} className="form-control margemEsquerda w-20" id="qtdCreatePedidoBatata" aria-describedby="qtdCreatePedido" value={quantidadeBatata} onChange={e => setQuantidadeBatata(e.target.value)} />

                                            <button className='border-0 bg-transparent' onClick={handleBatatas}>
                                                <img src="/assets/plus.png" width={25} height={25} className='bg-success' alt="" />
                                            </button>
                                        </div>
                                    </div>

                                }

                                <div className="row mb-1 d-block">
                                    <label htmlFor="bebida"
                                        className="lb-login col-md-4 col-form-label">Escolha uma opção de bebida:</label>
                                    <div className="col-md-10 d-block m-auto">
                                        <select className="form-select" name="bebida" id="bebida" onChange={e => setBebida(e.target.value)}>
                                            <option value="0">Não quero bebida</option>
                                            <option value="refri">Refrigerante</option>
                                            <option value="suco">Suco de laranja</option>
                                            <option value="agua">Água mineral sem gás</option>
                                        </select>
                                    </div>
                                </div>

                                {
                                    bebida !== 0 &&

                                    <div>
                                        <label htmlFor="quantidade"
                                            className="lb-login col-form-label">Quantidade:</label>

                                        <div className='d-flex justify-content-start align-items-center gap-4'>
                                            <input type="number" min={1} className="form-control margemEsquerda w-20" id="qtdCreatePedidoBebida" aria-describedby="qtdCreatePedido" value={quantidadeBebida} onChange={e => setQuantidadeBebida(e.target.value)} />

                                            <button className='border-0 bg-transparent' onClick={handleBebidas}>
                                                <img src="/assets/plus.png" width={25} height={25} className='bg-success' alt="" />
                                            </button>
                                        </div>
                                    </div>

                                }

                                <div className="d-flex w-75 mt-4 justify-content-center m-auto">
                                    <div className="form-check w-100 balcao">
                                        <input className="form-check-input" type="radio" name="opcaoEntrega" id="Balcão" onClick={e => setEntrega(e.target.id)} />
                                        <label className="form-check-label" htmlFor="balcao">
                                            Balcão
                                        </label>
                                    </div>
                                    <div className="form-check w-100">
                                        <input className="form-check-input" type="radio" name="opcaoEntrega" id="Delivery" onClick={e => setEntrega(e.target.id)} />
                                        <label className="form-check-label" htmlFor="delivery">
                                            Delivery
                                        </label>
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    <button type="submit" className="m-auto w-50 my-4 d-block p-2 botaoEntrar">
                                        Fazer Pedido
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div>

                        <div className="col-md-1 w-25">
                            <div className="card mt-5">
                                <div className="cabeca-card mt-5 display-5">Seu endereço</div>
                                <div className="card-body">
                                    <p className='h5 mt-2 mb-5'>Rua Lorem ipsum dolor sit amet, 1500, Bairro, Cidade</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-1">
                            <div className="card mt-5">
                                <div className="cabeca-card mt-5 display-5">Seu pedido</div>
                                <div className="card-body">
                                    {calzones.map(calzone => {
                                        return <div key={calzone.id} className='mx-3 d-flex w-75 justify-content-between'>
                                            <h6 className='text-start mt-2'>{calzone.descricao} {calzone.quantidade}x</h6>
                                            
                                            <button className='border-0 bg-transparent' onClick={e => removeCalzone(calzone)}>
                                                <img src="/assets/trash.png" width={20} height={20} className='bg-danger' alt="" />
                                            </button>
                                        </div>
                                    })}

                                    {batatas.map(batata => {
                                        return <div key={batata.id} className='mx-3 d-flex w-75 justify-content-between'>
                                            <h6 className='text-start mt-2'>{batata.descricao} {batata.quantidade}x</h6>

                                            <button className='border-0 bg-transparent' onClick={e => removeBatata(batata)}>
                                                <img src="/assets/trash.png" width={20} height={20} className='bg-danger' alt="" />
                                            </button>
                                        </div>
                                    })}

                                    {bebidas.map(bebida => {
                                        return <div key={bebida.id} className='mx-3 d-flex  w-75 justify-content-between'>
                                            <h6 className='text-start mt-2'>{bebida.descricao} {bebida.quantidade}x</h6>

                                            <button className='border-0 bg-transparent' onClick={ e => removeBebida(bebida)}>
                                                <img src="/assets/trash.png" width={20} height={20} className='bg-danger' alt="" />
                                            </button>
                                        </div>
                                    })}

                                    {entrega && <div className='d-flex mx-3'>Tipo de entrega: {entrega}</div>}
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