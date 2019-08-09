import React, { useState } from 'react'
import { Link as RouterLink } from "react-router-dom"
import styled from 'styled-components'

import Subtitles from '../molecules/SidebarList'
import Image from '../atoms/Image'

import JSLogo from '../../resources/js-logo.png'
import ReactLogo from '../../resources/react-logo.png'
import ReduxLogo from '../../resources/redux-logo.png'
import HomeIcon from '../../resources/home-icon.png'
import MenuIcon from '../../resources/menu-icon.png'

const Sidebar = (props) => {
    const inactiveWidth = 64
    const activeWidth = 200
    const [width, setWidth] = useState(inactiveWidth)
    const isActive = width === activeWidth

    const jsSubtitles = [
        { title: "Arrow functions", linkTo: "arrow-functions" },
        { title: "Destructuring", linkTo: "destructuring" },
        { title: "Async / Await", linkTo: 'async-await' },
    ]

    const reactSubtitles = [
        { title: "Props & State", linkTo: 'props-state' },
        { title: "Styled Components", linkTo: 'styled' },
        { title: "React Router", linkTo: 'react-router' },
    ]

    const reduxSubtitles = []

    const toggleSidebar = () => requestAnimationFrame(() => setWidth(isActive ? inactiveWidth : activeWidth))

    return (
        <Container width={width}>
            <MenuItem onClick={toggleSidebar}>
                <Image src={MenuIcon} size={32} />
            </MenuItem>
            <Item>
                <Link to="/">
                    <LinkImage src={HomeIcon} size={32}/>
                    <LinkTitle>ホーム</LinkTitle>
                </Link>
            </Item>
            <Item>
                <Link to="/javascript">
                    <LinkImage src={JSLogo} size={32} />
                    <LinkTitle>JavaScript</LinkTitle>
                </Link>
                <Subtitles items={jsSubtitles} sidebarActive={isActive} />
            </Item>
            <Item>
                <Link to="/react">
                    <LinkImage src={ReactLogo} size={32} />
                    <LinkTitle>React</LinkTitle>
                </Link>
                <Subtitles items={reactSubtitles} sidebarActive={isActive} />
            </Item>
            <Item>
                <Link to="/redux">
                    <LinkImage src={ReduxLogo} size={32} />
                    <LinkTitle>Redux</LinkTitle>
                </Link>
                <Subtitles items={reduxSubtitles} sidebarActive={isActive} />
            </Item>
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
    transition: width cubic-bezier(0.25, 0.85, 0.35, 0.90) .5s;
    width: ${({ width }) => width}px;
    background-color: #282729;
`

const Item = styled.div`
    display: grid;
    user-select: none;
`

const MenuItem = styled(Item)`
    padding: 16px;
    border-bottom: 1px solid #757575;
`

const LinkImage = styled(Image)``

const LinkTitle = styled.div``

const Link = styled(RouterLink)`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    justify-self: start;
    align-self: start;
    padding: 0 16px;
    text-decoration: none;
    color: lightgray;
    
    ${LinkImage} {
        background-color: black;
        transition: background-color ease-in-out .3s;
    }

    &:hover ${LinkImage} {
        background-color: white;
    }

    ${LinkTitle} {
        display: grid;
        justify-content: center;
        align-content: center;
        font-weight: 500;
        transition: color ease-in-out .3s;
    }

    &:hover ${LinkTitle} {
        color: white;
    }
`