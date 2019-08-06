import React from 'react'
import styled from 'styled-components'

const SectionInfo = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default SectionInfo

const Container = styled.div`
    grid-area: info;
    box-sizing: border-box;
    word-break: break-word;
    font-size: 14px;
    padding: 0px 24px;
`