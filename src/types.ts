export interface ICharacter {
  id: string;
  name?: string;
  birthYear?: string;
  eyeColor?: string;
  hairColor?: string;
  height?: number;
  mass?: number;
}

export interface ICharacterSearch {
  person: ICharacter;
}

interface ICharacterConnection {
  characters: Array<ICharacter>;
}

export interface IFilm {
  title: string;
  episodeID: number;
  openingCrawl: string;
  characterConnection: ICharacterConnection;
}

interface IAllFilms {
  films: Array<IFilm>;
}
export interface IFilms {
  allFilms: IAllFilms;
}

interface IPageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

interface IAllPeople {
  people: Array<ICharacter>;
  pageInfo: IPageInfo;
}

export interface IPeopleResponse {
  allPeople: IAllPeople;
}
