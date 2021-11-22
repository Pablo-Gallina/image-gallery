import React, { useEffect, useState, useCallback } from 'react'
import Categories from '../Link/Categories';
import Loader from '../Loader/Loader';
import Card from './Card'

import './Cards.css'
import Search from './search-icon.svg'

const Cards = () => {
    const [images, setImages] = useState([]);
    //Search
    const [inputSearch, setInputSearch] = useState("");

    //Loader
    const [loading, setLoading] = useState(true)

    const loadImage = useCallback(
        async () => {
            const services = {
                url:"https://api.unsplash.com/",
                urlPhotos:"/photos/",
                urlSearch: "/search/photos",
                urlKey:"?client_id=",
                urlKeySearch:`?query=${inputSearch}`,
                key: "dYUO0r_XcG3_bkcB5FRgXsiLQGjE5nGvijrRml1SLGs"
            }
            
            const encodeInputSearch = encodeURI(services.urlKeySearch)
    
            const RandomPhotos = `${services.url}${services.urlPhotos}${services.urlKey}${services.key}`;
            const searchPhoto = `${services.url}${services.urlSearch}${encodeInputSearch}&client_id=${services.key}`;
    
            const peticionUrl = inputSearch !== "" ? searchPhoto : RandomPhotos;
            
            setLoading(true);

            const res = await fetch(peticionUrl);
            const data = await res.json();
            console.log(data.results);
            
            if (data.results)
                setImages(data.results)
            else
                setImages(data)

            setLoading(false);
        },[inputSearch]
    );

    useEffect(() => {  
        loadImage();
    }, [loadImage]);

    const handleSubmit = e =>{
        e.preventDefault();
        const valueInput = e.target[0].value;
        setInputSearch(valueInput);
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="form-search">
                <input type="text" className="input-search" placeholder="Search image" />
                <button type="submit">
                    <i class="fa fa-search"></i>
                </button>
                
            </form>

            <Categories callback={setInputSearch} />

            {loading && <Loader />}
            
            {
                !loading &&
                <div className="container-flex-cards">
                    {
                        images.map(img => {
                            return <Card key={img.id} img={img.urls.small} name="image"/>   
                        })
                    }
                </div>
            }
           
        </>
    )
}

export default Cards
