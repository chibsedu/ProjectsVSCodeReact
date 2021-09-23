
import React, { Component } from 'react'

class Welcome extends Component {

    constructor(){
        super();
        this.state = {
            count : 0
        };
    }

    incremente() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decremente() {
        this.setState({
            count: this.state.count - 1
        });
    }



    render() {
        return (
            <div>
                <h1>Salem {this.props.name}.</h1>
                <p>Mon Compteur: { this.state.count }</p>
                <button onClick={() => this.incremente()}>Ajouter 1</button>
                <button onClick={ this.decremente.bind(this) }>Enlever 1</button>
            </div>

        );
    }
}

export default Welcome;

