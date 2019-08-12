import React from 'react'

import Section from '../../organisms/Section'

import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import Header from '../../atoms/Header'

const arrowFunctions = `
// 平成
function hoge() {
    return console.log("Hoge")
}

// 令和
const hoge = () => console.log("Hoge")
`

const returningFuntions = `
// 平成
function Hoge(text) {
    return function() {
        return console.log(text)
    }
}

// 令和
const hoge = (text) => () => console.log(text)
`

const ArrowFunctions = () => (
    <>
        <Section id="arrow-functions">
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

                早速お二人にJavaScriptに挑戦してもらった。とりあえず関数コンソールに安定の Hoge を出力する関数を作ってって頼んだところ...
                `}
            </TextBlock>
            <CodeBlock>{arrowFunctions}</CodeBlock>
        </Section>
    </>
)

export default ArrowFunctions
