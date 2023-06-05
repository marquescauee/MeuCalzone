import Footer from "../../components/footer/Footer"
import Header from "../../components/header/headerAdmin/Header"
import CreateModal from "../../components/modalTipos/CreateModal"
import EditModal from "../../components/modalTipos/EditModal"
import DeleteModal from "../../components/modalTipos/DeleteModal"

const AdminTipos = () => {
    return (
        <div>
            <Header />

            <div className="my-5">
                <h1 className="text-light">Tipos de Produto</h1>
            </div>
            <div className="box">
                <div className="opcaoSol">
                    <CreateModal />
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
                                        <EditModal />
                                    </td>

                                    <td>
                                        <DeleteModal />
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