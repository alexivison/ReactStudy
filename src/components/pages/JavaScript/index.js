import React from 'react'

import Destructuring from './Destructuring'
import ArrowFunctions from './ArrowFunctions'
import AsyncAwait from './AsyncAwait'

import PageHeader from '../../molecules/PageHeader'

const JavaScript = () => (
    <>
        <PageHeader text="JavaScriptの基本" />
        <ArrowFunctions />
        <Destructuring />
        <AsyncAwait />
    </>
)

export default JavaScript
