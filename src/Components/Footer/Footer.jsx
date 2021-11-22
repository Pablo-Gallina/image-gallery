import React from 'react'

import './Footer.css'

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                <label>Gallery image</label>
                <label>Pablo Gallina - © {year}</label>
                <a href="https://unsplash.com/developers" target="_blank" rel="noopener noreferrer">Api Unsplash</a>
                <a href="https://github.com/Pablo-Gallina" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </>
    )
}
