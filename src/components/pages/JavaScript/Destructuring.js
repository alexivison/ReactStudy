import React from 'react'
import styled from 'styled-components'

import { baseObject, objectDestructuring, objectRenaming, multilayerObjects, restObject, baseArray, arrayDestructuring, restArray } from './Code'

import Section from '../../organisms/Section'
import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import Header from '../../atoms/Header'

const Destructuring = () => (
    <Container id="destructuring">
        <Section>
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
            <CodeBlock code={baseObject} />
        </Section>

        <Section>
            <TextBlock>
                {`
                具体的にどういうことかというと、こっちの例ちょっと見ようか。
                平成のエンジニアはいつも通り.で繋いでいくんだけど、例話の若手エンジニアはもうそういうの聞いたこともないし、普通にobjectをdestructureしてるね。
                `}
            </TextBlock>
            <CodeBlock code={objectDestructuring} />
        </Section>

        <Section>
            <TextBlock>
                {`
                こんなレベルだったらまーぶっちゃけどっちでもいいじゃんってなるけど、
                上司からなぜか変数名は id じゃなくてこれから identifier で行こう！ってゆー謎の命令が来た時にどうすればいいの？
                `}
            </TextBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                「まじか、こんなんじゃ行数増えるじゃん！！」と思いながら平成さんは修正入れてたけど、
                令和くんはささーっとdestructureした変数に別の名前付けただけで終わったな。
                `}
            </TextBlock>
            <CodeBlock code={objectRenaming} />
        </Section>

        <Section>
            <TextBlock>
                {`
                「ちょっとまった！」と平成さんが叫びました。「Objectの中にObjectの中の値などってどうやってとるっていうんだ！！」

                あ、それね。それも簡単だ。
                `}
            </TextBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                もちろん平成さんでも令和くんでも、ここで気をつけないといけないのは
                途中で値が null だったり undefined だったりすること。気にせず実際に存在しない親の子供を取ろうとすると、世界が終わるんですよ。

                それについて、if分地獄にならないように、optional-chainingが可能になるプラグインを入れるのがオススメっす。
                `}
            </TextBlock>
            <CodeBlock code={multilayerObjects} showDivider={false} />
        </Section>

        <Section>
            <TextBlock>
                {`
                あと、React使ってる人ならみたことあると思うんだけど、...props 的な部分も実は destructuring だ。
                撮りたいキーをとって、残りの値をそのまま残された Object を作ってくれるって便利なハンドラーだ。生のJSの場合、...rest が結構使われてる。
                `}
            </TextBlock>
            <CodeBlock code={restObject} />
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

                HooksとかReduxとか触ったことある人はおそらく見覚えあると思うし、かなり一般的になってるからここでちょっと紹介しちゃおうかなと思って <3 この配列を例にとって、destructureしていこう
                `}
            </TextBlock>
            <CodeBlock code={baseArray} showDivider={false} />
        </Section>

        <Section>
            <TextBlock>
                {`
                Objectと違って、配列の場合キーとかないから、destructureする時自分で参照名をつけるんだ。

                例えばここで first と second って付けてるけど、別になんでもありっちゃありだな。
                `}
            </TextBlock>
            <CodeBlock code={arrayDestructuring} showDivider={false} />
        </Section>

        <Section>
            <TextBlock>
                {`
                「...」ハンドラーもObjectと同じ動きしてるから、割とまじでObjectをマスターすれば配列も行けちゃう
                `}
            </TextBlock>
            <CodeBlock code={restArray} />
        </Section>

    </Container>
)

export default Destructuring

const Container = styled.div``
