import Header from "../components/header/headerAdmin/Header"
import Footer from "../components/footer/Footer"
import { Link } from "react-router-dom"

const AdminProduto = () => {

    return (
        <div>
            <Header />
            <div className="my-5">
                <h1 className="text-light">Produtos</h1>
            </div>
            <div className="box">
                <div className="opcaoSol">
                    <button type="button" className="b1" data-bs-toggle="modal" data-bs-target="#ModalCreateCliente"
                        aria-current="page">
                        <div>
                            <h2 className="d-flex text-light justify-content-center">Adicionar</h2>
                        </div>
                    </button>
                </div>
                <div className="textArea">
                    <div className="table">
                        <table className="tabela table table-bordered table-striped table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Produto</th>
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
                                        <Link to={"/admin/clientes/editar"} className="link-tabela text-warning">
                                            Editar
                                        </Link>
                                    </td>

                                    <td>
                                        <p to={"/admin/clientes/remover"}>
                                            <span className="text-danger cursor-pointer">Remover</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trazer do banco
                                    </td>
                                    <td>
                                        Trazer do banco
                                    </td>

                                    <td>
                                        <Link to={"/admin/clientes/editar"} className="link-tabela text-warning">
                                            Editar
                                        </Link>
                                    </td>

                                    <td>
                                        <p to={"/admin/clientes/remover"}>
                                            <span className="text-danger cursor-pointer">Remover</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trazer do banco
                                    </td>
                                    <td>
                                        Trazer do banco
                                    </td>

                                    <td>
                                        <Link to={"/admin/clientes/editar"} className="link-tabela text-warning">
                                            Editar
                                        </Link>
                                    </td>

                                    <td>
                                        <p to={"/admin/clientes/remover"}>
                                            <span className="text-danger cursor-pointer">Remover</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trazer do banco
                                    </td>
                                    <td>
                                        Trazer do banco
                                    </td>

                                    <td>
                                        <Link to={"/admin/clientes/editar"} className="link-tabela text-warning">
                                            Editar
                                        </Link>
                                    </td>

                                    <td>
                                        <p to={"/admin/clientes/remover"}>
                                            <span className="text-danger cursor-pointer">Remover</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trazer do banco
                                    </td>
                                    <td>
                                        Trazer do banco
                                    </td>

                                    <td>
                                        <Link to={"/admin/clientes/editar"} className="link-tabela text-warning">
                                            Editar
                                        </Link>
                                    </td>

                                    <td>
                                        <p to={"/admin/clientes/remover"}>
                                            <span className="text-danger cursor-pointer">Remover</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trazer do banco
                                    </td>
                                    <td>
                                        Trazer do banco
                                    </td>

                                    <td>
                                        <Link to={"/admin/clientes/editar"} className="link-tabela text-warning">
                                            Editar
                                        </Link>
                                    </td>

                                    <td>
                                        <p to={"/admin/clientes/remover"}>
                                            <span className="text-danger cursor-pointer">Remover</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trazer do banco
                                    </td>
                                    <td>
                                        Trazer do banco
                                    </td>

                                    <td>
                                        <Link to={"/admin/clientes/editar"} className="link-tabela text-warning">
                                            Editar
                                        </Link>
                                    </td>

                                    <td>
                                        <p to={"/admin/clientes/remover"}>
                                            <span className="text-danger cursor-pointer">Remover</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trazer do banco
                                    </td>
                                    <td>
                                        Trazer do banco
                                    </td>

                                    <td>
                                        <Link to={"/admin/clientes/editar"} className="link-tabela text-warning">
                                            Editar
                                        </Link>
                                    </td>

                                    <td>
                                        <p to={"/admin/clientes/remover"}>
                                            <span className="text-danger cursor-pointer">Remover</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trazer do banco
                                    </td>
                                    <td>
                                        Trazer do banco
                                    </td>

                                    <td>
                                        <Link to={"/admin/clientes/editar"} className="link-tabela text-warning">
                                            Editar
                                        </Link>
                                    </td>

                                    <td>
                                        <p to={"/admin/clientes/remover"}>
                                            <span className="text-danger cursor-pointer">Remover</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trazer do banco
                                    </td>
                                    <td>
                                        Trazer do banco
                                    </td>

                                    <td>
                                        <Link to={"/admin/clientes/editar"} className="link-tabela text-warning">
                                            Editar
                                        </Link>
                                    </td>

                                    <td>
                                        <p to={"/admin/clientes/remover"}>
                                            <span className="text-danger cursor-pointer">Remover</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trazer do banco
                                    </td>
                                    <td>
                                        Trazer do banco
                                    </td>

                                    <td>
                                        <Link to={"/admin/clientes/editar"} className="link-tabela text-warning">
                                            Editar
                                        </Link>
                                    </td>

                                    <td>
                                        <p to={"/admin/clientes/remover"}>
                                            <span className="text-danger cursor-pointer">Remover</span>
                                        </p>
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