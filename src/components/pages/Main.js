import React from 'react'
import styled from 'styled-components'

import Sidebar from '../organisms/Sidebar'

import JavaScript from './JavaScript'
import ReactPage from './React'

import { background } from '../styles/colors'

const Main = () => {
    return (
        <Container>
            <Sidebar />
            <Contents>
                <JavaScript />
                <ReactPage />
            </Contents>
        </Container>
    )
}

export default Main

const Container = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-template-areas:
        'sidebar contents contents'
        'sidebar contents contents';
    min-height: 100vh;
`

const Contents = styled.div`
    grid-area: contents;
    background-color: ${background};
`

