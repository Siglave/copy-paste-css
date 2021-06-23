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
            <a href="https://www.buymeacoffee.com/copypastecss" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style={{ height: "40px", marginLeft: "16px" }} /></a>
        </FooterStyled>
    )
}
