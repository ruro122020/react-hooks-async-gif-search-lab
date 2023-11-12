import React, { useState } from 'react'

const GifSearch = ({ onHanldeSubmit }) => {
    const [searchInput, setSearchInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        onHanldeSubmit(searchInput)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter a Search Term:
                <input
                    type='search'
                    name='search'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </label>
            <button type='submit'>Find Gifs</button>
        </form>
    )
}

export default GifSearch
