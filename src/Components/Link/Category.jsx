import React from 'react'
import PropTypes from 'prop-types'

const Category = ({callback, search}) => {
    return <label onClick={(()=>callback(search))}>{search}</label>          
}

Category.propTypes = {
    callback : PropTypes.func,
    search : PropTypes.string
}

export default Category
