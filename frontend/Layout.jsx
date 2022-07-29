import React from 'react';
import styled from 'styled-components';

const PageStyle = styled.div`
    background: ${({ white }) => white ? "#fff" : "#f7fafc"} ;
    min-height: 100vh;
    padding: 48px 12% 0px;
    margin-top: -1px;
    @media (max-width: 1000px) {
        padding: 24px 5%;
    }
`

const Layout = ({ children, white }) => {
    return (
        <>
            <PageStyle white={white}>
                {children}
            </PageStyle>
        </>
    )
}

export default Layout;
