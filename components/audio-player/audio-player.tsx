import * as React from "react";
import {
  AudioPlayerComposable,
  AudioPlayerPlayPauseButton,
  AudioPlayerSeekBar,
  AudioPlayerTimeDisplay,
  AudioPlayerSkipNextButton,
  AudioPlayerSkipPreviousButton,
  AudioPlayerVolumeControl,
  GridLayout,
  TextBlock,
  Block,
  styled,
} from "newskit";
import { AudioPlayerCardProps, AudioPlayerProps } from "./types";
import { HideMobile } from "../hide";

const AUDIO_SRC =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const cardAreas = `img title
   img sub
  `;

const AudioCard = ({ title, img, sub }: AudioPlayerCardProps) => (
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
            <HideMobile>
              <TextBlock
                stylePreset="inkBase"
                typographyPreset="utilityHeading010"
              >
                {title}
              </TextBlock>
            </HideMobile>
          </Area.Title>
          <Area.Sub>
            <HideMobile>
              <TextBlock
                stylePreset="inkBase"
                typographyPreset="utilitySubheading010"
              >
                {sub}
              </TextBlock>
            </HideMobile>
          </Area.Sub>
        </>
      )
    }
  </GridLayout>
);

const audioAreas = {
  md: `
  seek seek seek    seek seek seek
  back play forward time card volume
  `,
  xs: `
  seek seek seek    seek seek
  back play forward time card
  volume volume volume volume volume
  `,
};

const StyledBlock = styled(Block)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const audioColumns = {
  xs: "auto auto auto 1fr auto",
  md: "auto auto auto auto 1fr auto",
};

export const AudioPlayer = (props: AudioPlayerProps) => (
  <StyledBlock stylePreset="audioPlayerBar">
    <AudioPlayerComposable src={AUDIO_SRC}>
      <GridLayout
        areas={audioAreas}
        columnGap="space050"
        rowGap="space030"
        columns={audioColumns}
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

              <Area.Back paddingInlineStart="space040">
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
              <Area.Card paddingInlineEnd={{ xs: "space040", md: "space000" }}>
                <AudioCard
                  img="https://lh3.googleusercontent.com/MREZs3XEFT10UiamzjOG9eRgOFvyzvNiLQmiNzrRXHeQlnaTbRRZedz6PQuowK0yJWxjGy_6lGEiT7o=w544-h544-l90-rj"
                  title="Will Of The People"
                  sub="Muse - Single"
                />
              </Area.Card>
              <Area.Volume paddingInlineEnd="space040">
                <HideMobile>
                  <AudioPlayerVolumeControl />
                </HideMobile>
              </Area.Volume>
            </>
          )
        }
      </GridLayout>
    </AudioPlayerComposable>
  </StyledBlock>
);
