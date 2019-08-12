import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from "react-router-dom"
import styled from 'styled-components'

import Subtitles from '../molecules/SidebarList'
import Image from '../atoms/Image'
import { White } from '../styles/colors'

import JSLogo from '../../resources/js-logo.png'
import ReactLogo from '../../resources/react-logo.png'
import ReduxLogo from '../../resources/redux-logo.png'
import HomeIcon from '../../resources/home-icon.png'

const Sidebar = ({ location }) => {
    const inactiveWidth = 64
    const activeWidth = 200
    const [width, setWidth] = useState(inactiveWidth)
    const [currentPath, setCurrentPath] = useState("")
    const isActive = width === activeWidth

    const jsSubtitles = [
        { path: "javascript", title: "Arrow functions", linkTo: "arrow-functions" },
        { path: "javascript", title: "Destructuring", linkTo: "destructuring" },
        { path: "javascript", title: "Async / Await", linkTo: 'async-await' },
    ]

    const reactSubtitles = [
        { path: "react", title: "Props", linkTo: 'props' },
        { path: "react", title: "State", linkTo: 'state' },
        { path: "react", title: "Styled Components", linkTo: 'styled' },
        { path: "react", title: "React Router", linkTo: 'react-router' },
    ]

    const reduxSubtitles = []

    useEffect(() => {
        const path = location.pathname.replace(/^\/+/, '')
        setCurrentPath(path)
    }, [location])

    const toggleSidebar = () => requestAnimationFrame(() => setWidth(isActive ? inactiveWidth : activeWidth))

    return (
        <Container width={width} onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
            <MenuItem>
            <Link to="/">
                    <LinkImage src={HomeIcon} size={32}/>
                    <LinkTitle>ホーム</LinkTitle>
                </Link>
            </MenuItem>
            {/* <Item>
                <Link to="/">
                    <LinkImage src={HomeIcon} size={32}/>
                    <LinkTitle>ホーム</LinkTitle>
                </Link>
            </Item> */}
            <Item>
                <Link to="/javascript">
                    <LinkImage src={JSLogo} size={32} path="javascript" currentPath={currentPath} />
                    <LinkTitle>JavaScript</LinkTitle>
                </Link>
                <Subtitles items={jsSubtitles} sidebarActive={isActive} />
            </Item>
            <Item>
                <Link to="/react">
                    <LinkImage src={ReactLogo} size={32} path="react" currentPath={currentPath} />
                    <LinkTitle>React</LinkTitle>
                </Link>
                <Subtitles items={reactSubtitles} sidebarActive={isActive} />
            </Item>
            <Item>
                <Link to="/redux">
                    <LinkImage src={ReduxLogo} size={32} path="redux" currentPath={currentPath} />
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
    box-shadow: inset -16px 0px 8px -16px #00000040;
`

const Item = styled.div`
    display: grid;
    user-select: none;
`

const MenuItem = styled(Item)`
    padding: 16px 0;
    border-bottom: 1px solid #757575;
`

const LinkImage = styled(Image)`
    ${({ path, currentPath }) => `
        background-color: ${path === currentPath ? White : 'black'};
    `}
`

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
        transition: background-color ease-in-out .3s;
    }

    &:hover ${LinkImage} {
        background-color: ${White};
    }

    ${LinkTitle} {
        display: grid;
        justify-content: center;
        align-content: center;
        font-weight: 500;
        transition: color ease-in-out .3s;
    }

    &:hover ${LinkTitle} {
        color: ${White};
    }
`