import React from 'react'
import styled from 'styled-components';

const Nav = styled.div`
    padding: 24px 42px;
`

const SiteName = styled.p`
    font-family: 'Allan', cursive;
    font-size: 24px;
`

export default function Navbar() {
    return (
        <Nav><SiteName>📋 CSS Copy & Paste</SiteName></Nav>
    )
}
