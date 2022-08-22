import './App.css';
import { Button } from './componentes/Button';
import { Footer } from './componentes/Footer';
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.png'

function App() {
  return (
    <div className="App">
      <div className='freecodecampLogo-container'>
        <img
          className='freecodecampLogo'
          src={freeCodeCampLogo}
          alt='Logo freeCodeCamp'/>
      </div>
      <div className='calculator-container'>
        <div className='row'>
          <Button>1</Button>
          <Button>+</Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;
