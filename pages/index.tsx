import type { NextPage } from "next";
import Head from "next/head";
import { GridLayout, styled, TextBlock, Scroll } from "newskit";
import { AudioPlayer } from "../components/audio-player/audio-player";
import { Header } from "../components/header/header";
import { Cover } from "../components/cover/cover";
import { Songs } from "../components/songs/songs";
import { CardList } from "../components/card-list/card-list";
import data from "./data.json";

type SectionProps = {
  title: string,
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <GridLayout
    rowGap="space040"
    style={{ margin: "0 auto" }}
    overrides={{
      paddingInline: "space080",
      maxWidth: "1480px",
      width: "100%",
    }}
  >
    <TextBlock typographyPreset="editorialHeadline070">{title}</TextBlock>

    <GridLayout>
      <Scroll controls="hover" stepDistance={320}>
        {children}
      </Scroll>
    </GridLayout>
  </GridLayout>
);

const Page = styled.div`
  padding-bottom: 100px;
`;

const Home: NextPage = () => {
  return (
    <Page>
      <Header />

      <GridLayout rowGap="space080">
        <Cover {...data.artist} />
        <Section title="Songs">
          <Songs songs={data.songs} />
        </Section>
        <Section title="Albums">
          <CardList list={data.albums.map((k) => ({ ...k, sub: k.year }))} />
        </Section>
        <Section title="Singles">
          <CardList list={data.albums.map((k) => ({ ...k, sub: k.year }))} />
        </Section>
      </GridLayout>

      <AudioPlayer />
    </Page>
  );
};

export default Home;
