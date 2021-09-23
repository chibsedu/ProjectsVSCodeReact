// rafce

import React from 'react'
import Button from './Button'

const Header = (props) => {          //(props) --> {title} et {props.tile} --> {title}
    return (
        <header className='header'>
            <h1 style={{ color: 'red', backgroundColor: 'black'}}>{props.title}</h1>  
            <Button />        
        </header>
    )
}

export default Header
