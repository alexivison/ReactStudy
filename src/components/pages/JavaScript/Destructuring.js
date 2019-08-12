import React from 'react'

import Section from '../../organisms/Section'

import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import Header from '../../atoms/Header'

const baseObject = `
const object = {
    id: 1,
    title: "Hoge"
}
`

const objectDestructuring = `
// 平成
console.log("Id: " + object.id, "Title: " + object.title)


// 令和
const { id, title } = object
console.log("Id: " + id, "Title: " + title)
`

const objectRenaming = `
// 平成
const identifier = object.id
console.log("Id: " + object.id, "Title: " + object.title)


// 令和
const { id: identifier, title } = object
console.log("Id: " + identifier, "Title: " + title)
`

const multilayerObjects = `
const { profile: { id, name } } = data
`

const baseArray = `
const array = ["hoge", "hage", "hige"]
`

const arrayDestructuring = ``

const Destructuring = () => (
    <>
        <Section id="destructuring">
            <TextBlock header={Header.H2} headerTitle="Destructuring">
                {`
                英語でこう書くとかっこよく聞こえるかもしれないけど、まーただの分割ってことだ。

                すごい簡単に説明すると、ArrayかObjectタイプの変数から撮りたい部分だけとって、新しい変数に入れることってこと。

                特にObjectの場合、みなさんはもう考えずに使ってる可能性が高いから、そんなムズイことではないはずだよね。Hooksが出てきてからArray型の変数をDestructureするのもすごい見るようになったから
                おそらく完全に初耳だ！！！ってわけじゃないかなって思っておりマッスル。
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
            <CodeBlock>{baseObject}</CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                具体的にどういうことかというと、こっちの例ちょっと見ようか。
                平成のエンジニアはいつも通り.で繋いでいくんだけど、例話の若手エンジニアはもうそういうの聞いたこともないし、普通にobjectをdestructureしてるね。

                こんなレベルだったらまーぶっちゃけどっちでもいいじゃんってなるけど、
                上司からなぜか変数名は id じゃなくてこれから identifier で行こう！ってゆー謎の命令が来た時にどうすればいいの？
                `}
            </TextBlock>
            <CodeBlock>{objectDestructuring}</CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                「まじか、こんなんじゃ行数増えるじゃん！！」と思いながら平成さんは修正入れてたけど、
                令和くんはささーっとdestructureした変数に別の名前付けただけで終わったな。
                `}
            </TextBlock>
            <CodeBlock>{objectRenaming}</CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                「ちょっとまった！」と平成さんが叫びました。「Objectの中にObjectの中の値などってどうやってとるっていうんだ！！」

                あ、それね。それも簡単だ。

                もちろん平成さんでも令和くんでも、ここで気をつけないといけないのは
                途中で値が null だったり undefined だったりすること。気にせず実際に存在しない親の子供を取ろうとすると、世界が終わるんですよ。

                それについて、if分地獄にならないように、optional-chainingが可能になるプラグインを入れるのがオススメっす。
                `}
            </TextBlock>
            <CodeBlock>{multilayerObjects}</CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                こんなもんだ。かなり便利だな。

                Reduxを勉強し始めると、この基本がしっかり頭に入っていないとまじで苦労するから、色々試してObjectやArrayで遊んた方がいいぜ！

                さて、次は...
                `}
            </TextBlock>
        </Section>

        <Section>
            <TextBlock header={Header.H3} headerTitle="Arrays">
                {`
                ですね。まーObjectとほぼ一緒だから大丈夫だと思うけど
                `}
            </TextBlock>
            <CodeBlock>{baseArray}</CodeBlock>
        </Section>
    </>
)

export default Destructuring
