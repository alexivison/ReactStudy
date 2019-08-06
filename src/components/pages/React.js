import React from 'react'

import Section from '../organisms/Section'

import TextBlock from '../molecules/TextBlock'
import CodeBlock from '../molecules/CodeBlock'
import SectionHeader from '../molecules/SectionHeader'

import Text from '../atoms/Text'
import Header from '../atoms/Header'

const ReactPage = () => (
    <>
        <SectionHeader text="Reactの基本" />
        <Section>
            <TextBlock header="Propsなど">
                {`
                    これはですね、React

                    https://reactjs.org/

                    こんなもん
                `}
            </TextBlock>
        </Section>
    </>
)

export default ReactPage
