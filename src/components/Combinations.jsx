import { useState } from "react";

function Combinations() {
  const [allowRepetition, setAllowRepetition] = useState(false);
  const [result, setResult] = useState(null); // Nueva variable de estado

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = e.target.elements.total.value;
    const selected = e.target.elements.selected.value;
    const combinationsResult = allowRepetition
      ? combinationsWithRepetition(total, selected)
      : combinations(total, selected);
    setResult(combinationsResult); // Actualizar el resultado
  };

  function combinations(n, r) {
    let result = 1;
    for (let i = 1; i <= r; i++) {
      result *= n - i + 1;
      result /= i;
    }
    return result;
  }

  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  function combinationsWithRepetition(n, r) {
    n = Number(n);
    r = Number(r);
    let result = 1;
    let top = n + r - 1;
    top = factorial(top);
    let bot = factorial(r) * factorial(n - 1);
    result = top / bot;
    return result;
  }

  return (
    <>
      <h2>Calcula tus combinaciones</h2>
      <br />
      <p>
        Ingresa la cantidad de elementos totales para la combinación y la
        cantidad de elementos que deseas seleccionar para tu combinación.
      </p>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="container-input">
          <label htmlFor="total">Elementos totales:</label>
          <input
            name="total"
            type="number"
            required placeholder="Ingresa numeros enteros"
          />
        </div>
        <div className="container-input">
          <label htmlFor="selected">Elementos seleccionados:</label>
          <input
            name="selected"
            type="number"
            required placeholder="Ingresa numeros enteros"
          />
        </div>
        <div className="container-switch">
          <h5>Se permiten repeticiones?</h5>
          <label className="switch">
            <input
              type="checkbox"
              onChange={(e) => setAllowRepetition(e.target.checked)}
            />
            <span className="slider" />
          </label>
        </div>
        <input
          className="element-type-button submit-button"
          type="submit"
          value="Calcular"
        />
      </form>
      <br />
      <br />
      {result && <h3>La cantidad de combinaciones es: <span className="highlighted-text">{result}</span></h3>}
    </>
  );
}

export default Combinations;
