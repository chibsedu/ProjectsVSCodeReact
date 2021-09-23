
import Mform from "./Mform";


function App() {
  const title = 'Create a Weight Converter App with React and JavaScript';   // Only Numbers, Arrays and Strings (No Objects nor Booleans permitted.)
 
  return (
    <div className="App">

      <div className="content">      
        <h1>{ title }</h1>
        < Mform />
      </div>

    </div>
  );
}

export default App;
