import React from 'react'
import styled from 'styled-components'

import { styledHowToUse, styledVariables, styledExtending, styledPseudo, styledClassName } from './Code'

import Section from '../../organisms/Section'
import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import DemoBlock from '../../molecules/DemoBlock'
import Header from '../../atoms/Header'

const StyledComponents = () => (
    <Container id="styled">
        <Section>
            <TextBlock header={Header.H2} headerTitle="Styled Components">
                {`
                スタイルが付けれるコンポーネント。素晴らしい。めちゃくちゃ使われてるライブラリーだから、勉強する価値は絶対ある。

                このセクションで説明するのは
                ・Basics
                ・Props
                ・Extending
                ・ClassName
                ・Pseudo Elements
                というトピックスです。

                そのうちもっと詳しい情報も入れるかもしれないけど、とりあえずこれで
                `}
            </TextBlock>
        </Section>

        <Section>
            <TextBlock header={Header.H3} headerTitle="Basics">
                {`
                ライブラリーだからとりあえず import だね。基本の基本の基本。

                定義する時に、styled.〇〇 で丸の代わりに HTML のエレメントなんでもおっけーって感じで styled な componentが作れっちゃいます。

                スタイルはCSSはそのまま使えるから、違和感もそんなないし、Objectでスタイル書くよりかは全然いいでしょうね。

                const として定義してるってことは、JSXでも他のコンポーネントのように使えるってことだ。

                で、これからはベストな部分だな。よくみると、スタイルって Template Strings で定義してることがわかるよね。とゆーことはーーー？
                `}
            </TextBlock>
            <CodeBlock>{styledHowToUse}</CodeBlock>
        </Section>

        <Section>
            <TextBlock header={Header.H3} headerTitle="Props">
                {`
                はい！変数も使えっちゃいます！！なんと素晴らしい！

                 渡せらた props によってスタイル変えたりすることが出来ちゃうからもうこれほぼなんでも作れるじゃんってなるよね。生のCSSなんて古いっす。
                `}
            </TextBlock>
            <CodeBlock>{styledVariables}</CodeBlock>
        </Section>

        <Section>
            <TextBlock header={Header.H3} headerTitle="Extending">
                {`
                すでに存在する Styled component に元のスタイルを崩さないように新しいの追加したい場合、styled の引数
                `}
            </TextBlock>
            <CodeBlock>{styledExtending}</CodeBlock>
        </Section>

        <Section>
            <TextBlock header={Header.H3} headerTitle="ClassName">
                {``}
            </TextBlock>
            <CodeBlock>{styledClassName}</CodeBlock>
        </Section>

        <Section>
            <TextBlock header={Header.H3} headerTitle="Pseudo Elements">
                {``}
            </TextBlock>
            <CodeBlock>{styledPseudo}</CodeBlock>
        </Section>

    </Container>
)

export default StyledComponents

const Container = styled.div``
