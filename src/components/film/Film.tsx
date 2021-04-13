import Link from 'next/link';

import { IFilm } from '../../types';

import s from './Film.module.scss';

type Props = {
  film: IFilm;
};

export function Film({ film }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        {`Episode ${film.episodeID}: ${film.title}`}
      </h2>
      <div className={s.film__info}>
        <pre className={s.film__crawl}>
          {film.openingCrawl}
        </pre>
        <div className={s.film__characters}>
          <h3 className={s.film__charactersheader}>Characters</h3>
          <div>
            {film.characterConnection.characters.map((character) => (
              <Link
                key={character.id}
                href={`/characters/${character.id}`}
              > {character.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
