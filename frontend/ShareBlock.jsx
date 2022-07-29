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


const ShareBlockStyled = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    border-radius: 2px 0 0 0;
    padding: 8px 24px;
`

export default function ShareBlock({ title, url }) {
    return (
        <ShareBlockStyled>
            <TwitterShareButton
                title={title}
                url={url}
                style={{ height: "36px", marginBottom: "8px", borderRadius: "50%", display: 'block', boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }}
            >
                <TwitterIcon size={36} round />
            </TwitterShareButton>
            <FacebookShareButton
                title={title}
                url={url}
                style={{ height: "36px", marginBottom: "8px", borderRadius: "50%", display: 'block', boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }}
            >
                <FacebookIcon size={36} round />
            </FacebookShareButton>
            <RedditShareButton
                title={title}
                url={url}
                style={{ height: "36px", marginBottom: "8px", borderRadius: "50%", display: 'block', boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }}
            >
                <RedditIcon size={36} round />
            </RedditShareButton>
            <LinkedinShareButton
                title={title}
                url={url}
                style={{ height: "36px", marginBottom: "8px", borderRadius: "50%", display: 'block', boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }}
            >
                <LinkedinIcon size={36} round />
            </LinkedinShareButton>
        </ShareBlockStyled>
    )
}
