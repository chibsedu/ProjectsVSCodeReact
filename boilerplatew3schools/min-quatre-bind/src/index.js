import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
  constructor(props) {
    super(props)
    this.shoot = this.shoot.bind(this)      // Si on commente cette ligne, on obtient undefined. 
                                            // Without the binding, the this keyword would return undefined.
  }
  shoot() {
    alert(this);
    /*
    Thanks to the binding in the constructor function,
    the 'this' keyword now refers to the component object
    */
  }
  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
