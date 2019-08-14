import React, { useContext } from 'react'
import { Link as RouterLink } from "react-router-dom"
import styled from 'styled-components'

import { LocationContext } from './Sidebar'

import Subtitles from '../molecules/SidebarList'
import Image from '../atoms/Image'
import { White, Black, Gray } from '../styles/colors'

const SidebarItem = ({ title, image, path, subItems, className }) => {
    const location = useContext(LocationContext)

    return (
        <Item className={className} path={path} currentPath={location.pathname.replace(/^\/+/, '')}>
            <Link to={`/${path}`}>
                <LinkImage src={image} size={32} />
                <LinkTitle>{title}</LinkTitle>
            </Link>
            <Subtitles items={subItems} hash={location.hash} />
        </Item>
    )
}

export default SidebarItem

const Item = styled.div.attrs(({ path, currentPath }) => ({
    current: path === currentPath,
}))`
    display: grid;
    user-select: none;
    padding: 16px 0;

    ${({ current }) => current && `
        background-color: ${Black};
        color: white;

        ${Link} {
            color: white;
        }
    `}
`

const LinkImage = styled(Image)``

const LinkTitle = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    font-weight: 500;

    :hover {
        color: ${White};
    }
`

const Link = styled(RouterLink)`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    justify-self: start;
    align-self: start;
    padding: 0 16px;
    text-decoration: none;
    color: ${Gray};
`