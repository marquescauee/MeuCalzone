import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../header/headerAdmin/Header";
import Footer from "../footer/Footer";

const EditCliente = () => {

    const { id } = useParams();
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState(0)
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [senha, setSenha] = useState('')

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

    const resetErros = () => {
        setNomeVazio(false)
        setEmailVazio(false)
        setCpfVazio(false)
        setSenhaVazia(false)
        setRuaVazia(false)
        setNumeroVazio(false)
        setBairroVazio(false)
        setCidadeVazia(false)
        setSucesso('')
        setFalha(false)
    }

    const handleUpdate = async (e) => {
        e.preventDefault()

        resetErros()

        if (!nome.trim())
            setNomeVazio(true)

        if (!email.trim())
            setEmailVazio(true)

        if (cpf.length !== 11)
            setCpfVazio(true)

        if (!rua.trim())
            setRuaVazia(true)
        if (!numero)
            setNumeroVazio(true)

        if (!bairro.trim())
            setBairroVazio(true)

        if (!cidade.trim())
            setCidadeVazia(true)

        if (!senha.trim() || senha.length < 8)
            setSenhaVazia(true)

        if (!nome.trim() || nome.length < 3 || !email.trim() || cpf.length !== 11 || !rua.trim() || !numero || !bairro.trim() || !cidade.trim() || !senha.trim() || senha.length < 8) {
            setFalha(true)
            return
        }

        const data = {
            "nome": nome,
            "email": email,
            "senha": senha,
            "cpf": cpf,
            "tipo": "c",
            "endereco": {
                "rua": rua,
                "numero": numero,
                "bairro": bairro,
                "cidade": cidade
            }
        }

        try {
            const response = await fetch(`http://localhost:8080/api/pessoas/${id}`, {
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
            setSucesso('Cliente atualizado com sucesso!')
            setFalha(false)
            navigate("/admin/clientes")
            return response.json()

        } catch (err) {
            setFalha(true)
            setSucesso(false)
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
        recuperarCliente(id)
    }, [])

    return (
        <>
            <Header />

            <div className="my-5">
                <h1 className="text-light">Editar Cliente</h1>
            </div>

            <form className="w-50 mx-auto text-light">
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label w-100">Nome</label>
                    <input type="text" className="form-control" id="nomeCreateCliente" aria-describedby="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Informe seu nome (3 e 40 caracteres)" />

                    {nomeVazio && <div className="mt-2 texto-erro">Nome inválido. Por favor, tente novamente.</div>}

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label w-100">Email</label>
                    <input type="email" className="form-control" id="emailCreateCliente" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Informe seu email (xxxxx@xxxx.xx)" />

                    {emailVazio && <div className="mt-2 texto-erro">Email inválido. Por favor, tente novamente.</div>}

                </div>
                <div className="mb-3">
                    <label htmlFor="cpf" className="form-label w-100">CPF</label>
                    <input type="text" className="form-control" id="cpfCreateCliente" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Informe seu CPF (11 dígitos)" />

                    {cpfVazio && <div className="mt-2 texto-erro">CPF inválido. Por favor, tente novamente.</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="rua" className="form-label w-100">Rua</label>
                    <input type="text" className="form-control" id="ruaCreateCliente" value={rua} onChange={(e) => setRua(e.target.value)} placeholder="Informe sua rua" />

                    {ruaVazia && <div className="mt-2 texto-erro">Rua inválida. Por favor, tente novamente.</div>}
                </div>

                <div className="mb-3 d-flex">
                    <div className='d-flex flex-column w-50'>
                        <label htmlFor="numero"
                            className="lb-login col-md-4 col-form-label ">Número:</label>

                        <div className="col-md-3 d-flex  w-50">
                            <input id="numeroCreate" type="number" min="0"
                                className="form-control" name="numero"
                                required value={numero} onChange={(e) => setNumero(e.target.value)} />
                        </div>
                        {numeroVazio && <div className="mt-2 text-start texto-erro">Número inválido</div>}
                    </div>

                    <div className='d-flex flex-column w-50'>
                        <label htmlFor="bairro"
                            className="lb-login col-md-4 col-form-label">Bairro:</label>

                        <div className="col-md-4 d-flex w-80">
                            <input id="bairroCreate" type="text"
                                className="form-control" name="bairro"
                                required value={bairro} onChange={(e) => setBairro(e.target.value)} />
                        </div>
                        {bairroVazio && <div className="mt-2 w-50 texto-erro">Bairro inválido</div>}
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="cidade" className="form-label w-100">Cidade</label>
                    <input type="text" className="form-control" id="cidadeCreateCliente" value={cidade} onChange={(e) => setCidade(e.target.value)} />

                    {cidadeVazia && <div className="mt-2 texto-erro">Cidade inválida. Por favor, tente novamente.</div>}

                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label w-100">Senha</label>
                    <input type="password" className="form-control" id="passwordCreateCliente" value={senha} onChange={(e) => setSenha(e.target.value)} />

                    {senhaVazia && <div className="mt-2 texto-erro">A senha deve possuir 8 caracteres.</div>}
                </div>
                <div className="modal-footer border-0 gap-5">
                    <button type="button" className="btn btn-outline-light" onClick={() => navigate("/admin/clientes")}>Voltar</button>
                    <button className="btn btn-warning" id="botaoSalvarCliente" onClick={handleUpdate}>Salvar</button>
                </div>
            </form>

            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}

export default EditCliente