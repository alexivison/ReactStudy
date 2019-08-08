import React from 'react'
import { Route } from "react-router-dom"
import styled from 'styled-components'

import Home from '../components/pages/Home'
import JavaScript from '../components/pages/JavaScript'
import ReactPage from '../components/pages/React'
import { background } from '../components/styles/colors'

const Routes = () => (
    <Container>
        <Route path="/" exact component={Home} />
        <Route path="/javascript" component={JavaScript} />
        <Route path="/react" component={ReactPage} />
    </Container>
)

export default Routes

const Container = styled.div`
    grid-area: contents;
    background-color: ${background};
`