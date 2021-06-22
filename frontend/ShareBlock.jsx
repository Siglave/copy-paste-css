import React from 'react';
import styled from 'styled-components';
import {
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";
import { Flex } from './styledComponents'


const ShareText = styled.p`
    color: ${({ theme }) => theme.grey0};
    font-size: 16px;
    font-weight: 500;
    margin-right: 16px;
`

const ShareBlockStyled = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    border-radius: 2px 0 0 0;
    padding: 8px 24px;
`

export default function ShareBlock({ Title, SITE_URL }) {
    return (
        <ShareBlockStyled>
            <TwitterShareButton
                title={Title}
                url={SITE_URL}
                style={{ height: "36px", marginBottom: "8px", borderRadius: "50%", display: 'block', boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }}
            >
                <TwitterIcon size={36} round />
            </TwitterShareButton>
            <FacebookShareButton
                title={Title}
                url={SITE_URL}
                style={{ height: "36px", marginBottom: "8px", borderRadius: "50%", display: 'block', boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }}
            >
                <FacebookIcon size={36} round />
            </FacebookShareButton>
            <RedditShareButton
                title={Title}
                url={SITE_URL}
                style={{ height: "36px", marginBottom: "8px", borderRadius: "50%", display: 'block', boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }}
            >
                <RedditIcon size={36} round />
            </RedditShareButton>
            <LinkedinShareButton
                title={Title}
                url={SITE_URL}
                style={{ height: "36px", marginBottom: "8px", borderRadius: "50%", display: 'block', boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }}
            >
                <LinkedinIcon size={36} round />
            </LinkedinShareButton>
        </ShareBlockStyled>
    )
}
