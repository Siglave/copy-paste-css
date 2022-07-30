import { toast } from 'react-toastify';
import styled from 'styled-components';

import Layout from '@/frontend/Layout';
import { BUTTONS } from '@/frontend/elements/buttons';
import { Flex, CompanyName } from '@/frontend/styledComponents';
import Footer from '@/frontend/Footer';
import HeaderSection from '@/frontend/HeaderSection';


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

const InfoText = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.grey5};
    text-align: justify;
    margin-bottom: 40px;
    max-width: 75%;
    line-height: 20px;
    @media (max-width: 1000px) {
        max-width: 100%;
    }
`


const SITE_URL = "https://copy-paste-css.com";
const TITLE = "Simple CSS Button examples for your new project!";

export default function ButtonPage() {

    const copyCss = (css) => () => {
        navigator.clipboard.writeText(css)
        toast.dark('🚀 CSS Copied!');
    }

    return (
        <>
            <HeaderSection
                pageTitle="Copy & Paste CSS - Buttons Design"
                metaTitle="CSS Buttons examples"
                metaDescription="Find inspiration with a curated list of simple CSS Buttons design examples for your next project. Just Copy and Past the CSS of every button element!"
                metaUrl={SITE_URL}
                metaImage="https://i.imgur.com/6PUOmTB.png"
                heroTitle="Simple CSS Button examples"
                heroSubtitle="Find the inspiration for your new button design. Click on an element to copy the CSS!"
                page="BUTTONS"
                gradientContainer={
                    {
                        backgroundColor: "#85FFBD",
                        backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)"
                    }
                }
            />
            <Layout
                title={TITLE}
                url={SITE_URL}
            >
                <CompanyName>The Buttton element</CompanyName>
                <InfoText>
                    The Button is one of the most important design elements of your website.
                    It will help to guide your visitors inside your application.
                    That's why your button needs to reflect the importance of a specif action and contrast with other page elements.
                    On a landing page, your CTA needs to be seen immediately so that your user knows what to if he is interested in your product.
                    Most of the time you will need 3 different button designs.
                    One is the primary action in a solid color to emphasize the main action of a page.
                    The secondary action with a transparent background and a solid border, and a text button for less important actions.
                    Here you will a selection of button designs from other brands to help you find inspiration for your new button design.
                </InfoText>
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
            <Footer />
        </>
    )
}

