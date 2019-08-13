import React from 'react'
import styled from 'styled-components'

import Section from '../../organisms/Section'
import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import Header from '../../atoms/Header'

const AsyncAwait = () => (
    <Container id="async-await">
        <Section>
            <TextBlock header={Header.H2} headerTitle="[WIP] Async & Await">
                {`
                そのうちね
                `}
            </TextBlock>
            <CodeBlock>
                {``}
            </CodeBlock>
        </Section>
    </Container>
)

export default AsyncAwait

const Container = styled.div``
