import React from 'react'
import { Route } from "react-router-dom"
import styled from 'styled-components'

import HomePage from '../components/pages/Home'
import JavaScriptPage from '../components/pages/JavaScript/index'
import ReactPage from '../components/pages/React/index'
import ReduxPage from '../components/pages/Redux/index'
import { background } from '../components/styles/colors'

const Routes = () => (
    <Container>
        <Route path="/" exact component={HomePage} />
        <Route path="/javascript" component={JavaScriptPage} />
        <Route path="/react" component={ReactPage} />
        <Route path="/redux" component={ReduxPage} />
    </Container>
)

export default Routes

const Container = styled.div`
    grid-area: contents;
    height: 100vh;
    overflow: scroll;
    padding: 0 24px;
    background-color: ${background};
`