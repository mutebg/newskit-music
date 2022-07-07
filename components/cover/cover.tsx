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

const StyledGridLayout = styled(GridLayout)`
  margin: 0 auto;
`;

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
    <StyledGridLayout
      alignItems="center"
      rows="repeat(3, auto)"
      columns="1"
      rowGap="space040"
      alignContent="end"
      overrides={{
        height: "60vh",
        paddingInline: "space080",
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
    </StyledGridLayout>
  </StyledCover>
);
