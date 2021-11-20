import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Cards.css'

const Cards = () => {
    const services = {
        url:"https://api.unsplash.com/",
        path:"/photos/",
        urlKey:"?client_id=",
        key: "dYUO0r_XcG3_bkcB5FRgXsiLQGjE5nGvijrRml1SLGs"
    }
    const [images, setImages] = useState([]);

    const loadImage = async () => {
        const res = await fetch(`${services.url}${services.path}${services.urlKey}${services.key}`);
        const data = await res.json();
        console.log(data);
        setImages(data)
    }
    useEffect(() => {  
        loadImage();
    }, []);

    return (
        <>
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
