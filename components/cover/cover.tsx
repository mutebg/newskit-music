import * as React from "react";
import {
  GridLayout,
  TextBlock,
  IconFilledRadio,
  IconFilledShuffle,
  Button,
  styled,
} from "newskit";

const coverStyles = {
  backgroundSize: "cover",
};

const StyledGridLayout = styled(GridLayout)`
  margin: 0 auto;
`;

type CoverProps = {
  name: string;
  bio: string;
  cover: string;
};

export const Cover = ({ name, bio, cover }: CoverProps) => (
  <div
    style={{
      ...coverStyles,
      backgroundImage: `linear-gradient( rgba(255,255,255,0.2), rgba(255,255,255,1) ), url(${cover})`,
    }}
  >
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
      <TextBlock typographyPreset="editorialHeadline070">{name}</TextBlock>
      <TextBlock typographyPreset="editorialParagraph020">{bio}</TextBlock>
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
  </div>
);
