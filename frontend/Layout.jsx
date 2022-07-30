import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import ShareBlock from '@/frontend/ShareBlock';

const PageStyle = styled.div`
    background: ${({ white }) => white ? "#fff" : "#f7fafc"} ;
    min-height: 100vh;
    padding: 48px 12% 0px;
    margin-top: -1px;
    @media (max-width: 1000px) {
        padding: 24px 5%;
    }
`

const Layout = ({ children, white, title, url }) => {
    return (
        <>
            <PageStyle white={white}>
                {children}
            </PageStyle>
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
            <ShareBlock title={title} url={url} />
        </>
    )
}

export default Layout;
