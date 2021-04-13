export interface ICharacter {
  id: string;
  name?: string;
  birthYear?: string;
  eyeColor?: string;
  hairColor: string;
  height: number;
  mass: number;
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
