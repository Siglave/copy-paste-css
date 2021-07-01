import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import Head from 'next/head';


import Layout from '@/frontend/Layout';
import Navbar from '@/frontend/Navbar';
import ShareBlock from '@/frontend/ShareBlock';
import Footer from '@/frontend/Footer';



const HeaderContainer = styled.div`
    background-color: #85FFBD;
    background: linear-gradient(145deg, #FF0055 8%, #000066 100%);
`

const HeroSection = styled.div`
    padding: 72px 0  156px 0; 
`

const PageTitle = styled.h1`
    font-size: 72px;
    text-align: center;
    color: #fff;
    @media (max-width: 1000px) {
        font-size: 40px;
    }
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

const TextArticle = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.grey7};
    line-height: 26px;
    margin-bottom: 12px;
    text-align: justify;
`

const CodeExample = styled.code`
    padding: 12px 32px;
    border-radius: 4px;
    font-weight: 500;
    background: #374056;
    color: #fff;
    display: inline-block;
    margin: 24px  0 ;
    margin-right: 24px;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 16%), 0 2px 2px 0 rgb(0 0 0 / 11%), 0 1px 5px 0 rgb(0 0 0 / 10%);
    @media (max-width: 1000px) {
        padding: 12px 8px;
        font-size: 14px;
    }
`

const CopyBtn = styled.button`
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    font-size: 14px;
    height: 30px;
    padding: 0px 15px;
    text-shadow: rgb(0 0 0 / 25%) 0px 3px 8px;
    background: linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);
    transition: all 0.5s ease 0s;
    :hover{
        box-shadow: rgb(80 63 205 / 50%) 0px 1px 40px;
        transition: all 0.1s ease 0s;
    }

`


const SITE_URL = "https://copy-paste-css.com/blog/en/how-to-copy-text-to-clipboard-javascript";
const Title = "How to copy to clipboard in Javascript.";

export default function CopyClipBoardENPage() {

    const copyCss = () => {
        navigator.clipboard.writeText("navigator.clipboard.writeText(`\"String to copy\")");
        toast.dark('🚀 Code copied!');
    }

    return (
        <>
            <Head>
                <title>Copy & Paste CSS - How to copy to clipboard in Javascript.</title>
                <meta property="og:title" content="How to copy to clipboard in Javascript." />
                <meta property="og:description" content="How to copy text to clipboard in Javascript." />
                <meta property="og:url" content="https://copy-paste-css.com/blog/en/how-to-copy-text-to-clipboard-javascript" />
                <meta property="og:image" content="https://i.imgur.com/6PUOmTB.png" />
            </Head>
            <HeaderContainer>
                <Navbar white />
                <HeroSection>
                    <PageTitle>How to copy text to clipboard in Javascript.</PageTitle>
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
                <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
                    <div style={{ maxWidth: "900px" }}>
                        <TextArticle>
                            Copying data from your site to the user's clipboard is a small feature but can be very useful.
                            Indeed, thanks to it no need to manually select the text or to use CTRL + C.
                            This saves time for site visitors.
                        </TextArticle>
                        <TextArticle>
                            I will explain in this article how I realized this functionality in javascript to allow users to copy the CSS code of the elements of the site.
                        </TextArticle>
                        <TextArticle style={{ fontWeight: "600", marginTop: "24px" }}>Method: Clipboard API.</TextArticle>
                        <TextArticle>
                            The method I chose uses the browser clipboard API. This is a fairly new method but is supported by all the latest browsers. The advantage is that it is quite simple and only requires one line of javascript code.
                        </TextArticle>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div>
                                <CodeExample>
                                    navigator.clipboard.writeText("String to copy")
                                </CodeExample>
                                <CopyBtn onClick={copyCss}>📋 Copy code</CopyBtn>
                            </div>
                        </div>
                        <TextArticle>
                            That's all ! Hope this can help you the next time you need to copy some text to the clipboard in javascript.
                        </TextArticle>
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

