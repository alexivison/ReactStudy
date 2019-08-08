import React from 'react'
import styled from 'styled-components'

import Text from '../atoms/Text'

const SectionInfo = ({ header: Header, headerTitle, children }) => {
    return (
        <Container>
            {Header && <Header>{headerTitle}</Header>}
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