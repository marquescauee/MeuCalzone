import './formPedido.css'
import { useState, useEffect } from 'react'
import { useAutCtx } from '../../context/AuthContext'

const FormPedido = ({ setSucesso }) => {

    const [cont, setCont] = useState(0)
    const { user } = useAutCtx()

    const [calzones, setCalzones] = useState([])
    const [bebidas, setBebidas] = useState([])
    const [batatas, setBatatas] = useState([])
    const [entrega, setEntrega] = useState('')

    const [idCalzoneAtual, setIdCalzoneAtual] = useState(0)
    const [calzoneAtual, setCalzoneAtual] = useState('')
    const [qtdCalzoneAtual, setQtdCalzoneAtual] = useState(0)
    const [quantidadeCalzone, setQuantidadeCalzone] = useState(1)

    const [calzonesPedido, setCalzonesPedido] = useState([])

    const [idBebidaAtual, setIdBebidaAtual] = useState(0)
    const [bebidaAtual, setBebidaAtual] = useState('')
    const [qtdBebidaAtual, setQtdBebidaAtual] = useState(0)
    const [quantidadeBebida, setQuantidadeBebida] = useState(1)

    const [bebidasPedido, setBebidasPedido] = useState([])

    const [idBatataAtual, setIdBatataAtual] = useState(0)
    const [batataAtual, setBatataAtual] = useState('')
    const [qtdBatataAtual, setQtdBatataAtual] = useState(0)
    const [quantidadeBatata, setQuantidadeBatata] = useState(1)

    const [batatasPedido, setBatatasPedido] = useState([])

    const [calzoneVazio, setCalzoneVazio] = useState(false)
    const [formaEntregaVazia, setFormaEntregaVazia] = useState(false)

    const resetEstados = () => {
        setCalzonesPedido([])
        setBatatasPedido([])
        setBebidasPedido([])
        setCalzoneAtual('')
        setBatataAtual('')
        setBebidaAtual('')
    }

    const handleSubmit = async (e) => {

        setCalzoneVazio(false)
        setFormaEntregaVazia(false)
        e.preventDefault()

        if (calzonesPedido.length === 0)
            setCalzoneVazio(true)

        if (!entrega)
            setFormaEntregaVazia(true)

        if (calzonesPedido.length === 0 || !entrega) {
            return
        }

        const data = {
            "calzones": calzonesPedido,
            "bebidas": bebidasPedido,
            "batatas": batatasPedido,
            "entrega": entrega,
            "idPessoa": user.id
        }

        try {
            const response = await fetch('http://localhost:8080/api/pedidos', {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data),
            });
            resetEstados()
            setSucesso('Pedido Realizado com sucesso! Acesse meus pedidos clicando em seu nome no menu superior para visualizá-lo!')
            return response.json()

        } catch (err) {
            console.log(err)
        }

    }

    const handleCalzones = (e) => {
        e.preventDefault()

        let calzone = {
            "key": cont.toString(),
            "idProduto": idCalzoneAtual.toString(),
            "descricao": calzoneAtual,
            "quantidade": quantidadeCalzone.toString()
        }

        setCalzonesPedido([...calzonesPedido, calzone])

        setCont(cont + 1)
        setQuantidadeCalzone(1)
        setCalzoneAtual('')
        setIdCalzoneAtual(0)
    }

    const handleBatatas = (e) => {
        e.preventDefault()

        let batata = {
            "key": cont.toString(),
            "idProduto": idBatataAtual.toString(),
            "descricao": batataAtual,
            "quantidade": quantidadeBatata.toString()
        }

        setBatatasPedido([...batatasPedido, batata])

        setCont(cont + 1)
        setQuantidadeBatata(1)
        setBatataAtual('')
    }

    const handleBebidas = (e) => {
        e.preventDefault()

        let bebida = {
            "key": cont.toString(),
            "idProduto": idBebidaAtual.toString(),
            "descricao": bebidaAtual,
            "quantidade": quantidadeBebida.toString()
        }

        setBebidasPedido([...bebidasPedido, bebida])

        setCont(cont + 1)
        setQuantidadeBatata(1)
        setBebidaAtual('')
    }

    const removeCalzone = (descricao) => {
        let newCalzonesArray = calzonesPedido.filter(c => c.descricao !== descricao)
        setCalzonesPedido(newCalzonesArray)

    }

    const removeBatata = (descricao) => {
        let newBatatasArray = batatasPedido.filter(b => b.descricao !== descricao)
        setBatatasPedido(newBatatasArray)
    }

    const removeBebida = (descricao) => {
        let newBebidasArray = bebidasPedido.filter(b => b.descricao !== descricao)
        setBebidasPedido(newBebidasArray)
    }

    const recuperarCalzones = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/produtos/calzones', {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
            });

            const data = await response.json()

            data.sort((a, b) => {
                if (a.descricao > b.descricao)
                    return 1
                if (a.descricao < b.descricao)
                    return -1
                return 0
            })
            setCalzones(data)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    const recuperarBebidas = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/produtos/bebidas', {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
            });

            const data = await response.json()

            data.sort((a, b) => {
                if (a.descricao > b.descricao)
                    return 1
                if (a.descricao < b.descricao)
                    return -1
                return 0
            })
            setBebidas(data)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    const recuperarBatatas = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/produtos/batatas', {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
            });

            const data = await response.json()

            data.sort((a, b) => {
                if (a.descricao > b.descricao)
                    return 1
                if (a.descricao < b.descricao)
                    return -1
                return 0
            })
            setBatatas(data)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        recuperarCalzones()
        recuperarBebidas()
        recuperarBatatas()
    }, [])

    return (
        <div className='mb-5'>
            <div className="row justify-content-center d-flex">
                <div className="col-md-8 d-flex w-100 justify-content-evenly">
                    <div className="card mt-5">
                        <div className="cabeca-card mt-5 display-5">Faça seu pedido!</div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-1 d-block">
                                    <label htmlFor="calzone"
                                        className="lb-login col-md-4 col-form-label">Escolha uma opção de calzone:</label>
                                    <div className="col-md-10 d-block m-auto">
                                        <select className="form-select" name="calzone" id="calzone" onChange={e => {
                                            let split = e.target.value.split(",")
                                            setIdCalzoneAtual(split[0])
                                            setCalzoneAtual(split[1])
                                            setQtdCalzoneAtual(split[2])
                                        }}>
                                            <option value="none">Selecione uma opção</option>
                                            {
                                                calzones.map(cal => {
                                                    return <option key={cal.idProduto} value={cal.idProduto + "," + cal.descricao + "," + cal.qtd}>{cal.descricao}</option>
                                                })
                                            }
                                        </select>

                                        {calzoneVazio && <div className='mt-2 texto-erro'>Você deve selecionar um calzone</div>}
                                    </div>
                                </div>

                                {
                                    (calzoneAtual && calzoneAtual !== 'none') &&

                                    <div>
                                        <label htmlFor="quantidade"
                                            className="lb-login col-form-label">Quantidade:</label>
                                        <div className='d-flex justify-content-start align-items-center gap-4'>
                                            <input type="number"  onKeyDown={e => e.preventDefault()} min={1} max={qtdCalzoneAtual} className="form-control margemEsquerda w-20" id="qtdCreatePedidoCalzone" aria-describedby="qtdCreatePedido" value={quantidadeCalzone} onChange={e => setQuantidadeCalzone(e.target.value)} />

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
                                        <select className="form-select" name="batata" id="batata" onChange={e => {
                                            let split = e.target.value.split(",")
                                            setIdBatataAtual(split[0])
                                            setBatataAtual(split[1])
                                            setQtdBatataAtual(split[2])
                                        }}>
                                            <option value="none">Não quero batata</option>
                                            {
                                                batatas.map(bat => {
                                                    return <option key={bat.idProduto} value={bat.idProduto + "," + bat.descricao + "," + bat.qtd}>{bat.descricao}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                                {
                                    (batataAtual && batataAtual !== 'none') &&

                                    <div>
                                        <label htmlFor="quantidade"
                                            className="lb-login col-form-label">Quantidade:</label>
                                        <div className='d-flex justify-content-start align-items-center gap-4'>
                                            <input type="number"  onKeyDown={e => e.preventDefault()} min={1} max={qtdBatataAtual} className="form-control margemEsquerda w-20" id="qtdCreatePedidoBatata" aria-describedby="qtdCreatePedido" value={quantidadeBatata} onChange={e => setQuantidadeBatata(e.target.value)} />

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
                                        <select className="form-select" name="bebida" id="bebida" onChange={e => {
                                            let split = e.target.value.split(",")
                                            setIdBebidaAtual(split[0])
                                            setBebidaAtual(split[1])
                                            setQtdBebidaAtual(split[2])
                                        }}>
                                            <option value="none">Não quero bebida</option>
                                            {
                                                bebidas.map(beb => {
                                                    return <option key={beb.idProduto} value={beb.idProduto + "," + beb.descricao + "," + beb.qtd}>{beb.descricao}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                                {
                                    (bebidaAtual && bebidaAtual !== 'none') &&

                                    <div>
                                        <label htmlFor="quantidade"
                                            className="lb-login col-form-label">Quantidade:</label>

                                        <div className='d-flex justify-content-start align-items-center gap-4'>
                                            <input type="number" onKeyDown={e => e.preventDefault()} min={1} max={qtdBebidaAtual} className="form-control margemEsquerda w-20" id="qtdCreatePedidoBebida" aria-describedby="qtdCreatePedido" value={quantidadeBebida} onChange={e => setQuantidadeBebida(e.target.value)} />

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

                                {formaEntregaVazia && <div className='mt-2 texto-erro'>Selecione uma forma de entrega</div>}

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
                                    <p className='h5 mt-2 mb-5'>{user.endereco.rua}, {user.endereco.numero} - {user.endereco.bairro}, {user.endereco.cidade}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-1">
                            <div className="card mt-5">
                                <div className="cabeca-card mt-5 display-5">Seu pedido</div>
                                <div className="card-body">
                                    {calzonesPedido.map(calzone => {
                                        return <div key={calzone.key} className='mx-3 d-flex w-75 justify-content-between'>
                                            <h6 className='text-start mt-2'>{calzone.descricao} {calzone.quantidade}x</h6>

                                            <button className='border-0 bg-transparent' onClick={e => removeCalzone(calzone.descricao)}>
                                                <img src="/assets/trash.png" width={20} height={20} className='bg-danger' alt="" />
                                            </button>
                                        </div>
                                    })}

                                    {batatasPedido.map(batata => {
                                        return <div key={batata.key} className='mx-3 d-flex w-75 justify-content-between'>
                                            <h6 className='text-start mt-2'>{batata.descricao} {batata.quantidade}x</h6>

                                            <button className='border-0 bg-transparent' onClick={e => removeBatata(batata.descricao)}>
                                                <img src="/assets/trash.png" width={20} height={20} className='bg-danger' alt="" />
                                            </button>
                                        </div>
                                    })}

                                    {bebidasPedido.map(bebida => {
                                        return <div key={bebida.key} className='mx-3 d-flex  w-75 justify-content-between'>
                                            <h6 className='text-start mt-2'>{bebida.descricao} {bebida.quantidade}x</h6>

                                            <button className='border-0 bg-transparent' onClick={e => removeBebida(bebida.descricao)}>
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