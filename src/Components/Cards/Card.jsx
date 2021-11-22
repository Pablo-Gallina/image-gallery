import React from 'react'
import PropTypes from 'prop-types'

const Card = ({img, name}) => {
    return (
        <div className="card">
            <img src={img} alt={name}/>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string
}

export default Card
