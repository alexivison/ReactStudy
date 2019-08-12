import React from 'react'

import Section from '../../organisms/Section'
import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import DemoBlock from '../../molecules/DemoBlock'
import Header from '../../atoms/Header'

const State = () => (
    <>
        <Section id="state">
            <TextBlock header={Header.H2} headerTitle="Stateとは">
                {`
                Stateというのは、名前の通りコンポーネントが持ってる情報の状態とのこと

                
                `}
            </TextBlock>
            <CodeBlock>
                {``}
            </CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {``}
            </TextBlock>
            <DemoBlock>
                {/* Add your demo components here. They will be rendered normally */}
            </DemoBlock>
        </Section>
    </>
)

export default State