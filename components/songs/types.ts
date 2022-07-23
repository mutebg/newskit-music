export type SongItemProps = {
  id: string | number;
  title: string;
  artist: string;
  album: string;
  cover: string;
};

export type SongsProps = {
  songs: SongItemProps[];
};
