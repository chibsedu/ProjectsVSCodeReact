
// React : Chapitre 2, Nos premiers pas avec React

const title = React.createElement('h1', {}, 'Salem 3Aleykum!!!!');
//console.log(title);

//ReactDOM.render(title, document.getElementById('root'));


const domContainer = document.querySelector('#root');
//console.log(domContainer);
ReactDOM.render(title, domContainer);
