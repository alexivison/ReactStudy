import React from 'react'

import Props from './Props'
import State from './State'
import StyledComponents from './StyledComponents'
import ReactRouter from './ReactRouter'

import SectionHeader from '../../molecules/SectionHeader'

const ReactPage = () => (
    <>
        <SectionHeader text="Reactの基本" />
        <Props />
        <State />
        <StyledComponents />
        <ReactRouter />
    </>
)

export default ReactPage
