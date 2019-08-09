import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import styled from 'styled-components'

import Routes from './router/routes'

import Sidebar from './components/organisms/Sidebar'

const App = () => (
    <Container>
        <Router>
            <Sidebar />
            <Routes />
        </Router>
    </Container>
)

export default App

const Container = styled.div`
    display: grid;
    grid-template-columns: max-content;
    grid-template-areas:
        'sidebar contents contents'
        'sidebar contents contents';
`
