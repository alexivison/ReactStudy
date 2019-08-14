import React from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

import { White, Gray } from '../styles/colors'

const SidebarList = ({ items, hash }) => {
    return items ? (
        <List>
            {items.map((item, index) =>
                <Link key={item.title} to={`${item.path}#${item.linkTo}`} current={(hash.replace(/^#+/, '') === item.linkTo).toString()}>
                    <li>{item.title}</li>
                </Link>
            )}
        </List>
    ) : null
}

export default SidebarList

const Link = styled(HashLink)`
    text-decoration: none;
    margin-top: 8px;
    justify-self: start;
    font-weight: 400;

    ${({ current }) => current === "true" ? `
        color: ${White};
    ` : `
        color: ${Gray};
    `}

    :hover {
        color: ${White};
    }
`

const List = styled.ul`
    display: grid;
    margin: 0;
    padding-inline-start: 32px;
    list-style-type: none;
    line-height: 1.5;
    font-size: 14px;
`
