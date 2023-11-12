import React, { useEffect, useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
const GifListContainer = () => {
    const [gifList, setGifList] = useState([])
    const handleSearchSubmit = (searchValue) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}n&api_key=${process.env.REACT_APP_KEY}&rating=g`)
            .then(res => res.json())
            .then(giph => setGifList(giph.data.slice(0, 3)))
    }
    return (
        <div>
            <GifSearch onHanldeSubmit={handleSearchSubmit} />
            <GifList gifs={gifList} />
        </div>
    )
}

export default GifListContainer
