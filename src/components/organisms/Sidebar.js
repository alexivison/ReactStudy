import React, { useState } from 'react'
import { Link as RouterLink } from "react-router-dom"
import styled from 'styled-components'

import Image from '../atoms/Image'

import JSLogo from '../../resources/js-logo.png'
import ReactLogo from '../../resources/react-logo.png'
import HomeIcon from '../../resources/home-icon.png'

const Sidebar = () => {
    const inactiveWidth = 16 + 32 + 16
    const activeWidth = 200
    const [width, setWidth] = useState(inactiveWidth)
    const isActive = width === activeWidth

    const toggleSidebar = () => requestAnimationFrame(() => setWidth(isActive ? inactiveWidth : activeWidth))

    return (
        <Container width={width}>
            <HomeItem onClick={toggleSidebar}>
                <Image src={HomeIcon} size={24} />
            </HomeItem>
            <Item>
                <Link to="/">
                    <LinkImage src={HomeIcon} size={32}/>
                </Link>
            </Item>
            <Item>
                <Link to="/javascript">
                    <LinkImage src={JSLogo} size={32} />
                </Link>
            </Item>
            <Link to="/react">
                <LinkImage src={ReactLogo} size={32} />
            </Link>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    display: grid;
    grid-area: sidebar;
    grid-template-rows: min-content;
    grid-gap: 16px;
    align-content: start;
    transition: width cubic-bezier(0.25, 0.85, 0.35, 0.90) 1s;
    width: ${({ width }) => width}px;
    background-color: #282729;
`

const HomeItem = styled.div`
    display: grid;
    padding: 16px;
    justify-self: end;
`

const Item = styled.div`
    display: grid;
`

const LinkImage = styled(Image)``

const Link = styled(RouterLink)`
    display: grid;
    padding: 0 16px;
    justify-self: start;
    align-self: start;
    ${LinkImage} {
        background-color: black;
        transition: background-color ease-in-out .3s;
    }
    &:hover ${LinkImage} {
        background-color: white;
    }
`