import type { NextPage, NextPageContext } from "next";
import { GridLayout, InlineMessage, Slider, TextBlock } from "newskit";
import { Cover } from "../components/cover";
import { Songs } from "../components/songs";
import { Section } from "../components/section";
import axios from "axios";
import DeezerClient from "../services/deezer";

export async function getServerSideProps(context: NextPageContext) {
  // @ts-ignore
  const client = new DeezerClient(axios);
  const req = await client.albums(
    context?.query?.id ? parseInt(context.query.id as string) : 10506072
  ); // default to muse id

  const infos = await req.infos();

  // @ts-ignore
  const songs = infos.tracks.data.map(({ id, title, album, artist }) => ({
    id,
    title,
    album: album.title,
    artist: artist.name,
    cover: album.cover_small,
  }));

  return {
    props: {
      songs,
      info: {
        name: infos.title,
        bio: infos.artist.name,
        cover: infos.cover_xl,
        fans: infos.fans,
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
  songs: {
    id: number;
    title: string;
    artist: string;
    cover: string;
    album: string;
  }[];
};

const Album: NextPage<Props> = ({
  songs = [],
  info = { name: "", cover: "", bio: "", fans: 0 },
}) => {
  return (
    <GridLayout rowGap="space100">
      <Cover {...info} />
      {songs.length > 0 && (
        <Section title="Songs">
          <Songs songs={songs} />
        </Section>
      )}
    </GridLayout>
  );
};

export default Album;
