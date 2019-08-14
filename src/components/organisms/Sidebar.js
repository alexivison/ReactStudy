import React, { createContext } from 'react'
import styled from 'styled-components'

import SidebarItem from './SidebarItem'

import JSLogo from '../../resources/js-logo.png'
import ReactLogo from '../../resources/react-logo.png'
import ReduxLogo from '../../resources/redux-logo.png'
import HomeIcon from '../../resources/home-icon.png'

const Sidebar = ({ location }) => {
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

    return (
        <LocationProvider value={location}>
            <Container>
                <MenuItem title="Home" image={HomeIcon} path="" />
                <SidebarItem title="JavaScript" image={JSLogo} path="javascript" subItems={jsSubtitles} />
                <SidebarItem title="React" path="react" image={ReactLogo} subItems={reactSubtitles} />
                <SidebarItem title="Redux" path="redux" image={ReduxLogo} subItems={reduxSubtitles} />
            </Container>
        </LocationProvider>
    )
}

export default Sidebar

export const LocationContext = createContext({})
export const LocationProvider = LocationContext.Provider
export const LocationConsumer = LocationContext.Consumer

const Container = styled.div`
    display: grid;
    grid-area: sidebar;
    grid-template-rows: min-content;
    align-content: start;
    background-color: #282729;
    z-index: 1;
`

const MenuItem = styled(SidebarItem)`
    padding: 16px 0;
    border-bottom: 2px solid #565358;
`
