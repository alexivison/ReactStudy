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
            <TextBlock header={Header.H2} headerTitle="Propsなど">
                {`
                    これはですね、React

                    https://reactjs.org/

                    こんなもん
                `}
            </TextBlock>
            <CodeBlock>
                {`
const Hoge = ({ children, ...props }) => (
    <div>
        {children}
    </div>
)
                `}
            </CodeBlock>
        </Section>

        <Section>
            <TextBlock header={Header.H2} headerTitle="ほげマン">
                {`
                    あsdはsdはkshdかhksでゃsd

                    あsdlじゃsjdぁjsdlじゃsdあljsdぁjsだsd
                    あklsdlかsldかsd

                    あsdkぁskdぁks；d化s；ldk；ぁskd；ぁks；ldか；skd；亜skd；亜ksd
                    亜ldsぁ；sdl；亜sld；亜lsdぁ；sdl亜；sdlあsd

                    亜ldぁ；slだsd
                `}
            </TextBlock>
        </Section>
    </>
)

export default ReactPage
