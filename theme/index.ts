import { newskitLightTheme, newskitDarkTheme, createTheme } from "newskit";
import stylePresets from "./style-presets";
import componentDefaults from "./defaults";

const overrides = {
  stylePresets,
  componentDefaults,
  borders: {
    borderRadiusDefault: "3px",
  },
  spacePresets: {
    spaceInsetMediumButton: "{{sizing.sizing000}} {{sizing.sizing040}}",
  },
  colors: {
    illustrationBackground020: "#9B87FC",
    illustrationPalette050: "#5E44E4",
    illustrationInterface100: "#332770",
  },
};

export const lightTheme = createTheme({
  name: "podcast-default",
  overrides: {
    ...overrides,
    overlays: {
      overlayCover: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,1))`,
    },
  },
});

export const darkTheme = createTheme({
  name: "podcast-default",
  baseTheme: newskitDarkTheme,
  overrides: {
    ...overrides,
    overlays: {
      overlayCover: `linear-gradient( rgba(46,46,46,0.2), rgba(46,46,46,1) )`,
      overlayGradientBaseHorizontal:
        "linear-gradient(270deg, rgba(46,46,46,0) 0%,rgba(46,46,46,1) 100%)",
      overlayGradientBaseVertical:
        "linear-gradient(180deg, rgba(46,46,46,0) 0%,rgba(46,46,46,1)100%)",
    },
  },
});
