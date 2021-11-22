import React from 'react'
import PropTypes from 'prop-types'

const Card = ({img, name, title=""}) => {
    return (
        
        <div className="card">
            {title !== "" && <h1>{title}</h1>}
            <img src={img} alt={name}/>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string
}

export default Card
