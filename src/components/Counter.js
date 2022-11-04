const Counter = ({ state, setState }) => {
  console.log(state[0]);
  const handleChangePlus1 = () => {
    const newTab = [...state];
    newTab[0] = newTab[0] + 1;
    setState(newTab);
  };

  const handleChangeMinus1 = () => {
    const newTab = [...state];
    newTab[0] = newTab[0] - 1;
    setState(newTab);
  };

  const handleReset1 = () => {
    const newTab = [...state];
    newTab[0] = 0;
    setState(newTab);
  };
  const handleChangePlus2 = () => {
    const newTab = [...state];
    newTab[1] = newTab[1] + 1;
    setState(newTab);
  };

  const handleChangeMinus2 = () => {
    const newTab = [...state];
    newTab[1] = newTab[1] - 1;
    setState(newTab);
  };

  const handleReset2 = () => {
    const newTab = [...state];
    newTab[1] = 0;
    setState(newTab);
  };

  return (
    <div className="counter">
      <div className="number">
        <button onClick={handleChangeMinus1}>-</button>
        <p>{state[0]}</p>
        <button onClick={handleChangePlus1}>+</button>
      </div>
      <button onClick={handleReset1} className="reset">
        Reset
      </button>
      <div className="number">
        <button onClick={handleChangeMinus2}>-</button>
        <p>{state[1]}</p>
        <button onClick={handleChangePlus2}>+</button>
      </div>
      <button onClick={handleReset2} className="reset">
        Reset
      </button>
    </div>
  );
};

export default Counter;
