import { GridLayout, Scroll, TextBlock } from "newskit";
import { SectionProps } from "./types";

export const Section = ({ title, children }: SectionProps) => (
  <GridLayout
    rowGap="space040"
    overrides={{
      paddingInline: { xs: "space050", md: "space080" },
      maxWidth: "1480px",
      width: "100%",
      marginInline: "auto",
    }}
  >
    <TextBlock typographyPreset="editorialHeadline070" stylePreset="inkBase">
      {title}
    </TextBlock>

    <GridLayout>
      <Scroll controls="hover" stepDistance={320}>
        {children}
      </Scroll>
    </GridLayout>
  </GridLayout>
);
