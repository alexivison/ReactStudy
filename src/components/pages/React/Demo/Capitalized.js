import React from 'react'

export const Capitalized = ({ header, onClick }) => {
    if (typeof header === 'string') {
        const capitalized = header.charAt(0).toUpperCase() + header.slice(1)

        return (
            <h1 onClick={onClick} style={onClick && { cursor: "pointer" }}>
                {capitalized}
            </h1>
        )
    } else {
        return null
    }
}