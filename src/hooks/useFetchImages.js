import { useEffect, useState, useCallback } from 'react'

const useFetchImages = () => {
    const [images, setImages] = useState([]);
    //Search
    const [inputSearch, setInputSearch] = useState("");

    //Loader
    const [loading, setLoading] = useState(true)

    //Titulo Imagenes
    const [titleImage, setTitleImage] = useState("Last Images")

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
            
            inputSearch ? setTitleImage(inputSearch) : setTitleImage("Last Images")

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

    return[handleSubmit, setInputSearch, loading, images, titleImage];
}

export default useFetchImages
