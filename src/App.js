import React, { useState } from "react";
import "./App.css";

function App() {
  // debugger;
  const [inner, setInner] = useState({});
  const [theme, setTheme] = useState(false);
  const getInputs = (data) => {
    let { name, value } = data.target;
    let input = { [name]: value };
    setInner({ ...inner, ...input });
    console.log(input);
  };
  const toggleTheme = () => {
    setTheme(!theme);
  };
  const styles = {
    internal: {
      color: "violet",
    },
  };
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="external">Internal styling</h1>
        <h1 style={styles.internal}>External styling</h1>
        <h1
          style={{
            color: "violet",
            backgroundColor: "black",
            display: "inline-block",
          }}
        >
          Inline styling
        </h1>
        <div>
          <button onClick={toggleTheme}>toggleTheme</button>
        </div>
        <></>
        <div>
          <div></div>
          <input
            type="text"
            placeholder="enter name"
            name="name"
            onChange={getInputs}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter age"
            name="age"
            onChange={getInputs}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Years of experience"
            name="yon"
            onChange={getInputs}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
