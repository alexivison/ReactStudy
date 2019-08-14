import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import styled from 'styled-components'

import Routes from './router/routes'

import { White } from './components/styles/colors'

const App = () => (
    <Container>
        <Router>
            <Routes />
        </Router>
    </Container>
)

export default App

const Container = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-areas:
        'sidebar contents contents'
        'sidebar contents contents';
    color: ${White}
`
