import {
  ThemeProvider,
  Global,
  css,
  styled,
  getColorCssFromTheme,
  MediaQueryProvider,
} from "newskit";
import type { AppProps } from "next/app";
import { lightTheme, darkTheme } from "../theme";
import { CSSVars } from "../components/css-vars";
import { AudioPlayer } from "../components/audio-player";
import { Header } from "../components/header";
import React from "react";
const Page = styled.div`
  padding-block-start: 48px;
  padding-block-end: 100px;
  min-height: 100vh;
  ${getColorCssFromTheme("background", "interfaceBackground")}
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = React.useState("light");
  const themeOnChange = React.useCallback(() => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  }, [currentTheme, setCurrentTheme]);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

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
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <MediaQueryProvider>
          <CSSVars>
            <Page>
              <Header themeName={currentTheme} themeOnChange={themeOnChange} />
              <Component {...pageProps} />
              <AudioPlayer />
            </Page>
          </CSSVars>
        </MediaQueryProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
