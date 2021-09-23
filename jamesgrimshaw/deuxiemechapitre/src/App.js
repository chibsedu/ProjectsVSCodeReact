import "./App.css";
import Header from "./Header";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("Guest");

  // useEffect Hooks:
  useEffect(
    function () {
      console.log("Salem " + name);
    },
    [name]
  );

  function changeName() {
    setName("James");
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header title={name} />
        <button onClick={changeName}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
