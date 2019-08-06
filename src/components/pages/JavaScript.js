import React from 'react'

import Section from '../organisms/Section'

import TextBlock from '../molecules/TextBlock'
import CodeBlock from '../molecules/CodeBlock'
import SectionHeader from '../molecules/SectionHeader'

const JavaScript = () => (
    <>
        <SectionHeader text="JavaScriptの基本" />
        {/* Destructuring */}
        <Section>
            <TextBlock header="Destructuring">
                {`
                「ああー、このObjectってなんでこんなに要らないデータ入ってるんだろうな、、綺麗に描きたいだけ！！」
                と思ったことあるのでしょうか。

                あってもなくても僕があります！でもその気持ちはある技術でまろやかになりました。やべえええええええええええええええええええええええええええええええええええええええええええ
                `}
            </TextBlock>
        </Section>
        {/* Code and such */}
        <Section>
            <TextBlock>
                {`
                まじやべえ

                すげーやべえ
                `}
            </TextBlock>
            <CodeBlock>
                {`
const hoge = () => {
    hoge
}
                `}
            </CodeBlock>
        </Section>
    </>
)

export default JavaScript
