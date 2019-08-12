import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Code = ({ children }) => (
    <SyntaxHighlighter 
        language="javascript" 
        style={prism}
        customStyle={style} 
        codeTagProps={codeProps}>
        {children}
    </SyntaxHighlighter>
)

export default Code

const style = {
    backgroundColor: "white",
    padding: 0,
    margin: 0,
}

const codeProps = {
    style: {}
}