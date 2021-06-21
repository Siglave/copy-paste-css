import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const PageStyle = styled.div`
    background: #f7fafc;
    min-height: 100vh;
    padding: 48px 12%;
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
                    content="Find inspiration with a curated list of simple CSS elements for your next project. Just Copy and Past every CSS element!" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Allan:wght@700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-78CQD51DV7"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-78CQD51DV7');
                `}} />
            </Head>
            <PageStyle>
                {children}
            </PageStyle>
        </>
    )
}

export default Layout;
