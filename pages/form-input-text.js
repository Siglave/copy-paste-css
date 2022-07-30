import { toast } from 'react-toastify';
import styled from 'styled-components';

import Layout from '@/frontend/Layout';
import { FORM_INPUT_TEXT } from '@/frontend/elements/form-input-text';
import { Flex, CompanyName } from '@/frontend/styledComponents'
import Footer from '@/frontend/Footer';
import HeaderSection from '@/frontend/HeaderSection';


const FormInput = styled.input`
    width: 250px;
    margin-bottom: 24px;
    margin-right: 72px;
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


const SITE_URL = "https://copy-paste-css.com/form-input-text";
const TITLE = "Simple CSS Form Input Text Design examples for your new project!";

export default function FormInputPage() {

    const copyCss = (css) => () => {
        navigator.clipboard.writeText(css)
        toast.dark('🚀 CSS Copied!');
    }

    return (
        <>
            <HeaderSection
                pageTitle="Copy & Paste CSS - Form Input Text Design"
                metaTitle="CSS Form Input text examples"
                metaDescription="Find inspiration with a curated list of simple CSS Form Input text design examples for your next project. Just Copy and Past the CSS of every Form Input text element!"
                metaUrl={SITE_URL}
                metaImage="https://i.imgur.com/HbXd9YG.png"
                heroTitle="Simple CSS Form Input Text examples"
                heroSubtitle="Find the inspiration for your new Form Input Text design. Click on an element to copy the CSS!"
                page="FORM_INPUT_TEXT"
                gradientContainer={
                    {
                        background: "radial-gradient(ellipse farthest-side at 76% 77%, rgba(245, 228, 212, 0.25) 4%, rgba(255, 255, 255, 0) calc(4% + 1px)), radial-gradient(circle at 76% 40%, #fef6ec 4%, rgba(255, 255, 255, 0) 4.18%), linear-gradient(135deg, #ff0000 0%, #000036 100%), radial-gradient(ellipse at 28% 0%, #ffcfac 0%, rgba(98, 149, 144, 0.5) 100%), linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%)",
                        backgroundBlendMode: "normal, normal, screen, overlay, normal"
                    }
                }
            />
            <Layout
                title={TITLE}
                url={SITE_URL}
            >
                <Flex style={{ alignItems: "start", background: "#f7fafc" }}>
                    {FORM_INPUT_TEXT.map((el, i) => (
                        <div key={i}>
                            <CompanyName>{el.company} {el.designSystemUrl && (<DesignSystemLink rel="nofollow" target="_blank" href={el.designSystemUrl} >🔗 Design System</DesignSystemLink>)} </CompanyName>
                            <CompanyContainer>
                                {el.elements.map((b, j) => (
                                    <FormInput placeholder="Click Me!" type="text" key={j} onClick={copyCss(b.css)} css={b.css} />
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

