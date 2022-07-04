import { newskitLightTheme, createTheme } from "newskit";
import stylePresets from "./style-presets";
import componentDefaults from "./defaults";

const theme = createTheme({
  name: "podcast",
  overrides: {
    stylePresets,
    componentDefaults,
    borders: {
      borderRadiusDefault: "3px",
    },
    spacePresets: {
      spaceInsetMediumButton: "{{sizing.sizing000}} {{sizing.sizing040}}",
    },
  },
});

export default theme;
