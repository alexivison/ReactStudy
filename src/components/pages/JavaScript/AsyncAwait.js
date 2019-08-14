import React from 'react'
import styled from 'styled-components'

import { asyncFunction, awaitFunction, promiseAllFunction } from './Code'

import Section from '../../organisms/Section'
import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import Header from '../../atoms/Header'

const AsyncAwait = () => (
    <Container id="async-await">
        <Section>
            <TextBlock header={Header.H2} headerTitle="Async & Await">
                {`
                ざっくりいうと、Async-Awaitっていうのは JS の Promise をもうちょっと書きやすく分かりやすくした追加分。

                もちろん、Promise の動きとか分からんと理解するのちょっとむずいと思うから、Promise を勉強してから戻って来てね。（教えてくれないんかーい？？）

                あ、おっけー戻ったね。さて、どんなもんか見てこうか。
                `}
            </TextBlock>
        </Section>

        <Section>
            <TextBlock header={Header.H3} headerTitle="Async">
                {`
                async を関数につけるってことは、返しが Promise だ！ということを表すんだ。だから実際に中で Promise がなくても、JS が関数の返り値を　Promise でラップしてくれる。

                だから .then() などを使えっちゃう。

                あとね、async を関数につけると、非同期じゃなくて同期処理になるから、若干普通の関数より遅くなったりする可能性はある。
                `}
            </TextBlock>
            <CodeBlock code={asyncFunction} />
        </Section>

        <Section>
            <TextBlock header={Header.H3} headerTitle="Await">
                {`
                await は名前の通り Promise を待つってやつだ。async と違って、どこでも書けるわけじゃなくて、async 関数の中じゃないと JS ちゃんがオコオコになるよ。

                Promise が解決することを待って、終わったら次行くって感じ。かなり分かりやすいっしょ。
                `}
            </TextBlock>
            <CodeBlock code={awaitFunction} />
        </Section>

        <Section>
            <TextBlock>
                {`
                じゃー、複数の非同期 Promise を非同期のまま待ちたいってなるとどうすればいいの？

                そういう時はめちゃくちゃ便利な便利関数の Promise.all() を使えばいいのよ！！

                一個一個 await するのだるいし、わざわざ待ちたい関数を変数でラップしてタイマー的な付けたりしないと同期になっちゃうからまさに神からの gift ですよ、これ
                `}
            </TextBlock>
            <CodeBlock code={promiseAllFunction} />
        </Section>
        
        <Section>
            <TextBlock>
                {``}
            </TextBlock>
        </Section>

    </Container>
)

export default AsyncAwait

const Container = styled.div``
