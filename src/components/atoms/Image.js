import React from 'react'
import styled from 'styled-components'

const Image = ({ size, className, ...props }) => (
    <Img className={className} size={size} {...props} />
)

export default Image

const Img = styled.img`
    ${({ size }) => size && `
        width: ${size}px;
        height: ${size}px;
    `}
    border-radius: 4px;
`