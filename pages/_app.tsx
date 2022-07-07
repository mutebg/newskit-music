import {
  ThemeProvider,
  Global,
  css,
  styled,
  getColorCssFromTheme,
} from "newskit";
import type { AppProps } from "next/app";
import { lightTheme, darkTheme } from "../theme";
import { CSSVars } from "../components/css-vars";
import { AudioPlayer } from "../components/audio-player";
import { Header } from "../components/header";
import React from "react";
const Page = styled.div`
  padding-block-end: 100px;
  ${getColorCssFromTheme("background", "interfaceBackground")}
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = React.useState("light");
  const themeOnChange = React.useCallback(() => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  }, [currentTheme, setCurrentTheme]);

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
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <CSSVars>
          <Page>
            <Header themeName={currentTheme} themeOnChange={themeOnChange} />
            <Component {...pageProps} />
            <AudioPlayer />
          </Page>
        </CSSVars>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
