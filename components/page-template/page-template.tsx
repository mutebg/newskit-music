import React from "react";
import { GridLayout, TextBlock } from "newskit";
import { PageTemplateProps } from "./types";

export const PageTemplate = ({ title, children }: PageTemplateProps) => (
  <GridLayout
    rowGap="space050"
    overrides={{
      marginInline: "auto",
      width: "100%",
      maxWidth: "980px",
      marginBlockStart: "space070",
      paddingInline: "space060",
    }}
  >
    <TextBlock
      typographyPreset="utilityHeading050"
      stylePreset="inkBase"
      as="h1"
    >
      {title}
    </TextBlock>
    {children}
  </GridLayout>
);
