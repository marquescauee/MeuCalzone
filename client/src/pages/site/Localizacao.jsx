import Footer from "../../components/footer/Footer"
import HeaderCliente from "../../components/header/headerCliente/Header"
import HeaderAdmin from "../../components/header/headerAdmin/Header"
import LocalRestaurante from "../../components/localizacao/LocalRestaurante"
import { useAutCtx } from "../../context/AuthContext"

const Localizacao = () => {
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
            <LocalRestaurante />
            <Footer />
        </>
    )
}

export default Localizacao