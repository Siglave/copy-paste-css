import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const PageStyle = styled.div`
    background: white;
    min-height: 100vh;
    padding: 48px 10%;
    @media (max-width: 1000px) {
        padding: 24px 5%;
    }
`

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description"
                    content="Copy and Past css elements" />
                <title>CSS Copy & Paste</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Allan:wght@700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageStyle>
                {children}
            </PageStyle>
        </>
    )
}

export default Layout;
