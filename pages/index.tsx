import type { NextPage, NextPageContext } from "next";
import { GridLayout } from "newskit";
import { Cover } from "../components/cover";
import { Songs } from "../components/songs";
import { CardList } from "../components/card-list";
import { Section } from "../components/section";
import axios from "axios";
import DeezerClient from "../services/deezer";

export async function getServerSideProps(context: NextPageContext) {
  console.log("query", context.query);

  // @ts-ignore
  const client = new DeezerClient(axios);
  const req = await client.artist(
    context?.query?.id ? parseInt(context.query.id as string) : 705
  ); // default to muse id

  const [albumsRaw, info, top] = await Promise.all([
    req.albums(),
    req.infos(),
    await req.top(),
  ]);

  // @ts-ignore
  const albumMap = ({ id, title, release_date, cover_medium }) => ({
    id,
    title,
    year: release_date,
    cover: cover_medium,
  });

  const albums = albumsRaw.data
    // @ts-ignore
    .filter(({ record_type }) => record_type === "album")
    .map(albumMap);

  const singles = albumsRaw.data
    // @ts-ignore
    .filter(({ record_type }) => record_type !== "album")
    .map(albumMap);

  // @ts-ignore
  const topSongs = top.data.map(({ id, title, album, artist }) => ({
    id,
    title,
    album: album.title,
    artist: artist.name,
    cover: album.cover_small,
  }));

  return {
    props: {
      albums,
      topSongs,
      singles,
      info: {
        name: info.name,
        cover: info.picture_xl,
      },
    },
  };
}

type Props = {
  info: {
    name: string;
    cover: string;
  };
  topSongs: {
    id: number;
    title: string;
    artist: string;
    cover: string;
    album: string;
  }[];
  albums: {
    id: number;
    title: string;
    year: string;
    cover: string;
  }[];
  singles: {
    id: number;
    title: string;
    year: string;
    cover: string;
  }[];
};

const Home: NextPage<Props> = ({
  albums = [],
  singles = [],
  topSongs = [],
  info = { name: "", cover: "" },
  ...props
}) => {
  console.log(props, singles);
  return (
    <GridLayout rowGap="space100">
      <Cover {...info} bio="no available" />
      <Section title="Songs">
        {topSongs.length && <Songs songs={topSongs} />}
      </Section>
      <Section title="Albums">
        {albums.length && (
          <CardList list={albums.map((k) => ({ ...k, sub: k.year }))} />
        )}
      </Section>
      <Section title="Singles">
        {singles.length && (
          <CardList list={singles.map((k) => ({ ...k, sub: k.year }))} />
        )}
      </Section>
    </GridLayout>
  );
};

export default Home;
