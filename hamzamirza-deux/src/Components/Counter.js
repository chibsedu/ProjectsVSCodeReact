import React from 'react';


class Counter extends React.Component {

    render() {
        return (
            <>
                <h3>Counter: 0</h3>
                <button> + </button>
                <button> - </button>
                <button> Reset </button>
            </>
        );
    }
}

export default Counter;