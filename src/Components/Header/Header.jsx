import React from 'react'
import logo from './logo.svg';
import './Header.css'

const Header = () => {
    return (
        <>  
            <div className="flex-container">
                <img src={logo} alt="logo" />
                <h1>Image Gallery</h1>
            </div>
        </>
    )
}

export default Header
