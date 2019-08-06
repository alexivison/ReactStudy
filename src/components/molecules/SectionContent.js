import React from 'react'
import styled from 'styled-components'

import Code from '../atoms/Code'

const SectionContent = () => {
    return (
        <Container>
            <Code>
                {`
// A component that is awesome
const Hoge = (...props) => {
    return (
        <div>
            <h1>Hage</h1>
        </div>
    )
}
                `}
            </Code>
        </Container>
    )
}

export default SectionContent

const Container = styled.div`
    grid-area: code;
    padding: 16px 24px;
    margin: 0 16px;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0px 2px 16px 4px rebeccapurple;
`