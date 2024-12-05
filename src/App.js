import './App.css';
import Hero from './components/Hero';
import Faq from './components/Faq';
import Seller from './components/Seller';
import Evaluation from './components/Evaluation';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero />
      <Evaluation/>
      <Faq />
      <Seller />
   <Footer/>
    </div>
  );
}

export default App;
