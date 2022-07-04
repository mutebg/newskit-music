import { GridLayout, styled, TextBlock, Block, IconButton, Image, IconFilledPlayArrow, getOverlayCssFromTheme, getSpacingCssFromTheme } from "newskit";

const StyledGridLayout = styled(GridLayout)`
  grid-auto-flow: column;
`;

const StyledCardGrid = styled(GridLayout)`
  color: unset;
  text-decoration: none;
  outline: none;

  .play-btn {
    transition: 0.1s linear;
    z-index: 2;
    display: grid;
    justify-content: center;
    align-content: center;
    opacity: 0;
    ${getOverlayCssFromTheme("background", "overlayGradientBaseVertical")}
    ${getSpacingCssFromTheme('padding', 'space030')};
  }

  &:focus .play-btn,
  &:hover .play-btn {
    opacity: 1;
  }
`;

type CardProps = {
  title: string,
  cover: string,
  sub: string
};

const Card = ({ cover, title, sub }: CardProps) => (
  <StyledCardGrid
    overrides={{ width: "180px" }}
    rowGap="space030"
    as="a"
    areas={`
        cover
        content
    `}
    // @ts-ignore
    href="/album"
  >
    {
      // @ts-ignore
      (Area) => (<>
        <Area.Cover>
          <Image
            alt=""
            loadingAspectRatio="1:1"
            src={cover}
            overrides={{ width: "100%", stylePreset: "imageRoundedSmall" }}
          />
        </Area.Cover>
        <Area.Cover alignSelf="stretch" className="play-btn">
          <IconButton as="span" size="medium">
            <IconFilledPlayArrow
              overrides={{ size: "iconSize030", stylePreset: "ink" }}
            />
          </IconButton>
        </Area.Cover>
        <Area.Content>
          <TextBlock
            typographyPreset="utilityHeading010"
            paddingBlockEnd="space020"
          >
            {title}
          </TextBlock>
          <TextBlock typographyPreset="utilitySubheading010">{sub}</TextBlock>
        </Area.Content>
      </>)
    }
  </StyledCardGrid>
);

type CardListProps =  {
  list: CardProps[]
}

export const CardList = ({ list }: CardListProps) => (
  <StyledGridLayout columnGap="space050" justifyContent="start">
    {list.map((row) => (
      <Card key={row.title} {...row} />
    ))}
  </StyledGridLayout>
);
