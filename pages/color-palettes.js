import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

import Layout from '@/frontend/Layout';
import ShareBlock from '@/frontend/ShareBlock';
import { PALETTES } from '@/frontend/elements/palettes';
import { Flex, CompanyName } from '@/frontend/styledComponents'
import Footer from '@/frontend/Footer';
import HeaderSection from '@/frontend/HeaderSection';


const CompanyContainer = styled(Flex)`
    align-items: center;
    margin-top: 32px;
    margin-bottom: 64px;
    @media (max-width: 900px) {
        height: 100%;
        margin-bottom: 40px;
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



const SITE_URL = "https://copy-paste-css.com/color-palettes";
const TITLE = "Complete Color Palettes examples for your new project!";

export default function ColorPalettesPage() {
    const copyCss = (css) => () => {
        navigator.clipboard.writeText(css)
        toast.dark('🚀 Color Copied!');
    }

    return (
        <>
            <HeaderSection
                pageTitle="Copy & Paste CSS - Color Palettes examples"
                metaTitle="Complete Color Palettes examples"
                metaDescription="Find inspiration with a curated list of simple Color Palettes design examples for your next project. Just Copy and Past the code of every color palette element!"
                metaUrl={SITE_URL}
                metaImage="https://i.imgur.com/O680M9f.png"
                heroTitle="Complete Color Palettes examples"
                heroSubtitle="Find the inspiration for your new Color palette. Click on a color to copy its code or copy the line!"
                page="COLOR_PALETTES"
                gradientContainer={
                    {
                        backgroundImage: "linear-gradient(to top left, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)"
                    }
                }
            />
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
            <ShareBlock title={TITLE} url={SITE_URL} />
            <Footer />
        </>
    )
}

