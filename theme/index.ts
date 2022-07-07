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
  overrides,
});

export const darkTheme = createTheme({
  name: "podcast-default",
  baseTheme: newskitDarkTheme,
  overrides,
});
