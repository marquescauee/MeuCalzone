import BotaoPedido from '../components/botaoPedido/BotaoPedido';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';

const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <BotaoPedido />
            <Card />
            <Footer />
        </>
    )
}

export default Home