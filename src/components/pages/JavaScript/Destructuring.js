import React from 'react'

import Section from '../../organisms/Section'

import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import Header from '../../atoms/Header'

const Destructuring = () => (
    <>
        <Section id="destructuring">
            <TextBlock header={Header.H2} headerTitle="Destructuring">
                {`
                「ああー、このObjectってなんでこんなに要らないデータ入ってるんだろうな、、綺麗に描きたいだけ！！」
                と思ったことあるのでしょうか。

                あってもなくても僕があります！でもその気持ちはある技術でまろやかになりました。やべえええええええええええええええええええええええええええええええええええええええええええ
                `}
            </TextBlock>
        </Section>

        <Section>
            <TextBlock header={Header.H3} headerTitle="Objects">
                {`
                Reactでよく見るやつだからこれ頭に入れといた方がいいぜ。

                平成のエンジニアはオブジェクトの中身を取り出すときに、'hoge.hage.title' 的な感じでやってると思うんだけど、我々は令和のイケイケエンジニアなんで、もっと今時の方法を当然使っているのだ。
                例えば、こういうオブジェクトあるとするじゃん。こいつの中からちょっと色々取り出していこう
                `}
            </TextBlock>
            <CodeBlock>
                {`
const object = {
    id: 1,
    title: "Hoge"
}
                `}
            </CodeBlock>
        </Section>

        <Section header={Header.H3} headerTitle="Objects">
            <TextBlock>
                {`具体的にどういうことかというと、こっちの例ちょっと見ようか`}
            </TextBlock>
            <CodeBlock>
                {`
// 平成
console.log("Id: " + object.id, "Title: " + object.title)

// 令和
const { id, title } = object
console.log("Id: " + id, "Title: " + title)
                `}
            </CodeBlock>
        </Section>
    </>
)

export default Destructuring
