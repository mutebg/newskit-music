import { ThemeProvider, Global, css } from "newskit";
import type { AppProps } from "next/app";
import theme from "../theme";

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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
