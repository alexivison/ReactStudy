import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import Section from '../../organisms/Section'
import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import DemoBlock from '../../molecules/DemoBlock'

interface Props {}

const ReactRouter: FunctionComponent<Props> = () => (
    <Container id="react-router">
        <Section>
            <TextBlock>
                {``}
            </TextBlock>
            <CodeBlock code={null} />
        </Section>
    </Container>
)

export default ReactRouter

const Container = styled.div``