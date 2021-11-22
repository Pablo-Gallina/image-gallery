import React from 'react'
import PropTypes from 'prop-types'
import Category from './Category'

import './Link.css'

const Categories = ({ callback }) => {
    const listCategories = ["Wallpaper", "Nature", "Animals", "Minimalist", "Universe"]
    return (
        <>
            <div className="categories">
                {
                    listCategories.map((category) => <Category key={category} callback={callback} search={category} />)
                }
            </div>
        </>
    )
}

Categories.propTypes = {
    callback: PropTypes.func
}

export default Categories
