import React from 'react'

import { Capitalized } from './Demo'

import Section from '../../organisms/Section'
import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import DemoBlock from '../../molecules/DemoBlock'
import Header from '../../atoms/Header'

const PropsPage = () => (
    <>
        <Section id="props">
            <TextBlock header={Header.H2} headerTitle="Propsとは">
                {`
                簡単にいうと、親が子供に渡してる情報ってことだね。

                右には超簡単な先頭文字を大文字に変換するふざけたコンポーネントあるんだけど
                こいつの場合、headerはpropで値はhogeだ。JavaScriptだから型は曖昧なもだけど、一応headerの型はStringになる。

                下に実査のソースとコンポーネントの例があるから、参考になるんじゃねえかな
                （一応型チェック入れてるけどTSとかだったらなくても良いからいいよね）
                `}
            </TextBlock>
            <CodeBlock>
                {`
<Capitalized header="hoge" />
                `}
            </CodeBlock>
        </Section>

        <Section>
            <DemoBlock>
                <Capitalized header="hoge" />
            </DemoBlock>
            <CodeBlock>
                {`
const Capitalized = ({ header }) => {
    if (typeof header === 'string') {
        const capitalized = header.charAt(0).toUpperCase() + header.slice(1)

        return (<h1>{capitalized}</h1>)
    } else {
        return null
    }
}
                `}
            </CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                これでもうpropsのほぼ全てだな。ただ、ちょっと気を付けないといけないところが一つあって、関数をpropとして渡す時にこんなケースに注意を。

                前のコンポーネントを少し修正して、clickableにしてみた。で、ヘッダーが押された時なぜかアラートを出したいなって気持ちになった。
                `}
            </TextBlock>
            <CodeBlock>
                {`
const Capitalized = ({ header, onClick }) => {
    if (typeof header === 'string') {
        const capitalized = header.charAt(0).toUpperCase() + header.slice(1)

        return (
            <h1 onClick={onClick} style={onClick && { cursor: "pointer" }}>
                {capitalized}
            </h1>
        )
    } else {
        return null
    }
}
                `}
            </CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                さて、onClickハンドラーにアラートを渡して終わりじゃん。

                と思いきや！！押してないのに出るし、そもそも押せるようになってないし！！
                `}
            </TextBlock>
            <CodeBlock>
                {`
<Capitalized header="clickable hoge" onClick={alert("Clicked")} />
                `}
            </CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                なんと。失敗した。なんでだ？

                それそうでしょ、渡された瞬間実行されたからだ。簡単なコンポーネントでよかった。renderとかで同じような事故起きたら無限ループになる可能性があるから気をつけんとな。

                じゃー、正しい渡し方は？実際に呼ばれないと実行されない形で渡してあげれば問題なし。実行したい関数を返す関数にすればいいってことね。
                `}
            </TextBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                これならどうだ？
                `}
            </TextBlock>
            <CodeBlock>
                {`
<Capitalized header="clickable hoge" onClick={() => alert("Clicked")} />
                `}
            </CodeBlock>
        </Section>

        <Section>
            <DemoBlock>
                <Capitalized header="clickable hoge" onClick={() => alert("Clicked")} />
            </DemoBlock>
            <CodeBlock>
                {`
// BAD: onClick={alert("Clicked")}
//
// GOOD: onClick={() => alert("Clicked")}

<Capitalized header="clickable hoge" onClick={() => alert("Clicked")} />
                `}
            </CodeBlock>
        </Section>
    </>
)

export default PropsPage
