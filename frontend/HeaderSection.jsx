import styled from 'styled-components';
import Head from 'next/head';

import Navbar from '@/frontend/Navbar';
import NavBlock from '@/frontend/NavBlock';

const HeaderContainer = styled.div`
    background-color: #A9C9FF;
    background-image: linear-gradient(45deg, #A9C9FF 0%, #FFBBEC 100%);
`

const HeroSection = styled.div`
    padding: 72px 0  156px 0;
    padding-top: 24px;
`

const PageTitle = styled.h1`
    font-size: 72px;
    text-align: center;
    color: #393939;
    text-shadow: 0 2px 4px rgb(13 0 77 / 8%), 0 3px 6px rgb(13 0 77 / 8%), 0 8px 16px rgb(13 0 77 / 8%);
    @media (max-width: 1000px) {
        font-size: 40px;
    }
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



const AffiliateBanner = styled.div`
    padding: 16px 46px;
    background: linear-gradient(to left, rgb(28, 30, 38), rgb(43 45 58));
    display: inline-block;
    color: white;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    font-size: 18px;
    @media (max-width: 1200px) {
        padding: 12px 24px;
        font-size: 14px;
        border-radius: 0px;
    }
`

const LinkAffiliate = styled.a`
    font-weight: bold;
    margin-left: 16px;
    display: inline-block;
    outline: none;
    cursor: pointer;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    padding: 16px 16px;
    min-height: 38px;
    border: none;
    color: #fff;
    text-align: center;
    background-color: rgb(88, 101, 242);
    transition: background-color .17s ease,color .17s ease;
    :hover {
        background-color: rgb(71, 82, 196);
    }
    @media (max-width: 1200px) {
        padding: 8px 8px;
        display: block;
        margin-left: 0px;
        margin-top: 8px;
        font-size: 14px;
        line-height: inherit;
    }
`


const ShapeContainer = styled.div`
    position:relative;
    .custom-shape-divider-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom svg {
        position: relative;
        display: block;
        width: calc(111% + 1.3px);
        height: 78px;
    }

    .custom-shape-divider-bottom .shape-fill {
        fill: #f7fafc;
    }
`



export default function HeaderSection({
    pageTitle,
    metaTitle,
    metaDescription,
    metaUrl = "",
    metaImage = "",
    heroTitle,
    heroSubtitle,
    page,
    styleContainer = {}
}) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:url" content={metaUrl} />
                <meta property="og:image" content={metaImage} />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="saashub-verification" content="m7cnmg73frpd" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Allan:wght@700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-156528211-6"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'UA-156528211-6');
                `}} />
            </Head>
            <HeaderContainer style={styleContainer}>
                <Navbar />
                <HeroSection>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "72px" }}>
                        <AffiliateBanner>Save webpages to Notion in one click with the Klippper extension <LinkAffiliate target="_blank" href="https://klippper.com/?ref=copypastecss">⚡ Try Klippper</LinkAffiliate></AffiliateBanner>
                    </div>
                    <PageTitle>{heroTitle}</PageTitle>
                    <SubTitle>{heroSubtitle}</SubTitle>
                    <PinText>📌 Press<Cmd>CTRL + D</Cmd>to bookmark this page.</PinText>
                    <NavBlock page={page} />
                </HeroSection>
            </HeaderContainer>
            <ShapeContainer>
                <div className="custom-shape-divider-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </ShapeContainer>
        </>
    )
}

