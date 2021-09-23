
// Dev Ed
// React vs Vanilla Javascript | Learn React For Beginners Part 1
// The Power Of JSX | Learn React For Beginners Part 2

function App() {
  return React.createElement("div", null, [
    React.createElement("button", null, "Click"),
    React.createElement("button", null, "Click"),
    React.createElement("p", null, "0")
  ]);
}

ReactDOM.render(React.createElement(App), document.querySelector("#root"));
