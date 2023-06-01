import './App.css';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
