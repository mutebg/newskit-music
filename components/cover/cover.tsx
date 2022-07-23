import * as React from "react";
import {
  GridLayout,
  TextBlock,
  IconFilledRadio,
  IconFilledShuffle,
  Button,
  styled,
  getOverlayCssFromTheme,
  IconFilledMoreVert,
  IconButton,
  Popover,
  Menu,
  MenuItem,
  IconFilledShare,
  IconFilledQueueMusic,
  IconFilledPlaylistAdd,
} from "newskit";
import { CoverProps } from "./types";

const menuItemOverrides = {
  spaceInline: "space030",
};

const moreMenu = (
  <GridLayout overrides={{ minWidth: "150px" }}>
    <Menu vertical overrides={{ spaceInline: "space000" }}>
      <MenuItem href="/" overrides={menuItemOverrides}>
        <IconFilledQueueMusic /> Create playlist
      </MenuItem>
      <MenuItem href="/" overrides={menuItemOverrides}>
        <IconFilledPlaylistAdd /> Add playlist
      </MenuItem>
      <MenuItem href="/" overrides={menuItemOverrides}>
        <IconFilledShare /> Share
      </MenuItem>
    </Menu>
  </GridLayout>
);

const StyledCover = styled.div<{ url: string }>`
  background-size: cover;
  ${(props) =>
    getOverlayCssFromTheme(
      (value) => ({ backgroundImage: ` ${value}, url(${props.url})` }),
      "overlayCover"
    )(props)};
`;

export const Cover = ({ name, bio, cover, fans }: CoverProps) => (
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
        columns="repeat(4, auto)"
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
          Fans {fans}
        </Button>
        <Popover
          content={moreMenu}
          closePosition="none"
          header={undefined}
          enableDismiss
          overrides={{
            content: {
              paddingInline: "space000",
              paddingBlock: "space010",
            },
          }}
        >
          <IconButton
            overrides={{
              stylePreset: "iconButtonMinimalPrimary",
              height: "38px",
              width: "38px",
            }}
          >
            <IconFilledMoreVert overrides={{ size: "sizing050" }} />
          </IconButton>
        </Popover>
      </GridLayout>
    </GridLayout>
  </StyledCover>
);
