import Header from "../../components/header/headerAdmin/Header"
import Footer from "../../components/footer/Footer"
import CreateModal from "../../components/modalProduto/CreateModal"
import EditModal from "../../components/modalProduto/EditModal"
import DeleteModal from "../../components/modalProduto/DeleteModal"

const AdminProduto = () => {
    return (
        <div>
            <Header />

            <div className="my-5">
                <h1 className="text-light">Produtos</h1>
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
                                    <th>Nome</th>
                                    <th>CPF</th>
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

export default AdminProduto