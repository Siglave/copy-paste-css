import styled from 'styled-components';

import Layout from '@/frontend/Layout';
import { BUTTONS } from '@/frontend/elements/buttons';
import { Flex, CompanyName } from '@/frontend/styledComponents'


const StyledButton = styled.button`
    ${({ css }) => css};
    @media (max-width: 900px) {
        margin-bottom: 12px;
    }
`

const CompanyContainer = styled(Flex)`
    height: 52px;
    align-items: center;
    margin-bottom: 64px;
    @media (max-width: 900px) {
        height: 100%;
        margin-bottom: 40px;
    }

`



export default function ButtonPage() {
    return (
        <Layout>
            <h1>Buttons</h1>
            <Flex style={{ alignItems: "start", marginTop: "72px" }}>
                {BUTTONS.map((el, i) => (
                    <div key={i} style={{ marginRight: "72px" }}>
                        <CompanyName>{el.company}</CompanyName>
                        <CompanyContainer>
                            {el.elements.map((b, j) => (
                                <div key={j} style={{ marginRight: "24px" }}>
                                    <StyledButton css={b.css} >Copy css</StyledButton>
                                </div>
                            ))}
                        </CompanyContainer>
                    </div>
                ))}
            </Flex>

        </Layout>
    )
}
