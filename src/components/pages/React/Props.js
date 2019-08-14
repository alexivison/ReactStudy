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
            <TextBlock header={Header.H2} headerTitle="Props">
                {`
                簡単にいうと、親が子供に渡してる情報ってことだね。

                右には超簡単な先頭文字を大文字に変換するふざけたコンポーネントあるんだけど
                こいつの場合、headerというpropを欲しがってる。

                何も渡されなかった場合、null が帰ってくるんで、JSXでいうと何も表示されないってことになる。"hoge" という全く想像力のない文字列を渡してみると...
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
                そうだね、ちゃんと先頭大文字になってるね。

                これでもうpropsのほぼ全てだな。ただ、ちょっと気を付けないといけないところが一つあって、関数をpropとして渡す時にこんなケースに注意を。

                さっきのコンポーネントを少し修正して、clickableにしてみようかな。で、ヘッダーが押された時なぜかアラートを出したいなって気持ちにもなったから、それもやろう。
                `}
            </TextBlock>
            <CodeBlock>{exampleSourceOnClick}</CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                さて、onClickハンドラーにアラートを渡して...
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
