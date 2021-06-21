import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import Head from 'next/head';
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

import Layout from '@/frontend/Layout';
import Navbar from '@/frontend/Navbar';
import { BUTTONS } from '@/frontend/elements/buttons';
import { Flex, CompanyName } from '@/frontend/styledComponents'


const StyledButton = styled.button`
    ${({ css }) => css};
    @media (max-width: 900px) {
        margin-bottom: 12px;
    }
`

const CompanyContainer = styled(Flex)`
    height: 72px;
    align-items: center;
    margin-bottom: 64px;
    @media (max-width: 900px) {
        height: 100%;
        margin-bottom: 40px;
    }

`


const HeaderContainer = styled.div`
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
`

const HeroSection = styled.div`
    padding: 72px 0  156px 0; 
`

const PageTitle = styled.h1`
    font-size: 72px;
    text-align: center;
    color: #393939;
`

const PinText = styled.p`
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.grey5};
    font-weight: 500;
`

const SubTitle = styled.p`
    margin-bottom: 32px;
    text-align: center;
    font-size: 18px;
    color: ${({ theme }) => theme.grey6};
    font-weight: 500;
`

const Cmd = styled.span`
    display: inline-block;
    background:white;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.grey5};
    margin: 0 6px;
    border-radius: 4px;
    padding: 4px 8px;
`

const ShapeContainer = styled.div`
    position:relative;
    .custom-shape-divider-bottom-1624211663 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1624211663 svg {
        position: relative;
        display: block;
        width: calc(111% + 1.3px);
        height: 78px;
    }

    .custom-shape-divider-bottom-1624211663 .shape-fill {
        fill: #f7fafc;
    }
`

const DesignSystemLink = styled.a`
    text-decoration: none;
    font-size: 14px;
    margin-left: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.grey4};
    :hover {
        color: ${({ theme }) => theme.primary4};
        text-decoration: underline;
    }
`

const ShareText = styled.p`
    color: ${({ theme }) => theme.grey0};
    font-size: 16px;
    font-weight: 500;
    margin-right: 16px;
`

const ShareBlock = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    border-radius: 2px 0 0 0;
    padding: 8px 24px;
    background: #393939;
`

const SITE_URL = "https://css-copy-paste.com/buttons";
const Title = "Simple CSS Button examples for your new project!";

export default function ButtonPage() {

    const copyCss = (css) => () => {
        navigator.clipboard.writeText(css)
        toast.dark('🚀 CSS Copied!');
    }

    return (
        <>
            <Head>
                <title>Copy & Paste CSS - Buttons</title>
            </Head>
            <HeaderContainer>
                <Navbar />
                <HeroSection>
                    <PageTitle>Simple CSS Button examples</PageTitle>
                    <SubTitle>Find the inspiration for your new button design. Click on an element to copy the CSS!</SubTitle>
                    <PinText>📌 Press<Cmd>CTRL + D</Cmd>to bookmark this page.</PinText>

                </HeroSection>
            </HeaderContainer>
            <ShapeContainer>
                <div className="custom-shape-divider-bottom-1624211663">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </ShapeContainer>
            <Layout>
                <Flex style={{ alignItems: "start" }}>
                    {BUTTONS.map((el, i) => (
                        <div key={i} style={{ marginRight: "72px" }}>
                            <CompanyName>{el.company} {el.designSystemUrl && (<DesignSystemLink rel="nofollow" target="_blank" href={el.designSystemUrl} >🔗 Design System</DesignSystemLink>)} </CompanyName>
                            <CompanyContainer>
                                {el.elements.map((b, j) => (
                                    <div key={j} style={{ marginRight: "24px" }}>
                                        <StyledButton onClick={copyCss(b.css)} css={b.css} >Copy css</StyledButton>
                                    </div>
                                ))}
                            </CompanyContainer>
                        </div>
                    ))}
                </Flex>
            </Layout>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
            />
            <ShareBlock>
                <Flex style={{ justifyContent: "center", alignItems: "center" }}>
                    <ShareText>📡 Share</ShareText>
                    <TwitterShareButton
                        title={Title}
                        url={SITE_URL}
                        style={{ height: "36px", marginRight: "16px" }}
                    >
                        <TwitterIcon size={36} round />
                    </TwitterShareButton>
                    <FacebookShareButton
                        title={Title}
                        url={SITE_URL}
                        style={{ height: "36px", marginRight: "16px" }}
                    >
                        <FacebookIcon size={36} round />
                    </FacebookShareButton>
                    <RedditShareButton
                        title={Title}
                        url={SITE_URL}
                        style={{ height: "36px", marginRight: "16px" }}
                    >
                        <RedditIcon size={36} round />
                    </RedditShareButton>
                    <LinkedinShareButton
                        title={Title}
                        url={SITE_URL}
                        style={{ height: "36px", }}
                    >
                        <LinkedinIcon size={36} round />
                    </LinkedinShareButton>
                </Flex>
            </ShareBlock>
        </>
    )
}

