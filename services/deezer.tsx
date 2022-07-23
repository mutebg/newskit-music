export default class DeezerClient {
  requester: any;
  API_ENDPOINT: string;

  constructor(requester: any) {
    this.requester = requester;
    this.API_ENDPOINT = "https://api.deezer.com";
  }

  albums = (id: number) => {
    return {
      infos: async () => await this.request(`/album/${id}`),
      tracks: async () => await this.request(`/album/${id}/tracks`),
      fans: async () => await this.request(`/album/${id}/fans`),
    };
  };

  artist = (id: number) => {
    return {
      infos: async () => await this.request(`/artist/${id}`),
      top: async () => await this.request(`/artist/${id}/top`),
      albums: async () => await this.request(`/artist/${id}/albums`),
      fans: async () => await this.request(`/album/${id}/fans`),
      related: async () => await this.request(`/album/${id}/related`),
      radio: async () => await this.request(`/album/${id}/radio`),
      playlists: async () => await this.request(`/album/${id}/playlists`),
    };
  };

  chart = (id: number) => {
    return {
      infos: async () => await this.request(`/chart/${id}`),
      tracks: async () => await this.request(`/chart/${id}/tracks`),
      albums: async () => await this.request(`/chart/${id}/albums`),
      artists: async () => await this.request(`/chart/${id}/artists`),
      playlists: async () => await this.request(`/chart/${id}/playlists`),
      podcasts: async () => await this.request(`/chart/${id}/podcasts`),
    };
  };

  // episode = {
  //   infos: async () => await this.request(`/episode/${id}`),
  //   bookmark: async () => await this.request(`/chart/${id}/bookmark`),
  // };

  editorial = async () => {
    return await this.request(`/editorial`);
  };

  genre = async () => {
    return await this.request(`/genre`);
  };

  infos = async () => {
    return await this.request(`/infos`);
  };

  options = async () => {
    return await this.request(`/options`);
  };

  playlist = (id: number) => {
    return {
      infos: async () => await this.request(`/playlist/${id}`),
      tracks: async () => await this.request(`/playlist/${id}/tracks`),
      seen: async () => await this.request(`/playlist/${id}/seen`),
      radio: async () => await this.request(`/playlist/${id}/radio`),
    };
  };

  podcast = (id: number) => {
    return {
      infos: async () => await this.request(`/podcast/${id}`),
      episodes: async () => await this.request(`/podcast/${id}/episodes`),
    };
  };

  radio = {
    infos: async () => await this.request(`/radio`),
    genres: async () => await this.request(`/radio/genres`),
    top: async () => await this.request(`/radio/top`),
    lists: async () => await this.request(`/radio/lists`),
  };

  track = (id: number) => {
    return {
      infos: async () => await this.request(`/track/${id}`),
    };
  };

  search = {
    infos: async (str: string) =>
      await this.request(`/search?q=${str.toString()}`),
    album: async (str: string) =>
      await this.request(`/search/album?q=${str.toString()}`),
    artist: async (str: string) =>
      await this.proxyRequest(`/search/artist?q=${str.toString()}`),
    history: async (str: string) =>
      await this.request(`/search/history?q=${str.toString()}`),
    playlist: async (str: string) =>
      await this.request(`/search/playlist?q=${str.toString()}`),
    podcast: async (str: string) =>
      await this.request(`/search/podcast?q=${str.toString()}`),
    radio: async (str: string) =>
      await this.request(`/search/radio?q=${str.toString()}`),
    track: async (str: string) =>
      await this.request(`/search/track?q=${str.toString()}`),
    user: async (str: string) =>
      await this.request(`/search/user?q=${str.toString()}`),
  };

  async request(url: string) {
    const { data } = await this.requester(`${this.API_ENDPOINT}${url}`).catch(
      function (error: any) {
        throw error;
      }
    );
    return data;
  }

  async proxyRequest(url: string) {
    const { data } = await this.requester(`/deezer/${url}`).catch(function (
      error: any
    ) {
      throw error;
    });
    return data;
  }
}
