import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Code = ({ children }) => (
    <SyntaxHighlighter 
        language="javascript" 
        style={github}
        customStyle={style} 
        codeTagProps={codeProps}
    >
        {children.trim()}
    </SyntaxHighlighter>
)

export default Code

const style = {
    backgroundColor: "white",
    padding: "24px 0",
    margin: 0,
}

const codeProps = {
    style: {}
}