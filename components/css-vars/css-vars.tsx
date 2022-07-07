import * as React from "react";
import { styled, css } from "newskit";

const StyledCSSTheme = styled.div`
  ${({ theme }) => {
    const foundationsList = [
      "borders",
      "colors",
      "overlays",
      "motions",
      "shadows",
      "sizing",
      "spacePresets",
    ];

    const cssValue = foundationsList
      .map((key) => {
        // @ts-ignore
        const tokensObject = theme[key];
        const tokensNames = Object.keys(tokensObject);

        const prefix = key === "colors" ? "color-" : "";
        return tokensNames
          .map(
            (tokenName) =>
              `--${prefix}${tokenName}: ${tokensObject[tokenName]};`
          )
          .join("");
      })
      .join("");
    return css`
      ${cssValue}
    `;
  }}
`;

export const CSSVars = ({ children }: { children: React.ReactNode }) => {
  return <StyledCSSTheme>{children}</StyledCSSTheme>;
};
