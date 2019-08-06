import React from 'react'
import styled from 'styled-components'

const Section = ({ children, ...props }) => {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

export default Section

const Container = styled.div`
    display: grid;
    grid-auto-columns: auto auto max-content;
    grid-template-areas:
        'header header header'
        'info code code'
        'info code code';
    grid-row-gap: 16px;
    margin-bottom: 16px;
`