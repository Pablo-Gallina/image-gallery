import React, { useEffect, useState, useCallback } from 'react'
import Card from './Card'
import './Cards.css'

const Cards = () => {
    const [images, setImages] = useState([]);
    //Search
    const [inputSearch, setInputSearch] = useState("");

    

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
            
            const res = await fetch(peticionUrl);
            const data = await res.json();
            console.log(data);
    
            if (data.results)
                setImages(data.results)
            else
                setImages(data)
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
            <form onSubmit={handleSubmit}>
                <label>Buscar Imagen <input type="text" /> </label>
            </form>
            <br />
            <div className="container-flex">
                {
                    images.map(img => {
                        return <Card key={img.id} img={img.urls.regular} name="image"/>   
                    })
                }
            </div>
        </>
    )
}

export default Cards
