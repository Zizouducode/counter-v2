import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch20 } from "@fortawesome/free-solid-svg-icons";
import Counter from "./components/Counter";
library.add(faStopwatch20);

function App() {
  const [tab, setTab] = useState([0]);

  const addCounter = () => {
    const newTab = [...tab];
    newTab.push(0);
    setTab(newTab);
  };
  console.log(tab);
  return (
    <div className="App">
      <Header />
      <div className="container">
        {tab.length < 3 ? (
          <div>
            <button onClick={addCounter} className="add-counter">
              Add Counter
            </button>
          </div>
        ) : null}
        {tab.map((elem, index) => {
          return (
            <div className="counters" key={index}>
              <Counter state={tab} setState={setTab} counter={index} />
            </div>
          );
        })}
        {/* <div className="counters">
          {tab[3] === 1 ? (
            <Counter state={tab} setState={setTab} counter={0} />
          ) : (
            ""
          )}
          {tab[3] === 2 ? (
            <div className="counters">
              <Counter state={tab} setState={setTab} counter={0} />{" "}
              <Counter state={tab} setState={setTab} counter={1} />
            </div>
          ) : (
            ""
          )}
          {tab[3] === 3 ? (
            <div className="counters">
              <Counter state={tab} setState={setTab} counter={0} />{" "}
              <Counter state={tab} setState={setTab} counter={1} />
              <Counter state={tab} setState={setTab} counter={2} />
            </div>
          ) : (
            ""
          )}
        </div> */}
      </div>
    </div>
  );
}

export default App;
