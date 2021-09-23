import React from 'react'

const Home = () => {
    const handleClick = () => console.log("Click transmis");
    const handleClickAgain = (name) => console.log("Hello " + name);

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick /* Don't invoque with (), juste pass a reference */}>Click me</button>
            <button onClick={() => {
                 handleClickAgain('mario');
            }}>Click me Again</button>
        </div>
    )
}

export default Home;
