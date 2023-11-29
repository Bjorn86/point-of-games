import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { useSearchGamesForSuggestionsQuery } from 'shared/api';
import { useTheme } from 'shared/lib/use-theme';
import SuggestCard from '../suggest-card/suggest-card';
import s from './suggestions-list.module.scss';

function SuggestionsList({ ...props }) {
  const theme = useTheme();
  const { data } = useSearchGamesForSuggestionsQuery(props.query, {
    skip: props.query.length < 2,
  });

  return (
    props.query &&
    data?.length !== 0 && (
      <ul className={clsx(s.list, { [s.listDark]: theme === 'dark' })}>
        {data?.map((card) => (
          <li key={card.id}>
            <SuggestCard {...card} />
          </li>
        ))}
      </ul>
    )
  );
}

export default memo(SuggestionsList);

SuggestionsList.propTypes = {
  query: PropTypes.string.isRequired,
};
