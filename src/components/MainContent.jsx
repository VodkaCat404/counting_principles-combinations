import React, { useState } from 'react';
import Combinations from './Combinations';
import Presentation from './Presentation';

function MainContent() {
  const [screen, setScreen] = useState("Regresar al inicio");

  const handleClick = () => {
    setScreen((prevScreen) => (prevScreen === "Regresar al inicio" ? "Ir a calcular" : "Regresar al inicio"));
  };

  return (
    <main>
      <button onClick={handleClick}>
        {screen === "Regresar al inicio" ? "Ir a calcular" : "Regresar al inicio"}
      </button>
      <section>
        {screen === "Regresar al inicio" ? <Presentation /> : <Combinations />}
      </section>
    </main>
  );
}

export default MainContent;