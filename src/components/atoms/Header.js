import React from 'react'
import styled from 'styled-components'

import { White } from '../styles/colors'

const withHeader = (HeaderComponent) => ([props, _]) => {
    const children = props.children

    if (typeof children == 'string') {
        return <HeaderComponent {...props}/>
    } else {
        return null
    }
}

const Header = {
  H1: (...props) => withHeader(Header1)(props),
  H2: (...props) => withHeader(Header2)(props),
  H3: (...props) => withHeader(Header3)(props),
}

export default Header

const BaseHeader = styled.h1`
    margin: 0;
    line-height: 1;
    color: ${White};
`

const Header1 = styled(BaseHeader)`
    font-size: 24px;
    font-weight: 800;
`

const Header2 = styled(BaseHeader)`
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    padding: 8px 0;
    margin: 0 0 8px 0;
`

const Header3 = styled(BaseHeader)`
    font-size: 18px;
    font-weight: 300;
    padding: 8px 0;
    margin: 0 0 8px 0;
`
