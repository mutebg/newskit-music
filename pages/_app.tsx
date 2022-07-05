import { ThemeProvider, Global, css } from "newskit";
import type { AppProps } from "next/app";
import theme from "../theme";
import { CSSVars } from "../components/css-vars/css-vars";

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
        </CSSVars>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
