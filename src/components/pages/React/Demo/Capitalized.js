import React from 'react'

export const Capitalized = ({ header, onClick }) => {
    if (typeof header === 'string') {
        const capitalized = header.charAt(0).toUpperCase() + header.slice(1)

        return (
            <h2 onClick={onClick} style={{ cursor: onClick && "pointer", margin: 0, paddingBottom: 16 }}>
                {capitalized}
            </h2>
        )
    } else {
        return null
    }
}