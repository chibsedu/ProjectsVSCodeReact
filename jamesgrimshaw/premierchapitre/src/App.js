import './App.css';
import Header from './Header';
import {useState} from 'react'



function App() {

const [name, setName] = useState('Guest');

function changeName(){
  setName( 'James' );
}

  return (
    <div className="App">
      <header className="App-header">
        <Header title={name}/>
        <button onClick={changeName}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
