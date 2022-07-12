import {
  GridLayout,
  styled,
  TextBlock,
  Image,
  IconFilledPlayArrow,
  getOverlayCssFromTheme,
  getStylePresetFromTheme,
} from "newskit";
import { SongItemProps as SongListItemProps, SongsProps } from "./types";

// This can be in style-preset
const StyledGridLayout = styled(GridLayout)`
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

const songAreas = {
  xs: `
    cover title title
    cover artist album`,
  md: "cover title artist album",
};

const songColumns = {
  xs: "32px max-content max-content",
  md: "32px 1fr 1fr 1fr",
};

const SongListItem = ({ title, artist, album, cover }: SongListItemProps) => {
  return (
    <StyledGridLayout
      key={title}
      columns={songColumns}
      columnGap="space040"
      rowGap="space020"
      overrides={{ paddingBlock: { xs: "space030", md: "space010" } }}
      alignItems="center"
      as="a"
      href="/1"
      areas={songAreas}
    >
      {
        // @ts-ignore
        (Area) => {
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
                <TextBlock
                  typographyPreset="utilityLabel020"
                  stylePreset="inkBase"
                >
                  <strong>{title}</strong>
                </TextBlock>
              </Area.Title>
              <Area.Artist>
                <TextBlock
                  typographyPreset="utilityLabel020"
                  stylePreset="inkBase"
                >
                  {artist}
                </TextBlock>
              </Area.Artist>
              <Area.Album>
                <TextBlock
                  typographyPreset="utilityLabel020"
                  stylePreset="inkBase"
                >
                  {album}
                </TextBlock>
              </Area.Album>
            </>
          );
        }
      }
    </StyledGridLayout>
  );
};

export const Songs = ({ songs }: SongsProps) => (
  <div>
    {songs.map((props) => (
      <SongListItem key={props.title} {...props} />
    ))}
  </div>
);
