
let n = 0;

function render() {
    const title =   React.createElement('h1', {}, 'Salem compteur: ',
                    React.createElement('span', {},  n ));

    ReactDOM.render(title, document.querySelector('#root'));
    
}

render();

window.setInterval(() => {
    n++;
    render();
}, 1000);