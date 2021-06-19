import styled from 'styled-components';

import Layout from '@/frontend/Layout';
import { BUTTONS } from '@/frontend/elements/buttons';
import { Flex, CompanyName } from '@/frontend/styledComponents'


const StyledButton = styled.button`
    ${({ css }) => css};
`


export default function ButtonPage() {
    return (
        <Layout>
            <h1>Buttons</h1>
            <Flex style={{ alignItems: "start", marginTop: "72px" }}>
                {BUTTONS.map((el) => (
                    <div style={{ marginRight: "72px" }}>
                        <CompanyName>{el.company}</CompanyName>
                        <Flex style={{ height: "52px" }}>
                            {el.elements.map((b) => (
                                <div style={{ marginRight: "24px" }}>
                                    <StyledButton css={b.css} >Button</StyledButton>
                                </div>
                            ))}
                        </Flex>
                    </div>
                ))}
            </Flex>

        </Layout>
    )
}
