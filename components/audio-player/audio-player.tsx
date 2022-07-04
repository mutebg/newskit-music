import * as React from "react";
import {
  AudioPlayerComposable,
  AudioPlayerPlayPauseButton,
  AudioPlayerSeekBar,
  AudioPlayerTimeDisplay,
  AudioPlayerSkipNextButton,
  AudioPlayerSkipPreviousButton,
  GridLayout,
  TextBlock,
  Block,
  styled,
} from "newskit";

const AUDIO_SRC =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const cardAreas = `img title
   img sub
  `;

type AudioCardProps = {
  title: string,
  img: string,
  sub: string
};


const AudioCard = ({ title, img, sub }: AudioCardProps) => (
  <GridLayout
    areas={cardAreas}
    columnGap="space030"
    rowGap="space020"
    alignItems="center"
    justifyContent="center"
  >
    {
    // @ts-ignore
    (Area) => (
      <>
        <Area.Img>
          <img src={img} width="40" height="40" />
        </Area.Img>
        <Area.Title>
          <TextBlock typographyPreset="utilityHeading010">{title}</TextBlock>
        </Area.Title>
        <Area.Sub>
          <TextBlock typographyPreset="utilitySubheading010">{sub}</TextBlock>
        </Area.Sub>
      </>
    )}
  </GridLayout>
);

const audioAreas = `
  seek seek seek    seek seek seek
  back play forward time card volume
  `;

const StyledBlock = styled(Block)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const AudioPlayer = () => (
  <StyledBlock stylePreset="audioPlayerBar">
    <AudioPlayerComposable src={AUDIO_SRC}>
      <GridLayout
        areas={audioAreas}
        columnGap="space050"
        rowGap="space030"
        columns="auto auto auto auto 1fr auto"
        alignItems="center"
        paddingBlockEnd="space030"
      >
        {
        // @ts-ignore
        (Area) => (
          <>
            <Area.Seek>
              <AudioPlayerSeekBar />
            </Area.Seek>
            {/* @ts-ignore */}
            <Area.Back overrides={{ paddingInlineStart: "space040" }}>
              <AudioPlayerSkipPreviousButton size="small" />
            </Area.Back>
            <Area.Play>
              <AudioPlayerPlayPauseButton size="medium" />
            </Area.Play>
            <Area.Forward>
              <AudioPlayerSkipNextButton size="small" />
            </Area.Forward>
            <Area.Time>
              <AudioPlayerTimeDisplay />
            </Area.Time>
            <Area.Card>
              <AudioCard
                img="https://lh3.googleusercontent.com/MREZs3XEFT10UiamzjOG9eRgOFvyzvNiLQmiNzrRXHeQlnaTbRRZedz6PQuowK0yJWxjGy_6lGEiT7o=w544-h544-l90-rj"
                title="Will Of The People"
                sub="Muse - Single"
              />
            </Area.Card>
            {/* @ts-ignore */}
            <Area.Volume overrides={{ paddingInlineEnd: "space040" }}>
              volume
            </Area.Volume>
          </>
        )}
      </GridLayout>
    </AudioPlayerComposable>
  </StyledBlock>
);
