import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import Head from 'next/head';


import Layout from '@/frontend/Layout';
import Navbar from '@/frontend/Navbar';
import NavBlock from '@/frontend/NavBlock';
import ShareBlock from '@/frontend/ShareBlock';
import { PALETTES } from '@/frontend/elements/palettes';
import { Flex, CompanyName } from '@/frontend/styledComponents'
import Footer from '@/frontend/Footer';


const CompanyContainer = styled(Flex)`
    align-items: center;
    margin-top: 32px;
    margin-bottom: 64px;
    @media (max-width: 900px) {
        height: 100%;
        margin-bottom: 40px;
    }

`


const HeaderContainer = styled.div`
    background-image: linear-gradient(to top left, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);
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
        fill: #fff;
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

const ColorCard = styled.div`
    cursor: pointer;
    height: 75px;
    width: 65px;
    display: flex;
    justify-content: start;
    align-items: flex-end;
    transition: 0.2s;
    font-size:12px;
    :hover{
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        transform: scale(1.5);
    }
`

const Color = styled.span`
    width: 100%;
    background: #ffffff4f;
    font-weight: 500;
    color: #121212;
    text-transform: uppercase;
`

const CompanyWrapper = styled.div`
    width: 50%;
    @media (max-width: 1400px) {
        width: 100%;
    }
`

const CopyLineBtn = styled.span`
    cursor: pointer;
    width: 40px;
    height: 40px;
    display:flex;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    background: #F3F4F6;
    box-shadow: 0px 1px 0px 0px rgba(9,30,66,.25);
    transition: 0.2s;
    :hover{
        box-shadow: 0px 13px 27px -5px rgba(50,50,93,0.25) , 0px 8px 16px -8px rgba(0,0,0,0.3) , 0px -6px 16px -6px rgba(0,0,0,0.025);
        background: ${({ backColor }) => backColor};
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


const SITE_URL = "https://copy-paste-css.com/color-palettes";
const Title = "Complete Color Palettes examples for your new project!";

export default function ColorPalettesPage() {

    const copyCss = (css) => () => {
        navigator.clipboard.writeText(css)
        toast.dark('🚀 Color Copied!');
    }
    return (
        <>
            <Head>
                <title>Copy & Paste CSS -  Color Palettes examples</title>
                <meta name="description"
                    content="Find inspiration with a curated list of simple Color Palettes design examples for your next project. Just Copy and Past the code of every color palette element!" />
                <meta property="og:title" content="Complete Color Palettes examples" />
                <meta property="og:description" content="Find inspiration with a curated list of complete Color Palettes examples for your next project. Just Copy and Past every CSS element!" />
                <meta property="og:url" content="https://copy-paste-css.com/color-palettes" />
                <meta property="og:image" content="https://i.imgur.com/O680M9f.png" />
            </Head>
            <HeaderContainer>
                <Navbar />
                <HeroSection>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "72px" }}>
                        <AffiliateBanner>The <BorderText>fastest</BorderText> and <BorderText>easiest</BorderText> way to check, copy and edit CSS <LinkAffiliate rel="nofollow" target="_blank" href="https://gumroad.com/a/231494771">⚡ Get CSS Scan</LinkAffiliate></AffiliateBanner>
                    </div>
                    <PageTitle>Complete Color Palettes examples</PageTitle>
                    <SubTitle>Find the inspiration for your new Color palette. Click on a color to copy its code or copy the line!</SubTitle>
                    <PinText>📌 Press<Cmd>CTRL + D</Cmd>to bookmark this page.</PinText>
                    <NavBlock page={"COLOR_PALETTES"} />
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
            <Layout white>
                <Flex style={{ alignItems: "start", background: "#fff" }}>
                    {PALETTES.map((el, i) => (
                        <CompanyWrapper key={i}>
                            <CompanyName>{el.company} {el.designSystemUrl && (<DesignSystemLink rel="nofollow" target="_blank" href={el.designSystemUrl} >🔗 Design System</DesignSystemLink>)} </CompanyName>
                            <CompanyContainer>
                                {el.palette.map((paletteColor, j) => (
                                    <Flex style={{ width: "100%", marginBottom: "8px" }} key={j}>
                                        {paletteColor.map((color, y) => (
                                            <ColorCard key={y} onClick={copyCss(color)} style={{ background: color }}>
                                                <Color>{color}</Color>
                                            </ColorCard>
                                        ))}
                                        <CopyLineBtn
                                            backColor={paletteColor[2]}
                                            style={{ marginLeft: "16px", }}
                                            onClick={() => {
                                                let jsonPalette = {};
                                                paletteColor.forEach((pC, i) => {
                                                    jsonPalette[`color${(i + 1) * 100}`] = pC;
                                                })
                                                copyCss(JSON.stringify(jsonPalette))();
                                            }}
                                        >📋</CopyLineBtn>
                                    </Flex>
                                ))}
                            </CompanyContainer>
                        </CompanyWrapper>
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
            <ShareBlock Title={Title} SITE_URL={SITE_URL} />
            <Footer />
        </>
    )
}

