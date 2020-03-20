import React, { useEffect, useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [showIntroduction, setShowIntroduction] = useState(true);

  const [gameScore, setGameScore] = useState(null);

  const [gameClicks, setGameClicks] = useState(0);
  const [gameState, setGameState] = useState(getNewGameState());
  const [doorsState, setDoorsState] = useState([false, false, false]);
  const [firstDoorChoice, setFirstDoorChoice] = useState(0);
  const [secondDoorChoice, setSecondDoorChoice] = useState(0);
  const [notShownDoor, setNotShownDoor] = useState(0);
  const [stayed, setStayed] = useState(false);
  const [simulations, setSimulations] = useState(1000);
  const [doors, setDoors] = useState(3);
  const [simResults, setSimResults] = useState(null);

  //const actionHandlerRef = useRef();

  useEffect(() => {
    const actionListener = e => {
      if (gameClicks === 0 && e.target.className === "closed-door") {
        console.log(e.target.className);
        console.log(gameClicks);
        let newDoorsState = [false, false, false];
        if (e.target.className === "App-game-door1") {
          if (gameState[0]) {
            let shownDoor = Math.floor(Math.random() * 2) + 1;
            newDoorsState[shownDoor] = true;
          } else {
            if (gameState[1]) {
              newDoorsState[2] = true;
            } else newDoorsState[1] = true;
          }
        } else if (e.target.className === "App-game-door2") {
          if (gameState[1]) {
            let shownDoor = Math.floor(Math.random() * 2) * 2;
            newDoorsState[shownDoor] = true;
          } else {
            if (gameState[0]) {
              newDoorsState[2] = true;
            } else newDoorsState[2] = true;
          }
        } else if (e.target.className === "App-game-door3") {
          if (gameState[2]) {
            let shownDoor = Math.floor(Math.random() * 2);
            newDoorsState[shownDoor] = true;
          } else {
            if (gameState[0]) {
              newDoorsState[1] = true;
            } else newDoorsState[0] = true;
          }
        }
      }
      if (gameClicks >= 2) {
        setGameState(getNewGameState());
        setDoorsState([false, false, false]);
        setGameClicks(0);
      }
    };

    //actionHandlerRef.current(e);
    document.addEventListener("click", actionListener);
    return () => {
      document.removeEventListener("click", actionListener);
    };
  }, [doorsState, gameClicks, gameState]);

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <h1>Monty Hall Problem Simulator</h1>
        </header>
        <div className="App-body">
          <div className="App-introduction">
            <div
              className="accordian-header"
              onClick={() => {
                setShowIntroduction(!showIntroduction);
              }}
            >
              <div className="App-triangle"></div>
              Introduction:
              {showIntroduction && (
                <div className="accordian-text">
                  <p>
                    The Monty Hall problem is an interesting statistical paradox
                    based on the American TV game show, Let's make a Deal. The
                    game show host would ask a contestant to choose 1 out of 3
                    doors, two doors which hid a goat each, and one that
                    revealed a new car. The host will then reveal a door that
                    the contestant did not pick and had a goat behind it, and
                    then ask the contestant if they would like to switch their
                    choice. Although many would say all doors had an equal
                    chance to lead to the prize of a car, statisticians found
                    that this was not the case. This site will simulate many
                    times the outcomes to help show that switching is a more
                    favorable choice than staying on an initial decision
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="App-game-intro">
            Try out the game! Choose a door then decide to stay or switch
          </div>
          <div className="App-game-text">
            {gameClicks === 0 && <div>Pick a door!</div>}
            {gameClicks === 1 && (
              <div>
                You picked door {firstDoorChoice + 1}. Monty has revealed a
                different door. Click a door to either stay or switch.
              </div>
            )}
            {gameClicks === 2 && (
              <div>
                You picked door {firstDoorChoice + 1}, decided to{" "}
                {stayed ? "stay" : "switch"}, and chose the{" "}
                {gameState[secondDoorChoice] ? "winning" : "losing"} door. Click
                to try again
              </div>
            )}
            {
              //<div classsName="App-game-record">Record: {gameScore}</div>//
            }
          </div>
          <div className="App-game-grid-container">
            {/* <div
              className="App-game-door1"
              onClick={() => {
                let newIsDoorsOpen = doorsState;
                newIsDoorsOpen[0] = !newIsDoorsOpen[0];
                setDoorsState(newIsDoorsOpen);
              }}
            >
              {doorsState[0] && <div>d1 open</div>}
              {!doorsState[0] && <div>d1 close</div>}
            </div>
            <div className="App-game-door2">
              <button
                onClick={() => {
                  let newIsDoorsOpen = doorsState;
                  newIsDoorsOpen[1] = !newIsDoorsOpen[1];
                  setDoorsState(newIsDoorsOpen);
                  console.log(doorsState);
                }}
              >
                {doorsState[1] && <div>d2 open</div>}
                {!doorsState[1] && <div>d2 close</div>}
              </button>
              </div> */}

            <div className="App-game-door1">
              {!doorsState[0] ? (
                <div
                  className="door-option"
                  onClick={() => {
                    if (gameClicks === 0) {
                      let newDoorsState = [false, false, false];
                      if (gameState[0]) {
                        let shownDoor = Math.floor(Math.random() * 2) + 1;
                        newDoorsState[shownDoor] = true;
                        setNotShownDoor(3 - shownDoor);
                      } else {
                        if (gameState[1]) {
                          newDoorsState[2] = true;
                          setNotShownDoor(1);
                        } else {
                          newDoorsState[1] = true;
                          setNotShownDoor(2);
                        }
                      }
                      setDoorsState(newDoorsState);
                      setGameClicks(1);
                      setFirstDoorChoice(0);
                    } else if (gameClicks === 1 && !doorsState[0]) {
                      setSecondDoorChoice(0);
                      setGameClicks(2);
                      setDoorsState([true, true, true]);
                      if (firstDoorChoice === 0) setStayed(true);
                      else {
                        setStayed(false);
                      }
                    }
                  }}
                >
                  {gameClicks === 0 && <div className="door-text">1</div>}
                  {gameClicks === 1 && firstDoorChoice === 0 && (
                    <div className="door-text">Stay</div>
                  )}
                  {gameClicks === 1 && firstDoorChoice !== 0 && (
                    <div className="door-text">Switch</div>
                  )}
                  <div class="door-knob"></div>
                </div>
              ) : (
                <div className="door-object">
                  <div className="door-way">
                    {gameState[0] ? (
                      <div className="door-door">
                        <div className="door-text">
                          Door 1<br />
                          Wins!
                        </div>
                        <div class="door-knob"></div>
                      </div>
                    ) : (
                      <div className="door-door">
                        <div className="door-text">
                          Door 1 is
                          <br />
                          incorrect!
                        </div>
                        <div class="door-knob"></div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="App-game-door2">
              {!doorsState[1] ? (
                <div
                  className="door-option"
                  onClick={() => {
                    if (gameClicks === 0) {
                      let newDoorsState = [false, false, false];
                      if (gameState[1]) {
                        let shownDoor = Math.floor(Math.random() * 2) * 2;
                        newDoorsState[shownDoor] = true;
                        setNotShownDoor(2 - shownDoor);
                      } else {
                        if (gameState[0]) {
                          newDoorsState[2] = true;
                          setNotShownDoor(0);
                        } else {
                          newDoorsState[0] = true;
                          setNotShownDoor(2);
                        }
                      }
                      setDoorsState(newDoorsState);
                      setGameClicks(1);
                      setFirstDoorChoice(1);
                    } else if (gameClicks === 1 && !doorsState[1]) {
                      setSecondDoorChoice(1);
                      setGameClicks(2);
                      setDoorsState([true, true, true]);
                      if (firstDoorChoice === 1) setStayed(true);
                      else {
                        setStayed(false);
                      }
                    }
                  }}
                >
                  {gameClicks === 0 && <div className="door-text">2</div>}
                  {gameClicks === 1 && firstDoorChoice === 0 && (
                    <div className="door-text">Stay</div>
                  )}
                  {gameClicks === 1 && firstDoorChoice !== 0 && (
                    <div className="door-text">Switch</div>
                  )}
                  <div class="door-knob"></div>
                </div>
              ) : (
                <div className="door-object">
                  <div className="door-way">
                    {gameState[1] ? (
                      <div className="door-door">
                        <div className="door-text">
                          Door 2<br />
                          Wins!
                        </div>
                        <div class="door-knob"></div>
                      </div>
                    ) : (
                      <div className="door-door">
                        <div className="door-text">
                          Door 2 is
                          <br />
                          incorrect!
                        </div>
                        <div class="door-knob"></div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="App-game-door3">
              {!doorsState[2] ? (
                <div
                  className="door-option"
                  onClick={() => {
                    if (gameClicks === 0) {
                      let newDoorsState = [false, false, false];
                      if (gameState[2]) {
                        let shownDoor = Math.floor(Math.random() * 2);
                        newDoorsState[shownDoor] = true;
                        setNotShownDoor(1 - shownDoor);
                      } else {
                        if (gameState[0]) {
                          newDoorsState[1] = true;
                          setNotShownDoor(0);
                        } else {
                          newDoorsState[0] = true;
                          setNotShownDoor(1);
                        }
                      }
                      setDoorsState(newDoorsState);
                      setGameClicks(1);
                      setFirstDoorChoice(2);
                    } else if (gameClicks === 1 && !doorsState[2]) {
                      setSecondDoorChoice(2);
                      setGameClicks(2);
                      setDoorsState([true, true, true]);
                      if (firstDoorChoice === 2) setStayed(true);
                      else {
                        setStayed(false);
                      }
                    }
                  }}
                >
                  {gameClicks === 0 && <div className="door-text">3</div>}
                  {gameClicks === 1 && firstDoorChoice === 0 && (
                    <div className="door-text">Stay</div>
                  )}
                  {gameClicks === 1 && firstDoorChoice !== 0 && (
                    <div className="door-text">Switch</div>
                  )}
                  <div class="door-knob"></div>
                </div>
              ) : (
                <div className="door-object">
                  <div className="door-way">
                    {gameState[2] ? (
                      <div className="door-door">
                        <div className="door-text">
                          Door 3<br />
                          Wins!
                        </div>
                        <div class="door-knob"></div>
                      </div>
                    ) : (
                      <div className="door-door">
                        <div className="door-text">
                          Door 3 is
                          <br />
                          incorrect!
                        </div>
                        <div class="door-knob"></div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="App-form-grid">
            <div className="App-form">
              <div className="App-sim-select">
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
              <div className="App-door-select">
                <label>
                  How many doors?<br></br>
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
                className="button"
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
                    while (
                      shownDoor === chosenDoor ||
                      shownDoor === correctDoor
                    ) {
                      shownDoor = Math.floor(Math.random() * doors);
                    }
                    // For Staying
                    if (chosenDoor === correctDoor) {
                      correctForStayingCount++;
                      correctForStaying = true;
                    }

                    // For Switching
                    let switchDoor = chosenDoor;
                    while (
                      switchDoor === chosenDoor ||
                      switchDoor === shownDoor
                    ) {
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
                    simulations,
                    doors,
                    iterations,
                    correctForStayingCount,
                    correctForSwitchingCount
                  });
                }}
              >
                Start
              </button>
            </div>
          </div>
          {simResults && (
            <div className="App-results">
              <h2>Results</h2>
              <div>
                {simResults.simulations} completed for {simResults.doors} doors
              </div>
              <div>
                {simResults.correctForSwitchingCount}/{simResults.simulations} (
                {(
                  (simResults.correctForSwitchingCount /
                    simResults.simulations) *
                  100
                ).toFixed(2)}
                %) correct for switching.
              </div>
              <div>
                {simResults.correctForStayingCount}/{simResults.simulations} (
                {(
                  (simResults.correctForStayingCount / simResults.simulations) *
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
    </div>
  );
};

const getNewGameState = () => {
  const correctDoor = Math.floor(Math.random() * 3);
  if (correctDoor === 0) return [true, false, false];
  else if (correctDoor === 1) return [false, true, false];
  else return [false, false, true];
};

export default App;
