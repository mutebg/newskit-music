import { StylePreset } from "newskit";

export default {
  header: {
    base: {
      boxShadow: "{{shadows.shadow030}}",
    },
  },
  audioPlayerBar: {
    base: {
      backgroundColor: "{{colors.interface020}}",
      //boxShadow: "{{shadows.shadow030}}",
      boxShadow: "0px -4px 4px 0px rgb(10 10 10 / 8%)",
    },
  },
  menuItemHorizontal: {
    base: {
      borderWidth: "0",
    },
    hover: {
      color: "{{colors.interactivePrimary030}}",
    },
  },
  songListItem: {
    base: {
      color: "unset",
      outline: "none",
      borderWidth: "0 0 1px 0",
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderStyle: "solid",
      textDecoration: "none",
    },
    focus: {
      backgroundColor: "{{colors.interface030}}",
    },
    hover: {
      backgroundColor: "{{colors.interface030}}",
    },
  },
  tab: {
    base: {
      whiteSpace: "nowrap",
    },
    selected: {
      backgroundColor: "{{colors.interactivePrimary010}}",
    },
  },
} as Record<string, StylePreset>;
