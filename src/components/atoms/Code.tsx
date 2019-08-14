import React, { FunctionComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface Props {
    value: string
}

const Code: FunctionComponent<Props> = ({ value }) => (
    <SyntaxHighlighter language="jsx" customStyle={style}>
        {value.trim()}
    </SyntaxHighlighter>
)

export default Code

const style = {
    backgroundColor: "white",
    padding: "24px 0",
    margin: 0,
}