import HeaderCliente from '../../components/header/headerCliente/Header';
import HeaderAdmin from '../../components/header/headerAdmin/Header';
import Footer from "../../components/footer/Footer"
import FormPedido from "../../components/formPedido/FormPedido"
import '../../General.css'
import { useState } from "react"
import { useAutCtx } from "../../context/AuthContext"

const Pedido = () => {

    const [sucesso, setSucesso] = useState('')

    const { tipo } = useAutCtx()

    return (
        <>
            {
                tipo === 'a' &&
                <HeaderAdmin />
            }

            {
                (tipo === 'c' || !tipo) &&
                <HeaderCliente />
            }
            {sucesso && <div className="fundo-sucesso mx-auto">{sucesso}</div>}
            <FormPedido setSucesso={setSucesso} />
            <div className="marginTopo">
                <Footer />
            </div>
        </>
    )
}

export default Pedido