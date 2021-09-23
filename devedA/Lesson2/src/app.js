
// Dev Ed
// React vs Vanilla Javascript | Learn React For Beginners Part 1
// The Power Of JSX | Learn React For Beginners Part 2

function App() {
  return (
            <>
                <Nav />
                <Home/>
            </>
        );
}

function Nav() {
    return (
              <nav>
                  <h1>Logo</h1>
                  <ul>
                      <li>Home</li>
                      <li>Contact</li>
                      <li>About</li>
                  </ul>

              </nav>
          );
  }
  
  function Home() {
    return (
              <div>
                  <h2>Join here</h2>
                  <p>Harry Potter</p>
                  <button>Buy Please</button>
              </div>
          );
  }
  


// ReactDOM.render(React.createElement(App), document.querySelector("#root"));
// OR:
ReactDOM.render(<App />, document.querySelector("#root"));
