import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch20 } from "@fortawesome/free-solid-svg-icons";
import Counter from "./components/Counter";
library.add(faStopwatch20);

function App() {
  const [tab, setTab] = useState([0, 0, 0, 1]);

  const addCounter = () => {
    const newTab = [...tab];
    newTab[3] = newTab[3] + 1;
    setTab(newTab);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <button onClick={addCounter} className="add-counter">
            Add Counter
          </button>
        </div>
        <div className="counters">
          <Counter state={tab} setState={setTab} />

          {/* <Counter state={tab} setState={setTab} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
