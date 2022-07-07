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

const SongListItem = ({ title, artist, album, cover }: SongListItemProps) => {
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
                <TextBlock
                  typographyPreset="utilityLabel020"
                  stylePreset="inkBase"
                >
                  {title}
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
