import React from 'react'
import styled from 'styled-components'

const DemoBlock = ({ header: Header, headerTitle, children }) => (
    <Container>
        {Header && <Header>{headerTitle}</Header>}
        {children}
    </Container>
)

export default DemoBlock

const Container = styled.div`
    grid-area: info;
    box-sizing: border-box;
    word-break: break-word;
    font-size: 14px;
    font-weight: 100;
    padding: 16px 0;
    place-self: center;
`