import * as React from "react";
import {
  GridLayout,
  TextBlock,
  IconFilledRadio,
  IconFilledShuffle,
  Button,
  styled,
  getOverlayCssFromTheme,
} from "newskit";
import { CoverProps } from "./types";

const StyledCover = styled.div<{ url: string }>`
  background-size: cover;
  ${(props) =>
    getOverlayCssFromTheme(
      (value) => ({ backgroundImage: ` ${value}, url(${props.url})` }),
      "overlayCover"
    )(props)};
`;

export const Cover = ({ name, bio, cover }: CoverProps) => (
  <StyledCover url={cover}>
    <GridLayout
      alignItems="center"
      rows="repeat(3, auto)"
      columns="1"
      rowGap="space040"
      alignContent="end"
      overrides={{
        marginInline: "auto",
        height: { xs: "40vh", md: "60vh" },
        paddingInline: { xs: "space050", md: "space080" },
        maxWidth: "1480px",
      }}
    >
      <TextBlock stylePreset="inkBase" typographyPreset="editorialHeadline070">
        {name}
      </TextBlock>
      <TextBlock stylePreset="inkBase" typographyPreset="editorialParagraph020">
        {bio}
      </TextBlock>
      <GridLayout
        columns="repeat(3, auto)"
        justifyContent="start"
        columnGap="space030"
      >
        <Button>
          <IconFilledShuffle /> Shuffle
        </Button>
        <Button>
          <IconFilledRadio /> Radio
        </Button>
        <Button overrides={{ stylePreset: "buttonOutlinedNegative" }}>
          Subscribe 2.3M
        </Button>
      </GridLayout>
    </GridLayout>
  </StyledCover>
);
