import React from 'react'
import styled from 'styled-components'

const Code = ({ children }) => (
    <Pre className="prettyprint">
        <code>{children}</code>
    </Pre>
)

export default Code

const Pre = styled.pre`
    display: inline-block;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
`