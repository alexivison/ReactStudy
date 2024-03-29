import React from 'react'
import styled from 'styled-components'

import { White } from '../styles/colors'

const Text = ({ children, multiline = true, ...props }) => (
    multiline
        ? children.split('\n').map((i, key) => <P key={key}>{i}</P>)
        : <P>{children}</P>
)


export default Text

const P = styled.p`
    ${({ children }) => children.length !== 0 && 'margin: 0;'}
    color: ${White};
    line-height: 1.5;
`