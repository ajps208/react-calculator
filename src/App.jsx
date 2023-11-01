import React, { useState } from 'react';
import './App.css';

function App() {
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setOperation('');
      setResult('');
    } else if (value === '=') {
      try {
        setResult(eval(operation).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'DEL') {
      // Remove the last character from the operation
      setOperation(operation.slice(0, -1));
    } else {
      setOperation(operation + value);
    }
  };

  return (
    <>
      <h1 className='mt-5' style={{ textAlign: 'center', color: "white" }}>Calculator</h1>
      <div className="calc-body">
        <div className="calc-screen">
          <div id="calc-operation">{operation}</div>
          <div id="calc-typed">{result}</div>
        </div>

        <div className="calc-button-row">
          <button className="ac" onClick={() => handleButtonClick('AC')}>
            AC
          </button>
          <button className="opt" onClick={() => handleButtonClick('+/-')}>
            +/-
          </button>
          <button className="opt" onClick={() => handleButtonClick('%')}>
            %
          </button>
          <button className="opt" onClick={() => handleButtonClick('/')}>
            ÷
          </button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button className="opt" onClick={() => handleButtonClick('*')}>
            ×
          </button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button className="opt" onClick={() => handleButtonClick('-')}>
            -
          </button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button className="opt" onClick={() => handleButtonClick('+')}>
            +
          </button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
          <button className="opt" onClick={() => handleButtonClick('DEL')}>
            DEL
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
