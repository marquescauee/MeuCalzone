import Footer from "../../components/footer/Footer"
import Header from "../../components/header/headerAdmin/Header"
import CreateModal from "../../components/modalTipos/CreateModal"
import EditModal from "../../components/modalTipos/EditModal"
import DeleteModal from "../../components/modalTipos/DeleteModal"
import { useState } from "react"

const AdminTipos = () => {

    const [tipo, setTipo] = useState('')
    const [descricao, setDescricao] = useState('')

    const cadastrarTipo = () => {
        console.log('cadastrou')
    }

    const editarTipo = () => {
        console.log('editou')
    }

    const deletarTipo = () => {
        console.log('deletou')
    }

    const resetEstado = () => {
        setTipo('')
        setDescricao('')
    }

    return (
        <div>
            <Header />

            <div className="my-5">
                <h1 className="text-light">Tipos de Produto</h1>
            </div>
            <div className="box">
                <div className="opcaoSol">
                    <CreateModal tipo={tipo} setTipo={setTipo} descricao={descricao} setDescricao={setDescricao} cadastrarTipo={cadastrarTipo} resetEstado={resetEstado}/>
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
                                <tr>
                                    <td>
                                        Trazer do banco
                                    </td>
                                    <td>
                                        Trazer do banco
                                    </td>

                                    <td>
                                        <EditModal  tipo={tipo} setTipo={setTipo} descricao={descricao} setDescricao={setDescricao} editarTipo={editarTipo} resetEstado={resetEstado}/>
                                    </td>

                                    <td>
                                        <DeleteModal deletarTipo={deletarTipo} resetEstado={resetEstado} descricao={descricao}/>
                                    </td>
                                </tr>
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