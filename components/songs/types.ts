export type SongItemProps = {
  title: string;
  artist: string;
  album: string;
  cover: string;
};

export type SongsProps = {
  songs: SongItemProps[];
};
