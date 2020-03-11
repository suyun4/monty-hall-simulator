import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table.js";

const App = () => {
  const [simulations, setSimulations] = useState(1000);
  const [doors, setDoors] = useState(3);
  const [simResults, setSimResults] = useState(null);

  console.log(simResults);

  return (
    <div className="App">
      <header className="App-header">Monty Hall Paradox</header>
      <div>
        <div className="App-introduction">
          <p>
            The Monty Hall problem is an interesting statistical paradox based
            on the American TV game show, Let's make a Deal. The game show host
            would ask a contestant to choose 1 out of 3 doors, two doors which
            hid a goat each, and one that revealed a new car. The host will then
            reveal a door that the contestant did not pick and had a goat behind
            it, and then ask the contestant if they would like to switch their
            choice. Although many would say all doors had an equal chance to
            lead to the prize of a car, statisticians found that this was not
            the case. This site will simulate many times the outcomes to help
            show that switching is a more favorable choice than staying on an
            initial decision
          </p>
        </div>
        <div className="App-form">
          <div>
            <label>
              How many simulations?
              <select
                value={simulations}
                onChange={event => setSimulations(event.target.value)}
              >
                <option value="10">10</option>
                <option value="100">100</option>
                <option value="1000">1000</option>
                <option value="1000000">1000000</option>
                <option value="1000000000">100000000</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              How many doors?
              <select
                value={doors}
                onChange={event => setDoors(event.target.value)}
              >
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </label>
          </div>
          <button
            onClick={() => {
              const iterations = [];
              let correctForStayingCount = 0;
              let correctForSwitchingCount = 0;

              for (let i = 1; i <= simulations; i++) {
                const correctDoor = Math.floor(Math.random() * doors);
                const chosenDoor = Math.floor(Math.random() * doors);

                let correctForStaying = false;
                let correctForSwitching = false;
                let shownDoor = chosenDoor;
                while (shownDoor === chosenDoor || shownDoor === correctDoor) {
                  shownDoor = Math.floor(Math.random() * doors);
                }
                // For Staying
                if (chosenDoor === correctDoor) {
                  correctForStayingCount++;
                  correctForStaying = true;
                }

                // For Switching
                let switchDoor = chosenDoor;
                while (switchDoor === chosenDoor || switchDoor === shownDoor) {
                  switchDoor = Math.floor(Math.random() * doors);
                }
                if (switchDoor === correctDoor) {
                  correctForSwitchingCount++;
                  correctForSwitching = true;
                }
                if (i <= 100) {
                  const newResult = {
                    winningDoor: correctDoor,
                    initGuessDoor: chosenDoor,
                    revealedDoor: shownDoor,
                    correctForSwitchingDoor: switchDoor,
                    correctForSwitching,
                    correctForStaying
                  };
                  iterations.push(newResult);
                }
              }
              setSimResults({
                iterations,
                correctForStayingCount,
                correctForSwitchingCount
              });
            }}
          >
            Start
          </button>
        </div>
        {simResults && (
          <div className="App-results">
            <h2>Results</h2>
            <div>
              {simulations} completed for {doors} doors
            </div>
            <div>
              {simResults.correctForSwitchingCount}/{simulations} (
              {(
                (simResults.correctForSwitchingCount / simulations) *
                100
              ).toFixed(2)}
              %) correct for switching.
            </div>
            <div>
              {simResults.correctForStayingCount}/{simulations} (
              {(
                (simResults.correctForStayingCount / simulations) *
                100
              ).toFixed(2)}
              %) correct for staying.
            </div>
            <div className="App-table">
              <table>
                <thead>
                  <tr>
                    <th className="first-column">#</th>
                    <th className="second-column">Winning Door</th>
                    <th>Initial Guess</th>
                    <th>Revealed Door</th>
                    <th>Second Guess</th>
                    <th>Switch Result</th>
                    <th>Stay Result</th>
                  </tr>
                </thead>
                <tbody>
                  {simResults.iterations.map((iteration, index) => {
                    return (
                      <tr key={index}>
                        <td className="first-column">{index + 1}</td>
                        <td className="second-column">
                          {iteration.winningDoor + 1}
                        </td>
                        <td>{iteration.initGuessDoor + 1}</td>
                        <td>{iteration.revealedDoor + 1}</td>
                        <td>{iteration.correctForSwitchingDoor + 1}</td>
                        <td>
                          {iteration.correctForSwitching
                            ? "Correct"
                            : "Incorrect"}
                        </td>
                        <td>
                          {iteration.correctForStaying
                            ? "Correct"
                            : "Incorrect"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
