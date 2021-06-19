import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { theme } from '../frontend/constant';


const GlobalStyle = createGlobalStyle`
* {
  outline: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: ${theme.fontFamilyText};
}
body {
  font-family: sans-serif;
  color: ${theme.grey8} ;
  font-family: ${theme.fontFamilyText};
  font-size: 16px;
  
  min-height: 100vh;
}
h1,h2,h3,h4,h5,h6{
  font-family: ${theme.fontFamilyTitle};
  font-weight: 400;
}
a{
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  color: inherit ;
}
`



export default function App({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}