const Counter = ({ state, setState, counter }) => {
  //   console.log(counter);
  const handleChangePlus = () => {
    const newTab = [...state];
    newTab[counter] = newTab[counter] + 1;
    setState(newTab);
  };

  const handleChangeMinus = () => {
    const newTab = [...state];
    newTab[counter] = newTab[counter] - 1;
    setState(newTab);
  };

  const handleReset = () => {
    const newTab = [...state];
    newTab[counter] = 0;
    setState(newTab);
  };

  return (
    <div className="counter">
      <div className="number">
        <button onClick={handleChangeMinus}>-</button>
        <p>{state[counter]}</p>
        <button onClick={handleChangePlus}>+</button>
      </div>
      <button onClick={handleReset} className="reset">
        Reset
      </button>
    </div>
  );
};

export default Counter;
