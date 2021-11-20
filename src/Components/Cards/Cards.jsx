import React, { useEffect, useState } from 'react'
import Card from './Card'

const Cards = () => {
    const services = {
        url:"https://api.unsplash.com/",
        path:"/photos/random",
        urlKey:"?client_id=",
        key: "dYUO0r_XcG3_bkcB5FRgXsiLQGjE5nGvijrRml1SLGs"
    }
    const [image, setImage] = useState({
        urls:{
            regular:"",
        }
    });

    const loadImage = async () => {
        const res = await fetch(`${services.url}${services.path}${services.urlKey}${services.key}`);
        const data = await res.json();
        console.log(data);
        setImage(data)
    }
    useEffect(() => {
        
        loadImage();
        
    }, [])
    return (
        <>
            <Card img={image.urls.regular} name="image"/>   
        </>
    )
}

export default Cards
