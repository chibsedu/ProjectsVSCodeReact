import React from 'react';


class Greetings extends React.Component {
    
    render(){

        console.log(this);

        return (
            <h1>Salem Salem {this.props.name}</h1>
        );
    }
}

export default Greetings;