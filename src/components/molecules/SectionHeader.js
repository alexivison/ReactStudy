import React from 'react'
import styled from 'styled-components'

import Header from '../atoms/Header'
import { White } from '../styles/colors'

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
    padding: 20px 0px;
    border-bottom: 2px solid ${White};
`