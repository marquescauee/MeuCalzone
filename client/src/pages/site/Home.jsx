import BotaoPedido from '../../components/botaoPedido/BotaoPedido';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import HeaderCliente from '../../components/header/headerCliente/Header';
import HeaderAdmin from '../../components/header/headerAdmin/Header';

import Slider from '../../components/slider/Slider';
import { useAutCtx } from '../../context/AuthContext';


const Home = () => {

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
            <Slider />
            <BotaoPedido />
            <Card />
            <Footer />
        </>
    )
}

export default Home