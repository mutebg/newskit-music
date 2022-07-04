import {
  GridLayout,
  styled,
  TextBlock,
  Image,
  IconFilledPlayArrow,
  IconButton,
  getColorCssFromTheme,
  getOverlayCssFromTheme,
  getStylePresetFromTheme,
} from "newskit";
import { useState } from "react";

// This can be in style-preset
const StyledGridLayout = styled(GridLayout)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: unset;
  text-decoration: none;
  outline: none;
  ${getStylePresetFromTheme("songListItem")}

  .play-btn {
    transition: 0.1s linear;
    z-index: 2;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    ${getOverlayCssFromTheme("background", "overlayTintBase010")}
  }

  &:focus .play-btn,
  &:hover .play-btn {
    opacity: 1;
  }
`;

type SongProps = {
  title: string,
  artist: string,
  album: string,
  cover: string
}

const Song = ({ title, artist, album, cover }: SongProps) => {
  return (
    <StyledGridLayout
      key={title}
      columns="32px 1fr 1fr 1fr"
      columnGap="space040"
      overrides={{ paddingBlock: "space010" }}
      alignItems="center"
      as="a"
      href="/1"
      areas="cover title artist album"
    >
      {
      // @ts-ignore
      (Area) => {
        console.log(Area);
        return (
          <>
            <Area.Cover>
              <Image
                src={cover}
                overrides={{
                  width: "32px",
                  height: "32px",
                  stylePreset: "imageRoundedSmall",
                }}
                alt=""
              />
            </Area.Cover>
            <Area.Cover alignSelf="stretch" className="play-btn">
              <IconFilledPlayArrow
                overrides={{ size: "iconSize010", stylePreset: "inkInverse" }}
              />
            </Area.Cover>
            <Area.Title>
              <TextBlock typographyPreset="utilityLabel020">{title}</TextBlock>
            </Area.Title>
            <Area.Artist>
              <TextBlock typographyPreset="utilityLabel020">{artist}</TextBlock>
            </Area.Artist>
            <Area.Album>
              <TextBlock typographyPreset="utilityLabel020">{album}</TextBlock>
            </Area.Album>
          </>
        );
      }}
    </StyledGridLayout>
  );
};

type SongsProps = {
  songs: SongProps[]
}

export const Songs = ({ songs }: SongsProps) => (
  <div>
    {songs.map((props) => (
      <Song key={props.title} {...props} />
    ))}
  </div>
);
