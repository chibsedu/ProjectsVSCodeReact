import Navbar from "./Navbar";
import Home from './Home'



function App() {
  const title = 'Welcome to the new Blog';   
  const likes = 50;
  // const person = {name: 'Yoshi', age: 40}; // Only Numbers, Arrays and Strings (No Objects nor Booleans permitted.)
  const link = 'http://www.google.com';
  return (
    <div className="App">
      < Navbar />
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ /* person*/ }</p> 
        <a href={ link }>Google Site</a>
        <Home />
      </div>
    </div>
  );
}

export default App;
