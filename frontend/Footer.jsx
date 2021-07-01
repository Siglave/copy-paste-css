import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

import { Flex } from './styledComponents';

const FooterStyled = styled(Flex)`
   justify-content: center;
   align-items: center;
   background: #101823;
   padding: 18px 0;
`


const FooterText = styled.p`
    font-size: 16px;
    color: white;
    @media (max-width: 1000px) {
       width: 100%;
       text-align: center;
       margin-bottom: 12px;
    }
`

const TwitterLink = styled.a`
    :hover{
       color: ${({ theme }) => theme.primary4};
       text-decoration: underline;
    }
`

export default function Footer() {
    return (
        <FooterStyled>
            <FooterText>Made with ❤️ by <TwitterLink target="_blank" href="https://twitter.com/siglavesc2">@siglavesc2</TwitterLink></FooterText>
        </FooterStyled>
    )
}
