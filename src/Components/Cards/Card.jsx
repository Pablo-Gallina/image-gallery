import React from 'react'
import PropTypes from 'prop-types'

const Card = ({img, name, title=""}) => {
    return (
        <div className="card">
            {title !== "" && <h1>{title}</h1>}
            <div className="overlay">
                <button><a href={img.links.download} target="_blank" rel="noreferrer">Download</a></button>
            </div>
            <img src={img.urls.small} alt={name}/>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.object,
    name: PropTypes.string
}

export default Card
