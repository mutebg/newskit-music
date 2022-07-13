import type { NextPage } from "next";
import {
  AssistiveText,
  Accordion,
  Banner,
  Block,
  Button,
  Byline,
  Caption,
  Card,
  Grid,
  Cell,
  Headline,
  LinkInline,
  OrderedList,
  ScreenReaderOnly,
  Scroll,
  Stack,
  Heading1
} from "newskit";

const Demo: NextPage = () => {
  return (
    <div>
      <AssistiveText>hello</AssistiveText>
      <Accordion>Hello</Accordion>
      <Banner>Hello</Banner>
      <Block>Block</Block>
      <Button>Button</Button>
      {/* <Caption>Caption</Caption> */}
      <Card>Card</Card>
      <Grid>
        <Cell>hello</Cell>
      </Grid>
      {/* <Headline>Hello</Headline> */}
      <LinkInline href="/">LinkInline</LinkInline>
      {/* <OrderedList>{[]}</OrderedList> */}
      {/* <ScreenReaderOnly>hello</ScreenReaderOnly> */}
      <Scroll><Button>hello</Button></Scroll>
      {/* <Stack>
        <Button>hello</Button>
        <Button>hello</Button>
      </Stack> */}
      <Heading1>hoo</Heading1>
    </div>
  );
};

export default Demo;
