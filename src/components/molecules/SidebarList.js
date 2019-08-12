import React from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

const SidebarList = ({ items, sidebarActive }) => {
    return items ? (
        <List display={sidebarActive.toString()}>
            {items.map((item, index) =>
                <Link key={item.title} to={`${item.path}#${item.linkTo}`} display={sidebarActive.toString()}>
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
    font-weight: 100;

    ${({ display }) => `
        color: rgba(190, 190, 190, ${display === 'true' ? 10 : 0});
        ${display === 'true' && `
            transition: all ease-in .2s;
            transition-delay: .2s;
        `}
    `}
`

const List = styled.ul`
    display: grid;
    margin: 0;
    padding-inline-start: 32px;
    list-style-type: none;
    line-height: 1.5;
    font-size: 14px;

    ${({ display }) => `
        height: ${display === 'true' ? 'auto' : 0};
        width: ${display === 'true' ? 'auto' : 0};
    `}
`