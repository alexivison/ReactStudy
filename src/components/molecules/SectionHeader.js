import React from 'react'
import styled from 'styled-components'

import Header from '../atoms/Header'

const SectionHeader = ({ text }) => {
    return (
        <Container>
            <Header.H1>{text}</Header.H1>
        </Container>
    )
}

export default SectionHeader

const Container = styled.div`
    grid-area: header;
    padding: 16px 0px;
    margin: 0px 16px;
    border-bottom: 2px solid rebeccapurple;
`