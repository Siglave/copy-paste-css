import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

import { Flex } from './styledComponents';

const StyledLink = styled.a`
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    color: ${({ active }) => active ? "#FFF" : "#393939"};
    padding: 8px 16px;
    border-radius: 30px;
    background: ${({ active }) => active ? "#23263b" : "#eeeeee"};
    margin: 0 24px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: 0.25s;
    :hover{
        text-decoration: underline;
        transform: translateY(-2px);
    }
    @media (max-width: 1000px) {
        font-size: 14px;
        margin-bottom: 12px;
    }
`


export default function NavBlock({ page }) {
    return (
        <Flex style={{ justifyContent: "center", marginTop: "56px" }}>
            <Link href='/' passHref>
                <StyledLink active={page === "BUTTONS"} style={{ marginRight: '16px' }} >🛎️ Buttons</StyledLink>
            </Link>
            <Link href='/box-shadows' passHref>
                <StyledLink active={page === "BOX_SHADOWS"} style={{ marginRight: '16px' }} >👻 Box-shadows</StyledLink>
            </Link>
            {/* <Link href='/form-input-text' passHref>
                <StyledLink active={page === "FORM_INPUT_TEXT"} style={{ marginRight: '16px' }} >⌨️ Form inputs</StyledLink>
            </Link> */}
            <Link href='/color-palettes' passHref>
                <StyledLink active={page === "COLOR_PALETTES"} style={{ marginRight: '16px' }} >🌈 Color palettes</StyledLink>
            </Link>
        </Flex>
    )
}
