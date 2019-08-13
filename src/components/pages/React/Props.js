import React from 'react'
import styled from 'styled-components'

import { exampleComponent, exampleSource, exampleSourceOnClick, exampleComponentError, exampleComponentOnClick } from './Code'
import { Capitalized } from './Demo'

import Section from '../../organisms/Section'
import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import DemoBlock from '../../molecules/DemoBlock'
import Header from '../../atoms/Header'

const PropsPage = () => (
    <Container id="props">
        <Section>
            <TextBlock header={Header.H2} headerTitle="Propsとは">
                {`
                簡単にいうと、親が子供に渡してる情報ってことだね。

                右には超簡単な先頭文字を大文字に変換するふざけたコンポーネントあるんだけど
                こいつの場合、headerはpropで値はhogeだ。JavaScriptだから型は曖昧なもだけど、一応headerの型はStringになる。

                下に実査のソースとコンポーネントの例があるから、参考になるんじゃねえかな
                （一応型チェック入れてるけどTSとかだったらなくても良いからいいよね）
                `}
            </TextBlock>
            <CodeBlock>{exampleSource}</CodeBlock>
        </Section>

        <Section>
            <DemoBlock>
                <Capitalized header="hoge" />
            </DemoBlock>
            <CodeBlock>{exampleComponent}</CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                これでもうpropsのほぼ全てだな。ただ、ちょっと気を付けないといけないところが一つあって、関数をpropとして渡す時にこんなケースに注意を。

                前のコンポーネントを少し修正して、clickableにしてみた。で、ヘッダーが押された時なぜかアラートを出したいなって気持ちになった。
                `}
            </TextBlock>
            <CodeBlock showDivider={false}>{exampleSourceOnClick}</CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                さて、onClickハンドラーにアラートを渡して終わりじゃん...
                `}
            </TextBlock>
            <CodeBlock>{exampleComponentError}</CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                と思いきや！！押してないのに出るし、そもそも押せるようになってないし！！なんと。失敗した。なんでだ？

                それそうでしょ、渡された瞬間実行されたからだ。簡単なコンポーネントでよかった。renderとかで同じような事故起きたら無限ループになる可能性があるから気をつけんとな。

                じゃー、正しい渡し方は？実際に呼ばれないと実行されない形で渡してあげれば問題なし。実行したい関数を返す関数にすればいいってことね。
                `}
            </TextBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                今回の場合、呼ばれたらアラートを実行する関数にして、propとして渡せばもう完璧。

                触ったばかりの時にかなりハマってたな、ワシも。まー覚えちゃえばもう大丈夫ってことだからね。
                `}
            </TextBlock>
        </Section>

        <Section>
            <DemoBlock>
                <Capitalized header="clickable hoge" onClick={() => alert("Clicked")} />
            </DemoBlock>
            <CodeBlock>{exampleComponentOnClick}</CodeBlock>
        </Section>
    </Container>
)

export default PropsPage

const Container = styled.div``
