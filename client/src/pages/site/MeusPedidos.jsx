import ExibirPedidos from '../../components/exibirPedidos/ExibirPedidos';
import Footer from '../../components/footer/Footer';
import HeaderCliente from '../../components/header/headerCliente/Header';
import HeaderAdmin from '../../components/header/headerAdmin/Header';
import { useAutCtx } from '../../context/AuthContext';


const MeusPedidos = () => {

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
            <ExibirPedidos />
            <Footer />
        </>
    )
}

export default MeusPedidos