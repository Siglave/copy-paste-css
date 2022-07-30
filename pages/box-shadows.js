import { toast } from 'react-toastify';
import styled from 'styled-components';

import Layout from '@/frontend/Layout';
import { BOX_SHADOWS } from '@/frontend/elements/box-shadows';
import { Flex, CompanyName } from '@/frontend/styledComponents'
import Footer from '@/frontend/Footer';
import HeaderSection from '@/frontend/HeaderSection';


const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 150px;
    height: 150px;
    cursor: pointer;
    ${({ css }) => css};
    font-weight: 500;
    color: ${({ theme }) => theme.grey6};
    margin-bottom: 24px;
    margin-right: 72px;
    background: white;
    transition: border-radius 70ms cubic-bezier(0,0,.38,.9);
    :hover {
       border-radius: 100px;
    }
    @media (max-width: 900px) {
        margin-right: 24px;
    }
`

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



const SITE_URL = "https://copy-paste-css.com/box-shadows";
const TITLE = "Simple CSS Box-shadow examples for your new project!";

export default function BoxShadowsPage() {

    const copyCss = (css) => () => {
        navigator.clipboard.writeText(css)
        toast.dark('🚀 CSS Copied!');
    }

    return (
        <>
            <HeaderSection
                pageTitle="Copy & Paste CSS - Box-shadows Design"
                metaTitle="CSS Box Shadows examples"
                metaDescription="Find inspiration with a curated list of simple CSS Box shadows design examples for your next project. Just Copy and Past the CSS of every Box shadow element!"
                metaUrl={SITE_URL}
                metaImage="https://i.imgur.com/HbXd9YG.png"
                heroTitle="Simple CSS Box-shadow examples"
                heroSubtitle="Find the inspiration for your new Box-shadow design. Click on an element to copy the CSS!"
                page="BOX_SHADOWS"
                gradientContainer={
                    {
                        backgroundColor: "#A9C9FF",
                        backgroundImage: "linear-gradient(45deg, #A9C9FF 0%, #FFBBEC 100%)"
                    }
                }
            />
            <Layout
                title={TITLE}
                url={SITE_URL}
            >
                <Flex style={{ alignItems: "start", background: "#f7fafc" }}>
                    {BOX_SHADOWS.map((el, i) => (
                        <div key={i}>
                            <CompanyName>{el.company} {el.designSystemUrl && (<DesignSystemLink rel="nofollow" target="_blank" href={el.designSystemUrl} >🔗 Design System</DesignSystemLink>)} </CompanyName>
                            <CompanyContainer>
                                {el.elements.map((b, j) => (
                                    <StyledCard key={j} onClick={copyCss(b.css)} css={b.css} >Copy css</StyledCard>
                                ))}
                            </CompanyContainer>
                        </div>
                    ))}
                </Flex>
            </Layout>
            <Footer />
        </>
    )
}

