function Combinations() {
  return (
    <>
      <h2>Calcula tus combinaciones</h2>
      <p>
        Ingresa la cantidad de elementos totales para la combinación y la
        cantidad de elementos seleccionados para tu combinación
      </p>
      <form action="">
        <div className="container-input">
          <label htmlFor="total">Elementos totales</label>
          <input name="total" type="text" />
        </div>
        <div className="container-input">
          <label htmlFor="selected">Elementos seleccionados</label>
          <input name="selected" type="text" />
        </div>
        <div className="container-switch">
          <h5>Se permiten repeticiones?</h5>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
        </div>
        <input className="element-type-button" type="submit" value="Calcular" />
      </form>
    </>
  );
}

export default Combinations;
