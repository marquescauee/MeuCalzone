import Header from "../../components/header/headerAdmin/Header"
import Footer from "../../components/footer/Footer"
import CreateModal from "../../components/modalProduto/CreateModal"
import EditModal from "../../components/modalProduto/EditModal"
import DeleteModal from "../../components/modalProduto/DeleteModal"
import { useState } from "react"

const AdminProduto = () => {

    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState(0)
    const [tipo, setTipo] = useState(0)

    const cadastrarProduto = () => {
        console.log('cadastrou')
    }

    const editarProduto = () => {
        console.log('editou')
    }

    const deletarProduto = () => {
        console.log('deletou')
    }

    const resetEstado = () => {
        setTipo(0)
        setDescricao('')
        setQuantidade(0)
    }

    return (
        <div>
            <Header />

            <div className="my-5">
                <h1 className="text-light">Produtos</h1>
            </div>
            <div className="box">
                <div className="opcaoSol">
                    <CreateModal descricao={descricao} setDescricao={setDescricao} quantidade={quantidade} setQuantidade={setQuantidade} tipo={tipo} setTipo={setTipo} cadastrarProduto={cadastrarProduto} resetEstado={resetEstado}/>
                </div>
                <div className="textArea">
                    <div className="table">
                        <table className="tabela table table-bordered table-striped table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Quantidade</th>
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
                                        <EditModal descricao={descricao} setDescricao={setDescricao} quantidade={quantidade} setQuantidade={setQuantidade} tipo={tipo} setTipo={setTipo} editarProduto={editarProduto} resetEstado={resetEstado}/>
                                    </td>

                                    <td>
                                        <DeleteModal descricao={descricao} deletarProduto={deletarProduto}/>
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

export default AdminProduto