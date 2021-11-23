import React from 'react'
import useFetchImages from '../../hooks/useFetchImages';
import Categories from '../Link/Categories';
import Loader from '../Loader/Loader';
import Card from './Card'

import './Cards.css'
import FormSearch from './FormSearch';

const Cards = () => {
    
    const [handleSubmit, setInputSearch, loading, images, titleImage] = useFetchImages()
    return (
        <>
           <FormSearch handleSubmit={handleSubmit} />

            <Categories callback={setInputSearch} />

            {loading && <Loader />}

            {
                !loading &&
                <div className="container-flex-cards">
                    {images.length <= 0 && <h1>Without results</h1>}
                    {
                        images.map((img, i) => {
                            return <Card key={img.id} img={img} name="image" title={i===0 && titleImage}/>
                        })
                    }
                </div>
            }
           
        </>
    )
}

export default Cards
