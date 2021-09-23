import React from 'react';
import Counter from './Components/Counter'


class App extends React.Component {

    state = {
        count: 0
    }
    

    render(){
        return (
            <>
            <Counter />
            </>
        );
    }
}

export default App;