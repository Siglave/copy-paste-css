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



export default HeaderSection = ({
    pageTitle,
    metaTitle,
    metaDescription,
    metaUrl = "",
    metaImage = "",
    heroTitle,
    heroSubtitle,
    page
}) => {
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
            <HeaderContainer>
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
        </>
    )
}

