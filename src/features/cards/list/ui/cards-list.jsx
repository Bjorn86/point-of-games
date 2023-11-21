import { ErrorBoundary } from 'react-error-boundary';
import clsx from 'clsx';
import { useGetLatestGamesQuery } from 'entities/cards';
import { useTheme } from 'shared/lib/use-theme';
import { Card } from 'features/cards/card';
import s from './cards-list.module.scss';

function CardsList() {
  const { data } = useGetLatestGamesQuery();
  const theme = useTheme();

  return (
    <ul className={s.list}>
      {data.map((card) => (
        <ErrorBoundary key={card.id}>
          <li
            className={clsx(s.item, { [s.itemDark]: theme === 'dark' })}
            key={card.id}
          >
            <Card {...card} />
          </li>
        </ErrorBoundary>
      ))}
    </ul>
  );
}

export default CardsList;
