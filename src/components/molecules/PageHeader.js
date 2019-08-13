import React from 'react'
import styled from 'styled-components'

import Header from '../atoms/Header'

const PageHeader = ({ text }) => {
    return (
        <Container>
            <Header.H1>{text}</Header.H1>
        </Container>
    )
}

export default PageHeader

const Container = styled.div`
    grid-area: header;
    padding: 20px 0px;
    border-bottom: 2px solid #565358;
`