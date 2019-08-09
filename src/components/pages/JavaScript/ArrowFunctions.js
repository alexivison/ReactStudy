import React from 'react'

import Section from '../../organisms/Section'

import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import Header from '../../atoms/Header'

const ArrowFunctions = () => (
    <>
        <Section id="arrow-functions">
            <TextBlock header={Header.H2} headerTitle="Arrow Functions">
                {`
                アロー関数ね。まーもうほぼ分かってると思うけど、こんなもんですやん。ほぼだって一緒やねん
                `}
            </TextBlock>
            <CodeBlock>
                {`
// 平成
function Hoge() {
    return console.log("Hoge")
}

// 令和
const hoge = () => {
    return console.log("Hoge")
}
                `}
            </CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                でね、関数を返す関数とかたまにあったりするやん？アロー関数だとちょっとわかりにくいかもしれんなって思ったからここに描いてみた。
                `}
            </TextBlock>
            <CodeBlock>
                {`
// 平成
function Hoge(text) {
    return function() {
        return console.log(text)
    }
}

// 令和
const hoge = (text) => () => console.log(text)
                `}
            </CodeBlock>
        </Section>
    </>
)

export default ArrowFunctions
