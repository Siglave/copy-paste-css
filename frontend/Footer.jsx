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
    text-align: center;
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

const GithubLink = styled.a`
    font-weight: 500;
    :hover{
       color: ${({ theme }) => theme.primary4};
       text-decoration: underline;
    }
`

export default function Footer() {
    return (
        <FooterStyled>
            <div>
                <FooterText style={{ marginBottom: "8px" }}>
                    You want to add an element?
                    <GithubLink style={{ marginLeft: "4px" }} rel="nofollow" target="_blank" href="https://github.com/Siglave/copy-paste-css">
                        Click here to contribute!
                    </GithubLink>
                </FooterText>
                <FooterText>Made with ❤️ by <TwitterLink rel="nofollow" target="_blank" href="https://twitter.com/siglavesc2">@siglavesc2</TwitterLink></FooterText>
            </div>
        </FooterStyled>
    )
}
