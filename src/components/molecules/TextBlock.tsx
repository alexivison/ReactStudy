import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import Text from '../atoms/Text'

interface Props {
    header: FunctionComponent,
    headerTitle: string,
    children: string,
}

const TextBlock: FunctionComponent<Props> = ({ header: Header, headerTitle, children }) => (
    <Container>
        {Header && <Header>{headerTitle}</Header>}
        <Text>{children.trim()}</Text>
    </Container>
)

export default TextBlock

const Container = styled.div`
    grid-area: info;
    box-sizing: border-box;
    word-break: break-word;
    font-size: 14px;
    font-weight: 100;
    padding: 8px 0;
`