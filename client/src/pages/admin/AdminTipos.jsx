import Footer from "../../components/footer/Footer"
import Header from "../../components/header/headerAdmin/Header"
import CreateModal from "../../components/modalTipos/CreateModal"
import EditModal from "../../components/modalTipos/EditModal"
import DeleteModal from "../../components/modalTipos/DeleteModal"
import { useEffect, useState } from "react"

const AdminTipos = () => {

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
                if (a.nome > b.nome)
                    return 1
                if (a.nome < b.nome)
                    return -1
                return 0
            })
            console.log(data)
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

    useEffect(() => {
        recuperarTipos()
    }, [])

    return (
        <div>
            <Header />

            {falha && <div className="fundo-erro mx-auto">Houve um erro na operação. Abra o Modal novamente para visualizar o erro.</div>}

            {sucesso && <div className="fundo-sucesso mx-auto">{sucesso}</div>}

            <div className="my-5">
                <h1 className="text-light">Tipos de Produto</h1>
            </div>
            <div className="box">
                <div className="opcaoSol">
                    <CreateModal tipo={tipo} setTipo={setTipo} descricao={descricao} setDescricao={setDescricao} resetEstado={resetEstado} setDescricaoVazia={setDescricaoVazia} descricaoVazia={descricaoVazia} setSucesso={setSucesso} sucesso={sucesso} setFalha={setFalha} falha={falha} setTipoVazio={setTipoVazio} tipoVazio={tipoVazio} resetErros={resetErros} resetMensagensBanner={resetMensagensBanner} recuperarTipos={recuperarTipos} />
                </div>
                <div className="textArea">
                    <div className="table">
                        <table className="tabela table table-bordered table-striped table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Descrição</th>
                                    <th colSpan={2}>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tipos.map(t => {
                                        return <tr key={t.idTipoProduto}>
                                            <td>{t.tipo}</td>
                                            <td>{t.descricao}</td>

                                            <td>
                                                <EditModal tipo={tipo} setTipo={setTipo} descricao={descricao} setDescricao={setDescricao} resetEstado={resetEstado} setDescricaoVazia={setDescricaoVazia} descricaoVazia={descricaoVazia} setSucesso={setSucesso} sucesso={sucesso} setFalha={setFalha} falha={falha} setTipoVazio={setTipoVazio} tipoVazio={tipoVazio} recuperarTipos={recuperarTipos} id={t.idTipoProduto} recuperarTipo={recuperarTipo} resetErros={resetErros} resetMensagensBanner={resetMensagensBanner} />
                                            </td>

                                            <td>
                                                <DeleteModal resetEstado={resetEstado} descricao={t.descricao} setSucesso={setSucesso} setFalha={setFalha} id={t.idTipoProduto} recuperarTipos={recuperarTipos} />
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom">
                <Footer />
            </div>
        </div>
    )
}

export default AdminTipos