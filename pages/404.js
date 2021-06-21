import styled from 'styled-components';
import Head from 'next/head';

import Navbar from '@/frontend/Navbar';



const HeaderContainer = styled.div`
    background-color: #85FFBD;
    background-image: linear-gradient( 135deg, #FFF886 10%, #F072B6 100%);
    min-height: 100vh;
`

const HeroSection = styled.div`
    padding: 72px 0  156px 0; 
`

const PageTitle = styled.h1`
    font-size: 72px;
    text-align: center;
    color: #393939;
`



export default function NotFoundPage() {

    return (
        <>
            <Head>
                <title>Copy & Paste CSS</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description"
                    content="Find inspiration with a curated list of simple CSS elements for your next project. Just Copy and Past every CSS element!" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Allan:wght@700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderContainer>
                <Navbar />
                <HeroSection>
                    <PageTitle>404 Page Not Found</PageTitle>
                </HeroSection>
            </HeaderContainer>
        </>
    )
}

