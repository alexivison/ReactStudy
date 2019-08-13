import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import BaseHeader from '../atoms/Header'

const DemoBlock = ({ children, headerTitle }) => {
    const [header, setTitle] = useState("Demo")

    useEffect(() => {
        if (headerTitle) {
            setTitle(headerTitle)
        } else if (children && children.type) {
            setTitle(children.type.name)
        }
    }, [children, headerTitle])

    return (
        <Container>
            <Header>{header}</Header>
            <Demo>{children}</Demo>
        </Container>
    )
}

export default DemoBlock

const Container = styled.div`
    display: grid;
    grid-area: info;
    grid-template-rows: auto 1fr;
    grid-gap: 8px;
    box-sizing: border-box;
    word-break: break-word;
    font-size: 14px;
    font-weight: 100;
    padding: 16px;
    margin: 16px 0;
    background-color: #282729;
`

const Header = styled(BaseHeader.H3)`
    color: #656464;
    margin: 0;
    padding: 0;
    user-select: none;
`

const Demo = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    justify-self: center;
    align-self: center;
`