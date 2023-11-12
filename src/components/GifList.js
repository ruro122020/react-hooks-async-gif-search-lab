import React from 'react'

const GifList = ({ gifs }) => {
    return (
        <ul>
            {gifs.map(gifObj =>
                <li key={gifObj.id}>
                    <img src={gifObj.images.original.url} />
                </li>)}
        </ul>
    )
}

export default GifList
