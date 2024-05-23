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

const SiteName = styled.a`
    font-family: 'Allan', cursive;
    font-size: 24px;
    color: #393939;
`

const BuyMeCoffeeLink = styled.a`
    display: inline-block;
    outline: 0;
    border: none;
    cursor: pointer;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 16px;
    background-color: #fd0;
    font-weight: 500;
    color: #222;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 16%), 0 2px 2px 0 rgb(0 0 0 / 11%), 0 1px 5px 0 rgb(0 0 0 / 10%);
    transition: 0.25s;
    :hover{
        transform: translateY(-2px);
    }

`


export default function Navbar() {
    return (
        <Nav>
            <Flex style={{ justifyContent: "space-between" }}>
                <Link href='/' passHref>
                    <SiteName>📋 Copy & Paste CSS</SiteName>
                </Link>
               {/*  <div>
                    <BuyMeCoffeeLink href="https://www.buymeacoffee.com/copypastecss" target="_blank">☕ Buy me a Coffee</BuyMeCoffeeLink>
                </div> */}
            </Flex>
        </Nav>
    )
}
