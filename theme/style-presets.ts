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
    focus: {
      backgroundColor: "{{colors.interface030}}",
    },
    hover: {
      backgroundColor: "{{colors.interface030}}",
    },
  },
} as Record<string, StylePreset>;
