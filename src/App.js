import './App.css';
import { Screen } from './componentes/Screen'; 
import { Button } from './componentes/Button';
import { Footer } from './componentes/Footer';
import { ButtonReset } from './componentes/ButtonReset';
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.png'
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  
  const [input , setInput ] = useState('')

  const addInput = val => {
    setInput(input + val)
  }

  const resetInput = () => {
    setInput('')
  }

  const calculateResult = () => {
    if (input){
      setInput(evaluate(input));
    } else {
      alert ('Por favor ingresa valores para realizar los cálculos')
    }
    
  }


  return (
    <div className="App">
      <div className='freecodecampLogo-container'>
        <img
          className='freecodecampLogo'
          src={freeCodeCampLogo}
          alt='Logo freeCodeCamp'/>
      </div>
      <div className='calculator-container'>
        <Screen
        input={input}
        />
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonReset handleClick={resetInput}>RESET</ButtonReset>
        </div>
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;
