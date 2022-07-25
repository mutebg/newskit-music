import type { NextPage, NextPageContext } from "next";
import { GridLayout, TextBlock, InlineMessage } from "newskit";
import { Cover } from "../components/cover";
import { Songs } from "../components/songs";
import { CardList } from "../components/card-list";
import { Section } from "../components/section";
import axios from "axios";
import DeezerClient from "../services/deezer";

export async function getServerSideProps(context: NextPageContext) {
  // @ts-ignore
  const client = new DeezerClient(axios);
  const req = await client.artist(
    context?.query?.id ? parseInt(context.query.id as string) : 705
  ); // default to muse id

  const [albumsRaw, info, top] = await Promise.all([
    req.albums(),
    req.infos(),
    req.top(),
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
        fans: info.nb_fan,
        bio: "no bio",
      },
    },
  };
}

type Props = {
  info: {
    name: string;
    cover: string;
    fans: number;
    bio: string;
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
  info = { name: "", cover: "", bio: "", fans: 0 },
  ...props
}) => {
  return (
    <GridLayout rowGap="space100">
      <Cover {...info} />
      {topSongs.length > 0 && (
        <Section title="Songs">
          <Songs songs={topSongs} />
        </Section>
      )}

      {albums.length > 0 && (
        <Section title="Albums">
          <CardList list={albums.map((k) => ({ ...k, sub: k.year }))} />
        </Section>
      )}

      {singles.length > 0 && (
        <Section title="Singles">
          <CardList list={singles.map((k) => ({ ...k, sub: k.year }))} />
        </Section>
      )}
    </GridLayout>
  );
};

export default Home;
