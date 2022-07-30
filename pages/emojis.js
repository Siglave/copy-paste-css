import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';


import Layout from '@/frontend/Layout';
import ShareBlock from '@/frontend/ShareBlock';
import { Flex } from '@/frontend/styledComponents'
import Footer from '@/frontend/Footer';
import HeaderSection from '@/frontend/HeaderSection';
import { EMOJIS_LIST_FUNCT } from '@/frontend/elements/emojis-list';

const EMOJIS_LIST = EMOJIS_LIST_FUNCT();

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
const TITLE = "Copy Paste and save every Emojis!";

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
            <HeaderSection
                pageTitle="Copy & Paste - Emojis"
                metaTitle="Copy & Paste - Emojis"
                metaDescription="Find the emoji you need for your next project, post, and more! Every emoji you copy is saved for later!"
                metaUrl={SITE_URL}
                metaImage="/emojispage.png"
                heroTitle="Copy and Paste every Emojis"
                heroSubtitle="Find the emoji you need for your next project, post, and more! Every emoji you copy is saved for later."
                page="EMOJIS"
                gradientContainer={
                    {
                        background: "radial-gradient(50% 123.47% at 50% 50%, #00FF94 0%, #720059 100%), linear-gradient(121.28deg, #669600 0%, #FF0000 100%), linear-gradient(360deg, #0029FF 0%, #8FFF00 100%), radial-gradient(100% 164.72% at 100% 100%, #6100FF 0%, #00FF57 100%), radial-gradient(100% 148.07% at 0% 0%, #FFF500 0%, #51D500 100%)",
                        backgroundBlendMode: "screen, color-dodge, overlay, difference, normal"
                    }
                }
            />
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
            <ShareBlock title={TITLE} url={SITE_URL} />
            <Footer />
        </>
    )
}

