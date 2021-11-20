import React from 'react'
import PropTypes from 'prop-types'

const Card = ({img, name}) => {
    return (
        <div className="card">
            Card <br />
            <img src={img} alt={name}/>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string
}

export default Card
