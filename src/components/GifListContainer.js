import React, { useEffect, useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
const GifListContainer = () => {
    const [gifList, setGifList] = useState([])
    const handleSearchSubmit = (searchValue) => {

    }
    return (
        <div>
            <GifSearch onHanldeSubmit={handleSearchSubmit} />
            <GifList gifs={gifList} />
        </div>
    )
}

export default GifListContainer
