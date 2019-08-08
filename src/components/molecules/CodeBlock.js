import React from 'react'
import styled from 'styled-components'

import Code from '../atoms/Code'

const SectionContent = ({ children }) => {
    return (
        <Container>
            <Code>{children}</Code>
        </Container>
    )
}

export default SectionContent

const Container = styled.div`
    grid-area: code;
    padding: 8px 24px;
    margin: 0 16px;
    border-radius: 16px;
    background-color: white;
`