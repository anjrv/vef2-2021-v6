export interface ICharacter {
  id: string;
  name?: string;
}

interface ICharacterConnection {
  characters: ICharacter[];
}

export interface IFilm {
  title: string;
  episodeID: number;
  openingCrawl: string;
  characterConnection: ICharacterConnection;
}
