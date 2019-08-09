import React from 'react'

import Destructuring from './Destructuring'
import ArrowFunctions from './ArrowFunctions'
import AsyncAwait from './AsyncAwait'
import SectionHeader from '../../molecules/SectionHeader'

const JavaScript = () => (
    <>
        <SectionHeader text="JavaScriptの基本" />
        <ArrowFunctions />
        <Destructuring />
        <AsyncAwait />
    </>
)

export default JavaScript
