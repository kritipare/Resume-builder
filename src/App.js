import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Template from "./Template";

function App() {
  const [fname, setfName] = useState("John");

  const handleChange = (event) => {
    setfName(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h2>Resume Builder</h2>
        </p>
      </header>
      <div className="body">
        <div class="container">
          <div class="column">
            <Form fname={fname} handleChange={handleChange} />
          </div>
          <div class="column">
            <Template Form fname={fname} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
