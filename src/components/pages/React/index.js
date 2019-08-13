import React from 'react'

import Props from './Props'
import State from './State'
import StyledComponents from './StyledComponents'
import ReactRouter from './ReactRouter'

import PageHeader from '../../molecules/PageHeader'

const ReactPage = () => (
    <>
        <PageHeader text="Reactの基本" />
        <Props />
        <State />
        <StyledComponents />
        <ReactRouter />
    </>
)

export default ReactPage
