import BotaoPedido from '../components/botaoPedido/BotaoPedido';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <BotaoPedido />
            <Card />
            <Footer />
        </div>
    )
}

export default Home