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
    grid-auto-columns: 2fr 1fr 1fr;
    align-items: start;
    grid-template-areas:
        'header header header'
        'info code code'
        'info code code';
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    margin-bottom: 24px;
`