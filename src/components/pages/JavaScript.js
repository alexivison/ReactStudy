import React from 'react'

import Section from '../organisms/Section'

import SectionInfo from '../molecules/SectionInfo'
import SectionContent from '../molecules/SectionContent'
import SectionHeader from '../molecules/SectionHeader'

import Text from '../atoms/Text'
import Header from '../atoms/Header'

const JavaScript = () => {
    return (
        <>
            <SectionHeader text="JavaScriptの基本" />
            <Section>
                <SectionInfo>
                    <Header.H2>Destructuring</Header.H2>
                    <Text>
                        {`
                        「ああー、このObjectってなんでこんなに要らないデータ入ってるんだろうな、、綺麗に描きたいだけ！！」
                        と思ったことあるのでしょうか。

                        あってもなくても僕があります！でもその気持ちはある技術でまろやかになりました。
                        `}
                    </Text>
                </SectionInfo>
                {/* <SectionContent /> */}
            </Section>

            <Section>
                <SectionInfo>
                    <Header.H2>Hage</Header.H2>
                    <Text>
                        Hage hoge hoge hoge
                    </Text>
                </SectionInfo>
                <SectionContent />
            </Section>
        </>
    )
}

export default JavaScript
