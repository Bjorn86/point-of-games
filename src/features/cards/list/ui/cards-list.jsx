import { ErrorBoundary } from 'react-error-boundary';
import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import Card from 'shared/ui/card/card';
import s from './cards-list.module.scss';

function CardsList({ data }) {
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

export default memo(CardsList);

CardsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
