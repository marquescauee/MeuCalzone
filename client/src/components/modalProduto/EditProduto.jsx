import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../header/headerAdmin/Header"
import Footer from "../footer/Footer"

const EditProduto = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [descricao, setDescricao] = useState('')
    const [qtd, setQtd] = useState(0)
    const [idTipo, setIdTipo] = useState(0)

    const [tipoTipo, setTipoTipo] = useState('')
    const [descricaoTipo, setDescricaoTipo] = useState('')

    const [descricaoVazia, setDescricaoVazia] = useState(false)
    const [qtdVazia, setQtdVazia] = useState(false)
    const [idTipoVazio, setIdTipoVazio] = useState(false)

    const [produtos, setProdutos] = useState([])
    const [tipos, setTipos] = useState([])

    const [sucesso, setSucesso] = useState('')
    const [falha, setFalha] = useState(false)

    const resetEstado = () => {
        setDescricao('')
        setQtd(0)
        setIdTipo(0)
        setTipoTipo('')
        setDescricaoTipo('')
        setQtdVazia(false)
        setDescricaoVazia(false)
        setIdTipoVazio(false)
    }

    const resetMensagensBanner = () => {
        setSucesso('')
        setFalha(false)
    }

    const resetErros = () => {
        setDescricaoVazia(false)
        setQtdVazia(false)
        setIdTipoVazio(false)
        setSucesso('')
        setFalha(false)
    }

    const recuperarProdutos = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/produtos', {
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
                if (a.nome > b.nome)
                    return 1
                if (a.nome < b.nome)
                    return -1
                return 0
            })
            setProdutos(data)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    const recuperarProduto = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/produtos/${id}`, {
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
            setDescricao(data.descricao)
            setQtd(data.qtd)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    const recuperarTipos = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/tiposProdutos', {
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
                if (a.nome > b.nome)
                    return 1
                if (a.nome < b.nome)
                    return -1
                return 0
            })
            setTipos(data)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault()

        resetErros()
        resetMensagensBanner()

        if (!descricao.trim())
            setDescricaoVazia(true)

        if (qtd < 0)
            setQtdVazia(true)

        if (idTipo === 0 || !descricaoTipo.trim() || !tipoTipo.trim())
            setIdTipoVazio(true)

        if (!descricao.trim() || qtd < 0 || idTipo === 0 || !descricaoTipo.trim() || !tipoTipo.trim()) {
            setFalha(true)
            return
        }

        const data = {
            "tipo": {
                "idTipoProduto": idTipo,
                "tipo": tipoTipo,
                "descricao": descricaoTipo
            },
            "descricao": descricao,
            "qtd": qtd
        }

        try {
            const response = await fetch(`http://localhost:8080/api/produtos/${id}`, {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data),
            });
            setSucesso('Produto atualizado com sucesso!')
            setFalha(false)
            recuperarProdutos()
            resetEstado()

            navigate("/admin/produtos")
            return response.json()

        } catch (err) {
            setFalha(true)
            setSucesso(false)
            console.log(err)
        }
    }

    useEffect(() => {
        recuperarProduto(id)
        recuperarTipos()
    }, [])

    return (
        <>

            <Header />

            <div className="my-5">
                <h1 className="text-light">Editar Produto</h1>
            </div>

            <form className="w-50 mx-auto text-light">
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label w-100">Descrição</label>
                    <input type="text" className="form-control" id="descCreateProduct" aria-describedby="desc" value={descricao} onChange={e => setDescricao(e.target.value)} />

                    {descricaoVazia && <div className="mt-2 texto-erro">Descrição inválida. Por favor, tente novamente.</div>}

                </div>
                <div className="mb-3">
                    <label htmlFor="quantidade" className="form-label w-100">Quantidade</label>
                    <input type="number" min={0} className="form-control" id="qtdCreateProduct" aria-describedby="emailHelp" value={qtd} onChange={e => setQtd(e.target.value)} />

                    {qtdVazia && <div className="mt-2 texto-erro">Quantidade inválida. Por favor, tente novamente.</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="tipo" className="form-label w-100">Tipo</label>
                    <select className="form-select" name="calzone" id="calzone" onChange={e => {
                        let split = e.target.value.split(" ")
                        setIdTipo(split[0])
                        setTipoTipo(split[1])
                        setDescricaoTipo(split[2])

                    }}>
                        <option defaultValue={"none"}>Selecione uma opção</option>
                        {
                            tipos.map(t => {
                                return <option key={t.idTipoProduto} value={t.idTipoProduto + " " + t.tipo + " " + t.descricao}>{t.descricao}</option>
                            })
                        }
                    </select>

                    {idTipoVazio && <div className="mt-2 texto-erro">Tipo inválido. Por favor, tente novamente.</div>}
                </div>

                <div className="modal-footer border-0 gap-5">
                    <button type="button" className="btn btn-outline-light" onClick={() => navigate("/admin/produtos")}>Voltar</button>
                    <button onClick={handleUpdate} type="submit" className="btn btn-warning">Salvar</button>
                </div>
            </form>

            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}

export default EditProduto