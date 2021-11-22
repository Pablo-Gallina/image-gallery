import React from 'react'
import PropTypes from 'prop-types'

import './FormSearch.css'

const FormSearch = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="form-search">
            <input type="text" className="input-search" placeholder="Search image" />
            <button type="submit">
                <i class="fa fa-search"></i>
            </button>
        </form>
    )
}

FormSearch.propTypes = {
    handleSubmit: PropTypes.func
}

export default FormSearch
