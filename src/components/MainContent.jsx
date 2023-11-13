import { useState } from 'react';
import Combinations from './Combinations';
import Presentation from './Presentation';

function MainContent() {
  const [screen, setScreen] = useState("Regresar al inicio");

  const handleChangeScreen = () => {
    setScreen((prevScreen) => (prevScreen === "Regresar al inicio" ? "Ir a calcular" : "Regresar al inicio"));
  };

  return (
    <main>
      <div className='dinamic-container'>
        <button className='static-button element-type-button' onClick={handleChangeScreen}>
          {screen === "Regresar al inicio" ? "Ir a calcular" : "Regresar al inicio"}
        </button>
        <br /> <br /> <br /> <br />
        <section>
          {screen === "Regresar al inicio" ? <Presentation /> : <Combinations />}
        </section>
      </div>
    </main>
  );
}

export default MainContent;
