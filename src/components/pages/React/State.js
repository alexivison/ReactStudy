import React from 'react'
import styled from 'styled-components'

import { stateExample, InputComponent, combinedComponentSource, combinedComponent } from './Code'
import { UserInput, CapitalizedInput } from './Demo'

import Section from '../../organisms/Section'
import TextBlock from '../../molecules/TextBlock'
import CodeBlock from '../../molecules/CodeBlock'
import DemoBlock from '../../molecules/DemoBlock'
import Header from '../../atoms/Header'

const State = () => (
    <Container id="state">
        <Section>
            <TextBlock header={Header.H2} headerTitle="State">
                {`
                それはね、名前の通りコンポーネントが持ってる情報の状態とのこと
                State も props も、ただオブジェクトだけど、props と違って、state ってのはコンポーネント内でハンドリングする情報というやつ。

                外部からアクセスできないから、同じ状態とかを子コンポーネントにも持たしたい場合、stateを参照するpropsを渡すことになる。説明しようとすると余計に訳分からなくなるから、コードを見てみようか。ってことでprops のところで作ったコンポーネントを少しパワーアップさせてみよう。

                ユーザーが入力したテキストを大文字に変換する超くだらねえ機能をこれから作りマッスル。
                `}
            </TextBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                最初はユーザーの入力状態を持つ input 用コンポーネントを作るか。

                今更Class系コンポーネントを勉強する意味がないと思ったから、これからはもうHooks祭りだぜ。あとでもっと詳しく教えようかなって思ってるから今は一旦 state の概念に集中しよう。 ということで、この例を分割していこうか。

                コンポーネントに state を持たしたい場合、useState というHookが用意してある。帰ってくる配列の 0 番目は実際の state で、1 番目は state 変化 に変化を与えられる関数。引数として受け取るのは初期値だから、からの文字列を渡してあげよう。
                Array destructuringのところで勉強したように、変数名は自分で決められるからわかりやすく text と setText にしよう。
                (ちなみに、useState を使う時のネーミングについて、結構基本になってるのは ○○ -> set○○ 系だ）

                じゃー、inputの値 と text を紐づいて、submit ボタンを用意してからもう完璧だな。

                まーすっげえダサいの出来あがったけどな。
                `}
            </TextBlock>
            <CodeBlock>{stateExample}</CodeBlock>
        </Section>

        <Section>
            <DemoBlock>
                <UserInput onSubmit={(text) => alert(text)} />
            </DemoBlock>
            <CodeBlock>{InputComponent}</CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                よーし、入力できてるね。最後に今まで作ったコンポーネントをラップする親コンポーネントを作っていこう。

                入力用コンポーネントから「変換」が押された時に出てくる値を親の方でも state に入れて、propとして大文字用コンポーネントに渡す感じで行くと、

                なんと、実際に触れるものが出来上がりました！state も props も利用してる React Component を作ることに セイコウ シマシタ！（外国人っぽい発音）
                `}
            </TextBlock>
            <CodeBlock>{combinedComponentSource}</CodeBlock>
        </Section>
        

        <Section>
            <DemoBlock>
                <CapitalizedInput />
            </DemoBlock>
            <CodeBlock>{combinedComponent}</CodeBlock>
        </Section>

        <Section>
            <TextBlock>
                {`
                さてと、もう流石にダサすぎるから次はデザイナーになってスタイルで遊ぼう。
                `}
            </TextBlock>
        </Section>

    </Container>
)

export default State

const Container = styled.div``