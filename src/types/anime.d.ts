import { ICharacter } from "@/types/anime";
interface IImage {
  image_url: string;
  small_image_url?: string;
  medium_image_url?: string;
  large_image_url?: string;
  maximum_image_url?: string;
}

interface IAnime {
  mal_id: number;
  images: {
    jpg: IImage;
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: IImage;
  };
  titles: { type: string; title: string }[];
  title: string;
  title_english: string;
  title_japanese: string;
  episodes: number;
  status: string;
  airing: boolean;
  synopsis: string;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  background: string;
  season: string;
  year: number;
  type: string;
  genres: { mal_id: string; type: string; name: string }[];
  aired: {
    from: string;
    to: string | null;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: null | number;
        month: null | number;
        year: null | number;
      };
    };
    string: string;
  };
}

interface ICharacter {
  mal_id: string;
  images: { jpg: IImage };
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
  anime?: {
    role: string;
    anime: IAnime;
  }[];
}

interface IEpisode {
  mal_id: string;
  title: string;
  title_japanese: string;
  title_romanji: string;
  aired: string;
  score: number;
  filler: boolean;
  recap: boolean;
  synopsis: string;
}

export { IAnime, ICharacter, IEpisode };
