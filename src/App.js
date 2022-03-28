import { useState } from "react";
import Printer from "react-pdf-print";
import "./App.css";
import { data as sampleData } from "./config";
import Form from "./Form";
import Template from "./Template";

function App() {
  const [state, setInitialState] = useState(sampleData);

  // go back to previous step
  const prevStep = (e) => {
    e.preventDefault();
    const { step } = state;
    setInitialState({ ...state, step: step - 1 });
  };

  // proceed to the next step
  const nextStep = (e) => {
    e.preventDefault();
    const { step } = state;
    setInitialState({ ...state, step: step + 1 });
  };

  // Handle fields change
  const handleChange =
    (input, input2, isNested = false, index = -1, projectNumber = 0) =>
    (e) => {
      switch (input) {
        case "projects": {
          let projectClone = state.projects;
          switch (input2) {
            case "details": {
              state.projects[projectNumber].details[index] = e.target.value;
              break;
            }
            default: {
              projectClone[projectNumber][input2] = e.target.value;
              break;
            }
          }
          setInitialState({ ...state, projects: projectClone });
          break;
        }

        case "experience": {
          setInitialState({
            ...state,
            [input]: { ...state[input], [input2]: e.target.value },
          });
          break;
        }

        default: {
          setInitialState({ ...state, [input]: e.target.value });
        }
      }
    };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <img src="https://raw.githubusercontent.com/kritipare/Resume-builder/b3827982d4246c2a78f53f6608a0fb7aecb5b22a/public/Header.png" alt="Resume Builder" />
        </p>
      </header>
      <div className="body">
        <div className="container">
          <div className="column">
            <Form
              state={state}
              handleChange={handleChange}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          </div>
          <div className="column">
            <Printer>
              <Template state={state} />
            </Printer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
