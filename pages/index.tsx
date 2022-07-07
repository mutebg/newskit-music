import type { NextPage } from "next";
import { GridLayout } from "newskit";
import { Cover } from "../components/cover";
import { Songs } from "../components/songs";
import { CardList } from "../components/card-list";
import { Section } from "../components/section";
import data from "./data.json";

const Home: NextPage = () => {
  return (
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
  );
};

export default Home;
