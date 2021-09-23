import { useState } from 'react';
import Navbar from "./Navbar";


function App() {
  const title = 'Welcome to the new Blog';   // Only Numbers, Arrays and Strings (No Objects nor Booleans permitted.)
  const [count, setCount] = useState(4);
  
  function decrementCount(){
    setCount(count - 1);
  }
  function incrementCount(){
    setCount(count + 1);
  }

  return (
    <div className="App">

      < Navbar />

      <div className="content">
        <h1>{ title }</h1>

        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>

    </div>
  );
}

export default App;
