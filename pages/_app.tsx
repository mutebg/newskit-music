import { ThemeProvider, Global, css, styled } from "newskit";
import type { AppProps } from "next/app";
import theme from "../theme";
import { CSSVars } from "../components/css-vars";
import { AudioPlayer } from "../components/audio-player";
import { Header } from "../components/header";
const Page = styled.div`
  padding-block-end: 100px;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          *,
          ::after,
          ::before {
            box-sizing: border-box;
          }

          body {
            margin: 0;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <CSSVars>
          <Component {...pageProps} />

          <Page>
            <Header />

            <AudioPlayer />
          </Page>
        </CSSVars>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
