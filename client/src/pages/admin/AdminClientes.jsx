import Header from "../../components/header/headerAdmin/Header"
import Footer from "../../components/footer/Footer"
import CreateModal from "../../components/modalCliente/CreateModal"
import EditModal from "../../components/modalCliente/EditModal"
import DeleteModal from "../../components/modalCliente/DeleteModal"
import '../../General.css'
import { useState } from "react"

const AdminClientes = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [endereco, setEndereco] = useState('')
    const [senha, setSenha] = useState('')

    const resetEstados = () => {
        setNome('')
        setEmail('')
        setCpf('')
        setEndereco('')
        setSenha('')
    }

    const editarCliente = () => {
       setNome('oi')
    }

    const deletarCliente = () => {
        console.log('removeu')
    }

    return (
        <div>
            <Header />

            <div className="my-5">
                <h1 className="text-light">Clientes</h1>
            </div>
            <div className="box">
                <div className="opcaoSol">
                    <CreateModal setNome={setNome} nome={nome} setEmail={setEmail} email={email} setCpf={setCpf} cpf={cpf} setEndereco={setEndereco} endereco={endereco} setSenha={setSenha} senha={senha} resetEstados={resetEstados}/>

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
                                        <EditModal editarCliente={editarCliente} setNome={setNome} nome={nome} setEmail={setEmail} email={email} setCpf={setCpf} cpf={cpf} setEndereco={setEndereco} endereco={endereco} setSenha={setSenha} senha={senha} resetEstados={resetEstados}   />
                                    </td>

                                    <td>
                                        <DeleteModal deletarCliente={deletarCliente} resetEstados={resetEstados} nome={nome}/>
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

export default AdminClientes


