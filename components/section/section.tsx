import { GridLayout, Scroll, TextBlock } from "newskit";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => (
  <GridLayout
    rowGap="space040"
    style={{ margin: "0 auto" }}
    overrides={{
      paddingInline: "space080",
      maxWidth: "1480px",
      width: "100%",
    }}
  >
    <TextBlock typographyPreset="editorialHeadline070">{title}</TextBlock>

    <GridLayout>
      <Scroll controls="hover" stepDistance={320}>
        {children}
      </Scroll>
    </GridLayout>
  </GridLayout>
);
