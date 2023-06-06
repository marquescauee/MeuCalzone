import Header from "../../components/header/headerAdmin/Header"
import Footer from "../../components/footer/Footer"
import CreateModal from "../../components/modalCliente/CreateModal"
import EditModal from "../../components/modalCliente/EditModal"
import DeleteModal from "../../components/modalCliente/DeleteModal"
import '../../General.css'
import { useEffect, useState } from "react"

const AdminClientes = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState(0)
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [senha, setSenha] = useState('')

    const [clientes, setClientes] = useState([])

    const [sucesso, setSucesso] = useState(false)
    const [falha, setFalha] = useState(false)

    const [nomeVazio, setNomeVazio] = useState(false)
    const [emailVazio, setEmailVazio] = useState(false)
    const [cpfVazio, setCpfVazio] = useState(false)
    const [senhaVazia, setSenhaVazia] = useState(false)
    const [ruaVazia, setRuaVazia] = useState(false)
    const [numeroVazio, setNumeroVazio] = useState(false)
    const [bairroVazio, setBairroVazio] = useState(false)
    const [cidadeVazia, setCidadeVazia] = useState(false)

    const recuperarClientes = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/pessoas', {
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
                if(a.nome > b.nome)
                    return 1
                if(a.nome < b.nome)
                    return -1
                return 0
            })
            console.log(data)
            setClientes(data)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    const recuperarCliente = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/pessoas/${id}`, {
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
            setNome(data.nome)
            setEmail(data.email)
            setCpf(data.cpf)
            setRua(data.endereco.rua)
            setNumero(data.endereco.numero)
            setBairro(data.endereco.bairro)
            setCidade(data.endereco.cidade)
            setSenha(data.senha)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        recuperarClientes()
    }, [])

    const resetEstados = () => {
        setNome('')
        setEmail('')
        setCpf('')
        setRua('')
        setNumero(0)
        setBairro('')
        setCidade('')
        setSenha('')
        setNomeVazio(false)
        setEmailVazio(false)
        setCpfVazio(false)
        setSenhaVazia(false)
        setRuaVazia(false)
        setNumeroVazio(false)
        setBairroVazio(false)
        setCidadeVazia(false)
    }

    const resetMessagensBanner = () => {
        setSucesso('')
        setFalha(false)
    }

    const resetErros = () => {
        setNomeVazio(false)
        setEmailVazio(false)
        setCpfVazio(false)
        setSenhaVazia(false)
        setRuaVazia(false)
        setNumeroVazio(false)
        setBairroVazio(false)
        setCidadeVazia(false)
        setSucesso(false)
        setFalha(false)
    }


    return (
        <div>
            <Header />

            {falha && <div className="fundo-erro mx-auto">Houve um erro na operação. Abra o Modal novamente para visualizar o erro.</div>}

            {sucesso && <div className="fundo-sucesso mx-auto">{sucesso}</div>}

            <div className="my-5">
                <h1 className="text-light">Clientes</h1>
            </div>
            <div className="box">
                <div className="opcaoSol">
                    <CreateModal setNome={setNome} nome={nome} setEmail={setEmail} email={email} setCpf={setCpf} cpf={cpf} setSenha={setSenha} senha={senha} resetEstados={resetEstados} setRua={setRua} rua={rua} setNumero={setNumero} numero={numero} setBairro={setBairro} bairro={bairro} setCidade={setCidade} cidade={cidade} setSucesso={setSucesso} setFalha={setFalha} setBairroVazio={setBairroVazio} bairroVazio={bairroVazio} setCidadeVazia={setCidadeVazia} cidadeVazia={cidadeVazia} setNumeroVazio={setNumeroVazio} numeroVazio={numeroVazio} setRuaVazia={setRuaVazia} ruaVazia={ruaVazia} setSenhaVazia={setSenhaVazia} senhaVazia={senhaVazia} setCpfVazio={setCpfVazio} cpfVazio={cpfVazio} setEmailVazio={setEmailVazio} emailVazio={emailVazio} setNomeVazio={setNomeVazio} nomeVazio={nomeVazio} resetErros={resetErros} resetMessagensBanner={resetMessagensBanner} recuperarClientes={recuperarClientes} />

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
                                {
                                    clientes.map(c => {
                                        return <tr key={c.id}>
                                            <td>{c.nome}</td>
                                            <td>{c.cpf}</td>
                                            <td>
                                                <EditModal setNome={setNome} nome={nome} setEmail={setEmail} email={email} setCpf={setCpf} cpf={cpf} setRua={setRua} rua={rua} setNumero={setNumero} numero={numero} setBairro={setBairro} bairro={bairro} setCidade={setCidade} cidade={cidade} setSenha={setSenha} senha={senha} resetEstados={resetEstados} setSucesso={setSucesso} sucesso={sucesso} setFalha={setFalha} falha={falha} setBairroVazio={setBairroVazio} bairroVazio={bairroVazio} setCidadeVazia={setCidadeVazia} cidadeVazia={cidadeVazia} setNumeroVazio={setNumeroVazio} numeroVazio={numeroVazio} setRuaVazia={setRuaVazia} ruaVazia={ruaVazia} setSenhaVazia={setSenhaVazia} senhaVazia={senhaVazia} setCpfVazio={setCpfVazio} cpfVazio={cpfVazio} setEmailVazio={setEmailVazio} emailVazio={emailVazio} setNomeVazio={setNomeVazio} nomeVazio={nomeVazio} resetErros={resetErros} resetMessagensBanner={resetMessagensBanner} recuperarCliente={recuperarCliente} id={c.id} recuperarClientes={recuperarClientes} />
                                            </td>

                                            <td>
                                                <DeleteModal setSucesso={setSucesso} setFalha={setFalha} resetEstados={resetEstados} nome={c.nome} id={c.id} recuperarClientes={recuperarClientes}/>
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

export default AdminClientes


