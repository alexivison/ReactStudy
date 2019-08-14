import React from 'react'
import styled from 'styled-components'

import Code from '../atoms/Code'

const CodeBlock = ({ children, code, showDivider = true }) => {
    return (
        <Container>
            <Code>{children}</Code>
            {showDivider && <Divider />}
        </Container>
    )
}

export default CodeBlock

const Container = styled.div`
    position: relative;
    display: grid;
    align-content: center;
    grid-area: code;
    padding: 0px 24px;
    font-size: 12px;
    line-height: 1.5;
    background-color: white;
    box-shadow: inset 16px 0px 8px -16px #3a3a3aed;
`

const Divider = styled.div`
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: #dedede;
    -webkit-mask-image: -webkit-gradient(linear,left top,right bottom, 
        color-stop(0.00,rgba(0, 0, 0, 0.25)), 
        color-stop(0.35,rgba(0, 0, 0, 0.15)), 
        color-stop(0.50,rgba(0, 0, 0, 0)), 
        color-stop(0.65,rgba(0,0,0,0)), 
        color-stop(1.00,rgba(0,0,0,0)));
`