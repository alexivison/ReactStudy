import React from 'react'
import styled from 'styled-components'

import { arrowFunctions, returningFuntions, bindingOfThisES5, bindingOfThisES6 } from './Code'

import Section from '../../organisms/Section'
import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import Header from '../../atoms/Header'

const ArrowFunctions = () => (
    <Container id="arrow-functions">
        <Section>
            <TextBlock header={Header.H2} headerTitle="Arrow Functions">
                {`
                ES6からもう基本になってるので、ささっと説明するね。

                前は function で関数を定義してたと思うんだけど、それはもう古くて時代は => ですよ。
                初めて見た時、「なんだこれ」ってワシもなったけど、よく見てたら書き方以外そんな変わってないよ。

                まー this の持ち方についてちょっと差はあるけど、それもあとで説明する。今はとりあえず読めるようになろうぜ。
                `}
            </TextBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                ここで二人のエンジニアを紹介しようと思うんっす。

                ・平成さん、エンジニア歴10年、好きな言語: Java
                ・令和くん、新卒、好きな言語: Kotlin
                `}
            </TextBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                早速お二人にJavaScriptに挑戦してもらった。とりあえず関数コンソールに安定の Hoge を出力する関数を作ってって頼んだところ... なるほど。令和くん、なんか全部一行に書いてるし、すごい今時って感じ。

                でも、ちょっと読みづらいかもだけど、やってること全く一緒っすね。

                ほぼこれで終わりだけど、結構よく出てくる例もう一個あげようと思って、関数を返す関数ってやつだ。
                `}
            </TextBlock>
            <CodeBlock code={arrowFunctions} showDivider={false} />
        </Section>

        <Section>
            <TextBlock>
                {`
                二人のエンジニアに修正を頼んだところ、こんな感じになったね。

                もうこれで見えてきてるのは、function をアロー関数として書くときに () => だけで済むってこと。コードも綺麗になるし、一行コーディングが好きなエンジニアは喜ぶ。

                最 & 高

                では、最後に、() => と functionの違いを少しだけ見てみようか。
                `}
            </TextBlock>
            <CodeBlock code={returningFuntions} />
        </Section>

        <Section>
            <TextBlock header={Header.H3} headerTitle="Binding">
                {`
                中々出てこないパターンかもしれないけど、実はthisのバインディングがアロー関数の場合ちょっとfunctionと違うんだ。

                ES5（古いやつ）の場合、thisってのは関数の中を見てるんだよ。
                例えば、ここで .bind(this) を入れないと this.id が undefined になっちゃう。

                じゃー同じやつをES6っぽくするとどうなるんだろう
                `}
            </TextBlock>
            <CodeBlock code={bindingOfThisES5} showDivider={false} />
        </Section>

        <Section>
            <TextBlock>
                {`
                アロー関数の場合、this は自分が定義されてるところの this になるから、bind は不要

                細かいところではあるんだけど、「こいつなんで undefined だ？？」ってなる時結構あるから、
                一応覚えといた方が無駄じゃないと思う。
                `}
            </TextBlock>
            <CodeBlock code={bindingOfThisES6} />
        </Section>

    </Container>
)

export default ArrowFunctions

const Container = styled.div``
