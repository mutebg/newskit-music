import { GridLayout, styled, TextBlock, Block, Image } from "newskit";

const StyledGridLayout = styled(GridLayout)`
  grid-auto-flow: column;
`;

const StyledCardGrid = styled(GridLayout)`
  color: unset;
  text-decoration: none;
`;

const Card = ({ cover, title, sub }) => (
  <StyledCardGrid
    overrides={{ width: "180px" }}
    rowGap="space030"
    as="a"
    href="/album"
  >
    <Image
      loadingAspectRatio="1:1"
      src={cover}
      overrides={{ width: "100%", stylePreset: "imageRoundedSmall" }}
    />
    <Block>
      <TextBlock
        typographyPreset="utilityHeading010"
        paddingBlockEnd="space020"
      >
        {title}
      </TextBlock>
      <TextBlock typographyPreset="utilitySubheading010">{sub}</TextBlock>
    </Block>
  </StyledCardGrid>
);

export const CardList = ({ list }) => (
  <StyledGridLayout columnGap="space050" justifyContent="start">
    {list.map((row) => (
      <Card key={row.title} {...row} />
    ))}
  </StyledGridLayout>
);
