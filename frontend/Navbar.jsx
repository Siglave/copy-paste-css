import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

import { Flex } from './styledComponents';

const Nav = styled.div`
    padding: 24px 42px;
    @media (max-width: 1000px) {
        padding: 24px 12px;
    }
`

const SiteName = styled.p`
    font-family: 'Allan', cursive;
    font-size: 24px;
    color: #393939;
`

const StyledLink = styled.a`
    font-size: 16px;
    font-weight: 600;
    color: #393939;
    :hover{
        text-decoration: underline;
    }
    @media (max-width: 1000px) {
        font-size: 14px;
    }
`


export default function Navbar() {
    return (
        <Nav>
            <Flex style={{ justifyContent: "space-between" }}>
                <SiteName>📋 Copy & Paste CSS</SiteName>
                <div>
                    <Link href='/' passHref>
                        <StyledLink style={{ marginRight: '16px' }} >Buttons</StyledLink>
                    </Link>
                    <Link href='/box-shadows' passHref>
                        <StyledLink style={{ marginRight: '16px' }} >Box-shadows</StyledLink>
                    </Link>
                </div>
            </Flex>
        </Nav>
    )
}
