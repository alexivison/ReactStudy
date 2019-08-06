import React from 'react'
import styled from 'styled-components'

import Text from '../atoms/Text'
import Header from '../atoms/Header'

const SectionInfo = ({ header, children }) => {
    return (
        <Container>
            {header && <Header.H2>{header}</Header.H2>}
            <Text>{children}</Text>
        </Container>
    )
}

export default SectionInfo

const Container = styled.div`
    grid-area: info;
    box-sizing: border-box;
    word-break: break-word;
    font-size: 14px;
    padding: 0px 24px;
`