import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Section = ({ children: passedChildren, ...props }) => {
    const [children, addChild] = useState(React.Children.toArray(passedChildren))
    const codeBlock = children.find((child) => child.type.name === "CodeBlock")

    useEffect(() => {
        if (!codeBlock) {
            addChild((c) => [...c, <CodePlaceholder key="placeholder" />])
        }
    }, [codeBlock])

    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

export default Section

const Container = styled.div`
    display: grid;
    grid-auto-columns: 2fr 2fr 1fr;
    grid-template-areas:
        'header header header'
        'info code code'
        'info code code';
    grid-column-gap: 16px;
`

const CodePlaceholder = styled.div`
    grid-area: code;
    padding: 0px 16px;
    background-color: white;
    box-shadow: inset 16px 0px 8px -16px #3a3a3aed;
`