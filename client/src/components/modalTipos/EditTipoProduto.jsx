import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../header/headerAdmin/Header"
import Footer from "../footer/Footer"

const EditTipoProduto = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [tipo, setTipo] = useState('')
    const [descricao, setDescricao] = useState('')

    const [tipoVazio, setTipoVazio] = useState(false)
    const [descricaoVazia, setDescricaoVazia] = useState(false)

    const [sucesso, setSucesso] = useState('')
    const [falha, setFalha] = useState(false)

    const [tipos, setTipos] = useState([])

    const resetEstado = () => {
        setTipo('')
        setDescricao('')
        setDescricaoVazia(false)
        setTipoVazio(false)
    }

    const resetMensagensBanner = () => {
        setSucesso('')
        setFalha(false)
    }

    const resetErros = () => {
        setDescricaoVazia(false)
        setTipoVazio(false)
        setSucesso('')
        setFalha(false)
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
                if (a.descricao > b.descricao)
                    return 1
                if (a.descricao < b.descricao)
                    return -1
                return 0
            })
            setTipos(data)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    const recuperarTipo = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/tiposProdutos/${id}`, {
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
            setTipo(data.tipo)
            setDescricao(data.descricao)
            return data

        } catch (err) {
            console.log(err)
        }
    }


    const handleUpdate = async (e) => {
        e.preventDefault()

        resetErros()
        resetMensagensBanner()

        if (!tipo.trim() || tipo.length !== 3)
            setTipoVazio(true)

        if (!descricao.trim())
            setDescricaoVazia(true)

        if (!tipo.trim() || tipo.length !== 3 || !descricao.trim()) {
            setFalha(true)
            return
        }

        const data = {
            "tipo": tipo,
            "descricao": descricao
        }

        try {
            const response = await fetch(`http://localhost:8080/api/tiposProdutos/${id}`, {
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
            setSucesso('Tipo de produto atualizado com sucesso!')
            setFalha(false)
            recuperarTipos()
            resetEstado()

            navigate("/admin/tipos")
            return response.json()

        } catch (err) {
            setFalha(true)
            setSucesso(false)
            console.log(err)
        }
    }

    useEffect(() => {
        recuperarTipo(id)
    }, [])

    return (
        <div>
            <Header />

            <div className="my-5">
                <h1 className="text-light">Editar Tipo</h1>
            </div>

            <form className="w-50 mx-auto text-light">
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label w-100">Tipo</label>
                    <input type="text" minLength={3} maxLength={3} className="form-control" id="nomeEditTipo" aria-describedby="nome" value={tipo} onChange={e => setTipo(e.target.value)} />

                    {tipoVazio && <div className="mt-2 texto-erro">Tipo inválido. Por favor, tente novamente.</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label w-100">Descrição</label>
                    <input type="text" className="form-control" id="emailEditTipo" aria-describedby="emailHelp" value={descricao} onChange={e => setDescricao(e.target.value)} />

                    {descricaoVazia && <div className="mt-2 texto-erro">Descrição inválida. Por favor, tente novamente.</div>}
                </div>

                <div className="modal-footer border-0 gap-5">
                    <button type="button" onClick={() => navigate("/admin/tipos")} className="btn btn-outline-light">Voltar</button>
                    <button onClick={handleUpdate} type="submit" className="btn btn-warning">Salvar</button>
                </div>
            </form>

            <div className="fixed-bottom">
                <Footer />
            </div>
        </div>
    )
}

export default EditTipoProduto