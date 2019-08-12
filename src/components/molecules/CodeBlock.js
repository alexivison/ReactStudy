import React from 'react'
import styled from 'styled-components'

import Code from '../atoms/Code'

const CodeBlock = ({ children }) => {
    return (
        <Container>
            <Code>{children}</Code>
        </Container>
    )
}

export default CodeBlock

const Container = styled.div`
    display: grid;
    align-content: center;
    grid-area: code;
    padding: 0px 16px;
    font-size: 13px;
    line-height: 1.5;
    background-color: white;
    box-shadow: inset 16px 0px 8px -16px #0000009e;
`