import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';


import Layout from '@/frontend/Layout';
import Navbar from '@/frontend/Navbar';
import NavBlock from '@/frontend/NavBlock';
import ShareBlock from '@/frontend/ShareBlock';
import { Flex } from '@/frontend/styledComponents'
import Footer from '@/frontend/Footer';
import { EMOJIS_LIST_FUNCT } from '@/frontend/elements/emojis-list';

const EMOJIS_LIST = EMOJIS_LIST_FUNCT();


const HeaderContainer = styled.div`
    background: radial-gradient(50% 123.47% at 50% 50%, #00FF94 0%, #720059 100%), linear-gradient(121.28deg, #669600 0%, #FF0000 100%), linear-gradient(360deg, #0029FF 0%, #8FFF00 100%), radial-gradient(100% 164.72% at 100% 100%, #6100FF 0%, #00FF57 100%), radial-gradient(100% 148.07% at 0% 0%, #FFF500 0%, #51D500 100%);
    background-blend-mode: screen, color-dodge, overlay, difference, normal;
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

const BorderText = styled.span`
    border-bottom: 3px solid #4af071;
    @media (max-width: 1200px) {
        border-bottom: 1px solid #4af071;
    }
`

const EmojiStyle = styled.span`
    font-size: 24px;
    margin: 8px;
    font-family: apple color emoji,segoe ui emoji,noto color emoji,android emoji,emojisymbols,emojione mozilla,twemoji mozilla,segoe ui symbol;
    transition: 0.2s;
    cursor: pointer;
    :hover{
        transform: scale(2);
    }
`

const EmojiCategory = styled.h2`
    margin-top: 52px;
    margin-bottom: 18px;
`

const NoSavedEmojis = styled.p`
    color: ${({ theme }) => theme.grey5};
`

const SearchInput = styled.input`
    box-shadow: inset #abacaf 0 0 0 2px;
    border: 0;
    background: white;
    appearance: none;
    width: 40%;
    position: relative;
    border-radius: 3px;
    padding: 9px 12px;
    line-height: 1.4;
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 400;
    height: 40px;
    transition: all .2s ease;
    :hover{
        box-shadow: 0 0 0 0 #fff inset, #2b2d3a 0 0 0 2px;
    }
    :focus{
        background: #fff;
        outline: 0;
        box-shadow: 0 0 0 0 #fff inset, #2b2d3a 0 0 0 3px;
    }
    @media (max-width: 1200px) {
        width: 100%;
    }

`

const ClearEmojis = styled.p`
    margin-left: 16px;
    cursor: pointer;
    font-size: 14px;
    color: ${({ theme }) => theme.grey4};
`

const SITE_URL = "https://copy-paste-css.com/emojis";
const Title = "Copy Paste and save every Emojis!";

export default function EmojisPage() {
    const [savedEmojis, setSavedEmojis] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        if (localStorage.getItem('savedEmojis')) {
            setSavedEmojis(JSON.parse(localStorage.getItem('savedEmojis')));
        }
    }, [])

    const copyText = (text) => () => {
        navigator.clipboard.writeText(text)
        toast.dark(`Copied!`);
        let emojisToSave = [];
        if (localStorage.getItem('savedEmojis')) {
            emojisToSave = JSON.parse(localStorage.getItem('savedEmojis'));
        }

        emojisToSave.unshift(text);

        const setEmojis = Array.from(new Set(emojisToSave));
        localStorage.setItem('savedEmojis', JSON.stringify(setEmojis));

        setSavedEmojis(setEmojis);
    }

    const searchCategory = (category) => {
        const options = {
            keys: ['tags', 'description', 'aliases'],
            threshold: 0.15
        }

        if (searchValue === "") {
            return EMOJIS_LIST[category];
        }
        const fuse = new Fuse(EMOJIS_LIST[category], options);

        const result = fuse.search(searchValue).map((e) => e.item);

        return result;
    }


    return (
        <>
            <Head>
                <title>Copy & Paste - Emojis</title>
                <meta name="description"
                    content="Find the emoji you need for your next project, post, and more! Every emoji you copy is saved for later!" />
                <meta property="og:title" content="Copy & Paste - Emojis" />
                <meta property="og:description" content="Find the emoji you need for your next project, post, and more. Every emoji you copy is saved for later!" />
                <meta property="og:url" content="https://copy-paste-css.com/emojis" />
                <meta property="og:image" content="/emojispage.png" />
            </Head>
            <HeaderContainer>
                <Navbar />
                <HeroSection>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "72px" }}>
                        <AffiliateBanner>Save webpages to Notion in one click with the Klippper extension <LinkAffiliate target="_blank" href="https://klippper.com/?ref=copypastecss">⚡ Try Klippper</LinkAffiliate></AffiliateBanner>
                    </div>
                    <PageTitle>Copy and Paste every Emojis</PageTitle>
                    <SubTitle>Find the emoji you need for your next project, post, and more! Every emoji you copy is saved for later.</SubTitle>
                    <PinText>📌 Press<Cmd>CTRL + D</Cmd>to bookmark this page.</PinText>
                    <NavBlock page={"EMOJIS"} />
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
                <div style={{ background: "#f7fafc" }}>
                    <div>
                        <Flex style={{ alignItems: "baseline" }}>
                            <EmojiCategory>Your most used Emojis</EmojiCategory>
                            <ClearEmojis onClick={() => { localStorage.removeItem('savedEmojis'); setSavedEmojis([]) }}>Clear</ClearEmojis>
                        </Flex>
                        <Flex>
                            {savedEmojis.length === 0 && (
                                <NoSavedEmojis>📌 Click on an emoji to save it!</NoSavedEmojis>
                            )}
                            {savedEmojis.map((emoji) => (
                                <EmojiStyle onClick={copyText(emoji)}>{emoji}</EmojiStyle>
                            ))}
                        </Flex>
                    </div>
                    <div style={{ marginTop: "42px" }}>
                        <SearchInput placeholder='🔍 Search Emojis' value={searchValue} onChange={({ target }) => { setSearchValue(target.value) }} />
                    </div>
                    <div style={{ paddingBottom: "78px" }}>
                        {Object.keys(EMOJIS_LIST).map((category, i) => {
                            const items = searchCategory(category);

                            if (items.length === 0) {
                                return null
                            }
                            return (
                                <div key={i}>
                                    <EmojiCategory>{category}</EmojiCategory>
                                    <Flex>
                                        {items.map((item) => (
                                            <EmojiStyle onClick={copyText(item.emoji)}>{item.emoji}</EmojiStyle>
                                        ))}
                                    </Flex>
                                </div>
                            )
                        })}
                    </div>
                </div>
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
            <ShareBlock Title={Title} SITE_URL={SITE_URL} />
            <Footer />
        </>
    )
}

